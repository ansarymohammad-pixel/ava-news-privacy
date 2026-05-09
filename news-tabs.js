const tabs = document.querySelectorAll('[data-news-tab]');
const panels = document.querySelectorAll('[data-news-panel]');

function activateNewsTab(tabName) {
  tabs.forEach((tab) => {
    const isActive = tab.dataset.newsTab === tabName;
    tab.classList.toggle('active', isActive);
    tab.setAttribute('aria-selected', String(isActive));
  });

  panels.forEach((panel) => {
    const isActive = panel.dataset.newsPanel === tabName;
    panel.classList.toggle('active', isActive);
    panel.hidden = !isActive;
  });
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    activateNewsTab(tab.dataset.newsTab);
  });
});
