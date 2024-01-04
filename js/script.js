// show result
var number1 = 5;
var number2 = 3;

var result = number1 + number2;

function showResult(){
	document.getElementById('result').innerHTML=result;
}

// classname
function cName(){
	document.getElementsByClassName('p')[1].innerHTML="Welcome";
}

// text change
function textChange() {

	document.getElementById('t_h3').innerHTML="Hello";
}
// show date
function showDate() {

	document.getElementById('sd').innerHTML=Date();
}
// show/hide text
function showText() {
	document.getElementById('tsh').style.display="block";
}
function hideText() {
	document.getElementById('tsh').style.display="none";
}
// bulb on/off
function bulbOn() {
	document.getElementById('img').src="images/on.gif";
}
function bulbOff() {
	document.getElementById('img').src="images/off.gif";
}
// smile on/off
function smileOn() {
	document.getElementById('img_1').src="images/smile.jpg";
}
function smileOff() {
	document.getElementById('img_1').src="images/sad.jpg";
}

// show border
function showBorder() {
	document.getElementById('sb').style.border="2px solid red";
}
function bulbOff() {
	document.getElementById('img').src="images/off.gif";
}
// wow js
wow = new WOW(
    {
     boxClass:     'wow',      // default
     animateClass: 'animated', // default
     offset:       0,          // default
     mobile:       true,       // default
     live:         true        // default
}
)
wow.init();
$(document).ready(function(){

	// show/hide
	$('#hide').on('click', function(){
		$('#sh_h3').hide();
	});
	$('#show').on('click', function(){
		$('#sh_h3').show();
	});
	$('#togg').on('click', function(){
		$('#sh_h3').toggle(300);
	});

	// alert message
	$('#btn').on('click', function(){
		alert("welcome");
	});

	// show/hide 
	$('#hideText').on('click', function(){
		$('#sh_h4').fadeOut();
	});
	$('#showText').on('click', function(){
		$('#sh_h4').fadeIn();
	});
	$('#toggle').on('click', function(){
		$('#sh_h4').fadeToggle(300);
	});

	// ques/ans
	$('.ques').on('click', function(){
		$('.answ').slideToggle();
	});
	// draggable
    $( "#draggable" ).draggable();

    // accordian
    $( "#accordion" ).accordion({
    	collapsible: true
    });

    // autocomplete
    var data = [ 
    	"Html",
    	"Css",
    	"Bootstrap",
    ];
    $( "#c_name" ).autocomplete({
      source: data
    });
    // counterup
    $('.counter').counterUp({
    	delay: 10,
    	time: 1000
	});
	
	// countdown



	var countdown = $("#countdown").countdown360({
    radius: 95.5,
    strokeStyle:"#477050",
    strokeWidth: undefined,
    fillStyle:"#8ac575",
    fontColor:"#477050",
    fontFamily:"sans-serif",
    fontSize: undefined,
    fontWeight: 700,
    autostart:true,
    seconds: 100,
    label: ["second","seconds"],
    startOverAfterAdding:true,
    smooth:false,
    onComplete:function () {}
});

})
