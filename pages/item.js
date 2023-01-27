const categoriesLib = document.getElementById('categories-list');
const elementDetails = document.getElementById('element_fullinfo');
const rndElemLink = document.getElementById('random-element');

const selectTypeMenu = document.getElementById('select_type');
const selectSeasonMenu = document.getElementById('select_season')

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

function showRndElement() {
	let rndNum = Math.floor(Math.random() * data.length);
	localStorage.setItem('id',rndNum);
};

rndElemLink.addEventListener('click',(e) => {
	showRndElement();
})

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

function showElementInfo(id) {
	elementDetails.innerHTML = `
	<img src="../storage/photos/${data[id].id}.jpg" alt="#">
	<div class="info">
		<h2>${data[id].type} ${data[id].brand}</h2>
		<p><b>${data[id].type}</b></p>
		<p>${data[id].brand}</p>
		<p>Сезон: <b>${data[id].season}</b></p>
		<p>Цвет: <b>${data[id].color}</b></p>
		<p>Последнее использование: <b>${data[id].useDate}</b></p>
		<button class="favorite-btn">Добавить в избранное</button>
	</div>
	`
}

showElementInfo(localStorage.getItem('id'))
fillSelectMenu(selectTypeMenu, categoriesList)
fillSelectMenu(selectSeasonMenu, seasonsList)
fillCategoriesList();