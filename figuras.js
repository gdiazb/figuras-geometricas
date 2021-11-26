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
  const value = input.value
  const result = document.getElementById("result")
  result.innerHTML=perimetroCuadrado(value)
}

function calcularAreaCuadrado() {
  const input = document.getElementById("inputCuadrado")
  const value = input.value
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
  const input = document.getElementById("inputTriangulo")
  const value = input.value
  const result = document.getElementById("resultTriangulo")
  result.innerHTML=perimetroCuadrado(value)
}

function calcularAreaTriangulo() {
  const input = document.getElementById("inputTriangulo")
  const value = input.value
  const result = document.getElementById("resultTriangulo")
  result.innerHTML=areaCuadrado(value)
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
