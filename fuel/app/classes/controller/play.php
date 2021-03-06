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

		//$this->view_data['test'] = 0;

		// 駒の表示位置オフセットを読み込む
		$this->view_data['piece_position_offset'] = Config::load('piece_position_offset');

		// タイルの位置情報を配列に変換する
		$this->view_data['tile']['tile_type'] = explode(",", $this->view_data['game_data']['tile']);

		// 配列にタイルのidを付ける
		for ($i = 0; $i <= 63; $i++) {
			$this->view_data['tile']['id'][$i] = $i;
		}

		// 配列に列の情報をつける
		$counter = 0;
		for($i = 0;$i < 8;$i++)
		{
			for($j = 0;$j < 8;$j++)
			{
				$this->view_data['tile']['line'][$counter] = $i;
				$counter++;
			}
		}

		// プレイヤーの位置情報を配列に変換する
		$this->view_data['player_position'] = explode(",", $this->view_data['game_data']['player_position']);
		// ターンプレイヤーの取得
		$this->view_data['turn_player'] = $this->view_data['game_data']['turn_player'];
		// スコアデータの取得をする(配列に直す)
		$this->view_data['score_data'] = explode(",",$this->view_data['game_data']['score']);

		// javascriptで使用するデータをjsonに変換する
		$this->view_data['json_tile_data'] = json_encode($this->view_data['tile']);
		$this->view_data['json_player_position'] = json_encode($this->view_data['player_position']);
		$this->view_data['json_piece_position_offset'] = json_encode($this->view_data['piece_position_offset']);
		$this->view_data['json_score_data'] = json_encode($this->view_data['score_data']);

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


	public function test()
	{
		$this->view_data['test'] = 10;
		var_dump($this->view_data['test']);
	}

}
