/* 
 * 駒の動作関係のスクリプト
 */

// 表示位置の初期化をする
function init_position()
{
	// 駒の配置のオフセットにアクセスする
	var $piece_offset_data = $('#piece_offset_array');
	// オフセットを取得する
	var piece_offset = JSON.parse($piece_offset_data.attr('piece_offset_data'));

	// 駒の位置情報にアクセスする
	var $piece_position_data = $('#piece_position_array');
	// 駒の位置情報を取得する
	var piece_position = JSON.parse($piece_position_data.attr('piece_data'));

	// プレイヤーの駒の位置をすべて検索する
	for (var i = 1; i <= 4; i++)
	{
		for (var j = 1; j <= 2; j++)
		{
			// 駒へアクセスする
			var piece = document.getElementById(`piece${i}_${j}`);

			// 駒の要素を取り出す
			var piece_element = $.inArray(`${i}${j}`,piece_position);

			// 駒の位置情報から座標を取り出す
			var position_x = piece_offset[piece_element].x;
			var position_y = piece_offset[piece_element].y;

			// 座標を駒に適用する
			piece.style.left = position_x;
			piece.style.top = position_y;
		}
	}
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
	var tile_position = JSON.parse($tile_data.attr('tile_data'));
	console.log(tile_number);
}
