import json from '../data/founders.json';

let s_img = document.querySelector('#slide-img');
let s_name = document.querySelector('#slide-name');
let s_role = document.querySelector('#slide-role');
let s_bio = document.querySelector('#slide-bio');

function fillSlide(content){
    let {name, role, bio, image} = content;
    s_img.src = image;
    s_img.alt = name;
    s_name.innerHTML = name;
    s_role.innerHTML = role;
    s_bio.innerHTML = bio
}

let i = 0;

fillSlide(json[i]);

document.querySelectorAll('.about__btn').forEach(btn => {
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="about__btn-img" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="48" d="M244 400L100 256l144-144M120 256h292"/></svg>`;
    btn.addEventListener('click', () => {
        let o = i;
        btn.id == 'about-next' ? i++ : i--;
        (i < 0 || i > json.length-1) && (i = o);
        fillSlide(json[i]);
    })
})