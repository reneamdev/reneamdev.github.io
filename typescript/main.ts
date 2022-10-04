type str = string;
type num = number;

changeListItems();

function changeListItems() {
    let home = <HTMLElement>document.getElementById("home");

    Array.from(document.querySelectorAll(".main .list li")).forEach((li) => {
        li.addEventListener("click", () => {
            document.querySelectorAll("section").forEach((sec) => {
                sec.classList.remove("full-screen");
            });

            if (li.getAttribute("id") === "item-home") {
                home.classList.add("full-screen");
            }
        });
    });
}