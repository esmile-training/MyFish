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
	// 行番号
	line_number : null,
	// 獲得予定の得点を格納する変数
	earned_score : 1,

	// 移動可能な場所を格納する配列
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
	left : null

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

	// php側の駒の位置情報にアクセスする
	var $piece_position_data = $('#piece_position_array');
	// 駒の位置情報を取得する
	var piece_position = JSON.parse($piece_position_data.attr('piece_data'));

	// プレイヤーの駒の位置をすべて検索する
	for (var i = 1; i <= 4; i++)
	{
		for (var j = 1; j <= 2; j++)
		{
			// 駒へアクセスして要素番号を取り出す
			var piece = document.getElementById(`piece${i}_${j}`);
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

	function_data.earned_score += 1;
	
	// タイル情報の取得
	get_tile_data(function_data.element_number_of_piece);
	
	search_moveable_squares(function_data.line_number,function_data.element_number_of_piece);
	
	// 動作確認
	console.log(`選択中の駒:${function_data.selected_piece}`);
	console.log(`駒の要素番号:${function_data.element_number_of_piece}`);

	console.log(function_data.earned_score);
	
}


//**********************
// タイルのデータを取得する
//**********************
function get_tile_data(arg_counter)
{
	// タイルデータの取得をする
	var tile_type_data = base_data.tile_data['tile_type'];
	var square_line = base_data.tile_data['line'];

	// タイルのidを格納する
	var tile_id = arg_counter;
	var tile_type = tile_type_data[tile_id];

	// データの格納をする
	function_data.element_number_of_tile = tile_id;
	function_data.selected_tile = tile_type;
	function_data.line_number = square_line[tile_id];
	

	// 動作確認
	console.log(`マスの要素番号:${function_data.element_number_of_tile}`);
	console.log(`マスの得点:${function_data.selected_tile}`);
	console.log(`マスの行番号:${function_data.line_number}`);
}

//************************
// 移動可能マスの検索関数
//************************
function search_moveable_squares(arg_line,arg_piece_element)
{	
	// カウンタ
	var counter = 0;
	// 行
	var line_number = arg_line;
	// 選択した駒の要素番号
	var piece_element_number = arg_piece_element;
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
	
	// 移動可能膾を格納する配列を初期化する
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
	while((line_number + counter) <= 7)
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
		if(
				function_data.bottom_right[counter] == 7 
				|| function_data.bottom_right[counter] == 23 
				|| function_data.bottom_right[counter] == 39
				|| function_data.bottom_right[counter] == 55 
				|| function_data.bottom_right[counter] == 62)
		{
			 break;
		}

		counter++;
	}

//	// 自分から上方向のマスの検索を行う
//	while((line_number - counter) >= 1)
//	{
//		if(switch_flag == true)
//		{
//			// 配列に移動可能マスの要素数を計算して入れる
//			upper_right -= 8;
//			upper_left -= 9;
//
//			// 数値を配列へプッシュする
//			function_data.upper_right.push(upper_right);
//			function_data.upper_left.push(upper_left);
//
//			// フラグを切り替える
//			switch_flag = false;
//		}
//		else if(switch_flag == false)
//		{
//			// 配列に移動可能マスの要素数を計算して入れる
//			upper_right -= 7;
//			upper_left -= 8;
//
//			// 数値を配列へプッシュする
//			function_data.upper_right.push(upper_right);
//			function_data.upper_left.push(upper_left);
//
//			// フラグを切り替える
//			switch_flag = true;
//		}
//
//		counter++;
//	}
	
	console.log(`右上:${function_data.upper_right}`);
	console.log(`左上:${function_data.upper_left}`);
	console.log(`右下:${function_data.bottom_right}`);

	//console.log(`カウント:${counter}`);
//	// カウンタのリセットをする
//	var counter = 0;
//	// 自分から下のマスを検索する
//	while((line_number + counter) <= 6)
//	{
//		if(switch_flag == true)
//		{
//			// 配列に移動可能マスの要素数を計算して入れる
//			bottom_right += 8;
//			bottom_left += 9;
//
//			// 数値を配列へプッシュする
//			function_data.bottom_right.push(upper_right);
//			function_data.bottom_left.push(upper_left);
//
//			// フラグを切り替える
//			switch_flag = false;
//		}
//		else if(switch_flag == false)
//		{
//			// 配列に移動可能マスの要素数を計算して入れる
//			bottom_right += 7;
//			bottom_left += 8;
//
//			// 数値を配列へプッシュする
//			function_data.upper_right.push(bottom_right);
//			function_data.upper_left.push(bottom_left);
//
//			// フラグを切り替える
//			switch_flag = true;
//		}
//
//		counter++;
//	}
//	
//	console.log(`右下:${function_data.bottom_right}`);
//	console.log(`左下:${function_data.bottom_left}`);
	
	// 自分の右方向を検索する
	
	// 自分の左方向を検索する
	
}

//***************************
// 指定された座標へ駒を移動させる
//***************************
function move_piece()
{
	// 移動前の配列番号を取得する
	var move_before = function_data.selected_piece;
	// 移動後の配列番号を取得する
	var move_after = function_data.selected_tile;

	// 移動を実施する(仮)
	// php側の駒の配置のオフセットにアクセスする
	var $piece_offset_data = $('#piece_offset_array');
	var piece_offset = JSON.parse($piece_offset_data.attr('piece_offset_data'));

	// php側の駒の位置情報にアクセスする
	var $piece_position_data = $('#piece_position_array');
	// 駒の位置情報を取得する
	var piece_position = JSON.parse($piece_position_data.attr('piece_data'));

	// 駒へアクセスして要素番号を取り出す
	var piece = document.getElementById(`${function_data.selected_piece_id}`);

	// 駒の位置情報から座標を取り出す
	var position_x = piece_offset[function_data.element_number_of_piece].x;
	var position_y = piece_offset[function_data.element_number_of_piece].y;

	// 座標を駒に適用する
	piece.style.left = position_x;
	piece.style.top = position_y;
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
