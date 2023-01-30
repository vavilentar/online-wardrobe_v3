const categoriesLib = document.getElementById('categories-list');
const elementDetails = document.getElementById('element_fullinfo');

const selectTypeMenu = document.getElementById('select_type');
const selectSeasonMenu = document.getElementById('select_season');

function fillSelectMenu(menu, array) {
	for (let i = 0; i < array.length; i++) {
		menu.appendChild(makeOption(array[i]));
	}
};

function makeOption(name) {
	const option = document.createElement('option');
	option.innerHTML = `${name}`;

	return option;
}


function makeCategoryLink(name) {
	const element = document.createElement('a');
	element.className = 'category_link';
	element.setAttribute('href','#')
	element.innerHTML = `
	${name}
	`

	return element;
}

function fillCategoriesList() {
	for (let i = 0; i < categoriesList.length; i++) {
		categoriesLib.appendChild(makeCategoryLink(categoriesList[i]))
	}
}


fillSelectMenu(selectTypeMenu, categoriesList)
fillSelectMenu(selectSeasonMenu, seasonsList)
fillCategoriesList();