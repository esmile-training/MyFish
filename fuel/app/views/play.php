<?php
/*
 * ゲームのプレイ画面(View)
 */
?>

<?php // 背景画像の表示　?>
<div>
	<?= Asset::img('bg/battle_bg.png', array('alt' => 'background')) ?>
</div>

<div id="bord">
	<?php // タイルを敷き詰める処理 ?>
	<?php foreach ($tile_position as $tile): ?>
		<div>
			<?= Asset::img('object/tile.png', array('alt' => 'tile')) ?>
			<?php var_dump($tile) ?>
		</div>
	<?php endforeach; ?>
</div>

