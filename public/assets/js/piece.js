/* 
 * 駒の動作関係のスクリプト
 */

// 表示位置の初期化をする
function init_position()
{
	// 駒の要素をIDを元に取得する
	var test = document.getElementById("piece_1_1");

	test.style.top = "50px";

	console.log(test);
}

// 駒をクリック時にその駒のデータを取得する
function get_piece_data(arg_id)
{
	// 駒の要素にアクセスする
	var piece_data = document.getElementById(arg_id);
	
	// 駒の識別番号を取得する
	var piece_number = piece_data.getAttribute('number');
	
	console.log(piece_number);
	
}

// タイルをクリック時にそのタイルのデータを取得する
function get_tile_data(arg_counter)
{
	// タイルデータの配列にアクセスする
	var $tile_data = $('#tile_data_array');

	// タイルのidを格納する
	var tile_number = arg_counter;
	// 数値のみ切り出す
	
	// データを取得してコンソールに表示してみる
	var tile_data_array = JSON.parse($tile_data.attr('tile_data'));
	console.log(tile_number);
}
