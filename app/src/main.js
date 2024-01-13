
const inputs = document.querySelectorAll('.controls input');
const controls = document.querySelector('.controls');

const handleUpdate = (e) => {
  if (e.target.matches('input')) {
    const evt = e.target;
    const suffix = evt.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${evt.name}`, evt.value + suffix);
  }
};

controls.addEventListener('change', handleUpdate);
controls.addEventListener('mousemove', handleUpdate);