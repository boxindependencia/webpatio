const especiales = [
    {
        nombre: "Bandeja paisa",
        img: "img/cachantun_sin_gas.jpg",
        desc: "esquisita bandeja paisa ",
        precio: "$ 10.990"
    },
    {
        nombre: "Arroz chino especial",
        img: "img/chaufa.png",
        desc: "arroz salteado al wock",
        precio: "$ 7.990"
    },
    {
        nombre: "Pabellon criollo",
        img: "#",
        desc: "pabellon",
        precio: "$ 7.990"
    },
    {
        nombre: "Arroz chaufa",
        img: "#",
        desc: "chaufa ",
        precio: "$ 6.990"
    },

    {
        nombre: "Lomo saltado",
        img: "#",
        desc: "lomo",
        precio: "$ 7.990 "
    },
    {
        nombre: "Tallarines salteados",
        img: "imglog/LOGOPILAOS.jpg",
        desc: "Tallarines salteados con especies",
        precio: "$ 6.990 "
    },

];

const combos = [
    {
        nombre: "",
        img: "#",
        desc: "",
        precio: "$ "
    },
    {
        nombre: "",
        img: "#",
        desc: "",
        precio: "$ "
    },
    {
        nombre: "",
        img: "#",
        desc: "",
        precio: "$ "
    },
]



const colaciones = [
    {
        nombre: "",
        img: "#",
        desc: "",
        precio: "$ "
    },
    {
        nombre: "",
        img: "#",
        desc: "",
        precio: "$ "
    },
    {
        nombre: "",
        img: "#",
        desc: "",
        precio: "$ "
    },
]

const sopas = [
    {
        nombre: "",
        img: "#",
        desc: "",
        precio: "$ "
    },
    {
        nombre: "",
        img: "#",
        desc: "",
        precio: "$ "
    },
    {
        nombre: "",
        img: "#",
        desc: "",
        precio: "$ "
    },

]

// Función para cambiar la URL del iframe
function setURL(url) {
    document.location = 'qcachapas.html#' + url;
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
    img.className = "card-img-top mr-3 custom-card-img";
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



let containerespeciales = document.getElementById('seccionespeciales');
let containercombos = document.getElementById('seccioncombos');
let containercolaciones = document.getElementById('seccioncolaciones')
let containersopas = document.getElementById('seccionsopas')

especiales.forEach(({ nombre, img, desc, precio }) => createCard(seccionespeciales, nombre, img, desc, precio));
combos.forEach(({ nombre, img, desc, precio }) => createCard(seccioncombos, nombre, img, desc, precio));
colaciones.forEach(({ nombre, img, desc, precio }) => createCard(seccioncolaciones, nombre, img, desc, precio));
sopas.forEach(({ nombre, img, desc, precio }) => createCard(seccionsopas, nombre, img, desc, precio));