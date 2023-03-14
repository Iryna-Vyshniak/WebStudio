const list = document.querySelector('.js-filter-cards');
const listItems = document.querySelectorAll('.filter-cards__item');
const cardsItems = document.querySelectorAll('.project-cards__item');

console.log(cardsItems);

function getItems(className) {
  cardsItems.forEach(card => {
    if (card.classList.contains(className)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

list.addEventListener('click', e => {
  const targetId = e.target.dataset.id;
  console.log(targetId);
  const target = e.target;
  console.log(target);

  if (target.classList.contains('filter-cards__item')) {
    listItems.forEach(item => item.classList.remove('active'));
    target.classList.add('active');
  }

  switch (targetId) {
    case 'all':
      getItems('project-cards__item');
      break;
    case 'web':
      getItems(targetId);
      break;
    case 'apps':
      getItems(targetId);
      break;
    case 'design':
      getItems(targetId);
      break;
    case 'marketing':
      getItems(targetId);
      break;
    default:
      break;
  }
});
