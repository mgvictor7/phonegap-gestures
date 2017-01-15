class App {
  init() {
    const lightButton = document.querySelector('#lightBtn');
    const darkButton = document.querySelector('#darkBtn');
    lightButton.addEventListener('click', () => {
      this.changeBodyColor('light');
    }, false);

    darkButton.addEventListener('click', () => {
      this.changeBodyColor('dark');
    }, false);
  }

  changeBodyColor(classColor) {
    document.body.className = classColor;
  }
};

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', () => {
    FastClick.attach(document.body);
    const app = new App();
    app.init();
  });
}
