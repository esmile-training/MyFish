<?php
/*
 * ゲームのプレイ画面(View)
 */
?>

<?php // cssの読み込み ?>
<?= Asset::css('square_layout.css') ?>
<?= Asset::css('piece_layout.css') ?>
<?= Asset::js('piece.js') ?>

<?php // 背景画像の表示　?>
<div class="background">
	<?= Asset::img('bg/battle_bg.png', array('alt' => 'background')) ?>
</div>

<?php // マスを表示する ?>
<div id="square">
	<?php // 縦列のループ ?>
	<?php for ($i = 0; $i < 8; $i++): ?>
		<div class="square_line<?= $i + 1 ?>">

			<?php // 横列のループ ?>
			<?php for ($j = 1; $j <= 8; $j++): ?>

				<?php // イメージの描画処理を行う ?>
				<div class="square_column<?= $j ?>"><?= Asset::img('object/tile' . $tile[($j - 1 ) + (8 * $i)] . '.png', array('class' => 'tile', 'alt' => 'tile')) ?></div>

			<?php endfor; ?>
		</div>
	<?php endfor; ?>

</div>

<?php // プレイヤーの駒を表示する ?>
<div id="piece">
	<div id="piece_1_1">
		<?= Asset::img('chara/chara_p1.png', array('class' => 'piece_size', 'alt' => 'player')) ?>
	</div>

	<div id="piece_1_2">
		<?= Asset::img('chara/chara_p1.png', array('class' => 'piece_size', 'alt' => 'player')) ?>
	</div>

	<div id="piece_2_1">
		<?= Asset::img('chara/chara_p2.png', array('class' => 'piece_size', 'alt' => 'player')) ?>
	</div>

	<div id="piece_2_2">
		<?= Asset::img('chara/chara_p2.png', array('class' => 'piece_size', 'alt' => 'player')) ?>
	</div>

	<div id="piece_3_1">
		<?= Asset::img('chara/chara_p3.png', array('class' => 'piece_size', 'alt' => 'player')) ?>
	</div>

	<div id="piece_3_2">
		<?= Asset::img('chara/chara_p3.png', array('class' => 'piece_size', 'alt' => 'player')) ?>
	</div>

	<div id="piece_4_1">
		<?= Asset::img('chara/chara_p4.png', array('class' => 'piece_size', 'alt' => 'player')) ?>
	</div>

	<div id="piece_4_2">	
		<?= Asset::img('chara/chara_p4.png', array('class' => 'piece_size', 'alt' => 'player')) ?>

	</div>
</div>

<script>
	init_position();
</script>