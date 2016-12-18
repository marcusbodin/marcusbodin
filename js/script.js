window.addEventListener('scroll', function () {
  document.body.classList[
    window.scrollY > 0 ? 'add': 'remove'
  ]('scrolled');
});

$(document).ready(function(){
	var btt = $('.backtotop');
	$(window).on('scroll', function(){
		console.log('scrolled');
		var self = $(this),
			height = self.height(),
			top = self.scrollTop();

		if(top > height){
			if(!btt.is(':visible')){
				btt.show();
			}
		}	else {
			btt.hide();
		}
	});

});