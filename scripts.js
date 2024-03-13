/* En cours de test */
const cards = document.querySelector(".cards");

const worksofArt = [
    {
        artistName: "Artiste 1",
        artName: "Art 1",
        label1: "#PopArt",
        label2: "#Culture",
        backgroundImage: "assets/oeuvre/free-photo-of-lunettes-de-soleil-art-creatif-festival.jpeg",

    },

    {
        artistName: "Artiste 2",
        artName: "Art 2",
        label1: "PopArt",
        label2: "Culture",
        backgroundImage: "assets/oeuvre/street-art-shipping-container-freight-highway-163811.jpeg",
    },

    {
        artistName: "Artiste 3",
        artName: "Art 3",
        label1: "PopArt",
        label2: "Culture",
        backgroundImage: "assets/oeuvre/pexels-photo-1194420.jpeg",
    },

    {
        artistName: "Artiste 4",
        artName: "Art 4",
        label1: "PopArt",
        label2: "Culture",
        backgroundImage: "assets/oeuvre/pexels-photo-1670977.jpeg",
    },

    {
        artistName: "Artiste 5",
        artName: "Art 5",
        label1: "PopArt",
        label2: "Culture",
        backgroundImage: "assets/oeuvre/musee-art-contemporain-mac-paola-pivi.jpeg",
    },

    {
        artistName: "Artiste 6",
        artName: "Art 6",
        label1: "PopArt",
        label2: "Culture",
        backgroundImage: "assets/oeuvre/jeff-koons-ballerina-sculpture-3.jpg",
    },

    {
        artistName: "Artiste 7",
        artName: "Art 7",
        label1: "PopArt",
        label2: "Culture",
        backgroundImage: "assets/oeuvre/Ben-Turnbull-Supermen-Eleven-yatzer-4.jpg",
    },

    {
        artistName: "Artiste 8",
        artName: "Art 8",
        label1: "PopArt",
        label2: "Culture",
        backgroundImage: "assets/oeuvre/PixArt.png",
    },
    {
        artistName: "Artiste 9",
        artName: "Art 9",
        label1: "Space",
        label2: "StreetArt",
        backgroundImage: "assets/oeuvre/Test.jpg",
    },
];

// Fonction de création de la carte
function createCard(workofArt) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.backgroundImage = `url(${workofArt.backgroundImage})`;
    cards.appendChild(card);

    //create Header

    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    card.appendChild(cardHeader);

    //create image logo
    let logo = new Image();
    logo.src = 'assets/Logo.png';
    logo.classList.add("logoSection");
    logo.alt = "Logo";
    cardHeader.appendChild(logo)

    //create image clic
    let clic = new Image();
    clic.src = 'assets/icons/clic.png';
    clic.classList.add("clic");
    clic.alt = "Clic";
    cardHeader.appendChild(clic)

    //create body
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);

    //create artist name
    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = `${workofArt.artistName}`;
    cardBody.appendChild(cardTitle);

    //create art name
    const cardTitle2 = document.createElement("h3");
    cardTitle2.classList.add("card-title2");
    cardTitle2.innerText = `${workofArt.artName}`;
    cardBody.appendChild(cardTitle2);

    //create label parent
    const cardLabel = document.createElement("div");
    cardLabel.classList.add("card-label");
    cardBody.appendChild(cardLabel);

    //create label 1
    const cardLabel1 = document.createElement("p");
    cardLabel1.classList.add("card-label-1");
    cardLabel1.innerText = `${workofArt.label1}`;
    cardLabel.appendChild(cardLabel1);

    //create label 2
    const cardLabel2 = document.createElement("p");
    cardLabel2.classList.add("card-label-1");
    cardLabel2.innerText = `${workofArt.label2}`;
    cardLabel.appendChild(cardLabel2);
}

//

// Création des cartes
for (let i = 0; i < worksofArt.length; i++) {
    createCard(worksofArt[i]);
}


// Création Modal

function openModal() {
    document.querySelector('.overlay').style.display = 'block';
    document.querySelector('.modal').classList.add('modal--open')
    document.querySelector('.sectionFooter').style.display = 'none';
}

function closeModal() {
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.modal').classList.remove('modal--open')
    document.querySelector('.sectionFooter').style.display = 'block'
}



// Barre de Recherche

console.log("virtuArt");


const buttonImg = document.getElementById("btnRecherche");
const sectionRecherche = document.getElementById("sectionRecherche");
buttonImg.addEventListener("click", () => {
    if(getComputedStyle(sectionRecherche).display != "none"){
        sectionRecherche.style.display = "none";
    } else {
        sectionRecherche.style.display = "block";
    }
  })
  
  

