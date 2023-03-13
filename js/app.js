const btn = document.querySelector(".card__btn-priamry");

const loading = (e) => {
    // const circle = document.createElement('span')
    // circle.classList.add('active');

btn.classList.toggle('btn--circle')
    // if (!btn.classList.contains('charging--btn')) {
    //     e.target.appendChild(circle)
    //     btn.classList.add('charging--btn')
    // } else if (circle.classList.contains('active')) {
    //     btn.classList.remove('charging--btn')
    //     circle.classList.remove('active')
    // }

};
btn.addEventListener('click', loading);
