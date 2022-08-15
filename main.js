var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

var textbox = document.getElementById("textBox");

function start(){
    textbox.innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);

    var Content = event.results[0][0].transcript;

    textbox.innerHTML = Content;
    console.log(Content);
        if(Content == "tire minha selfie"){
            console.log("tirando selfie...");
            speak();
        }
}

function speak(){
    var synth = window.speechSynthesis;

    speak_data = "tirando sua selfie em 5 segundos";

    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function(){
        take_selfie();
        save();
    }, 5000)
}

camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format:'jpeg',
    jpeg_quality:90
});

function take_selfie(){
    webcam.snap(function (data_uri){
    document.getElementById("result").innerHTML = '<img id="selfie_img" src="'+data_uri+'"/>';
    });
 }

 function save(){
    link = document.getElementById("link");
    made_ = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
 } 