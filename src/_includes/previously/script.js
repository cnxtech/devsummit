(function() {
  const imgs = document.currentScript.parentNode.querySelectorAll(
    'img[data-src]',
  );

  if (!self.IntersectionObserver) {
    imgs.forEach(img => {
      img.src = img.dataset.src;
      img.style.opacity = 1;
    });
    return;
  }

  // Image lazy loading
  const observer = new IntersectionObserver(
    entries => {
      for (const { isIntersecting, target } of entries) {
        if (!isIntersecting) continue;
        target.src = target.dataset.src;
        target.style.opacity = 1;
        observer.unobserve(target);
      }
    },
    { margin: '10%' },
  );

  for (const img of imgs) observer.observe(img);
})();
