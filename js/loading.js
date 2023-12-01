//logoの表示

window.addEventListener('DOMContentLoaded', function() {
	$("#splash").delay(1000).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
	// $(".container_load").delay(1000).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
	// $(".center_svg").delay(1000).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
	// $("#load").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
	setTimeout(() => {
		$('body').removeClass('no_scroll'); // Execution 0.5sec
	  }, 1000);
});
