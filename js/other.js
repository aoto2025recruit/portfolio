
//ナビゲーションメニュー用

//スクロールをするとハンバーガーメニューに変化するための設定を関数でまとめる
function FixedAnime() {
	//ヘッダーの高さを取得
	var headerH = $('#header').outerHeight(true);
	var scroll = $(window).scrollTop();
	if (scroll >= headerH){//ヘッダーの高さ以上までスクロールしたら
			//$('.openbtn').addClass('fadeDown');//.openbtnにfadeDownというクラス名を付与して
			$('#header').addClass('dnone');//#headerにdnoneというクラス名を付与
		}else{//それ以外は
			//$('.openbtn').removeClass('fadeDown');//fadeDownというクラス名を除き
			$('#header').removeClass('dnone');//dnoneというクラス名を除く
		}
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	FixedAnime();//スクロールをするとハンバーガーメニューに変化するための関数を呼ぶ
});



//ボタンをクリックした際のアニメーションの設定
$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#header").toggleClass('panelactive');//ヘッダーにpanelactiveクラスを付与
});
$("#g-navi li a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#header").removeClass('panelactive');//ヘッダーのpanelactiveクラスも除去
});


//リンク先のidまでスムーススクロール
//※ページ内リンクを行わない場合は不必要なので削除してください
$('#g-navi li a').click(function () {
	var elmHash = $(this).attr('href');
	var pos = $(elmHash).offset().top-80;
	$('body,html').animate({scrollTop: pos}, 1000);
	return false;
});


/* マウスストーカー */
$(window).on('load',function(){
	// ターゲット要素を取得する
	const target = document.querySelector('#load_flug');

	// class属性を削除する
	target.classList.remove('decay_load');
});

//マウスストーカー用のdivを取得
const stalker = document.getElementById('stalker'); 

//上記のdivタグをマウスに追従させる処理
document.addEventListener('mousemove', function (e) {
	stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
})
