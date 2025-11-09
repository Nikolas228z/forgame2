let isDisplayed1 = false;

function win() {
    if (!isDisplayed1) {
        isDisplayed1 = true;

        const body = document.getElementById("changecolor");
        const reddv = document.getElementById("forgreen");
        const video = document.getElementById("forvideo");
        const mainAudio = document.getElementById("mainAudio");
        const winAudio = document.getElementById("winAudio");

        // Зміна фону
        body.style.backgroundColor = "#15921a"; // зелений фон
        reddv.style.backgroundColor = "#15921a"; // зелений блок

        // Заміна відео
        video.pause(); // спочатку зупиняємо попереднє
        video.src = "роботи/Hailuo_Video_A realistic 3D video of a huma_442818610292518917.mp4";
        video.load();
        video.playbackRate = 0.5; // якщо хочеш повільніше
        video.play();

        reddv.style.display = "none";

        // Заміна звуку
        mainAudio.pause();
        mainAudio.currentTime = 0;
        winAudio.currentTime = 0;
        winAudio.play();
    }
}

let isDisplayed2 = false;

function loseone() {
    if (!isDisplayed2) {
        isDisplayed2 = true;
        const body = document.getElementById("changecolor");
        const reddv = document.getElementById("forgreen");
        const video = document.getElementById("forvideo");
        const mainAudio = document.getElementById("mainAudio");
        const loseAudio = document.getElementById("loseAudio");

        body.style.backgroundColor = "#921525"; // червоний фон
        reddv.style.backgroundColor = "#921525"; // червоний блок
         video.src = "роботи/Hailuo_Video_A realistic 3D video of a huma_442581320437633026 (1).mp4";
         video.load();
         video.playbackRate = 0.5; // якщо хочеш повільніше
        video.play();
        reddv.style.display = "none";
         // Заміна звуку
        mainAudio.pause();
        mainAudio.currentTime = 0;
        loseAudio.currentTime = 0;
        loseAudio.play();
        setTimeout(() => {
    nextQuestion(); // функція для завантаження наступного запитання
}, 5000);
    }
}
let isDisplayed3 = false;

function losetwo() {
    if (!isDisplayed3) {
        isDisplayed3 = true;
        const body = document.getElementById("changecolor");
        const reddv = document.getElementById("forgreen");
        const video = document.getElementById("forvideo");
        const mainAudio = document.getElementById("mainAudio");
        const loseAudio = document.getElementById("loseAudio");

        body.style.backgroundColor = "#921525"; // червоний фон
        reddv.style.backgroundColor = "#921525"; // червоний блок
         video.src = "роботи/Hailuo_Video_A realistic 3D video of a huma_442581320437633026 (1).mp4";
         video.load();
         video.playbackRate = 0.5; // якщо хочеш повільніше
        video.play();

        reddv.style.display = "none";

          // Заміна звуку
        mainAudio.pause();
        mainAudio.currentTime = 0;
        loseAudio.currentTime = 0;
        loseAudio.play();
        setTimeout(() => {
    nextQuestion(); // функція для завантаження наступного запитання
}, 5000);
    }
}
let isDisplayed4 = false;

function losetree() {
    if (!isDisplayed4) {
        isDisplayed4 = true;
        const body = document.getElementById("changecolor");
        const reddv = document.getElementById("forgreen");
        const video = document.getElementById("forvideo");
        const mainAudio = document.getElementById("mainAudio");
        const loseAudio = document.getElementById("loseAudio");

        body.style.backgroundColor = "#921525"; // зелений фон
        reddv.style.backgroundColor = "#921525"; // зелений блок
         video.src = "роботи/Hailuo_Video_A realistic 3D video of a huma_442581320437633026 (1).mp4";
         video.load();
         video.playbackRate = 0.5; // якщо хочеш повільніше
        video.play();

        reddv.style.display = "none";

          // Заміна звуку
        mainAudio.pause();
        mainAudio.currentTime = 0;
        loseAudio.currentTime = 0;
        loseAudio.play();
        setTimeout(() => {
    nextQuestion(); // функція для завантаження наступного запитання
}, 5000);
    }
}
function playMedia() {
    const audio = new Audio("роботи/first question .mp3");
    const video = document.getElementById("forvideo");
  video.playbackRate = 0.5;
    audio.play();
    video.play();
     setTimeout(() => {
            video.pause();
            audio.pause();
        }, 10000);
}
function nextQuestion() {
    // показуємо нові варіанти
    const reddv = document.getElementById("forgreen");
    reddv.style.display = "block";

    // міняємо текст питання
    document.querySelector(".title").textContent = "Додаткове запитання:";
   const options = document.querySelectorAll(".white-dv button");

options[0].textContent = "A) Джойстик";
options[1].textContent = "B) Контролер";
options[2].textContent = "C) Принтер";
options[3].textContent = "D) Камера";

    // міняємо звук на наступне
    const mainAudio = document.getElementById("mainAudio");
    mainAudio.src = "роботи/addquestion .mp3";
    //Який пристрій використовується для керування роботом?
    mainAudio.load();
    mainAudio.play();
}

//#921525
//#1800ad
//#ffde59
//#cb6ce6
