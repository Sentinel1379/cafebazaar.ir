function showPorgramsMenu() {
    var btn5 = document.getElementsByClassName("programs-menu")[0];
    var btn6 = document.getElementsByClassName("games-menu")[0];
    var btn7 = document.getElementsByClassName("others-menu")[0];
    if(btn5.className === "programs-menu"){
        btn5.classList += " show1";
        btn6.classList.remove("show1");
        btn7.classList.remove("show1");
    }
    else {
        btn5.classList.remove("show1");
    }
}

function showGamesMenu() {
    var btn5 = document.getElementsByClassName("programs-menu")[0];
    var btn6 = document.getElementsByClassName("games-menu")[0];
    var btn7 = document.getElementsByClassName("others-menu")[0];
    if(btn6.className === "games-menu"){
        btn6.classList += " show1";
        btn5.classList.remove("show1");
        btn7.classList.remove("show1");
    }
    else {
        btn6.classList.remove("show1");
    }
}

function showothersMenu() {
    var btn5 = document.getElementsByClassName("programs-menu")[0];
    var btn6 = document.getElementsByClassName("games-menu")[0];
    var btn7 = document.getElementsByClassName("others-menu")[0];
    if(btn7.className === "others-menu"){
        btn7.classList += " show1";
        btn6.classList.remove("show1");
        btn5.classList.remove("show1");
    }
    else {
        btn7.classList.remove("show1");
    }
}

function showOff(){
    var btn5 = document.getElementsByClassName("programs-menu")[0];
    var btn6 = document.getElementsByClassName("games-menu")[0];
    var btn7 = document.getElementsByClassName("others-menu")[0];
    var btn1 = document.getElementsByClassName("login-title")[0];
    var btn2 = document.getElementsByClassName("changeLanguage-menu")[0];
    btn5.classList.remove("show1");
    btn6.classList.remove("show1");
    btn7.classList.remove("show1");
    btn1.classList.remove("show1");
    btn2.classList.remove("show1");
}

function HoverItem1() {
    var btn1 = document.getElementsByClassName("programs-menu-items")[1];
    var btn3 = document.getElementsByClassName("fa-angle-left")[1];
    if (btn1.className === "programs-menu-items"){
        btn1.classList  += " backColor";
        btn3.classList += " opacity1";
    }
    else{
        btn1.classList.remove("backColor");
        btn3.classList.remove("opacity1");
    }
}

function HoverItem2() {
    var btn2 = document.getElementsByClassName("programs-menu-items")[2];
    var btn4 = document.getElementsByClassName("fa-angle-left")[2];
    if (btn2.className === "programs-menu-items"){
        btn2.classList  += " backColor";
        btn4.classList += " opacity1";
    }
    else{
        btn2.classList.remove("backColor");
        btn4.classList.remove("opacity1");
    }
}

function HoverItem3() {
    var btn1 = document.getElementsByClassName("games-menu-items")[0];
    var btn3 = document.getElementsByClassName("fa-angle-left")[3];
    if (btn1.className === "games-menu-items"){
        btn1.classList  += " backColor";
        btn3.classList += " opacity1";
    }
    else{
        btn1.classList.remove("backColor");
        btn3.classList.remove("opacity1");
    }
}

function HoverItem4() {
    var btn2 = document.getElementsByClassName("games-menu-items")[1];
    var btn4 = document.getElementsByClassName("fa-angle-left")[4];
    if (btn2.className === "games-menu-items"){
        btn2.classList  += " backColor";
        btn4.classList += " opacity1";
    }
    else{
        btn2.classList.remove("backColor");
        btn4.classList.remove("opacity1");
    }
}

function HoverItem5() {
    var btn2 = document.getElementsByClassName("games-menu-items")[2];
    var btn4 = document.getElementsByClassName("fa-angle-left")[5];
    if (btn2.className === "games-menu-items"){
        btn2.classList  += " backColor";
        btn4.classList += " opacity1";
    }
    else{
        btn2.classList.remove("backColor");
        btn4.classList.remove("opacity1");
    }
}

function HoverItem6() {
    var btn2 = document.getElementsByClassName("others-menu-items")[0];
    var btn4 = document.getElementsByClassName("fa-angle-left")[6];
    if (btn2.className === "others-menu-items"){
        btn2.classList  += " backColor";
        btn4.classList += " opacity1";
    }
    else{
        btn2.classList.remove("backColor");
        btn4.classList.remove("opacity1");
    }
}

function HoverItem7() {
    var btn2 = document.getElementsByClassName("others-menu-items")[1];
    var btn4 = document.getElementsByClassName("fa-angle-left")[7];
    if (btn2.className === "others-menu-items"){
        btn2.classList  += " backColor";
        btn4.classList += " opacity1";
    }
    else{
        btn2.classList.remove("backColor");
        btn4.classList.remove("opacity1");
    }
}

function HoverItem8() {
    var btn2 = document.getElementsByClassName("others-menu-items")[2];
    var btn4 = document.getElementsByClassName("fa-angle-left")[8];
    if (btn2.className === "others-menu-items"){
        btn2.classList  += " backColor";
        btn4.classList += " opacity1";
    }
    else{
        btn2.classList.remove("backColor");
        btn4.classList.remove("opacity1");
    }
}

function showLoginTitle() {
    var btn1 = document.getElementsByClassName("login-title")[0];
    if(btn1.className === "login-title"){
        btn1.classList += " show1";
    }
    else {
        btn1.classList.remove("show1");
    }
}

function shoeMenuLanguage() {
    var btn2 = document.getElementsByClassName("changeLanguage-menu")[0];
    if(btn2.className === "changeLanguage-menu"){
        btn2.classList += " show1";
    }
    else {
        btn2.classList.remove("show1");
    }
}

function showBegurMenu(){
    var btn1 = document.getElementsByClassName("bergurMenu-content")[0];
    var btn2 = document.getElementById("open-bergurMenu");
    var btn3 = document.getElementById("close-bergurMenu");
    if(btn1.className === "bergurMenu-content"){
        btn1.classList += " show2";
        btn2.classList += " open-bergurMenu";
        btn3.classList.remove("close-bergurMenu");
    }
    else {
        btn1.classList.remove("show2");
        btn2.classList.remove("open-bergurMenu");
        btn3.classList += " close-bergurMenu";
    }
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3.2,
    spaceBetween: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 5,
            spaceBetween: 1,
        },
        768: {
            slidesPerView: 6,
            spaceBetween: 1,
        },
        1024: {
            slidesPerView: 7.2,
            paceBetween: 1,
        },
        1199: {
            slidesPerView: 8.5,
            paceBetween: 2,
        },
        1439: {
            slidesPerView: 10.5,
            paceBetween: 3,
        },
    },
});

// var swiper = new Swiper('.swiper', {
//     slidesPerView: 3,
//     direction: getDirection(),
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     on: {
//         resize: function () {
//         swiper.changeDirection(getDirection());
//         },
//     },
// });

// function getDirection() {
//     var windowWidth = window.innerWidth;
//     var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

//     return direction;
// }


var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 1.4,
    spaceBetween: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 2.2,
            spaceBetween: 1,
        },
        768: {
            slidesPerView: 2.2,
            spaceBetween: 1,
        },
        1024: {
            slidesPerView: 2.2,
            paceBetween: 1,
        },
        1199: {
            slidesPerView: 2.5,
            paceBetween: 1,
        },
        1439: {
            slidesPerView: 3.2,
            paceBetween: 1,
        }
    },
});

function showExplainExtra() {
    var btn1 = document.getElementsByClassName("explain-extra-text")[0];
    var btn2 = document.getElementById("explain-extra-icon");
    var btn3 = document.getElementById("open-close");

    if (btn1.className === "explain-extra-text"){
        btn1.classList += " show-complete-text";
        btn2.classList += " explain-extra-icon-show";
        btn3.classList.replace("fa-angle-down","fa-angle-up");
    }
    else {
        btn1.classList.remove("show-complete-text");
        btn2.classList.remove("explain-extra-icon-show");
        btn3.classList.replace("fa-angle-up","fa-angle-down");
    }
}