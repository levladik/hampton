const burger = document.querySelector('.burger') as HTMLElement | null;
const menu = document.querySelector('.menu') as HTMLElement | null;

function toggleMenu(): void {
  if (burger && menu) {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
  }
}

if (burger) {
  burger.addEventListener('click', toggleMenu);
}
