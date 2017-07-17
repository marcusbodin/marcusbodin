// When the user clicks on <div>, open the popup
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

var hide = "off";


	$(window).scroll(function (event) {
		var scroll = $(window).scrollTop();
		console.log(scroll)
		if(window.innerHeight > window.innerWidth){
		    if (scroll > 50 && hide == "off"){
				var myImg = document.getElementById('portrait');
				if(myImg && myImg.style) {
					var imgHeight = 100 - scroll * 1.5 +"vh";
					console.log("THE IMAGE HEIGHT IS" + imgHeight)
				    myImg.style.height = imgHeight;
				    
				}
				hide = "on";
				var mySec = document.getElementById('icon-box');
				if(mySec && mySec.style) {
				    mySec.style.visibility = 'hidden';
				}
			}
			else if (hide == "on" && scroll == 0){
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
		}
	});

window.addEventListener('resize', function(){
    if(window.innerHeight < window.innerWidth){
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

