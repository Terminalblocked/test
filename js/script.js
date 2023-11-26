const wordText = document.querySelector('.word'),
  hintText = document.querySelector('.hint span'),
  timeText = document.querySelector('.time b'),
  inputField = document.querySelector('input'),
  refreshBtn = document.querySelector('.refresh-word'),
  checkBtn = document.querySelector('.check-word');

let correctWord, timer;

const initTimer = (maxTime) => {
  clearInterval(timer);
  timer = setInterval(() => {
    if (maxTime > 0) {
      maxTime--;
      return (timeText.innerText = maxTime);
    }
    alert(`Ժամանակը սպառվեց! ${correctWord.toUpperCase()} բառը ճիշտ պատասխանն էր`);
    initGame();
  }, 1000);
};

const initGame = () => {
  initTimer(30);
  let randomObj = words[Math.floor(Math.random() * words.length)];
  let wordArray = randomObj.word.split('');
  for (let i = wordArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
  }
  wordText.innerText = wordArray.join('');
  hintText.innerText = randomObj.hint;
  correctWord = randomObj.word.toLowerCase();
  inputField.value = '';
  inputField.setAttribute('maxlength', correctWord.length);
};
initGame();

const checkWord = () => {
  let userWord = inputField.value.toLowerCase();
  if (!userWord) return alert('Խնդրում ենք մուտքագրել բառը ստուգելու համար!');
  if (userWord !== correctWord) return alert(`Վայ․․․ ${userWord} ճիշտ բառը չէ...`);
  alert(`Շնորհավորում ենք! դուք գուշակեցիք բառը՝ ${correctWord.toUpperCase()}`);
  initGame();
};

refreshBtn.addEventListener('click', initGame);
checkBtn.addEventListener('click', checkWord);
