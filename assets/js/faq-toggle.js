document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll('.faq__item');

  items.forEach(item => {
    const question = item.querySelector('.faq__question');
    const icon = item.querySelector('.faq__icon');
    const answer = item.querySelector('.faq__answer');

    question.addEventListener('click', () => {
      answer.classList.toggle('visible');
      icon.classList.toggle('rotate');
    });
  });
});