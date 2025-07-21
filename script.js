const click_to_convert = document.getElementById('click_to_convert');
const convert_text = document.getElementById('convert_text');

click_to_convert.addEventListener('click', function () {
  if (!('webkitSpeechRecognition' in window)) {
    alert('Your browser does not support Speech Recognition. Try Chrome.');
    return;
  }

  const recognition = new webkitSpeechRecognition();
  recognition.interimResults = true;
  recognition.continuous = true;
  recognition.lang = 'en-US'; // You can make this dynamic

  recognition.addEventListener('result', (e) => {
    let transcript = '';
    for (let i = e.resultIndex; i < e.results.length; i++) {
      transcript += e.results[i][0].transcript;
    }
    convert_text.innerText = transcript;
  });

  recognition.onerror = function (event) {
    console.error('Error:', event.error);
  };

  recognition.start();
});
