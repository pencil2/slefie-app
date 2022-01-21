 var SpeechRecognition = window.webkitSpeechRecognition;

var Recognition = new SpeechRacognition();

function start() 
 {
     document.getElementById("textbox").innerHTML="";
     Recognition.start();
 }
 
 Recognition.onresult = function run(event) {

    console.log(event);

    var Content = event.results[0] [0].transcript;
    console.log(Content);

    document.getElementById("texbox").innerHTML = Content;
 }