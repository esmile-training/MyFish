/* 
 * 駒の動作関係のスクリプト
 */

//****************
// 変数の定義
//****************

// 選択中の駒を格納する変数
var selected_piece = null;
// 選択したコマの配列内でのidを格納する変数
var selected_piece_id = null;
// 駒の配列上での要素番号を格納する変数
var element_number_of_piece = null;
// 選択中のタイルを格納する変数
var selected_tile = null;
// タイルの配列上での要素番号を格納する変数
var element_number_of_tile = null;
// 獲得予定の得点を格納する変数
var earned_score = null;


//*********************
// 表示位置の初期化をする
//*********************
function init_position()
{
	// php側の駒の配置のオフセットにアクセスする
	var $piece_offset_data = $('#piece_offset_array');
	var piece_offset = JSON.parse($piece_offset_data.attr('piece_offset_data'));

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
			var position_x = piece_offset[piece_element].x;
			var position_y = piece_offset[piece_element].y;

			// 座標を駒に適用する
			piece.style.left = position_x;
			piece.style.top = position_y;
		}
	}
}


//******************
// 駒のデータを取得する
//******************
function get_piece_data(arg_number)
{
	// 駒の要素にアクセスして、駒の番号を取り出す
	var piece_data = document.getElementById(arg_number);
	var piece_id = piece_data.getAttribute('number');

	// php側の駒の位置情報にアクセスする
	var $piece_position_data = $('#piece_position_array');
	var piece_position = JSON.parse($piece_position_data.attr('piece_data'));

	// データを格納する
	selected_piece = piece_id;
	selected_piece_id = arg_number;
	element_number_of_piece = $.inArray(piece_id, piece_position);

	// 動作確認
	console.log(`piece_element:${element_number_of_piece}`);
	console.log(`piece_type:${selected_piece}`);
}


//**********************
// タイルのデータを取得する
//**********************
function get_tile_data(arg_counter)
{
	// タイルデータの配列にアクセスする
	var $tile_array = $('#tile_data_array');
	var tile_data = JSON.parse($tile_array.attr('tile_data'));
	var tile_type_data = tile_data['tile_type'];

	// タイルのidを格納する
	var tile_id = arg_counter;
	var tile_type = tile_type_data[tile_id];

	// データの格納をする
	element_number_of_tile = tile_id;
	selected_tile = tile_type;

	// 動作確認
	console.log(`tile_element:${element_number_of_tile}`);
	console.log(`tile_type:${selected_tile}`);
}


//***************************
// 指定された座標へ駒を移動させる
//***************************
function move_piece()
{
	// 移動前の配列番号を取得する
	var move_before = selected_piece;
	// 移動後の配列番号を取得する
	var move_after = selected_tile;

	// 移動を実施する(仮)
	// php側の駒の配置のオフセットにアクセスする
	var $piece_offset_data = $('#piece_offset_array');
	var piece_offset = JSON.parse($piece_offset_data.attr('piece_offset_data'));

	// php側の駒の位置情報にアクセスする
	var $piece_position_data = $('#piece_position_array');
	// 駒の位置情報を取得する
	var piece_position = JSON.parse($piece_position_data.attr('piece_data'));

	// 駒へアクセスして要素番号を取り出す
	var piece = document.getElementById(`${selected_piece_id}`);

	// 駒の位置情報から座標を取り出す
	var position_x = piece_offset[element_number_of_piece].x;
	var position_y = piece_offset[element_number_of_piece].y;

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
	var amount_of_movement_y;
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

	return amount_of_movement_y;
}


//******************
// 得点を加算する処理
//******************
function add_point(arg_turn_player)
{
	// 現在のターンプレイヤーを取得する
	var turn_player = arg_turn_player;
	
	
}

//class Porygon {
//  constructor(height, width) {
//    this.height = height;
//    this.width = width;
//  }
//  
//  get area() {
//    return this.calcArea();
//  }
//
//  calcArea() {
//    return this.height + this.width;
//  }
//}