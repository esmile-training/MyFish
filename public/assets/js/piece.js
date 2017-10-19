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

// 駒をクリック時にその駒のキーを取得する
function get_piece_key()
{
	console.log('get_piece_key()を実行');
}

// タイルをクリック時にその駒のキーを取得する
function get_tile_key()
{
	console.log('get_tile_key()を実行');
}

function click_test()
{
	console.log('クリックされました');
}