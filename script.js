const card = document.getElementById('card');
const cardGlow1 = document.getElementById('glow-1');
const cardGlow2 = document.getElementById('glow-2');

function onCardMouseMove(e) {
    const posTop = e.offsetY - e.target.offsetHeight / 2;
    const posLeft = e.offsetX - e.target.offsetWidth / 2;
    const posRotX = (e.offsetY - e.target.offsetHeight / 2) /  (e.target.offsetHeight / 30)
    const posRotY =( e.offsetX - e.target.offsetWidth / 2) / (e.target.offsetWidth / 30)
    cardGlow1.setAttribute('style', `left: ${posLeft}px; top: ${posTop}px;`);
    cardGlow2.setAttribute('style', `left: ${-posLeft}px; top: ${-posTop}px;`);
    card.setAttribute('style', `transform: rotateX(${-posRotX}deg) rotateY(${-posRotY}deg) scale(1.05);`);
}
function onCardMouseOut(e) {
    card.setAttribute('style', `transform: rotateX(0deg) rotateY(0deg) scale(1);`);
}


card.addEventListener('mousemove', (e) => onCardMouseMove(e), false);
card.addEventListener('mouseout', (e) => onCardMouseOut(e), false);
