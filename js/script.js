window.addEventListener('scroll', function () {
  document.body.classList[
    window.scrollY > 0 ? 'add': 'remove'
  ]('scrolled');
});

$(document).ready(function(e){
	var btt = $('.backtotop');

	btt.on('click', function(){
		$('html, body').animate({
			scrollTop: 710
		}, 500);

		e.preventDefault();
	});

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

function scroll_to_anchor(anchor_id){
    var tag = $("#"+anchor_id+"");
    $('html,body').animate({scrollTop: tag.offset().top},'slow');
}