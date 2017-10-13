<?php

/*
 * ゲームのプレイ画面(Controller)
 */

class Controller_play extends Controller_Base_Game
{

	// index関数
	public function action_index()
	{
		// DBからゲームデータを取得する
		$this->view_data['game_data'] = Model_GameData::find('first', array(
					'where' => array(
						'user_id' => $this->view_data['user']['id']
					)
		));

		// タイルの位置情報を配列に変換する
		$this->view_data['tile'] = explode(",", $this->view_data['game_data']['tile']);

		// プレイヤーの位置情報を配列に変換する
		$this->view_data['player_position'] = explode(",", $this->view_data['game_data']['player_position']);

		// ターンプレイヤーの取得
		$this->view_data['turn_player'] = $this->view_data['game_data']['turn_player'];

		// ターン切り替えのテスト
		$this->view_data['test'] = "1";

		// viewへ移動する
		View_Wrap::contents('play', $this->view_data);
	}

	// ターンを回す関数
	public function change_turn_player()
	{
		$next_turn_player	 = 0; //次のターンプレイヤー
		// 現在のターンプレイヤーを取得
		$turn_player		 = $this->view_data['turn_player'];

		// ターンが終端に達しているかを確認する
		if ($turn_player == 4)
		{
			// 4番目のプレイヤーだった場合は1番目に戻す
			$next_turn_player = 1;
		}
		else
		{
			// そうでなければ番号を加算して進める
			$next_turn_player	 = $turn_player		 += 1;
		}

		return $next_turn_player;
	}

}
