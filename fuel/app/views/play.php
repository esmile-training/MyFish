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
		<div class="tile column1"><?= Asset::img('object/tile' . $tile[0] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column2"><?= Asset::img('object/tile' . $tile[1] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column3"><?= Asset::img('object/tile' . $tile[2] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column4"><?= Asset::img('object/tile' . $tile[3] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column5"><?= Asset::img('object/tile' . $tile[4] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column6"><?= Asset::img('object/tile' . $tile[5] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column7"><?= Asset::img('object/tile' . $tile[6] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column8"><?= Asset::img('object/tile' . $tile[7] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
	</div>
	
	<div class="line2">
		<div class="tile column1"><?= Asset::img('object/tile' . $tile[8] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column2"><?= Asset::img('object/tile' . $tile[9] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column3"><?= Asset::img('object/tile' . $tile[10] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column4"><?= Asset::img('object/tile' . $tile[11] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column5"><?= Asset::img('object/tile' . $tile[12] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column6"><?= Asset::img('object/tile' . $tile[13] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column7"><?= Asset::img('object/tile' . $tile[14] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column8"><?= Asset::img('object/tile' . $tile[15] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
	</div>
	
	<div class="line3">
		<div class="tile column1"><?= Asset::img('object/tile' . $tile[16] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column2"><?= Asset::img('object/tile' . $tile[17] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column3"><?= Asset::img('object/tile' . $tile[18] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column4"><?= Asset::img('object/tile' . $tile[19] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column5"><?= Asset::img('object/tile' . $tile[20] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column6"><?= Asset::img('object/tile' . $tile[21] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column7"><?= Asset::img('object/tile' . $tile[22] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column8"><?= Asset::img('object/tile' . $tile[23] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
	</div>
	
	<div class="line4">
		<div class="tile column1"><?= Asset::img('object/tile' . $tile[24] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column2"><?= Asset::img('object/tile' . $tile[25] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column3"><?= Asset::img('object/tile' . $tile[26] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column4"><?= Asset::img('object/tile' . $tile[27] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column5"><?= Asset::img('object/tile' . $tile[28] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column6"><?= Asset::img('object/tile' . $tile[29] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column7"><?= Asset::img('object/tile' . $tile[30] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column8"><?= Asset::img('object/tile' . $tile[31] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
	</div>
	
	<div class="line5">
		<div class="tile column1"><?= Asset::img('object/tile' . $tile[32] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column2"><?= Asset::img('object/tile' . $tile[33] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column3"><?= Asset::img('object/tile' . $tile[34] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column4"><?= Asset::img('object/tile' . $tile[35] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column5"><?= Asset::img('object/tile' . $tile[36] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column6"><?= Asset::img('object/tile' . $tile[37] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column7"><?= Asset::img('object/tile' . $tile[38] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column8"><?= Asset::img('object/tile' . $tile[39] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
	</div>
	
	<div class="line6">
		<div class="tile column1"><?= Asset::img('object/tile' . $tile[40] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column2"><?= Asset::img('object/tile' . $tile[41] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column3"><?= Asset::img('object/tile' . $tile[42] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column4"><?= Asset::img('object/tile' . $tile[43] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column5"><?= Asset::img('object/tile' . $tile[44] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column6"><?= Asset::img('object/tile' . $tile[45] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column7"><?= Asset::img('object/tile' . $tile[46] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column8"><?= Asset::img('object/tile' . $tile[47] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
	</div>
	
	<div class="line7">
		<div class="tile column1"><?= Asset::img('object/tile' . $tile[48] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column2"><?= Asset::img('object/tile' . $tile[49] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column3"><?= Asset::img('object/tile' . $tile[50] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column4"><?= Asset::img('object/tile' . $tile[51] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column5"><?= Asset::img('object/tile' . $tile[52] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column6"><?= Asset::img('object/tile' . $tile[53] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column7"><?= Asset::img('object/tile' . $tile[54] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column8"><?= Asset::img('object/tile' . $tile[55] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
	</div>
	
	<div class="line8">
		<div class="tile column1"><?= Asset::img('object/tile' . $tile[56] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column2"><?= Asset::img('object/tile' . $tile[57] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column3"><?= Asset::img('object/tile' . $tile[58] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column4"><?= Asset::img('object/tile' . $tile[59] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column5"><?= Asset::img('object/tile' . $tile[60] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column6"><?= Asset::img('object/tile' . $tile[61] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column7"><?= Asset::img('object/tile' . $tile[62] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
		<div class="tile column8"><?= Asset::img('object/tile' . $tile[63] . '.png', array('alt' => 'tile','width'=>'130px','height'=>'80px')) ?></div>
	</div>

</div>

