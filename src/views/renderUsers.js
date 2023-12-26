import dogIcon from '../assets/images/dog.png';

export const renderAllUsers = (users) => {
	const container = document.createElement('div');
	container.classList.add('container');

	const usersWrapper = document.createElement('div');
	usersWrapper.classList.add('users__wrapper');

	users.forEach((user) => {
		usersWrapper.append(renderUser(user));
	});

	container.append(usersWrapper);
	document.body.append(container);
}

const renderUser = (user) => {
	const ul = document.createElement('ul');
	ul.classList.add('user__list');

	for (const key in user) {
		const li = document.createElement('li');
		li.classList.add('user__item');
		li.innerHTML = `${key}: ${user[key]}`;
		ul.append(li);
	}

	const img = document.createElement('img');
	img.classList.add('user__img');
	img.src = dogIcon;
	ul.append(img);

	return ul;
}
