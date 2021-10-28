(function(){
	remLayout();
	function remLayout(){
		// 获取屏幕宽度
		var w = document.documentElement.clientWidth;
		w = w > 740 ? 740 : w;
		w = w <= 320 ? 320 : w;
		// document.documentElement 获取到的html标签
		document.documentElement.style.fontSize = w / 7.5 + 'px'
	}
	// resize 监听页面变化
	window.addEventListener('resize',function(){
		remLayout();
	},false)
})();