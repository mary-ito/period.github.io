// splash screen
window.addEventListener("load", () => {
    setTimeout(splashOut, 2000);
})

function splashOut() {
    let splash = document.querySelector(".splash-screen");
    splash.classList.add("splash-screen-out");
	
    setTimeout(() => {
	splash.className = "splash-screen-none";
    },2000, splash);
};

// definir nível da bateria

var span_bateria = document.getElementById("bateria");

function numero_aleatorio() {
    let n = Math.random() * 100;
    n = Math.round(n);

    return n;
}

function nivelBateria() {

    let bateria = document.querySelector("i.fas");
    span_bateria.textContent = numero_aleatorio();

    if (span_bateria.textContent = 0) {
        bateria.classList.add("fa-battery-empty");
    }
    else if (span_bateria.textContent > 0 & span_bateria.textContent <= 25) {
        bateria.classList.add("fa-battery-quarter");
    }
    else if (span_bateria.textContent > 25 & span_bateria.textContent <= 50) {
        bateria.classList.add("fa-battery-half");
    }
    else if (span_bateria.textContent > 50 & span_bateria.textContent <= 75) {
        bateria.classList.add("fa-battery-three-quarters");
    }
    else {
        bateria.classList.add("fa-battery-full");
    }

};

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

};

// mostrar nível da bateria
function show_bateria() {

	let slider = document.getElementById("slider");
    let bateria = document.getElementById("box-bateria");

    if (slider.checked) {
        bateria.className = "on";
    } 
    else {
        bateria.className = "off";
    }

};

// bloquear e desbloquear massagem e temperatura
function permitir() {

	let class_permissao_massagem = null;
	let class_permissao_temperatura = null;

	let slider = document.getElementById("slider");

    if (slider.checked) {
        class_permissao_massagem = "unblock";
        class_permissao_temperatura = "unblock";
        document.getElementById('massagem').disabled = false;
        document.getElementById('temperatura').disabled = false;
    } 
    else {
        class_permissao_massagem = "block";
        class_permissao_temperatura = "block";
        document.getElementById('massagem').disabled = true;
        document.getElementById('temperatura').disabled = true;
        document.getElementById('massagem').checked = false;
        document.getElementById('temperatura').checked = false;
        show_intensidades();
    }

    let permissao_massagem = document.getElementById("titulo-massagem");
    let permissao_temperatura = document.getElementById("titulo-temperatura");

    permissao_massagem.className = class_permissao_massagem;
    permissao_temperatura.className = class_permissao_temperatura;

};

// quando clicar nos switchs
massagem.onclick = () => { show_intensidades() };

temperatura.onclick = () => { show_intensidades() };

slider.onclick = () => { 
	show_bateria();
	permitir();
};

// botões de intensidades
function Enable(id) {
    if (document.getElementById(id)) {
        document.getElementById(id).removeAttribute("disabled");
        document.getElementById(id).className = "enabled";
    }
}

function Disable(id) {
    if (document.getElementById(id)) {
        document.getElementById(id).removeAttribute("enabled");
        document.getElementById(id).className = "disabled";
    }
}

// quando carregar a página
window.onload = () => {
	permitir();
	show_bateria();
	show_intensidades();
    nivelBateria();
};
