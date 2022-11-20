const names = ["alice", "bob", "charlie", "danielle"].map(
	(name) => name[0].toUpperCase() + name.slice(1).toLowerCase()
);
console.log(names);

const nums = [1, 2, 3, 4, 5].map((num) => num * num);
console.log(nums);

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"].map(
	(poke) => `<p>${poke}</p>`
);
console.log(pokemon);

/*********************************************
 * SHOW MENU HANDLER METHOD
 **********************************************/
const showMenu = (toggleId, navId) => {
	const toggle = document.getElementById(toggleId),
		navMenu = document.getElementById(navId);

	console.log(navMenu);
	if (toggle && navMenu) {
		toggle.addEventListener("click", () => {
			navMenu.style.display = "block";
		});
	}
};
showMenu("toggle", "nav-list");
