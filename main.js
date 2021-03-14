const form = document.querySelector('form');
const email = form.querySelector('input');
const country = form.querySelector('[id="country"]');
const zipcode = form.querySelector('[id="zipcode"]');
const password = form.querySelector('[id="password"]');
const passwordConfirm = form.querySelector('[id="password-confirm"]');

email.addEventListener('change', (e) => {
	email.setCustomValidity('');
	if (email.checkValidity()) return;
	console.log('ciao')
	email.setCustomValidity('Please, enter a valid email type.');
	email.reportValidity();
});
