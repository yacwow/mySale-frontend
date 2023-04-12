let nowUrl = window.location.pathname;
$(function() {
	setStorList();

	$('.ulFour').click(function() {
		let scrollTop = $(window).scrollTop();
		let scrollObj = {
			nowUrl: nowUrl,
			scrollTop: parseInt(scrollTop.toFixed(2)),
			listNum: $('.ulFour>li').length
		}
		let scrollList = [];
		if (window.localStorage.getItem('scrollSpecial') !== null) {
			try{
				let scrollList = JSON.parse(window.localStorage.getItem('scrollSpecial'))
			}catch(err){
				let scrollList = [];
				scrollList.push(scrollObj);
			}
			for (let i in scrollList) {
				if (scrollList[i]['nowUrl'] === nowUrl) {
					scrollList[i] = scrollObj
				} else {
					scrollList.push(scrollObj);
				}
			}
		} else {
			scrollList.push(scrollObj);
		}

		window.localStorage.setItem('scrollSpecial', JSON.stringify(scrollList));
	})

	function setStorList() {
		if(nowUrl.indexOf('time-sale-c-58.html') === -1){
			return;
		}
		let nowpagelistlength = $('.ulFour>li').length;
		if (nowpagelistlength === 0) {
			setTimeout(function() {
				setStorList();
			}, 100)
			return;
		}
		let scrollList = window.localStorage.getItem('scrollSpecial') ? JSON.parse(window.localStorage.getItem(
			'scrollSpecial')) : [];
		for (let i in scrollList) {
			if (scrollList[i].nowUrl === nowUrl) {
				$('body,html').animate({
					scrollTop: scrollList[i].scrollTop
				}, 100);
			}
		}
		let notneedScroll = window.localStorage.getItem('notneedScroll') ? window.localStorage.getItem('notneedScroll') : false;
		if(notneedScroll){
			window.localStorage.removeItem('scrollSpecial');
			window.localStorage.removeItem('notneedScroll');
		}
	}
})