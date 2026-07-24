// Set background image on every slide via Reveal's native system
document.querySelectorAll('.reveal .slides > section').forEach(function(slide) {
  slide.dataset.backgroundImage = 'Fondo optaris.png';
  slide.dataset.backgroundSize = 'cover';
  slide.dataset.backgroundPosition = 'center';
});

Reveal.initialize({
  hash: true,
  transition: 'fade',
  transitionSpeed: 'default',
  backgroundTransition: 'fade',
  controls: true,
  progress: true,
  center: false,
  width: 1280,
  height: 720,
  margin: 0,
  minScale: 0.1,
  maxScale: 2.5,
  fragments: true,
  keyboard: true,
  overview: true,
  touch: true,
  navigationMode: 'linear',
  slideNumber: 'c/t',
});
