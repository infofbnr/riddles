
let currentAnswer = ''; // Store answer for later use
async function fetchRiddle() {
  const apiUrl = "https://riddles-api-eight.vercel.app/funny";

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) throw new Error(`API error: ${response.status}`);

    const data = await response.json();
    if (data.length === 0) return;

    document.getElementById('riddle').textContent = data.riddle;;
    document.getElementById('answer').classList.add('hidden');
    document.getElementById('answer').textContent = data.answer;
    document.getElementById('show-answer-btn').classList.remove('hidden');

    currentAnswer = data.answer;;

  } catch (error) {
    console.error('Error fetching riddle:', error);
    document.getElementById('riddle').textContent = 'Failed to load riddle. Try again later.';
    document.getElementById('answer').classList.add('hidden');
    document.getElementById('show-answer-btn').classList.add('hidden');
  }
}

function showAnswer() {
  const answerEl = document.getElementById('answer');
  answerEl.classList.remove('hidden');
}
let currentJoke = ''; // Store current joke delivery for showing later

async function fetchJoke() {
  const apiUrl = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,explicit&type=twopart";

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) throw new Error(`API error: ${response.status}`);

    const data = await response.json();
    if (data.error) throw new Error("Joke fetch error");

    document.getElementById('joke-setup').textContent = data.setup;
    document.getElementById('joke-delivery').classList.add('hidden');
    document.getElementById('joke-delivery').textContent = data.delivery;
    document.getElementById('show-joke-btn').classList.remove('hidden');

    currentJoke = data.delivery;

  } catch (error) {
    console.error('Error fetching joke:', error);
    document.getElementById('joke-setup').textContent = 'Failed to load joke. Try again later.';
    document.getElementById('joke-delivery').classList.add('hidden');
    document.getElementById('show-joke-btn').classList.add('hidden');
  }
}

function showJoke() {
  const deliveryEl = document.getElementById('joke-delivery');
  deliveryEl.classList.remove('hidden');
}