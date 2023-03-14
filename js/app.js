const btn = document.querySelector(".card__btn-priamry");
const box = document.querySelector(".box--effect");
const textbtn = document.querySelector(".btn--text");
const checkIcon = document.querySelector(".check");

const loading = () => {

    textbtn.textContent = "";
    btn.style.cursor = "wait";
    box.classList.add("loanding");
    btn.style.backgroundColor = "rgba(73, 2, 69, 1)";
    btn.style.boxShadow = "10px 15px 25px -10px rgba(73, 2, 69, 1), -10px 15px 25px -10px rgba(73, 2, 69, .8)";

    setTimeout(() => {
        box.classList.remove("loanding");
        btn.classList.add("done");
        checkIcon.classList.add("check--active");
        btn.style.pointerEvents = "none";

    }, 4000);

};

btn.addEventListener('click', loading);