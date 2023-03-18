const typingArea = document.querySelector('#typing-area');
const cursor = document.createElement('span');
cursor.id = 'cursor';

let i = 0;
const txt = '사람들은 왜 시를 좋아하는 걸까. 아마도 시가 ‘시적이기’ 때문일 것이다. 다시 말해, 시의 시적인 면모가 사람에게 감흥을 주기 때문이다. 그리고 나는 랩이야말로 시적인 면모를 가장 강하게 지닌 예술이라고 생각한다. 랩 가사가 한 편의 시라면 랩은 입으로 표현하는 시다. 랩은 새로운 세대의 음악인 동시에 고전적인 시인 것이다.';
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