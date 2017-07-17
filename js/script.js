// When the user clicks on <div>, open the popup
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

var hide = "off";

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (scroll > 50 && hide == "off" && window.innerWidth <= 667){
		var myImg = document.getElementById('portrait');
		if(myImg && myImg.style) {
		    myImg.style.height = '0vh';
		}
		hide = "on";
		var mySec = document.getElementById('icon-box');
		if(mySec && mySec.style) {
		    mySec.style.visibility = 'hidden';
		}
	}
	else if (hide == "on" && scroll == 0 && window.innerWidth <= 667){
		var myImg = document.getElementById('portrait');
		if(myImg && myImg.style) {
			myImg.style.height = '50vh';
		}
		hide = "off";
		var mySec = document.getElementById('icon-box');
		if(mySec && mySec.style) {
		    mySec.style.visibility = 'visible';
		}
	}
});

window.addEventListener('resize', function(){
    if(window.innerWidth > 667){
		var myImg = document.getElementById('portrait');
		if(myImg && myImg.style) {
			myImg.style.height = '100vh';
		}
		hide = "off";
		var mySec = document.getElementById('icon-box');
		if(mySec && mySec.style) {
		    mySec.style.visibility = 'visible';
		}
    }
});

