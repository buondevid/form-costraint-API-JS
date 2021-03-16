const form = document.querySelector('form');
const email = form.querySelector('input');
const country = form.querySelector('[id="country"]');
const zipcode = form.querySelector('[id="zipcode"]');
const password = form.querySelector('[id="password"]');
const passwordConfirm = form.querySelector('[id="password-confirm"]');

email.addEventListener('change', (e) => {
	email.setCustomValidity('');
	if (email.checkValidity()) return;
	if (email.validity.typeMismatch) email.setCustomValidity('Please, enter a valid email type.');
	if (email.validity.valueMissing) email.setCustomValidity('Please, fill this field.');
	email.reportValidity();
});

country.addEventListener('change', (e) => {
	country.setCustomValidity('');
	if (country.checkValidity()) return;
	if (country.validity.typeMismatch) country.setCustomValidity('Please, enter a valid country name.');
	if (country.validity.valueMissing) country.setCustomValidity('Please, fill this field.');
	country.reportValidity();
});

zipcode.addEventListener('change', (e) => {
	zipcode.setCustomValidity('');
	if (zipcode.checkValidity()) return;
	if (zipcode.validity.typeMismatch) country.setCustomValidity('Please, enter a valid zipcode number.');
	if (zipcode.validity.rangeOverflow || zipcode.validity.rangeUnderflow) zipcode.setCustomValidity('Please, enter exactly 5 numbers for a valid zipcode.');
	if (zipcode.validity.valueMissing) country.setCustomValidity('Please, fill this field.');
	zipcode.reportValidity();
});

let passValue;

password.addEventListener('change', (e) => {
	password.setCustomValidity('');
	passValue = password.value;
	if (!/[0-9]/.test(passValue)) password.setCustomValidity('The password needs to have at least 1 number');
	if (!/[a-z]/.test(passValue)) password.setCustomValidity('The password needs to have at least 1 lowercase letter');
	if (!/[A-Z]/.test(passValue)) password.setCustomValidity('The password needs to have at least 1 uppercase letter');
	if (password.validity.valueMissing) password.setCustomValidity('Please, choose a password.');
	password.reportValidity();
});

passwordConfirm.addEventListener('change', (e) => {
	const confirmValue = passwordConfirm.value;
	if(confirmValue !== passValue) passwordConfirm.setCustomValidity('This doesn\'t match with the chosen password');
	passwordConfirm.reportValidity();
});
