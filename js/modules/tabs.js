function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
  // Tabs

  let tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector),
        tabsParent = document.querySelector(tabsParentSelector);

  function hideTabContent() {
    tabsContent.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show', 'fide');
    });

    tabs.forEach(item => {
        item.classList.remove(activeClass);
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add('show', 'fide');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add(activeClass);
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener('click', event => {
    const target = event.target;

    if(target && target.classList.contains(tabsSelector.slice(1))){
      tabs.forEach((item, i) => {
          if(target == item) {
            hideTabContent();
            showTabContent(i);
          }
      });
    }
  });
}

export default tabs;