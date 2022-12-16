let getDocument = document.getElementsByClassName('dropdown-content');

export function removeListener() {
	window.removeEventListener('click', ClickEvent);
}

export function ClickEvent(event) {
	if (!getDocument[0].className.includes(event.target.className)) {
		getDocument[0].style.display = 'none';
		removeListener();
	}
}

export function dropdownBox() {
	window.addEventListener('click', ClickEvent);
	if (getDocument[0].style.display === 'block') {
		getDocument[0].style.display = 'none';
	} else {
		getDocument[0].style.display = 'block';
	}
}
