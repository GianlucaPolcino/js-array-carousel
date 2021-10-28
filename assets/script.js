const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
];

const imgLeft = document.getElementsByClassName('gp-hidden');
const imgRight = document.getElementsByClassName('gp-right');
let contatore = 0;
const down = document.querySelector('.gp-up');
const up = document.querySelector('.gp-down');

console.log(up);
console.log(down);

let col = document.querySelector('.col');
let coldx = document.querySelector('.col-2');

for (let i = 0; i < items.length; i++) {
    const item = document.createElement('div');
    const html = `
    <img class = "gp-item gp-left" src = "assets/${items[i]}">
    <div class="position-relative text-white">
                       <div class="gp-left-description">
                            <h2>${title[i]}</h2>
                            <h5>${text[i]}</h5>
                       </div>
    </div>                
    `;

    const itemTwo = document.createElement('div');
    const htmlTwo =`
    <img class="gp-item gp-right" src="assets/${items[i]}" alt="">
    `

    item.classList.add('gp-hidden');
    item.innerHTML = html;
    itemTwo.innerHTML = htmlTwo;
    
    col.append(item);
    coldx.append(itemTwo);

    if (i === contatore){
        item.classList.add('active');
        itemTwo.classList.add('active2');
    }
}


down.addEventListener('click', function(){
    imgLeft[contatore].classList.remove('active');
    imgRight[contatore].classList.remove('active2');
    contatore--;

    if(contatore < 0) contatore = imgLeft.length - 1;
    imgLeft[contatore].classList.add('active');
    imgRight[contatore].classList.add('active2');
    console.log(imgLeft);
})

up.addEventListener('click', function(){
    imgLeft[contatore].classList.remove('active');
    imgRight[contatore].classList.remove('active2');
    contatore++;

    if(contatore > imgLeft.length - 1) contatore = 0;
    imgLeft[contatore].classList.add('active');
    imgRight[contatore].classList.add('active2');
    console.log(imgRight);
})
