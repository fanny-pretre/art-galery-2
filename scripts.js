/* En cours de test */
const cards = document.querySelector(".cards");

const worksofArt = [
    {
        artistName: "Artiste 1",
        artName: "Art 1",
        label1: "Proute",
        label2: "PopArt",
        backgroundImage: "assets/oeuvre/free-photo-of-lunettes-de-soleil-art-creatif-festival.jpeg",
        id : "1",
        keyWord: "proute Proute popart popArt PopArt Pop Art pop art",
    },

    {
        artistName: "Artiste 2",
        artName: "Art 2",
        label1: "Test",
        label2: "PourquoiPas",
        backgroundImage: "assets/oeuvre/street-art-shipping-container-freight-highway-163811.jpeg",
        id : "2",
        keyWord: "Test test pk pas Espace",
    },

    {
        artistName: "Artiste 3",
        artName: "Art 3",
        label1: "PopArt",
        label2: "Culture",
        backgroundImage: "assets/oeuvre/pexels-photo-1194420.jpeg",
        id : "3",
        keyWord: "culture Culture popart popArt PopArt Pop Art pop art",
    },

    {
        artistName: "Artiste 4",
        artName: "Art 4",
        label1: "StreetArt",
        label2: "Culture",
        backgroundImage: "assets/oeuvre/pexels-photo-1670977.jpeg",
        id : "4",
        keyWord: "culture Culture streetart Streetart streetArt StreetArt Street Art street art",
    },

    {
        artistName: "Artiste 5",
        artName: "Art 5",
        label1: "PopArt",
        label2: "Space",
        backgroundImage: "assets/oeuvre/musee-art-contemporain-mac-paola-pivi.jpeg",
        id : "5",
        keyWord: "space Space espace Espace popart popArt PopArt Pop Art pop art",
    },

    {
        artistName: "Artiste 6",
        artName: "Art 6",
        label1: "PopArt",
        label2: "Culture",
        backgroundImage: "assets/oeuvre/jeff-koons-ballerina-sculpture-3.jpg",
        id : "6",
        keyWord: "culture Culture Espace popart popArt PopArt Pop Art pop art",
    },

    {
        artistName: "Artiste 7",
        artName: "Art 7",
        label1: "PopArt",
        label2: "Culture",
        backgroundImage: "assets/oeuvre/Ben-Turnbull-Supermen-Eleven-yatzer-4.jpg",
        id : "7",
        keyWord: "culture Culture Espace popart popArt PopArt Pop Art pop art",
    },

    {
        artistName: "Artiste 8",
        artName: "Art 8",
        label1: "PopArt",
        label2: "Proute",
        backgroundImage: "assets/oeuvre/PixArt.png",
        id : "8",
        keyWord: "proute Proute popart popArt PopArt Pop Art pop art",
    },
    {
        artistName: "Artiste 9",
        artName: "Art 9",
        label1: "Space",
        label2: "StreetArt",
        backgroundImage: "assets/oeuvre/Test.jpg",
        id : "9",
        keyWord: "space Space espace Espace streetart Streetart streetArt StreetArt Street Art street art",
        // keyWord: ["space", "Space", "espace", "Espace"],
    },
];

// Fonction de création de la carte
function createCard(workofArt) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute('id', workofArt.id);
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

    // Bouton d'affichage de la Barre de Recherche


const buttonImg = document.getElementById("btnRecherche");
buttonImg.addEventListener("click", () => {
    const sectionRecherche = document.getElementById("sectionRecherche");
    const sectionFooter = document.getElementById("sectionFooter")
    if(getComputedStyle(sectionRecherche).display == "none"){
        sectionRecherche.style.display = "block";
        sectionFooter.style.display = "none";
        
    } else {
        sectionRecherche.style.display = "none";
        sectionFooter.style.display = "block";
    }
})

const buttonImg2 = document.getElementById("btnRecherche2");
buttonImg2.addEventListener("click", () => {
    const sectionRecherche = document.getElementById("sectionRecherche");
    const sectionFooter = document.getElementById("sectionFooter")
    if(getComputedStyle(sectionRecherche).display == "none"){
        sectionRecherche.style.display = "block";
        sectionFooter.style.display = "none";
        
    } else {
        sectionRecherche.style.display = "none";
        sectionFooter.style.display = "block";
    }
})

    // Affichage des oeuvres par defauts

// --- function full utilisé de partout lol
const elementRecherche = document.querySelector(".gridRechercheImg");

function addImgRecherche(workofArt) {
    const ImgRecherche = document.createElement("a");
    ImgRecherche.classList.add("gridRechercheImgModal");
    ImgRecherche.setAttribute('href', '#' + workofArt.id);
    ImgRecherche.style.backgroundImage = `url(${workofArt.backgroundImage})`;
    elementRecherche.appendChild(ImgRecherche);
  
}
// ---

for (let i = 0; i < worksofArt.length; i++) {
    addImgRecherche(worksofArt[i]);
}  


    // Affichage des oeuvres par les Boutons rapides

const popArtClic = () => {
    document.querySelectorAll(".gridRechercheImgModal").forEach(e => e.remove());
    for(let i = 0; i < worksofArt.length; i++) {
        if("PopArt" === worksofArt[i].label1 || "PopArt" === worksofArt[i].label2) {
            addImgRecherche(worksofArt[i]);
        }
    }
}
const streetArtClic = () => {
    document.querySelectorAll(".gridRechercheImgModal").forEach(e => e.remove());
    for(let i = 0; i < worksofArt.length; i++) {
        if("StreetArt" === worksofArt[i].label1 || "StreetArt" === worksofArt[i].label2) {
            addImgRecherche(worksofArt[i]);
        }
    }
}
const cultureClic = () => {
    document.querySelectorAll(".gridRechercheImgModal").forEach(e => e.remove());
    for(let i = 0; i < worksofArt.length; i++) {
        if("Culture" === worksofArt[i].label1 || "Culture" === worksofArt[i].label2) {
            addImgRecherche(worksofArt[i]);
        }
    }
}
const allClic = () => {
    document.querySelectorAll(".gridRechercheImgModal").forEach(e => e.remove());
    for (let i = 0; i < worksofArt.length; i++) {
        addImgRecherche(worksofArt[i]);
    }  
}

    // Affichage des oeuvres par barre de recherche

const search = () => {
    const userSearch = document.getElementById("inputRecherche").value;
    const userSearchNone = document.getElementById("inputRecherche");
    document.querySelectorAll(".gridRechercheImgModal").forEach(e => e.remove());
    if(document.querySelectorAll(".gridRechercheImgModal") !== null){
        for(let i = 0; i < worksofArt.length; i++) { 
            if(worksofArt[i].keyWord.includes(userSearch) == true ) {
                addImgRecherche(worksofArt[i]);
                userSearchNone.placeholder = "stylé";
            } else if (worksofArt[i].keyWord.includes(userSearch) == false) {
                console.log("rien");
            }
        } 
    } else {
        userSearchNone.placeholder = "stylé";
        userSearchNone.value = `Je n'ai rien trouvé, tu peux essayé ' ${worksofArt[i].label1} ' si tu veux.`;
        console.log(" vraiment rien");
    }
}

    // Close barre de recherche en cliquant sur image

document.querySelectorAll(".gridRechercheImgModal").forEach(closeRechercheImg =>
    closeRechercheImg.addEventListener("click", () => {
        const sectionRecherche = document.getElementById("sectionRecherche");
        const sectionFooter = document.getElementById("sectionFooter")
        sectionRecherche.style.display = "none";
        sectionFooter.style.display = "block";
    })
)

    //Key Enter

const inputEnterKey = document.getElementById("inputRecherche");
const btnSearch = document.getElementById("btnSearch");
inputEnterKey.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        btnSearch.click();
  }
}); 