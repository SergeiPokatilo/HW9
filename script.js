let cout = 0;
let b = 0;
function clickSubmit() {
	let name = document.getElementById('name');
	let lastName = document.getElementById('lastname');

	if (name.value.trim() !== "" && lastName.value.trim() !== "") {
		alert('Здравствуйте ' + name.value + ' ' + lastName.value);
	} else{
		alert('Введите имя и фамилию')
		}
	}