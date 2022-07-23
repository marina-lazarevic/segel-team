import json from '../data/events.json';
const container = document.querySelector('#events');

json.forEach(event => {
    let {title, subtitle, date, article, images} = event;
    let summary = article[0].slice(0, 80);    
    
    container.innerHTML += `
    <div class="events__teaser">
      <div class="events__date-container">
      <svg xmlns="http://www.w3.org/2000/svg" class="events__date-icon" viewBox="0 0 512 512"><path d="M32 456a24 24 0 0024 24h400a24 24 0 0024-24V192H32zM480 87.77A23.8 23.8 0 00456 64h-55.92V32h-48v32H159.92V32h-48v32H56a23.8 23.8 0 00-24 23.77V144h448z"/></svg>
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