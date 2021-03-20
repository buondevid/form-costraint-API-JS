const form = document.querySelector('form');
const email = form.querySelector('input');
const country = form.querySelector('[id="country"]');
const zipcode = form.querySelector('[id="zipcode"]');
const password = form.querySelector('[id="password"]');
const passwordConfirm = form.querySelector('[id="password-confirm"]');
const eye1 = form.querySelector('i');
const eye2 = form.querySelectorAll('i')[1];

document.querySelectorAll('i').forEach((icon) => {
	icon.addEventListener('click', () => {
		const inputAttribute = icon.previousElementSibling.getAttribute('type');
		if (inputAttribute === 'password') icon.previousElementSibling.setAttribute('type', 'text');
		else icon.previousElementSibling.setAttribute('type', 'password');
	})
})

// apply CSS :invalid only after clicking them once
form.addEventListener('click', (e) => {
	e.target.tagName === 'INPUT' && e.target.classList.toggle('touched', true);
	if (e.target.validationMessage && e.target.validity.customError) {
		e.target.reportValidity();
	}
})

// email field

function checkEmail() {
	email.setCustomValidity('');
	if (email.checkValidity()) return;
	if (email.validity.typeMismatch) email.setCustomValidity('Please, enter a valid email type.');
	if (email.validity.valueMissing) email.setCustomValidity('Please, fill this field.');
	email.reportValidity();
}

email.addEventListener('change', (e) => {
	checkEmail();
	email.addEventListener('input', () => {
		checkEmail();
	})
});

// country field

function checkCountry() {
	country.setCustomValidity('');
	if (country.checkValidity()) return;
	if (country.validity.patternMismatch) country.setCustomValidity('Please, enter a valid country name.');
	if (country.validity.valueMissing) country.setCustomValidity('Please, fill this field.');
	country.reportValidity();
}

country.addEventListener('change', (e) => {
	checkCountry();
	country.addEventListener('input', () => {
		checkCountry();
	})
});

// zipcode field

function checkZipcode() {
	zipcode.setCustomValidity('');
	console.log('badInput', zipcode.validity.badInput);
	if (zipcode.checkValidity()) return;
	if (zipcode.validity.badInput) zipcode.setCustomValidity('Please, enter a valid zipcode number.');
	if (zipcode.validity.rangeOverflow || zipcode.validity.rangeUnderflow) zipcode.setCustomValidity('Please, enter exactly 5 numbers for a valid zipcode.');
	if (zipcode.validity.valueMissing) zipcode.setCustomValidity('Please, fill this field.');
	zipcode.reportValidity();
}

zipcode.addEventListener('change', (e) => {
	checkZipcode();
	zipcode.addEventListener('input', () => {
	checkZipcode();
	})
});

// password field

function checkPass() {
	passwordConfirm.value = '';
	password.setCustomValidity('');
	passValue = password.value;
	if (!/[0-9]/.test(passValue)) password.setCustomValidity('The password needs to have at least 1 number');
	if (!/[a-z]/.test(passValue)) password.setCustomValidity('The password needs to have at least 1 lowercase letter');
	if (!/[A-Z]/.test(passValue)) password.setCustomValidity('The password needs to have at least 1 uppercase letter');
	if (password.validity.valueMissing) password.setCustomValidity('Please, choose a password.');
	password.reportValidity();
}
let passValue;
password.addEventListener('change', (e) => {
	checkPass();
	password.addEventListener('input', () => {
	checkPass();
	})
});

// password confirm field

function checkPassConfirm() {
	passwordConfirm.setCustomValidity('');
	const confirmValue = passwordConfirm.value;
	if(confirmValue !== passValue) passwordConfirm.setCustomValidity('This doesn\'t match with the chosen password');
	passwordConfirm.reportValidity();
}

passwordConfirm.addEventListener('change', (e) => {
	checkPassConfirm();
	passwordConfirm.addEventListener('input', () => {
		checkPassConfirm();
	})
});


