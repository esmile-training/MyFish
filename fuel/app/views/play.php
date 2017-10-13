<?php
/*
 * ゲームのプレイ画面(View)
 */
?>

<?php // cssの読み込み ?>
<?= Asset::css('bord_layout.css') ?>

<?php // 背景画像の表示　?>
<div class="background">
	<?= Asset::img('bg/battle_bg.png', array('alt' => 'background')) ?>
</div>

<?php // 盤面を表示する領域 ?>
<div id="bord">
	<?php // 縦列のループ ?>
	<?php for ($i = 0; $i < 8; $i++): ?>
		<div class="line<?= $i + 1 ?>">

			<?php // 横列のループ ?>
			<?php for ($j = 1; $j <= 8; $j++): ?>

				<?php // イメージの描画処理を行う ?>
				<div class="tile column<?= $j ?>"><?= Asset::img('object/tile' . $tile[($j - 1 ) +(8 * $i)] . '.png', array('alt' => 'tile', 'width' => '120px', 'height' => '80px')) ?></div>

			<?php endfor; ?>
		</div>
	<?php endfor; ?>

</div>

