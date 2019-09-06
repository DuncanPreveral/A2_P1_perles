console.log(document);
console.log(window);

let perles = document.querySelectorAll('footer a');
console.log(perles);

let h1 = document.querySelector('#pagetop h1');
console.log(h1);
h1.style.color = 'orange';
h1.style.display = 'none';

let h3 = document.querySelectorAll('article > h3');
console.log(h3);

for (let i = 0; i < h3.length; i++) {
    h3[i].style.color = 'blue';
}

let button = document.querySelector('#plus button');
console.log(button);
button.setAttribute('je-susi-attribut', 'cool');

button.classList.add('btn-dark');

button.addEventListener('click', chargerPlus);

function chargerPlus() {
    let article = document.createElement('article');
    let h3Article = document.createElement('h3');
    h3Article.innerHTML = "Je suis un titre";
    let p = document.createElement('p');
    p.innerHTML = "Je suis un paragraphe";

    let divPerles = document.getElementById('perles');
    divPerles.appendChild(article);
    article.appendChild(h3Article);
    article.appendChild(p);
}

