<?php
/*
 * ゲームのプレイ画面(View)
 */
?>

<?php // cssの読み込み ?>
<?= Asset::css('bord_layout.css') ?>
<?= Asset::css('square_layout.css') ?>
<?= Asset::css('piece_layout.css') ?>

<?php // javascriptの読み込み ?>
<?= Asset::js('jquery-3.2.1.min.js') ?>
<?= Asset::js('piece.js') ?>

<?php // 背景画像の表示　?>
<div class="background">
	<?= Asset::img('bg/battle_bg.png', array('alt' => 'background')) ?>
</div>

<?php // javascriptで使用するデータをセットする ?>

<script id="tile_data_array" src="<?= APP_URL ?>public/assets/js/piece.js"
tile_data = '<?php $json_tile_data ?>'></script>

<script id="piece_position_array" src="<?= APP_URL ?>public/assets/js/piece.js"
piece_data = '<?php $json_player_position ?>'></script>

<script id="piece_offset_array" src="<?= APP_URL ?>public/assets/js/piece.js"
piece_offset_data = '<?php $json_piece_position_offset ?>'></script>

<script id="score_data_array" src="<?= APP_URL ?>public/assets/js/piece.js"
score_data = '<?php $json_score_data ?>'></script>

<?php // マスを表示する ?>
<div id="square">
	<?php
	// タイルにindexを付与するためのカウンタ
	$counter = 0;
	?>

	<?php
	// 縦列のループ
	for ($i = 0; $i < 8; $i++):
		?>
		<div class="square_line<?= $i + 1 ?>">

			<?php
			// 横列のループ
			for ($j = 1; $j <= 8; $j++):
				?>

						<?php // イメージの描画処理を行う    ?>
				<div class="square_column<?= $j ?>">

					<div id="tile<?= $counter ?>" class="tile" onclick="get_tile_data(<?= $counter ?>)">
		<?= Asset::img('object/tile' . $tile['tile_type'][($j - 1 ) + (8 * $i)] . '.png', array('alt' => 'tile')) ?>
					</div>

				</div>

			<?php $counter++; ?>

	<?php endfor; ?>
		</div>
<?php endfor; ?>

</div>

		<?php // プレイヤーの駒を表示する   ?>
<div id="piece">
	<div id="piece1_1" class="piece_size" number="11" onclick="get_piece_data(this.id)">
		<?= Asset::img('chara/chara_p1.png', array('class' => 'piece_size', 'alt' => 'player')) ?>
	</div>

	<div id="piece1_2" class="piece_size" number="12" onclick="get_piece_data(this.id)">
		<?= Asset::img('chara/chara_p1.png', array('class' => 'piece_size', 'alt' => 'player')) ?>
	</div>

	<div id="piece2_1" class="piece_size" number="21" onclick="get_piece_data(this.id)">
		<?= Asset::img('chara/chara_p2.png', array('class' => 'piece_size', 'alt' => 'player')) ?>
	</div>

	<div id="piece2_2" class="piece_size" number="22" onclick="get_piece_data(this.id)">
		<?= Asset::img('chara/chara_p2.png', array('class' => 'piece_size', 'alt' => 'player')) ?>
	</div>

	<div id="piece3_1" class="piece_size" number="31" onclick="get_piece_data(this.id)">
		<?= Asset::img('chara/chara_p3.png', array('class' => 'piece_size', 'alt' => 'player')) ?>
	</div>

	<div id="piece3_2" class="piece_size" number="32" onclick="get_piece_data(this.id)">
		<?= Asset::img('chara/chara_p3.png', array('class' => 'piece_size', 'alt' => 'player')) ?>
	</div>

	<div id="piece4_1" class="piece_size" number="41" onclick="get_piece_data(this.id)">
		<?= Asset::img('chara/chara_p4.png', array('class' => 'piece_size', 'alt' => 'player')) ?>
	</div>

	<div id="piece4_2" class="piece_size" number="42" onclick="get_piece_data(this.id)">	
<?= Asset::img('chara/chara_p4.png', array('class' => 'piece_size', 'alt' => 'player')) ?>
	</div>
</div>

<script>
	
//	var a = new Porygon(10,10);	
//	var hoge = a.calcArea();
//	console.log(hoge);
	init_position();
</script>