
document.querySelectorAll('.data-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.fontWeight = 'bold';
      item.style.letterSpacing = '0.5px';
    });
    item.addEventListener('mouseleave', () => {
      item.style.fontWeight = 'normal';
      item.style.letterSpacing = 'normal';
    });
  });
  