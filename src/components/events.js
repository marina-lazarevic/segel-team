import json from '../data/events.json';
import calendar_icon from '../assets/calendar.svg';

const container = document.querySelector('#events');

console.log(json)

json.forEach(event => {
    let {title, subtitle, date, article, images} = event;
    let summary = article[0].slice(0, 80);    
    
    container.innerHTML += `
    <div class="events__teaser">
      <div class="events__date-container">
      <img src="${calendar_icon}" alt="calendar icon" class="events__date-icon">
      <p class="events__date">${date}</p>
      </div>
      <a href="#" class="events__title">${title}</a>
      <p class="events__summary">${summary}...</p>
    </div>`;
})

container.querySelectorAll('.events__title').forEach(title => {
  title.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('click')
    // open atricle
  })
})