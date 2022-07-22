import images from '../data/crew_images.json';
const limit = 5;
let page = 1;
const xhttp = new XMLHttpRequest();
const crew_container = document.querySelector('#crew-container');
const load_btn = document.querySelector('#load-btn');
async function fetchCrewData(page, limit) {
    let url = `https://challenge-api.view.agentur-loop.com/api.php?&page=${page}&limit=${limit}`;
    try {
        let response = await fetch(url);
        let result = await response.json();
        let { data: { data } } = result;
        renderCrewMembers(data);
    } catch (error) {
        console.error(error);
        crew_container.innerHTML = `
        <h3 class="crew__error-msg">Sorry, an error occurred!</h3>
        <h4 class="crew__error-description">Crew data is currently unavailable.</h4>
        `;
        load_btn.disabled = true;
    }
}
function renderCrewMembers(members) {
    members.forEach(member => {
        let { image, name, duties, duty_slugs } = member;
        image = images[page - 1][members.indexOf(member)];
        crew_container.innerHTML += `
        <div class="crew__member ${duty_slugs.join(' ')}">
            <div class="crew__member-img-container">
                <img src="${image}" alt="${name}">
            </div>
            <div class="crew__member-info">
                <h4 class="crew__member-name">${name}</h4>
                <p class="crew__member-role">${duties}</p>
                <p class="crew__member-bio">Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
            </div>
        </div>
        `
    })
}
load_btn.addEventListener('click', () => {
    page++;
    xhttp.open("GET", fetchCrewData(page, limit), true);
})
fetchCrewData(page, limit);
let filter_btns = document.querySelectorAll('.crew__btn');
filter_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        filter_btns.forEach(b => b.classList.remove('crew__btn--active'));
        btn.classList.add('crew__btn--active');
        crew_container.querySelectorAll('.crew__member').forEach(member => {
            member.classList.remove('hidden');
            if (btn.id == 'all') {
                member.classList.remove('hidden');
            } else if (!member.classList.contains(btn.id)) {
                member.classList.add('hidden');
            }
        })
    })
})