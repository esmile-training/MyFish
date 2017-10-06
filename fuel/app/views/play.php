<?php
/*
 * ゲームのプレイ画面(View)
 */
?>

<?php // 背景画像の表示　?>
<div>
	<?= Asset::img('bg/battle_bg.png', array('alt' => 'background')) ?>
</div>

<?php foreach ($tile_position as $tile): ?>
	<div>
		<?= Asset::img('object/tile.png', array('alt' => 'tile')) ?>
	</div>
<?php endforeach; ?>