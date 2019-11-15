document.forms["myformname"]["firstname"].addEventListener('input', function () {
	
	if (form['firstname'].value == '') {
		document.getElementById("error-firstname").style.display = "inline-block"
	} else {
		document.getElementById("error-firstname").style.display = "none"
	}

})

document.getElementById("form").addEventListener('submit', function (event) {

	var errors = []

	var form = document.forms["myformname"]

	if (form['firstname'].value == '') {
		errors.push('Le champ firstname est vide')
	}

	if (form['lastname'].value == '') {
		errors.push('Le champ lastname est vide')
	}

	if (form['password'].value != form['password_re'].value) {
		errors.push('Le champ password n\'est identique à password_re')
	}

	if (isNaN(form['age'].value)) {
		errors.push("Age n'est pas un nombre")
	}

	// if (!/[^a-zA-Z]/.test(form['firstname'].value)) {
	// 	errors.push("Le champ first name contient autre chose que des charactères alphabétiques")
	// }

	if (form['email'].value.indexOf('@') === -1) {
		errors.push("L'email n'est pas valide")
	}

	var sexes = document.forms["myformname"]["sexe"]
	var isSexeSelected = false

	for (var i = 0; i < sexes.length; i++) {
		var sexe = sexes[i]

		if (sexe.checked == true) {
			isSexeSelected = true
		}

	}

	if (isSexeSelected == false) {
		errors.push("Vous devez séléctionner un sexe")
	}

	var tomes = document.forms["myformname"]["tomes[]"]
	var nbrOfTomesSelected = 0

	for (var i = 0; i < tomes.length; i++) {
		var tome = tomes[i]

		if (tome.checked == true) {
			nbrOfTomesSelected++
		}

	}

	if (nbrOfTomesSelected > 2) {
		errors.push("Vous avez séléctionner trop de tome")
	}

	if (nbrOfTomesSelected == 0) {
		errors.push("Vous devez séléctionner au moins un tome")
	}

	console.log(errors)

	if (errors.length > 0) {

		event.preventDefault();

		var errorsList = ""

		for (var i = 0; i < errors.length; i++) {
			errorsList += "<li>" + errors[i] + "</li>"
		}

		document.getElementById('errors').innerHTML = errorsList
	}

	
})