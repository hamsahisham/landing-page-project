/**
 * creating two variable to work on them and store in them the navbar__list and the section
 */
const navList = document.getElementById("navbar__list");
const sections = Array.from(document.querySelectorAll("section"));

/**
 * creating the sections with a for loop to create each section and store in it my html with a link
 */
function createListItem() {
    for (sec of sections) {
        listItem = document.createElement("li");
        listItem.innerHTML = `<li><a href="#${sec.id}" data-nav="${sec.id}" class="menu__link">${sec.dataset.nav}</a></li>`
        navList.appendChild(listItem);
    }
}

createListItem();
/**
 * styling for the active states with getBoundingCLientRect and using the for each method.
 * so there will a border around each active class
 */
window.onscroll = function () {
    document.querySelectorAll("section").forEach(function (active) {
        if (
            active.getBoundingClientRect().top >= -400 &&
            active.getBoundingClientRect().top <= 150
        ) {
            active.classList.add("your-active-class");
        } else {
            active.classList.remove("your-active-class");
        }
    });
};

/**
 * when clicking an item from the navigation menu, the link should scroll to the appropriate section. I did that by
 * adding an addEventListener to the navlist function. then creating a condition and using the getELementByID.
 */
navList.addEventListener("click", (toSec) => {
    toSec.preventDefault();
    if (toSec.target.dataset.nav) {
        document
            .getElementById(`${toSec.target.dataset.nav}`)
            .scrollIntoView({behavior: "smooth"});
        setTimeout(() => {
            location.hash = `${toSec.target.dataset.nav}`;
        }, 170);
    }
});
