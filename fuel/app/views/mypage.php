<!-- ajax  -->
<script>
function ajax_binder(data){
	if(data.type == "user_ajax"){
		// タグに情報を付加
		$('#id').text(data['id']);
		$('#username').text(data['name']);
		$('#created_at').text(data['created_at']);
		$('#updated_at').text(data['updated_at']);
	}
}
</script>