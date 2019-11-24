document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#form');
  form.addEventListener('submit', handleFormSubmit);

  const button = document.querySelector('#button');
  button.addEventListener('click', handleButtonClick);
});

const handleFormSubmit = function (bannana_event) {
  bannana_event.preventDefault();
  console.log(bannana_event);

  // const unorderedList = document.createElement('ul')
  // unorderedList.classList.add('unordered-list')

  const songItem = document.createElement('li');
  songItem.textContent = event.target.song.value;

  const artistItem = document.createElement('li');
  artistItem.textContent = event.target.artist.value;

  const albumItem = document.createElement('li');
  albumItem.textContent = event.target.album.value;

  const list = document.querySelector('#music-list');
  list.appendChild(songItem);
  list.appendChild(artistItem);
  list.appendChild(albumItem);

  document.querySelector('#form').reset()

};

const handleButtonClick = function (bannana_event) {
  console.log(bannana_event);
  const allLi = document.querySelectorAll('li')
  allLi.forEach((li) => {
    li.remove();
  });

//   const handleDeleteAllClick = function (event) {
//   const readingList = document.querySelector('#reading-list');
//   readingList.innerHTML = '';
// }
// ?(T) Alternative way to delete. 

};
