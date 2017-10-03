<?php

/*
 * トップページコントローラ
 */

class Controller_top extends Controller_Base_Game
{

	// index
	public function action_index()
	{
		// そのままビューへ移行する
		View_Wrap::contents('top', $this->view_data);
	}

	// ログイン画面へ移動する
	public function action_move_login_page()
	{
		// ログイン画面へリダイレクトする
		Response::redirect('login');
	}

}
