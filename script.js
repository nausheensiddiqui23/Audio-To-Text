let recognition;
let output = document.getElementById("output");
let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let languageSelect = document.getElementById("language");


if (!("webkitSpeechRecognition" in window)) {
  alert("Speech recognition not supported in this browser. Try Chrome.");
