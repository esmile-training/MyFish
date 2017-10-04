<?php

/*
 * ゲームのプレイ画面(Controller)
 */

class Controller_play extends Controller_Base_Game
{

	// index関数
	public function action_index()
	{
		// viewへ移動する
		View_Wrap::contents('play', $this->view_data);
	}

}
