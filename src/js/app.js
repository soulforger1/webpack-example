import { randomButton, hello } from './finder';
import { languages } from './languages';
import '../css/main.css';

randomButton.addEventListener('click', changeLanguage);

function changeLanguage() {
  const randomIndex = Math.floor(Math.random() * (languages.length))
  hello.innerHTML = languages[randomIndex]
}