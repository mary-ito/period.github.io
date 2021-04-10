// definir nível da bateria
let span_bateria = document.getElementById("bateria");

// abrir aba de intensidades
function show_intensidades() {

	let class_onoff_massagem = null;
	let class_onoff_temperatura = null;
	let slider = document.getElementById('slider');

    if (massagem.checked) {
        class_onoff_massagem = "on";
    } 
    else {
        class_onoff_massagem = "off";
    }

    if (temperatura.checked) {
        class_onoff_temperatura = "on";
    } 
    else {
        class_onoff_temperatura = "off";
    }

    let intensidades_massagem = document.getElementById("intensidades-massagem");
    let intensidades_temperatura = document.getElementById("intensidades-temperatura");

    intensidades_massagem.className = class_onoff_massagem;
    intensidades_temperatura.className = class_onoff_temperatura;

	console.log(intensidades_massagem.className);
	console.log(intensidades_temperatura.className);

};

// mostrar nível da bateria
function show_bateria() {

	let class_onoff_bluetooth = null;

	let slider = document.getElementById("slider");

    if (slider.checked) {
        class_onoff_bluetooth = "on";
    } 
    else {
        class_onoff_bluetooth = "off";
    }

    let bateria = document.getElementById("box-bateria");

    bateria.className = class_onoff_bluetooth;

	console.log(bateria.className);

};

// bloquear e desbloquear massagem e temperatura
function permitir() {

	let class_permissao = null;

	let slider = document.getElementById("slider");

    if (slider.checked) {
        class_permissao = "unblock";
    } 
    else {
        class_permissao = "block";
    }

    let permissao = document.getElementById("titulo");

    permissao.className = class_permissao;

	console.log(permissao.className);

};

// quando clicar nos switchs
massagem.onclick = () => { show_intensidades() };
temperatura.onclick = () => { show_intensidades() };
slider.onclick = () => { 
	show_bateria();
	permitir();
};

// quando carregar a página
window.onload = () => {
	permitir();
	show_bateria();
	show_intensidades();
};