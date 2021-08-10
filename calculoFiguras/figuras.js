// const ladoCuadrado = 5;
console.group("Cuadrado"):
    // console.log("Cada lado del cuadrado mide: " + ladoCuadrado + "cm");

    function perimetroCuadrado(lado) {
        return lado * 4;
    }

// console.log("El perímetro del cuadrado mide:  " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
}

// console.log("el área del cuadrado es de: "+ areaCuadrado + "cm2");

// const ladoCuadrado = 5;
// console.log("Cada lado del cuadrado mide: " + ladoCuadrado + "cm");

// const perimetroCuadrado = ladoCuadrado * 4;
// console.log("El perímetro del cuadrado mide:  " + perimetroCuadrado + "cm");
// console.groupEnd();
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log('los lados del triangulo miden: ' +
    ladoTriangulo1 + "cm, " +
    ladoTriangulo2 + "cm, " +
    baseTriangulo + "cm"
);

// console.group("Triangulo... ")
// const alturaTriangulo=3.3;
// console.log("La altura del triangulo es de :"+alturaTriangulo);

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

// console.log("El perimetro del triangulo es de: " + perimetroTriangulo);

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}



// console.groupEnd();
// console.group("Circulo");

// const radioCirculo= 4;
// const diametroCirculo= radioCirculo*2;
// console.log("El radio del circulo es de: " + radioCirculo);
// console.log("El diametro del circulo es de: " + diametroCirculo);

const pi = Math.PI;

function diametroCirculo(radio) {
    return radio * 2;
}
//     const perimetroCirculo= diametroCirculo*PI;
// console.log("El perimetro del circulo es de "+ perimetroCirculo);
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}

function areaCirculo(radio) {
    return radio * radio * pi;
}
// console.log("El area del circulp es de: " +areaCirculo);
// console.groupEnd();