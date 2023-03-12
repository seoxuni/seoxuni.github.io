const typingArea = document.querySelector('#typing-area');
const cursor = document.createElement('span');
cursor.id = 'cursor';

let i = 0;
const txt = 'Rockets is looking for a quick shot... Bowen is all over... Mcgrady, foul was picked up...! And, Its four point play! Mcgrady from downtown!';
const speed = 75;

function typeWriter() {
  if (i < txt.length) {
    typingArea.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typingArea.appendChild(cursor);
typeWriter();