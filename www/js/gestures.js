class Gestures {
  init() {
    this.initButtons();
    this.initFastClick();
    this.initHammer();
  }

  initButtons() {
    const lightButton = document.getElementById('lightBtn');
    const darkButton = document.getElementById('darkBtn');
    lightButton.addEventListener('click', () => { this.changeBodyColor('light'); });
    darkButton.addEventListener('click', () => { this.changeBodyColor('dark'); });
  }

  initFastClick() {
    FastClick.attach(document.body);
  }

  initHammer() {
    const gesturesZone = document.getElementById('gestures-zone');
    const hammer = new Hammer(gesturesZone);

    // Iniciar eventos que el Hammer no inicia por defecto
    hammer.get('pinch').set({ enable: true });
    hammer.get('rotate').set({ enable: true });

    hammer.on('tap doubletap swipe press rotate', (e) => {
      document.getElementById('info').innerHTML = e.type;
    });
  }


  changeBodyColor(classColor) {
    document.body.className = classColor;
  }
};

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', () => {
    const app = new Gestures();
    app.init();
  });
}
