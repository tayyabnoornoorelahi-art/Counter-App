  let number = 0;
  const numberEl = document.querySelector('.number');

  function animateNumber(newValue) {
    const current = Number(numberEl.innerText);
    const diff = newValue - current;
    const steps = Math.abs(diff);
    if (steps === 0) return;

    let i = 0;
    const stepTime = 20; // ms per step
    const increment = diff / steps;

    const interval = setInterval(() => {
      i++;
      numberEl.innerText = Math.round(current + increment * i);
      if (i >= steps) clearInterval(interval);
    }, stepTime);
  }

  function increase() {
    number++;
    animateNumber(number);
  }

  function decrease() {
    if (number > 0) number--;
    animateNumber(number);
  }

  function reset() {
    number = 0;
    animateNumber(number);
  }