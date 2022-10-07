"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
changeBackgroundAfterWhile();
changeListItems();
window.addEventListener("load", () => {
    setCommentsInReviews();
});
function changeListItems() {
    let home = document.getElementById("home");
    let about = document.getElementById("about");
    let quality = document.getElementById("quality");
    let skills = document.getElementById("skills");
    let services = document.getElementById("services");
    let portfolio = document.getElementById("portfolio");
    let reviews = document.getElementById("reviews");
    let contact = document.getElementById("contact");
    const icons = document.querySelectorAll("#icon-div div");
    function removeDegrees() {
        icons.forEach((el) => {
            el.className = el.className.replace(/deg-\d+/gi, "");
        });
    }
    function removeFullScreenFromAllSections() {
        document.querySelectorAll("section").forEach((sec) => {
            sec.classList.remove("full-screen-left", "full-screen-right");
        });
    }
    function setAnimationServiceSection() {
        icons.forEach((div, index) => {
            if (index === 0) {
                div.classList.add("deg-45");
            }
            else if (index === 1) {
                div.classList.add("deg-90");
            }
            else if (index === 2) {
                div.classList.add("deg-135");
            }
            else if (index === 3) {
                div.classList.add("deg-180");
            }
            else if (index === 4) {
                div.classList.add("deg-230");
            }
            else if (index === 5) {
                div.classList.add("deg-270");
            }
        });
    }
    Array.from(document.querySelectorAll(".main .list li")).forEach((li) => {
        li.addEventListener("click", () => {
            removeFullScreenFromAllSections();
            removeDegrees();
            if (li.getAttribute("id") === "item-home") {
                home.classList.add("full-screen-left");
            }
            else if (li.getAttribute("id") === "item-about") {
                about.classList.add("full-screen-right");
            }
            else if (li.getAttribute("id") === "item-quality") {
                quality.classList.add("full-screen-left");
            }
            else if (li.getAttribute("id") === "item-skills") {
                skills.classList.add("full-screen-right");
            }
            else if (li.getAttribute("id") === "item-services") {
                setAnimationServiceSection();
                services.classList.add("full-screen-left");
            }
            else if (li.getAttribute("id") === "item-portfolio") {
                portfolio.classList.add("full-screen-right");
            }
            else if (li.getAttribute("id") === "item-reviews") {
                reviews.classList.add("full-screen-left");
            }
            else if (li.getAttribute("id") === "item-contact") {
                contact.classList.add("full-screen-right");
            }
        });
    });
    function readMoreHome() {
        let btnHome = document.getElementById("read-more-home");
        btnHome.addEventListener("click", () => {
            removeFullScreenFromAllSections();
            about.classList.add("full-screen-right");
        });
    }
    readMoreHome();
}
function changeBackgroundAfterWhile() {
    let bgChanging = true;
    const main = document.getElementById("main");
    const getRandomNumber = (index) => {
        return Math.floor(Math.random() * index);
    };
    const myImages = [
        {
            imgSrc: "coding.jpg",
        },
        {
            imgSrc: "computers.jpg",
        },
        {
            imgSrc: "keyboard.jpg",
        },
        {
            imgSrc: "laptop.jpg",
        },
        {
            imgSrc: "laptop-2.jpg",
        },
        {
            imgSrc: "laptop-3.jpg",
        },
        {
            imgSrc: "screens.jpg",
        },
    ];
    if (bgChanging) {
        setInterval(() => {
            let myRandomNumber = getRandomNumber(myImages.length);
            main.style.backgroundImage = `url("../../assets/images/backgrounds/${myImages[myRandomNumber].imgSrc}")`;
        }, 5000);
    }
}
function setCommentsInReviews() {
    return __awaiter(this, void 0, void 0, function* () {
        const API_URL = "https://jsonplaceholder.typicode.com/comments";
        let txtComment = document.querySelectorAll(".review-card__text");
        const res = yield fetch(API_URL);
        const data = yield res.json();
        txtComment[0].textContent = data[0].body;
        for (let i = 1; i < txtComment.length; i++) {
            txtComment[i].textContent = `" ${data[i].body} "`;
        }
    });
}
//# sourceMappingURL=main.js.map