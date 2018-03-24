/* 
 * 駒の動作関係のスクリプト
 */

//****************
// オブジェクトの定義
//****************

// ベースのデータ
var base_data ={
	piece_offset:null,
	tile_data:null,
	piece_position:null
};

// 関数処理用のデータ
var function_data ={
	// 選択中の駒を格納する変数
	selected_piece : null,
	// 選択したコマの配列内でのidを格納する変数
	selected_piece_id : null,
	// 駒の配列上での要素番号を格納する変数
	element_number_of_piece : null,
	// 選択中のタイルを格納する変数
	selected_tile : null,
	// タイルの配列上での要素番号を格納する変数
	element_number_of_tile : null,
	// 行
	line : null,
	// 行番号
	line_number : null,
	// 獲得予定の得点を格納する変数
	earned_score : 1,

	// 移動方向を格納する配列availabl
	// 右上配列
	upper_right : null,
	// 右下配列
	bottom_right : null,
	// 右配列
	right : null,
	// 左上配列
	upper_left : null,
	// 上左下
	bottom_left : null,
	// 左配列
	left : null,

	// 移動可能な右上
	availabl_upper_right : null,
	// 移動可能な右下
	availabl_bottom_right : null,
	// 移動可能な右
	availabl_right : null,
	// 移動可能な左上
	availabl_upper_left : null,
	// 移動可能な左下
	availabl_bottom_left : null,
	// 移動可能な左
	availabl_left : null,
	
	availabl_move_tile : null

};

//*********************
// 表示位置の初期化をする
//*********************
function init_position()
{
	// php側の駒の配置のオフセットにアクセスする
	var $piece_offset_data = $('#piece_offset_array');
	base_data.piece_offset = JSON.parse($piece_offset_data.attr('piece_offset_data'));
	// タイルデータにアクセスする
	var $tile_array = $('#tile_data_array');
	base_data.tile_data = JSON.parse($tile_array.attr('tile_data'));
	// php側の駒の位置情報にアクセスする
	var $piece_position_data = $('#piece_position_array');
	base_data.piece_position = JSON.parse($piece_position_data.attr('piece_data'));
	console.log(base_data.piece_position);
	// php側の駒の位置情報にアクセスする
	var $piece_position_data = $('#piece_position_array');
	// 駒の位置情報を取得する
	var piece_position = JSON.parse($piece_position_data.attr('piece_data'));
	// マスの行情報を取得する
	function_data.line = base_data.tile_data['line'];

	// プレイヤーの駒の位置をすべて検索する
	for (var i = 1; i <= 4; i++)
	{
		for (var j = 1; j <= 2; j++)
		{
			// 駒へアクセスして要素番号を取り出す
			var piece = document.getElementById(`piece${i}${j}`);
			var piece_element = $.inArray(`${i}${j}`, piece_position);

			// 駒の位置情報から座標を取り出す
			var position_x = base_data.piece_offset[piece_element].x;
			var position_y = base_data.piece_offset[piece_element].y;

			// 座標を駒に適用する
			piece.style.left = position_x;
			piece.style.top = position_y;
		}
	}
}


//******************
// 駒のデータを取得する
// ※ajaxの実験用として使用中
//******************
function get_piece_data(arg_number)
{
	// 駒の要素にアクセスして、駒の番号を取り出す
	var piece_data = document.getElementById(arg_number);
	var piece_id = piece_data.getAttribute('number');

	// データを格納する
	function_data.selected_piece = piece_id;
	function_data.selected_piece_id = arg_number;
	function_data.element_number_of_piece = $.inArray(piece_id, base_data.piece_position);
	function_data.line_number = function_data.line[function_data.element_number_of_piece];

	function_data.earned_score += 1;
	
	// 移動可能マスを検索する
	search_moveable_squares();

	// 動作確認
	console.log(`選択中の駒:${function_data.selected_piece}`);
	console.log(`駒の要素番号:${function_data.element_number_of_piece}`);
	console.log(`駒の行番号:${function_data.line_number}`);

	// 得点
	//console.log(function_data.earned_score);
	
}


//**********************
// タイルのデータを取得する
//**********************
function get_tile_data(arg_counter)
{
	// データの格納先を初期化する
	function_data.element_number_of_tile = null;
	function_data.selected_tile = null;
	
	// 駒が選択されていなければ処理は行わない
	if(function_data.selected_piece != null)
	{
		// タイルデータの取得をする
		var tile_type_data = base_data.tile_data['tile_type'];

		// タイルのidを格納する
		var tile_id = arg_counter;
		console.log(tile_id);
		var tile_type = tile_type_data[tile_id];

		// 駒の移動範囲に該当するかを確認する
		function_data.availabl_move_tile.forEach(function(value)
		{
			// 選択したタイルの要素番号が、移動可能マスに含まれているかを判定する
			if(value == tile_id)
			{
				// データの格納をする
				function_data.element_number_of_tile = tile_id;
				function_data.selected_tile = tile_type;
			}
		});

		// 動作確認
		console.log(`マスの要素番号:${function_data.element_number_of_tile}`);
		console.log(`マスの得点:${function_data.selected_tile}`);

	}
}

//************************
// 移動可能マスの検索関数
//************************
function search_moveable_squares()
{	
	// カウンタ
	var counter = 0;
	// 行
	var line_number = function_data.line_number;
	// 選択した駒の要素番号
	var piece_element_number = function_data.element_number_of_piece;
	// 行番号で処理を切り替えるフラグ
	var switch_flag = null;

	var flag = null;
	
	// 計算途中の要素番号を格納する変数を初期化する
	var upper_right = piece_element_number;
	var bottom_right = piece_element_number;
	var right = piece_element_number;
	var upper_left = piece_element_number;
	var bottom_left = piece_element_number;
	var left = piece_element_number;

	// 移動マスを格納する配列を初期化する
	function_data.upper_left=[];
	function_data.upper_right=[];
	function_data.bottom_left=[];
	function_data.bottom_right=[];
	function_data.left=[];
	function_data.right=[];
	
	// 処理の判別を行う
	if(line_number % 2 == 0)
	{
		switch_flag = true;
	}
	else
	{
		switch_flag = false;
	}

	console.log(switch_flag);

	// 自分から右上方向のマスの検索を行う
	// フラグのリセット
	flag = switch_flag;
	while((line_number - counter) >= 1)
	{
		if(flag == true)
		{
			// 配列に移動可能マスの要素数を計算して入れる
			upper_right -= 8;
			// 数値を配列へプッシュする
			function_data.upper_right.push(upper_right);
			
			// フラグを切り替える
			flag = false;
		}
		else if(flag == false)
		{
			// 配列に移動可能マスの要素数を計算して入れる
			upper_right -= 7;
			// 数値を配列へプッシュする
			function_data.upper_right.push(upper_right);

			// フラグを切り替える
			flag = true;
		}

		// 隅のマスに到達したかを判定する
		if(function_data.upper_right[counter] == 7 || function_data.upper_right[counter] == 15 || function_data.upper_right[counter] == 23
			|| function_data.upper_right[counter] == 31 || function_data.upper_right[counter] == 39 || function_data.upper_right[counter] == 47
			|| function_data.upper_right[counter] == 55 || function_data.upper_right[counter] ==63)
		{
			 break;
		 }

		counter++;
	}
	
	// 自分から左上方向のマスの検索を行う
	// フラグのリセット
	flag = switch_flag;
	// カウンタのリセット
	counter = 0;
	while((line_number - counter) >= 1)
	{
		if(flag == true)
		{
			// 配列に移動可能マスの要素数を計算して入れる
			upper_left -= 9;
			// 数値を配列へプッシュする
			function_data.upper_left.push(upper_left);
			
			// フラグを切り替える
			flag = false;
		}
		else if(flag == false)
		{
			// 配列に移動可能マスの要素数を計算して入れる
			upper_left -= 8;
			// 数値を配列へプッシュする
			function_data.upper_left.push(upper_left);

			// フラグを切り替える
			flag = true;
		}

		// 隅のマスに到達したかを判定する
		if(function_data.upper_left[counter] == 0 || function_data.upper_left[counter] == 16
			||function_data.upper_left[counter] == 32|| function_data.upper_left[counter] == 48)
		{
			 break;
		 }

		counter++;
	}


	// 自分から右下方向のマスの検索を行う
	// フラグのリセット
	flag = switch_flag;
	// カウンタのリセット
	counter = 0;
	while((line_number + counter) <= 6)
	{
		if(flag == true)
		{
			// 配列に移動可能マスの要素数を計算して入れる
			bottom_right += 8;
			// 数値を配列へプッシュする
			function_data.bottom_right.push(bottom_right);

			// フラグを切り替える
			flag = false;
		}
		else if(flag == false)
		{
			// 配列に移動可能マスの要素数を計算して入れる
			bottom_right += 9;
			// 数値を配列へプッシュする
			function_data.bottom_right.push(bottom_right);

			// フラグを切り替える
			flag = true;
		}

		// 隅のマスに到達したかを判定する
		if(function_data.bottom_right[counter] == 7 || function_data.bottom_right[counter] == 23
			||function_data.bottom_right[counter] == 39|| function_data.bottom_right[counter] == 55)
		{
			 break;
		}

		counter++;
	}


	// 自分から左下方向のマスの検索を行う
	// フラグのリセット
	flag = switch_flag;
	// カウンタのリセット
	counter = 0;
	while((line_number + counter) <= 6)
	{
		if(flag == true)
		{
			// 配列に移動可能マスの要素数を計算して入れる
			bottom_left += 7;
			// 数値を配列へプッシュする
			function_data.bottom_left.push(bottom_left);

			// フラグを切り替える
			flag = false;
		}
		else if(flag == false)
		{
			// 配列に移動可能マスの要素数を計算して入れる
			bottom_left += 8;
			// 数値を配列へプッシュする
			function_data.bottom_left.push(bottom_left);

			// フラグを切り替える
			flag = true;
		}

		// 隅のマスに到達したかを判定する
		if(function_data.bottom_left[counter] == 0 || function_data.bottom_left[counter] == 16
			||function_data.bottom_left[counter] == 32|| function_data.bottom_left[counter] == 48)
		{
			 break;
		}

		counter++;
	}
	
	// 横方向のデータの格納用配列
	var line_data = [];
	counter = 0;
	// 選択対象の横方向のすべての要素を取得する
	function_data.line.forEach(function(value)
	{
		if(value == line_number)
		{
			line_data.push(counter);
		}
		counter++;
	});
	
	// 移動可能範囲を左右に振り分ける
	line_data.forEach(function(value){
		// 右方向
		if(piece_element_number < value)
		{
			function_data.right.push(value);
		}
		else if(piece_element_number > value)
		{
			function_data.left.push(value);
		}
	});
	
	// 左側だけ反転させる
	function_data.left.reverse();

	// 移動不可範囲を割り出す
	deadline_detection();

}

//**************************
//進行不可を検出する関数
//**************************
function deadline_detection()
{
	// 移動可能マスを格納する配列を初期化する
	function_data.availabl_upper_left=[];
	function_data.availabl_upper_right=[];
	function_data.availabl_bottom_left=[];
	function_data.availabl_bottom_right=[];
	function_data.availabl_left=[];
	function_data.availabl_right=[];
	function_data.availabl_move_tile=[];

	// 駒のデータと比較を行い移動不可のマスを探す
	// 右上
	function_data.upper_right.some(function(value)
	{
		if(base_data.tile_data.tile_type[value] != 4)
		{
			if(base_data.piece_position[value] == 0)
			{
				function_data.availabl_upper_right.push(value);
			}
			else
			{
				return true;
			}
		}
		else
		{
			return true;
		}
	});

	// 左上
	function_data.upper_left.some(function(value)
	{
		if(base_data.tile_data.tile_type[value] != 4)
		{
			if(base_data.piece_position[value] == 0)
			{
				function_data.availabl_upper_left.push(value);
			}
			else
			{
				return true;
			}
		}
		else
		{
			return true;
		}
	});

	// 右
	function_data.right.some(function(value)
	{
		if(base_data.tile_data.tile_type[value] != 4)
		{
			if(base_data.piece_position[value] == 0)
			{
				function_data.availabl_right.push(value);
			}
			else
			{
				return true;
			}
		}
		else
		{
			return true;
		}
		
	});

	// 左
	function_data.left.some(function(value)
	{
		console.log(base_data.piece_position[value])
		console.log(value);
		if(base_data.tile_data.tile_type[value] != 4)
		{
			if(base_data.piece_position[value] == 0)
			{
				function_data.availabl_left.push(value);
			}
			else
			{
				return true;
			}
		}
		else
		{
			return true;
		}
		
	});
	
	// 右下
	function_data.bottom_right.some(function(value)
	{
		if(base_data.tile_data.tile_type[value] != 4)
		{
			if(base_data.piece_position[value] == 0)
			{
				function_data.availabl_bottom_right.push(value);
			}
			else
			{
				return true;
			}	
		}
		else
		{
			return true;
		}
	});

	// 左下
	function_data.bottom_left.some(function(value)
	{
		if(base_data.tile_data.tile_type[value] != 4)
		{
			if(base_data.piece_position[value] == 0)
			{
				function_data.availabl_bottom_left.push(value);
			}
			else
			{
				return true;
			}	
		}
		else
		{
			return true;
		}
	});
	
	// 処理結果を一列の配列として格納する
	Array.prototype.push.apply(function_data.availabl_move_tile,function_data.availabl_upper_right);
	Array.prototype.push.apply(function_data.availabl_move_tile,function_data.availabl_right);
	Array.prototype.push.apply(function_data.availabl_move_tile,function_data.availabl_bottom_right);
	Array.prototype.push.apply(function_data.availabl_move_tile,function_data.availabl_upper_left);
	Array.prototype.push.apply(function_data.availabl_move_tile,function_data.availabl_left);
	Array.prototype.push.apply(function_data.availabl_move_tile,function_data.availabl_bottom_left);

	console.log(`移動可能な右上マス:${function_data.availabl_upper_right}`);
	console.log(`移動可能な右マス:${function_data.availabl_right}`);
	console.log(`移動可能な右下マス:${function_data.availabl_bottom_right}`);
	console.log(`移動可能な左上マス:${function_data.availabl_upper_left}`);
	console.log(`移動可能な左マス:${function_data.availabl_left}`);
	console.log(`移動可能な左下マス:${function_data.availabl_bottom_left}`);
	
	console.log(`移動可能なマス:${function_data.availabl_move_tile}`);

}

//**************************
// 配列上の駒の位置を変更する
//**************************
function move_piece_on_array()
{
	// 選択中の駒の要素番号を取得する
	var piece_num = function_data.element_number_of_piece;
	// 選択中のマスの要素番号を取得する
	var tile_num = function_data.element_number_of_tile;
	// 駒のIDを取得する
	var piece_id = function_data.selected_piece;

	// 駒の配列上でのマスの要素番号の位置に選択中の駒の値を入れる
	base_data.piece_position[tile_num] = piece_id;

	// 駒の移動前の位置の値を5に変更する
	base_data.piece_position[piece_num] = '5';
	// 移動後のマスのステータスを変更する
	change_tile_type(tile_num);
	
	console.log(base_data.piece_position);

}

//**************************
// 画面上の駒の位置を変更する
//**************************
function move_piece_on_screen()
{
	// 選択中の駒の要素番号を取得する
	var piece_num = function_data.element_number_of_piece;
	// 選択中のマスの要素番号を取得する
	var tile_num = function_data.element_number_of_tile;
	// 駒のIDを取得する
	var piece_id = function_data.selected_piece;
	
	// 駒へアクセスして要素番号を取り出す
	var piece = document.getElementById(`piece${piece_id}`);

	// 移動先の座標を取得する
	var position_x = base_data.piece_offset[tile_num].x;
	var position_y = base_data.piece_offset[tile_num].y;

	console.log(`x:${position_x}`);
	console.log(`y:${position_y}`);

	console.log(base_data.piece_offset);
	// 座標を駒に適用する
	piece.style.left = position_x;
	piece.style.top = position_y;
}

//*************
// 移動実行関数
//*************
function move_execute()
{
	// 駒が格納されているかを確認する
	if(function_data.selected_piece != null && function_data.element_number_of_tile != null)
	{
		// 配列上の駒の位置を変更する
		move_piece_on_array();
		// 画面上の駒の位置を変更する
		move_piece_on_screen();
		
	}
	
}

//********************************
// 配列の中身が存在するかを確認する
//********************************
function is_empty(arg_object)
{
	return !Object.keys(arg_object).length;
}

//*********************************
// 2点間の線形補完を行う(y座標を求める)
//*********************************
function leap(arg_x1,arg_y1,arg_x2,arg_y2,arg_x)
{
	// 計算結果を格納する変数
	var amount_movement;
	// 点1の座標
	var point1_x = arg_x1;
	var point1_y = arg_y1;
	// 点2の座標
	var point2_x = arg_x2;
	var point2_y = arg_y2;
	// xの移動量
	var amount_of_movement_x = arg_x;

	// y方向の移動量を求めて、変数に格納する
	amount_of_movement_y = point1_y + (point2_y - point1_y)
			* (amount_of_movement_x - point1_x) / (point2_x - point1_x);

	return amount_movement;
}

//********************************
// 移動後のマスのタイプを切り替える
//********************************
function change_tile_type(arg_target_tile_number)
{
	// 変更対象のマスを取得する
	var target = arg_target_tile_number;
	
	// マスのタイプを4に切り替える
	base_data.tile_data.tile_type[target] = '4';
	
	// 結果表示
	console.log(base_data.tile_data.tile_type[target]);
}

//******************
// 得点を加算する処理
//******************
function add_point(arg_turn_player)
{
	// 現在のターンプレイヤーを取得する
	var turn_player = arg_turn_player;
	
	
}

function ajax_test()
{
	
	$.ajax({
		type:'POST',
		url: "http://esmile-sys.sakura.ne.jp/MyFish/matsui/play.php",
		data:"num = 1",
		success: function()
		{
			console.log('success');
		},
		error: function() {
			console.log('error');
		}
	});
}
