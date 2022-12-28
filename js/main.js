window.addEventListener("scroll", () => {
	const nav = document.querySelector("nav");
	nav.classList.toggle("show", window.scrollY > 0);
});

const openMenu = (toggleId, menuId) => {
	const openBtn = document.querySelector(`#${toggleId}`);
	const navMenu = document.querySelector(`#${menuId}`);

	if (openBtn && navMenu) {
		openBtn.addEventListener("click", () => {
			navMenu.classList.toggle("show");
		});
	}
};
openMenu("open-menu-btn", "nav-list");

const navLink = Array.from(document.querySelectorAll(".nav-menu li a"));

navLink.forEach((link) => {
	link.addEventListener("click", scroll);
});

function scroll(e) {
	e.preventDefault();

	const href = this.getAttribute("href");
	document.querySelector(href).scrollIntoView({
		behaviour: " smooth",
	});
}

const navLinks = document.querySelectorAll(".nav-link");
console.log(navLinks);
function linkAction() {
	navLinks.forEach((n) => n.classList.remove("active"));
	this.classList.add("active");

	const navMenu = document.querySelector(`#nav-list`);
	navMenu.classList.remove("show");
}
navLinks.forEach((m) => m.addEventListener("click", linkAction));
