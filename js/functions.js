function cerrar(){
    var instrucciones = document.getElementById("mostrar1");
    var controles = document.getElementById('mostrar2');
    var label1 = document.getElementById('label1');
    var resultados = document.getElementById('verresul');

    instrucciones.style.visibility = 'hidden';
    controles.style.visibility = 'visible'; 
    label1.style.visibility = 'visible';
    

    var altura = document.getElementById('objeto')
    altura.style.top = '250px';
    var altura1 = document.getElementById('objeto2');
    altura1.style.top = '250px';
    var altura2 = document.getElementById('nave');
    altura2.style.top = '250px';
    var altura3 = document.getElementById('nave2');
    altura3.style.top = '250px';
    var altura4 = document.getElementById('planeta').style.top = '50px';

    anime({
        targets: '#visual',
        scale: [
            {value: .70, duration: 2000,}
        ],
    })
    
}
function abrir(){
    var instrucciones = document.getElementById("mostrar1");
    var controles = document.getElementById('mostrar2');
    var resultados = document.getElementById('verresul');
    var label1 = document.getElementById('label1');
    var animacion1 = document.getElementById('visual');
    var f1 = document.getElementById('formulav1');
    var f2 = document.getElementById('formulav2');
    
    document.getElementById('mobil').style.visibility = 'hidden';
    document.getElementById('piedra').style.visibility = 'hidden';
    document.getElementById('navex').style.opacity = '0';
    document.getElementById('objetox').style.opacity = '0';

    f1.style.visibility = "hidden";
    f2.style.visibility = "hidden";
    resultados.style.visibility = "hidden";
    instrucciones.style.visibility = 'visible';
   controles.style.visibility = 'hidden'; 
    label1.style.visibility = 'hidden';
    animacion1.style.visibility = 'visible';
    play()
    var altura = document.getElementById('objeto')
    altura.style.top = '300px';
    var altura1 = document.getElementById('objeto2');
    altura1.style.top = '300px';
    var altura2 = document.getElementById('nave');
    altura2.style.top = '300px';
    var altura3 = document.getElementById('nave2');
    altura3.style.top = '300px';
    var altura4 = document.getElementById('planeta').style.top = '100px';
    anime({
        targets: '#visual',
        scale: [
            {value: 1, duration: 2000,easing: 'easeInOutSine'}
        ],
    })
}

function deshabilitar() {
var c1 = document.getElementById('vuno');
var c2 = document.getElementById('vdos');
var c3 = document.getElementById('v');

if(c1.value != "" && c2.value != ""){
    c3.disabled = true;
}
if(c2.value != "" && c3.value != ""){
    c1.disabled = true;
}
if(c3.value != "" && c1.value != ""){
    c2.disabled = true;
}
}
function deshabilitar2(){
    var c1 = document.getElementById('vuno');
    var c2 = document.getElementById('vdos');
    var c3 = document.getElementById('v');
    if(c1.value == "" && c2.value == ""){
        c3.disabled = false;
    }
    if(c2.value == "" && c3.value == ""){
        c1.disabled = false;
    }
    if(c3.value == "" && c1.value == ""){
        c2.disabled = false;
    }
}

function reinicio(){
    var resultados = document.getElementById('verresul');
    var f1 = document.getElementById('formulav1');
    var f2 = document.getElementById('formulav2');
    
    document.getElementById('mobil').style.visibility = 'hidden';
    document.getElementById('piedra').style.visibility = 'hidden';
    document.getElementById('navex').style.opacity = '0';
    document.getElementById('objetox').style.opacity = '0';


    f1.style.visibility = "hidden";
    f2.style.visibility = "hidden";
    resultados.style.visibility = "hidden";
    var c1 = document.getElementById('vuno');
    c1.disabled = false;
    var c2 = document.getElementById('vdos');
    c2.disabled = false;
    var c3 = document.getElementById('v');
    c3.disabled = false;
}