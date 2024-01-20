datosbebidas = [
    {
        nombre: "",
        img: "",
        desc: "",
        precio: ""
    },
    {
        nombre: "",
        img: "",
        desc: "",
        precio: ""
    },
    {
        nombre: "",
        img: "",
        desc: "",
        precio: ""
    },


];

const datosplatos = [
    {
        nombre: "salchipapas, con ketcup",
        img: "img/salchipapas.png",
        desc: "Agua de 500 ml",
        precio: "1.000"
    },
    {
        nombre: "mostrito",
        img: "img/mostrito chicken.png",
        desc: "Agua de 1500 ml",
        precio: "1.000"
    },
    {
        nombre: "pollo",
        img: "img/pollo_chaufa.png",
        desc: "lomo con arroz y papas fritas",
        precio: "12.000"
    },
    {
        nombre: "arroz chaufa",
        img: "img/chaufa.png",
        desc: "arroz salteado al wok",
        precio: "10.000"
    },
]



const datoscombos = [
    {
        nombre: "salchipapas, con bebida",
        img: "img/salchipapas.png",
        desc: "Agua de 500 ml",
        precio: "1.000"
    },
    {
        nombre: "mostrito",
        img: "img/mostrito chicken.png",
        desc: "Agua de 1500 ml",
        precio: "1.000"
    },
    {
        nombre: "pollo",
        img: "img/pollo_chaufa.png",
        desc: "lomo con arroz y papas fritas",
        precio: "12.000"
    },
    {
        nombre: "arroz chaufa",
        img: "img/chaufa.png",
        desc: "arroz salteado al wok",
        precio: "10.000"
    },
]


const datosagregados = [
    {
        nombre: "salchipapas, con arroz",
        img: "img/salchipapas.png",
        desc: "Agua de 500 ml",
        precio: "1.000"
    },
    {
        nombre: "mostrito",
        img: "img/mostrito chicken.png",
        desc: "Agua de 1500 ml",
        precio: "1.000"
    },
    {
        nombre: "pollo",
        img: "img/pollo_chaufa.png",
        desc: "lomo con arroz y papas fritas",
        precio: "12.000"
    },
    {
        nombre: "arroz chaufa",
        img: "img/chaufa.png",
        desc: "arroz salteado al wok",
        precio: "10.000"
    },

]

// Función para cambiar la URL del iframe
function setURL(url) {
    document.location = 'qwenaspapas.html#' + url;
}
// tuscript.js
function createCard(container, nombre, src, desc, precio) {
    let col = document.createElement("div");
    col.className = "col-mb-6 col-12 mb-2";

    let div = document.createElement("div");
    div.className = "card h-100";

    let cardBody = document.createElement("div");
    cardBody.className = "card-body d-flex align-items-center";

    let img = document.createElement("img");
    img.src = src;
    img.className = "card-img-top mr-1 custom-card-img";
    img.alt = nombre;

    let textCol = document.createElement("div");
    textCol.className = "col-md-8 ";

    let titleElement = document.createElement("h4");
    titleElement.className = "card-title";
    titleElement.innerHTML = nombre;

    let descElement = document.createElement("p");
    descElement.className = "card-text";
    descElement.innerHTML = desc;

    let priceElement = document.createElement("p");
    priceElement.className = "card-precio";
    priceElement.innerHTML = precio;

    textCol.appendChild(titleElement);
    textCol.appendChild(descElement);
    textCol.appendChild(priceElement);

    cardBody.appendChild(img);
    cardBody.appendChild(textCol);

    div.appendChild(cardBody);
    col.appendChild(div);
    container.appendChild(col);
}



let bebidasContainer = document.getElementById('seccionbebidas');
let platosContainer = document.getElementById('platosContainer');
let combosContainer = document.getElementById('combosContainer')
let agregadosContainer = document.getElementById('agregadosContainer')

datosbebidas.forEach(({ nombre, img, desc, precio }) => createCard(seccionbebidas, nombre, img, desc, precio));
datosplatos.forEach(({ nombre, img, desc, precio }) => createCard(platosContainer, nombre, img, desc, precio));
datoscombos.forEach(({ nombre, img, desc, precio }) => createCard(combosContainer, nombre, img, desc, precio));
datosagregados.forEach(({ nombre, img, desc, precio }) => createCard(agregadosContainer, nombre, img, desc, precio));