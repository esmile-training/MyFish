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
	<?php // タイルを敷き詰める処理 ?>
	<div class="line1">
		<?php for($i = 1;$i <= 8;$i++): ?>
			<div class="tile column<?= $i ?>"><?= Asset::img('object/tile' . $tile[$i - 1] . '.png', array('alt' => 'tile', 'width' => '120px', 'height' => '80px')) ?></div>
		<?php endfor; ?>
	</div>

	<div class="line2">
		<?php for($i = 1;$i <= 8;$i++): ?>
			<div class="tile column<?= $i ?>"><?= Asset::img('object/tile' . $tile[($i - 1) + 8] . '.png', array('alt' => 'tile', 'width' => '120px', 'height' => '80px')) ?></div>
		<?php endfor; ?>
	</div>

	<div class="line3">
		<?php for($i = 1;$i <= 8;$i++): ?>
			<div class="tile column<?= $i ?>"><?= Asset::img('object/tile' . $tile[($i - 1) + 16] . '.png', array('alt' => 'tile', 'width' => '120px', 'height' => '80px')) ?></div>
		<?php endfor; ?>
	</div>

	<div class="line4">
		<?php for($i = 1;$i <= 8;$i++): ?>
			<div class="tile column<?= $i ?>"><?= Asset::img('object/tile' . $tile[($i - 1) + 24] . '.png', array('alt' => 'tile', 'width' => '120px', 'height' => '80px')) ?></div>
		<?php endfor; ?>
	</div>

	<div class="line5">
		<?php for($i = 1;$i <= 8;$i++): ?>
			<div class="tile column<?= $i ?>"><?= Asset::img('object/tile' . $tile[($i - 1) + 32] . '.png', array('alt' => 'tile', 'width' => '120px', 'height' => '80px')) ?></div>
		<?php endfor; ?>
	</div>

	<div class="line6">
		<?php for($i = 1;$i <= 8;$i++): ?>
			<div class="tile column<?= $i ?>"><?= Asset::img('object/tile' . $tile[($i - 1) + 40] . '.png', array('alt' => 'tile', 'width' => '120px', 'height' => '80px')) ?></div>
		<?php endfor; ?>
	</div>

	<div class="line7">
		<?php for($i = 1;$i <= 8;$i++): ?>
			<div class="tile column<?= $i ?>"><?= Asset::img('object/tile' . $tile[($i - 1) + 48] . '.png', array('alt' => 'tile', 'width' => '120px', 'height' => '80px')) ?></div>
		<?php endfor; ?>
	</div>

	<div class="line8">
		<?php for($i = 1;$i <= 8;$i++): ?>
			<div class="tile column<?= $i ?>"><?= Asset::img('object/tile' . $tile[($i - 1) + 56] . '.png', array('alt' => 'tile', 'width' => '120px', 'height' => '80px')) ?></div>
		<?php endfor; ?>
	</div>

</div>

