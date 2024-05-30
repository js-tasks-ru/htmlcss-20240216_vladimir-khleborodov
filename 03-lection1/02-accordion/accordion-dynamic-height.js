const accordion = document.querySelector('.accordion');
let accordionItems = Array.from(accordion.querySelectorAll('.accordion__item'));

function accordionDynamicHeight() {
  accordionItems.forEach(accordionItem => {
    const originalHeight = accordionItem.offsetHeight;
    accordionItem.style.height = `${originalHeight}px`;
    
    const accordionItemSummary = accordionItem.querySelector('.accordion__summary');
    let accordionContent = accordionItem.querySelector('.accordion__content');
    let contentHeight = accordionContent.offsetHeight;
    let newHeight = originalHeight + contentHeight;
    
    accordionItemSummary.addEventListener('click', () => {
      if (accordionItem.hasAttribute('open')) {
        accordionItem.style.height = `${originalHeight}px`;
        return;
      }
      
      accordionItem.style.height = `${newHeight}px`;
    });
  });
}

accordionDynamicHeight();