class Tabs {
  constructor(className) {
    this.tabs = document.querySelectorAll(className);
    this.tabsContent = document.querySelectorAll(`${className}-content`);
    console.log(this.tabsContent);
    this.tabs.forEach(item => {
      item.addEventListener("click", () => {
        this._swap(item.id);
      });
    });
  }
  _swap(id) {
    for (let i = 0; i < this.tabs.length; i++) {
      if (`${id}-content` === this.tabsContent[i].id) {
        this.tabsContent[i].classList.remove("hide");
      } else {
        this.tabsContent[i].classList.add("hide");
      }
      if (id === this.tabs[i].id) {
        this.tabs[i].classList.add("selected");
      } else {
        this.tabs[i].classList.remove("selected");
      }
    }
  }
}

new Tabs(".tab");
