function getData() {
 var total=7;
 var myform = document.forms["parameters"];
 var v;
 var v1;
 var v2;
 var resul;

//verificamos que se mandaron parámetros
for( var i=1; i<4; i++){
if(myform["p"+1].value === null || myform["p"+1].value === "" ){
    alert("ERROR, se enviaron parametros sin completar");
    return false;
}
}
//se copian las velocidades a variables locales
v=myform["p"+6].value;
v1=myform["p"+4].value;
v2=myform["p"+5].value;
 var resultado = document.getElementById("results"); 
//se verfica que los parametros no se repitan
if(myform["p1"].value === myform["p3"].value || myform["p1"].value === myform["p2"].value || myform["p2"].value === myform["p3"].value){
alert("ERROR, parametros repetidos");
return false;
}

if (v === "ask"){
    //v
    resul = Math.abs(v1 -v2);
resultado.innerHTML = `<h3> v = <span>${resul.toFixed(5)}</span> v1= <span>${v1}</span> v2= <span>${v2}</span>  </h3>`
}

if (myform["p1"].value === "objt") {
    if(v1 === "ask"){
        //v1
        resul= (parseFloat(v2) + parseFloat(v))/(1 + (v2*v));
        resultado.innerHTML = `<h3> v = <span>${v}</span> v1= <span>${resul.toFixed(5)}</span> v2= <span>${v2}</span>  </h3>`
    } if(v2 === "ask"){
        //v2
    resul= (parseFloat(v1) + parseFloat(v))/(1 - (v1*v));
    resultado.innerHTML = `<h3> v = <span>${v}</span> v1= <span>${v1}</span> v2= <span>${resul.toFixed(5)}</span>  </h3>`
}
}
if(myform["p1"].value === "nv"){
        if(v1 === "ask"){
            //v1
            resul= (parseFloat(v2) + parseFloat(v))/(1 + (v2*v));
            resultado.innerHTML = `<h3> v = <span>${v}</span> v1= <span>${resul.toFixed(5)}</span> v2= <span>${v2}</span>  </h3>`
        } if(v2 === "ask"){
            //v2
        resul= (parseFloat(v1) + parseFloat(v))/(1 - (v1*v));
        resultado.innerHTML = `<h3> v = <span>${v}</span> v1= <span>${v1}</span> v2= <span>${resul.toFixed(5)}</span>  </h3>`
    }
} 



 return false;
}