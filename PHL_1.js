
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
var speed = 1500; //NOTE: Speed (variable shown right above refreshInterval() function modifies the speed of the animation)
		
		var text = null;
		var textDecommand = "";
        function processchange() {
        	textDecommand = document.getElementById("textarea").value;
        }

        function changeAltitude() {
        	textDecommand = $("#write").val();
            var option = textDecommand.charAt(0);
        	if(option == "A"){
			oldvalues =  document.getElementById("textarea").id.substring(0,document.getElementById("textarea").id.indexOf(' '));
        	textDecommand = textDecommand.substring(2);
			var newHeader = textDecommand.substring(textDecommand.indexOf(' ')+1);
			var oldHeader = textDecommand.substring(0,textDecommand.indexOf(' '));
			document.getElementById(oldHeader).innerHTML
                = newHeader;
			//document.getElementById(textDecommand.substr(0,textDecommand.indexOf(' '))).id = oldValues +" "+newHeader;
			
            
			 

	}

}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



 function myMove() { //change 
  var elem = document.getElementById("animate");  //change  
  var pos = 76; //where element starts
   function movediv(){
    if (pos == 476){ //where element heads to
      document.getElementById('animate').style.display='none';  //change. hides element once animation is completed: https://www.tutorialspoint.com/how-to-hide-show-html-elements-in-javascript
    
} else {
	
      pos+=10;
       elem.style.top = pos + "px"; 
       elem.style.left = pos + "px"; ; 
    
	 sleep(speed).then(() => {
	  requestAnimationFrame(movediv)

	});

	
 

    }
 
  }	
  requestAnimationFrame(movediv)
}
// z-index: 1; left: 50px; top: 280px; width: 11px; height: 12px;
var id2=null;
 function myMove2() { //change 
  var elem = document.getElementById("animate2");  //change  
  var pos2 = 76; //where element starts
   function movediv(){
    if (pos2 == 166) { //where element heads to
      document.getElementById('animate2').style.display='none';  //change. hides element once animation is completed: https://www.tutorialspoint.com/how-to-hide-show-html-elements-in-javascript
    } else {
	
      pos2+=10;
      elem.style.left = pos2 + "px"; 
      sleep(speed).then(() => {
	  requestAnimationFrame(movediv)

	});


    }
 
  }	
  requestAnimationFrame(movediv)
}

 

