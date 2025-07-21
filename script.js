const startBtn = document.getElementById("click_to_convert");
const convert_text = document.getElementById("convert_text");
const languageSelect = document.getElementById("language");

let recognition;

if (!('webkitSpeechRecognition' in window)) {
  alert("Speech recognition not supported. Use Chrome.");
} else {
  recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;

  recognition.onresult = (e) => {
    let transcript = '';
    for (let i = e.resultIndex; i < e.results.length; ++i) {
      transcript += e.results[i][0].transcript;
    }
    convert_text.value = transcript;
  };

  recognition.onerror = (event) => {
    console.error("Speech recognition error:", event.error);
    stopGlow();
  };

  recognition.onend = () => {
    stopGlow();
    startBtn.disabled = false;
  };

  startBtn.addEventListener("click", () => {
    recognition.lang = languageSelect.value;
    recognition.start();
    startBtn.classList.add("glow");
    startBtn.disabled = true;
  });

  function stopGlow() {
    startBtn.classList.remove("glow");
  }
}
