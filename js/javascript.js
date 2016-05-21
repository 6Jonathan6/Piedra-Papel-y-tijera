function selectorpiedra(){
	document.querySelector('.user').style.backgroundImage = "url('js/img3/piedra.png')";
	var n = Math.random();
	if (n <= 0.3333333333){
		document.querySelector('.contenedor_pc').style.backgroundImage = "url('js/img3/piedra.png')";
		window.alert("Empate");
	}
	else if (n > 0.33333333333 && n <= 0.666666666) {
		document.querySelector('.contenedor_pc').style.backgroundImage = "url('js/img3/papel.jpg')";
		window.alert("Gana Papel");
	}
	else if (n > 0.666666666 && n <= 1) {
		document.querySelector('.contenedor_pc').style.backgroundImage = "url('js/img3/tijeras.jpg')";
		window.alert("Gana Piedra");	
	}
};
function selectorpapel(){
	document.querySelector('.user').style.backgroundImage = "url('js/img3/papel.jpg')";
	var n = Math.random();
	if (n <= 0.3333333333){
		document.querySelector('.contenedor_pc').style.backgroundImage = "url('js/img3/piedra.png')";
		window.alert("Gana Papel");
	}
	else if (n > 0.33333333333 && n <= 0.666666666) {
		document.querySelector('.contenedor_pc').style.backgroundImage = "url('js/img3/papel.jpg')";
		window.alert("Empate");
	}
	else if (n > 0.666666666 && n <= 1) {
		document.querySelector('.contenedor_pc').style.backgroundImage = "url('js/img3/tijeras.jpg')";
		window.alert("Gana Tijeras");	
	}
};
function selectortijeras(){
	document.querySelector('.user').style.backgroundImage = "url('js/img3/tijeras.jpg')";
	var n = Math.random() * 3;
	if (n <= 0.3333333333){
		document.querySelector('.contenedor_pc').style.backgroundImage = "url('js/img3/piedra.png')";
		window.alert("Gana Piedra");
	}
	else if (n > 0.33333333333 && n <= 0.666666666) {
		document.querySelector('.contenedor_pc').style.backgroundImage = "url('js/img3/papel.jpg')";
		window.alert("Gana tijeras");
	}
	else if (n > 0.666666666 && n <= 1) {
		document.querySelector('.contenedor_pc').style.backgroundImage = "url('js/img3/tijeras.jpg')";
		window.alert("Empate");	
	}
};