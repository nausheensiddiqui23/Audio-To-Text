let recognition;
let output = document.getElementById("output");
let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let languageSelect = document.getElementById("language");


if (!("webkitSpeechRecognition" in window)) {
  alert("Speech recognition not supported in this browser. Try Chrome.");
} else {
    recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;


 startBtn.onClick = () => {
    recognition.lang = languageSelect.value;
    recognition.start();
    startBtn.disabled = true;
    stopBtn.disabled = false;
 };
 }




}