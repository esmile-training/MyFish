<?php

/* 
 Ajaxのテスト用コントローラ
 */
class Ajax_test extends Controller_Base_Game
{
	// index
	public function action_index()
	{
		// viewへ移動する
		View_Wrap::contents('ajax_test',$this->view_data);
	}
}
