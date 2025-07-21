const btn = document.getElementById("click_to_convert");
const output = document.getElementById("convert_text");

// Check for browser support
if (!('webkitSpeechRecognition' in window)) {
  alert("Speech Recognition only works in Google Chrome.");
} else {
  const recognition = new webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = true;
  recognition.lang = 'en-US';

  btn.addEventListener("click", () => {
    output.value = ""; // clear previous text
    recognition.start();
  });

  recognition.onresult = (event) => {
    const transcript = Array.from(event.results)
      .map(result => result[0].transcript)
      .join('');
    output.value = transcript;
  };

  recognition.onerror = (event) => {
    console.error("Speech recognition error:", event.error);
  };
}
