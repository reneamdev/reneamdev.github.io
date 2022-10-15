// changeBackgroundAfterWhile();
changeListItems();

// window.addEventListener("load", () => {
//     setCommentsInReviews();
// });

function changeListItems() {
    let home = <HTMLElement>document.getElementById("home");
    let about = <HTMLElement>document.getElementById("about");
    let quality = <HTMLElement>document.getElementById("quality");
    let skills = <HTMLElement>document.getElementById("skills");
    let services = <HTMLElement>document.getElementById("services");
    let portfolio = <HTMLElement>document.getElementById("portfolio");
    let reviews = <HTMLElement>document.getElementById("reviews");
    let contact = <HTMLElement>document.getElementById("contact");

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
            } else if (index === 1) {
                div.classList.add("deg-90");
            } else if (index === 2) {
                div.classList.add("deg-135");
            } else if (index === 3) {
                div.classList.add("deg-180");
            } else if (index === 4) {
                div.classList.add("deg-230");
            } else if (index === 5) {
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
            } else if (li.getAttribute("id") === "item-about") {
                about.classList.add("full-screen-right");
            } else if (li.getAttribute("id") === "item-quality") {
                quality.classList.add("full-screen-left");
            } else if (li.getAttribute("id") === "item-skills") {
                skills.classList.add("full-screen-right");
            } else if (li.getAttribute("id") === "item-services") {
                setAnimationServiceSection();
                services.classList.add("full-screen-left");
            } else if (li.getAttribute("id") === "item-portfolio") {
                portfolio.classList.add("full-screen-right");
            } else if (li.getAttribute("id") === "item-reviews") {
                reviews.classList.add("full-screen-left");
            } else if (li.getAttribute("id") === "item-contact") {
                contact.classList.add("full-screen-right");
            }
        });
    });

    function readMoreHome() {
        let btnHome = <HTMLElement>document.getElementById("read-more-home");
        btnHome.addEventListener("click", () => {
            removeFullScreenFromAllSections();
            about.classList.add("full-screen-right");
        });
    }

    readMoreHome();
}

function changeBackgroundAfterWhile() {
    let bgChanging = true;

    const main = <HTMLElement>document.getElementById("main");

    const getRandomNumber = (index: number) => {
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