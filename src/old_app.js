import phrases from './phrases';
import randomNumber from './randomNumber';


setInterval(() => {
    const index = randomNumber(0, phrases.length - 1);
    document.getElementById('app').innerHTML = '<h1>' + phrases[index] + '</h1>';
}, 2000)