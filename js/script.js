// Funktion för att minska profilbild på mobilvy
var hide = "off";
	$(window).scroll(function (event) {
		var scroll = $(window).scrollTop();
		if(window.innerHeight > window.innerWidth){
		    if (scroll > 50 && hide == "off"){
				var myImg = document.getElementById('portrait');
				if(myImg && myImg.style) {
					var imgHeight = 20 +"vh";
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
			myImg.style.height = 'auto';
		}
		hide = "off";
		var mySec = document.getElementById('icon-box');
		if(mySec && mySec.style) {
		    mySec.style.visibility = 'visible';
		}
    }
});



// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("modalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
    $("html").addClass("freezebody");
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
	$("html").removeClass("freezebody");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        $("html").removeClass("freezebody");
    }
}

