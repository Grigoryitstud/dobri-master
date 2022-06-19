const header__links = document.getElementsByClassName('header__link'),
    header__subtitle = document.getElementById('header__subtitle'),
    sub__link = document.getElementsByClassName('sub__link');
const greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
const blueIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
const goldIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
const redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
const coordinates = [
    Build = [
        { id: "32", icon: { icon: goldIcon }, cord: [52.396, 31.074], img: '../img/gomel.jpg', text: 'khgshfdgsd' },
        { id: "43", icon: { icon: greenIcon }, cord: [52.375, 31.009], img: '../img/gomel.jpg', text: 'khgshfdgsd' },
        { id: "2", icon: { icon: redIcon }, cord: [52.425, 30.999], img: '../img/gomel.jpg', text: 'khgshfdgsd' },
        { id: "13", icon: { icon: greenIcon }, cord: [52.385, 30.884], img: '../img/gomel.jpg', text: 'yyyyyaaaahhhhhooooo' },
        { id: "16", icon: { icon: goldIcon }, cord: [52.415, 30.947], img: '../img/gomel.jpg', text: 'yyyyyaaaahhhhhooooo' },
        { id: "19", icon: { icon: blueIcon }, cord: [52.435, 30.964], img: '../img/gomel.jpg', text: 'yyyyyaaaahhhhhooooo' }
    ],
    Car = [
        { id: "1", icon: { icon: redIcon }, cord: [52.425, 30.964], img: '../img/gomel.jpg', text: 'khgshfdgsd' },
        { id: "41", icon: { icon: greenIcon }, cord: [52.405, 31.039], img: '../img/gomel.jpg', text: 'khgshfdgsd' },
        { id: "45", icon: { icon: redIcon }, cord: [52.351, 31.057], img: '../img/gomel.jpg', text: 'khgshfdgsd' },
        { id: "18", icon: { icon: blueIcon }, cord: [52.445, 30.944], img: '../img/gomel.jpg', text: 'yyyyyaaaahhhhhooooo' },
        { id: "20", icon: { icon: goldIcon }, cord: [52.415, 30.984], img: '../img/gomel.jpg', text: 'yyyyyaaaahhhhhooooo' }
    ],
    Beauty = [
        { id: "31", icon: { icon: blueIcon }, cord: [52.428, 31.077], img: '../img/gomel.jpg', text: 'khgshfdgsd' },
        { id: "33", icon: { icon: redIcon }, cord: [52.432, 31.134], img: '../img/gomel.jpg', text: 'khgshfdgsd' },
        { id: "42", icon: { icon: greenIcon }, cord: [52.385, 31.031], img: '../img/gomel.jpg', text: 'khgshfdgsd' },
        { id: "9", icon: { icon: redIcon }, cord: [52.465, 31.034], img: '../img/gomel.jpg', text: 'khgshfdgsd' },
        { id: "11", icon: { icon: goldIcon }, cord: [52.459, 30.954], img: '../img/gomel.jpg', text: 'yoyoyo' },
        { id: "15", icon: { icon: blueIcon }, cord: [52.405, 30.924], img: '../img/gomel.jpg', text: 'yyyyyaaaahhhhhooooo' },
        { id: "17", icon: { icon: redIcon }, cord: [52.395, 30.960], img: '../img/gomel.jpg', text: 'yyyyyaaaahhhhhooooo' }
    ],
    Travel = [
        { id: "12", icon: { icon: blueIcon }, cord: [52.465, 30.969], img: '../img/gomel.jpg', text: 'hahaha' },
        { id: "14", icon: { icon: redIcon }, cord: [52.475, 30.924], img: '../img/gomel.jpg', text: 'yyyyyaaaahhhhhooooo' },
        { id: "46", icon: { icon: greenIcon }, cord: [52.348, 30.989], img: '../img/gomel.jpg', text: 'khgshfdgsd' },
        { id: "3", icon: { icon: blueIcon }, cord: [52.445, 30.974], img: '../img/gomel.jpg', text: 'khgshfdgsd' },
        { id: "6", icon: { icon: goldIcon }, cord: [52.489, 30.981], img: '../img/gomel.jpg', text: 'khgshfdgsd' },
        { id: "10", icon: { icon: redIcon }, cord: [52.481, 31.014], img: '../img/gomel.jpg', text: 'khgshfdgsd' }
    ],
    Other = [
        { id: "5", icon: { icon: goldIcon }, cord: [52.465, 30.994], img: '../img/gomel.jpg', text: 'khgshfdgsd' },
        { id: "7", icon: { icon: redIcon }, cord: [52.445, 31.014], img: '../img/gomel.jpg', text: 'khgshfdgsd' },
        { id: "4", icon: { icon: greenIcon }, cord: [52.445, 30.994], img: '../img/gomel.jpg', text: 'khgshfdgsd' },
        { id: "8", icon: { icon: blueIcon }, cord: [52.465, 31.014], img: '../img/gomel.jpg', text: 'khgshfdgsd' },
        { id: "44", icon: { icon: redIcon }, cord: [52.359, 31.019], img: '../img/gomel.jpg', text: 'khgshfdgsd' }
    ]
]
const pagesContent = [
    Build = [
        { id: "1", name: 'ОТДЕЛОЧНЫЕ' },
        { id: "2", name: 'СПЕЦИАЛЬНЫЕ' },
        { id: "3", name: 'ОБЩЕСТРОИТЕЛЬНЫЕ' },
        { id: "4", name: 'ДРУГОЕ' }
    ],
    Car = [
        { id: "1", name: 'РЕМОНТ' },
        { id: "2", name: 'ОБСЛУЖИВАНИЕ' },
        { id: "3", name: 'ЗАПЧАСТИ' },
        { id: "4", name: 'ДРУГОЕ' }
    ],
    Beauty = [
        { id: "1", name: 'МЕДИЦИНА' },
        { id: "2", name: 'КОСМЕТИЧЕСКИЕ УСЛУГИ' },
        { id: "3", name: 'СПОРТ' },
        { id: "4", name: 'ДРУГОЕ' }
    ],
    Travel = [
        { id: "1", name: 'ПРИРОДА' },
        { id: "2", name: 'ЕДА' },
        { id: "3", name: 'РАЗВЛЕЧЕНИЯ' },
        { id: "4", name: 'ДРУГОЕ' }
    ],
    Other = [
        { id: "1", name: 'ИСКУССТВО' },
        { id: "2", name: 'ТЕХНИКА' },
        { id: "3", name: 'ФИНАНСЫ' },
        { id: "4", name: 'ДРУГОЕ' }
    ]

]

const center = [52.4345, 30.9754]

const map = L.map('map').setView(center, 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: 6,
    maxZoom: 17,
    attribution: '© OpenStreetMap'
}).addTo(map);
const markerGroup = L.layerGroup().addTo(map);


const changePage = (num) => {
    if (num > 0) {
        header__subtitle.classList.add("active")
        let n = 0;
        for (page of sub__link) {
            page.innerHTML = pagesContent[num - 1][n].name;
            n++;
        }
    } else header__subtitle.classList.remove("active")

}
const changeSubClass = (el) => {
    let num = el.target.id
    for (link of sub__link) {
        link.classList.remove("active")
    }
    sub__link[num].classList.add("active")
}
for (link of sub__link) {
    link.addEventListener('click', link => changeSubClass(link))
};

const changeClass = (el) => {
    markerGroup.clearLayers()
    // markerGroup.forEach.removeLayer()
    let num = el.target.id
    for (link of header__links) {
        link.classList.remove("active")
    }
    header__links[num].classList.add("active")
    changePage(num);
    if (num > 0) {
        for (mark of coordinates[num - 1]) {
            L.marker(mark.cord, mark.icon).addTo(markerGroup).bindPopup(`<img class="header__icon" src=${mark.img}><p>${mark.id}</p>`);

        }
    }
}
for (link of header__links) {
    link.addEventListener('click', link => changeClass(link))
};


// const popup = L.popup();

// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent("You clicked the map at " + e.latlng.toString())
//         .openOn(map);
// }

// map.on('click', onMapClick);

// let mainPages = pagesContent.map(pagesContent => ``<NavLink to={pagesContent.link}
// className={navData => navData.isActive ? s.active : s.title}>
// {pagesContent.name}</NavLink>)