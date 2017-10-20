<?php
/*
 * ゲームのプレイ画面(View)
 */
?>

<?php // cssの読み込み ?>
<?= Asset::css('square_layout.css') ?>
<?= Asset::css('piece_layout.css') ?>

<?php // javascriptの読み込み ?>
<?= Asset::js('piece.js') ?>

<?php // 背景画像の表示　?>
<div class="background">
	<?= Asset::img('bg/battle_bg.png', array('alt' => 'background')) ?>
</div>

<?php // マスを表示する ?>
<div id="square">
	<?php // タイルにindexを付与するためのカウンタ
	$counter = 0;
	?>

	<?php // 縦列のループ
	for ($i = 0; $i < 8; $i++):
		?>
		<div class="square_line<?= $i + 1 ?>">

			<?php // 横列のループ
			for ($j = 1; $j <= 8; $j++):
				?>

						<?php // イメージの描画処理を行う   ?>
				<div class="square_column<?= $j ?>">

					<div id="tile<?= $counter ?>" class="tile" onclick="get_tile_data()">
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
	<div id="piece_1_1" class="piece_size" onclick="get_piece_data()">
		<?= Asset::img('chara/chara_p1.png', array('class' => 'piece_size', 'alt' => 'player')) ?>
	</div>

	<div id="piece_1_2" onclick="get_piece_data()">
		<?= Asset::img('chara/chara_p1.png', array('class' => 'piece_size', 'alt' => 'player')) ?>
	</div>

	<div id="piece_2_1" onclick="get_piece_data()">
		<?= Asset::img('chara/chara_p2.png', array('class' => 'piece_size', 'alt' => 'player')) ?>
	</div>

	<div id="piece_2_2" onclick="get_piece_data()">
		<?= Asset::img('chara/chara_p2.png', array('class' => 'piece_size', 'alt' => 'player')) ?>
	</div>

	<div id="piece_3_1" onclick="get_piece_data()">
		<?= Asset::img('chara/chara_p3.png', array('class' => 'piece_size', 'alt' => 'player')) ?>
	</div>

	<div id="piece_3_2" onclick="get_piece_data()">
		<?= Asset::img('chara/chara_p3.png', array('class' => 'piece_size', 'alt' => 'player')) ?>
	</div>

	<div id="piece_4_1" onclick="get_piece_data()">
		<?= Asset::img('chara/chara_p4.png', array('class' => 'piece_size', 'alt' => 'player')) ?>
	</div>

	<div id="piece_4_2" onclick="get_piece_data()">	
		<?= Asset::img('chara/chara_p4.png', array('class' => 'piece_size', 'alt' => 'player')) ?>
	</div>
</div>

<script>
	//init_position();
</script>