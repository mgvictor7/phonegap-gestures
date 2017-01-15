class Gestures {
  init() {
    this.initButtons();
    this.initFastClick();
    this.initHammer();
  }

  initButtons() {
    const lightButton = document.getElementById('lightBtn');
    const darkButton = document.getElementById('darkBtn');
    lightButton.addEventListener('click', () => { this.changeBodyColor('light-animation'); });
    darkButton.addEventListener('click', () => { this.changeBodyColor('dark-animation'); });
    document.body.addEventListener('webkitAnimationEnd', (e) => {
      if (document.body.className === 'light-animation') {
        this.changeBodyColor('light');
      } else if (document.body.className === 'dark-animation') {
        this.changeBodyColor('dark');
      }
    });
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

    // hammer.on('tap doubletap swipe press rotate', (e) => {
    //   document.getElementById('info').innerHTML = e.type;
    // });
    gesturesZone.addEventListener('webkitAnimationEnd', (e) => {
      gesturesZone.className = '';
    });

    hammer.on('doubletap press swipe rotate tap', (e) => {
      switch (e.type) {
        case 'swipe':
          if (e.direction === 2) {
            gesturesZone.className = 'swipe-left';
          } else if (e.direction === 4) {
            gesturesZone.className = 'swipe-right';
          }
          break;
        case 'rotate':
          const rotation = 25;
          if (e.distance > rotation) {
            gesturesZone.className = e.type;
          }
          break;
        default:
          gesturesZone.className = e.type;
      }
    });
  }

  changeBodyColor(classColor) {
    if (!classColor.includes(document.body.className) || document.body.className === '') {
      document.body.className = classColor;
    }
  }
};

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', () => {
    const app = new Gestures();
    app.init();
  });
}
