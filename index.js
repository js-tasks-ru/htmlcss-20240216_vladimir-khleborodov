(function() {
  const tabsContentAll = document.querySelector('.tabs__content_all');
  let cards = Array.from(tabsContentAll.querySelectorAll('.card'));
  let cardsHidden = cards.slice(6);
  cardsHidden.forEach(item => item.style.display = 'none');
  
  function gridExpand(event) {
    if (event.target.classList.contains('button')) {
      this.style.display = 'none';
      cardsHidden.forEach(item => item.style.display = 'flex');
      this.removeEventListener('click', gridExpand);
    }
  }
  
  const btnWrapper = document.querySelector('.tabs__btn-wrapper');
  btnWrapper.addEventListener('click', gridExpand);
})();