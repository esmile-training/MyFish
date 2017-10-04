<?php

/*
 * タイトル画面(Controller)
 */

class Controller_title extends Controller_Base_Game
{

	// index関数
	public function action_index()
	{
		// viewへ移動する
		View_Wrap::contents('title', $this->view_data);
	}

}
