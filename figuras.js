/////////////////////////
// Figuras geométricas //
/////////////////////////

// Código del cuadrado
function perimetroCuadrado(lado) {
  return lado * 4
}

function areaCuadrado(lado) {
 return lado * lado
}

function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado")
  const value = parseInt(input.value, 10)
  const result = document.getElementById("result")
  result.innerHTML=perimetroCuadrado(value)
}

function calcularAreaCuadrado() {
  const input = document.getElementById("inputCuadrado")
  const value = parseInt(input.value, 10)
  const result = document.getElementById("result")
  result.innerHTML=areaCuadrado(value)
}

// Código del triangulo

function perimetroTriangulo(ladoTrianguloUno, ladoTrianguloDos, baseTrianguno) {
  return ladoTrianguloUno + ladoTrianguloDos + baseTrianguno
}

function areaTriangulo(baseTrianguno, alturaTrianguno) {
  return (baseTrianguno * alturaTrianguno)/2
}

function calcularPerimetroTriangulo() {
  const input1 = document.getElementById("inputTrianguloUno")
  const input2 = document.getElementById("inputTrianguloDos")
  const input3 = document.getElementById("inputTrianguloBase")
  const value1 = parseInt(input1.value, 10)
  const value2 = parseInt(input2.value, 10)
  const value3 = parseInt(input3.value, 10)
  const result = document.getElementById("resultTriangulo")
  result.innerHTML= perimetroTriangulo(value1, value2, value3)
  console.log(value1, value2, value3)
}

function calcularAreaTriangulo() {
  const inputBase = document.getElementById("inputTrianguloBase")
  const inputAltura = document.getElementById("inputTrianguloAltura")
  const valueBase = parseInt(inputBase.value, 10)
  const valueAltura = parseInt(inputAltura.value, 10)
  const result = document.getElementById("resultTriangulo")
  result.innerHTML=areaTriangulo(valueBase, valueAltura)
}

// Código del circulo
const PI = Math.PI;

function diametroCirculo(radioCirculo) {
  return radioCirculo * 2
}

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio)
  return diametro * PI
}

function areaCirculo(radio) {
  return (radio * radio) * PI
}
