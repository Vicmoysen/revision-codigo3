// Tenemos una lista de productos

const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./assets/images/taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "/assets/images//taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./assets/images//bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./assets/images//bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./assets/images//zapato-rojo.jpg" }
]
/* Cambie la declaración de variables a nombres más significativos 
   Se cambió declaración var por let o const da
*/
const productsList = document.getElementById("lista-de-productos")  // getElementByName por ById
const $inputFilter = document.getElementById('input');  // querySelector por getElementById

for (let i = 0; i < productos.length; i++) {
  const cardProduct = document.createElement("div")
  cardProduct.classList.add("producto")

  const title = document.createElement("p")
  title.classList.add("titulo") // Agregue diseño a títutlo pues no se usaba en css
  title.textContent = productos[i].nombre

  const imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  cardProduct.appendChild(title)
  cardProduct.appendChild(imagen)

  productsList.appendChild(cardProduct)
}

const botonDeFiltro = document.querySelector("button");
// Se elimino función display pues no tenía uso 

botonDeFiltro.onclick = function () {
  while (productsList.firstChild) {
    productsList.removeChild(productsList.firstChild);
  }

  const texto = $inputFilter.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto);  // Se corrigio nobre de función filtrado 
  for (let i = 0; i < productosFiltrados.length; i++) {
    const div = document.createElement("div")
    div.classList.add("producto")

    const ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre

    const imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);

    div.appendChild(ti)
    div.appendChild(imagen)

    productsList.appendChild(div)
  }
}

/* Cambie la función de tipo flecha a función declara porque daba error por el hoisting
y también cambién el nombre a filtrado
*/
function filtrado(productos = [], texto) {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  