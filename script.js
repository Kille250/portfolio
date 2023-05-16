let ticking = false;

function updateView() {
  const scroll_pos = window.pageYOffset || document.documentElement.scrollTop;

  document.querySelectorAll('.parallax-container').forEach(function(element,index) {
    var speed = element.dataset.speed;
    element.style.backgroundPosition = '0 ' + -(scroll_pos * speed) + 'px';
  });

  document.querySelectorAll('.content').forEach(function(content) {
    if (isInViewport(content)) {
      content.classList.add('visible');
    } else {
      content.classList.remove('visible');
    }
  });
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}

function handleScroll() {
  if (!ticking) {
    window.requestAnimationFrame(function() {
      updateView();
      ticking = false;
    });

    ticking = true;
  }
}

window.addEventListener('wheel', handleScroll);
window.addEventListener('DOMContentLoaded', updateView);

