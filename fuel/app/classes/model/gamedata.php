<?php

/*
 * ゲームデータモデル
 */

class Model_GameData extends Model_Base_Db
{

	protected static $_table_name	 = 'GameData';  // テーブル名
	protected static $_primariy		 = array('id');
	protected static $_properties	 = array(		// 要求するデータ
		'id',
		'turn_player',
		'player_position',
		'tile_position',
	);
	protected static $_observers	 = array(
		'Orm\Observer_UpdatedAt' => array(
			'events'			 => array('before_save'),
			'mysql_timestamp'	 => true,
		),
		'Orm\Observer_CreatedAt' => array(
			'events'			 => array('before_insert'),
			'mysql_timestamp'	 => true,
		),
	);

}
