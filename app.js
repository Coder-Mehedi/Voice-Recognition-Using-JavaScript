const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

const greetings = ["I'm good you noob"];

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = () => {
  console.log("voice is activated, you can speek to microphone");
};

recognition.onresult = e => {
  const current = e.resultIndex;

  const transcript = e.results[current][0].transcript;

  content.textContent = transcript;
  readOutLoud(transcript);
};

btn.addEventListener("click", () => {
  recognition.start();
});

const readOutLoud = message => {
  const speech = new SpeechSynthesisUtterance();
  speech.text = "I Don't Know What Are You Saying";

  if (message.includes("")) {
    const finalText = greetings[Math.floor(Math.random() * greetings.length)];
    speech.text = finalText;
  }

  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
};
