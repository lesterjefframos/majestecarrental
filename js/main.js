console.log("JS loaded");

const header = document.querySelector('.main-head-cnt, .head-wrp');

function handleScroll() {
  console.log(window.scrollY);
  header.classList.toggle('scroll', window.scrollY > 200);
}

window.addEventListener('scroll', handleScroll);
handleScroll();

const slider = document.getElementById('slider');

document.getElementById('next').addEventListener('click', () => {
    slider.scrollBy ({
        left: slider.clientWidth,
        behavior: 'smooth'
    });
});

document.getElementById('prev').addEventListener('click', () => {
    slider.scrollBy ({
        left: -slider.clientWidth,
        behavior: 'smooth'
    });
});