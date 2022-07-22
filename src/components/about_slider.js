import json from '../data/founders.json';
import arrow_icon from '../assets/arrow.svg';

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
    btn.innerHTML = `<img src="${arrow_icon}" alt="arrow icon" class="about__btn-img">`;
    btn.addEventListener('click', () => {
        let o = i;
        btn.id == 'about-next' ? i++ : i--;
        (i < 0 || i > json.length-1) && (i = o);
        fillSlide(json[i]);
    })
})