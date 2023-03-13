const clothesLib = document.getElementById('clothes-library');
const categoriesLib = document.getElementById('categories-list');
const rndElemLink = document.getElementById('random-element');
const selectTypeMenu = document.getElementById('select_type');
const selectSeasonMenu = document.getElementById('select_season');
const changeSizeBtn = document.getElementById('change-galley_size');
let changed = true;

function toggle() {
	changed = !changed;
}

changeSizeBtn.addEventListener('click', () => {
	const clothElements = document.querySelectorAll('.element');
	toggle()
	clothElements.forEach(item => {
		if (!changed) {
			changeSizeBtn.innerHTML = 'Увеличить'
			item.classList.add('element_mini')
		} else {
			changeSizeBtn.innerHTML = 'Уменьшить'
			item.classList.remove('element_mini')
		}
	})
})


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
	localStorage.setItem('id', rndNum);
};

rndElemLink.addEventListener('click', () => {
	showRndElement();
})

function makeClothCard(type, brand, season, id) {
	const element = document.createElement('div');
	element.className = 'element';
	element.innerHTML = `
	<img class="element_photo" src="./storage/photos/${id}.jpg" alt="">
	<p class="element_season">${season}</p>
	<p class="element_name">${type}</p>
	<p class="element_brand">${brand}</p>
	<button class="element_details"><a class="element_link" clothid=${id} href="./pages/item.html">Подробнее</a></button>
	`;

	return element;
}

function fillClothLibrary() {
	for (let i = 0; i < data.length; i++) {
		clothesLib.appendChild(makeClothCard(data[i].type, data[i].brand, data[i].season, i + 1))
	}

	refreshBtnActions()
}

function refreshBtnActions() {
	const elementIdLink = document.querySelectorAll('.element_link');
	elementIdLink.forEach(link => {
		link.addEventListener('click', (e) => {
			localStorage.setItem('id', `${e.target.getAttribute('clothid')-1}`)
		})
	})
}

function makeCategoryLink(name) {
	const element = document.createElement('a');
	element.className = 'category_link';
	element.setAttribute('href', '#')
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
fillClothLibrary();