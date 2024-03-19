/* En cours de test */
const cards = document.querySelector(".cards");
const modalCards = document.querySelector(".modal-cards");
const modal2Cards = document.querySelector(".modal-2-cards");

const worksofArt = [
    {
        artistName: "Artiste 1",
        artName: "Art 1",
        label1: "Pro",
        label2: "PopArt",
        backgroundImage: "assets/oeuvre/free-photo-of-lunettes-de-soleil-art-creatif-festival.jpeg",
        id : "1",
        keyWord: "artiste Artiste 1 pro Pro popart popArt PopArt Pop Art pop art",
        texte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat et erat id malesuada. Maecenas scelerisque neque arcu, ac luctus sapien hendrerit sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sed hendrerit lacus. Nullam tempor lacinia sapien auctor ullamcorper. Cras accumsan, sem et sodales vulputate, tellus mauris lobortis est, nec feugiat orci erat eu justo. Aliquam vitae accumsan purus. Morbi tortor nisl, consequat luctus purus id, congue posuere nisl. Praesent sit amet augue pellentesque, consectetur tellus ut, mollis dolor. Etiam dictum quam nec massa mattis, id porttitor urna aliquam. Mauris finibus, nisi vitae dapibus viverra, arcu neque cursus dolor, a faucibus purus ante eu mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed elementum lorem eget massa sollicitudin ultricies et id justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras vitae bibendum tortor, quis sagittis ex. Sed id justo vel libero dapibus volutpat vel ut dui. ",
    },

    {
        artistName: "Artiste 2",
        artName: "Art 2",
        label1: "Test",
        label2: "Pro",
        backgroundImage: "assets/oeuvre/street-art-shipping-container-freight-highway-163811.jpeg",
        id : "2",
        keyWord: "artiste Artiste 2 Test test pro Pro Art art",
        texte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat et erat id malesuada. Maecenas scelerisque neque arcu, ac luctus sapien hendrerit sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sed hendrerit lacus. Nullam tempor lacinia sapien auctor ullamcorper. Cras accumsan, sem et sodales vulputate, tellus mauris lobortis est, nec feugiat orci erat eu justo. Aliquam vitae accumsan purus. Morbi tortor nisl, consequat luctus purus id, congue posuere nisl. Praesent sit amet augue pellentesque, consectetur tellus ut, mollis dolor. Etiam dictum quam nec massa mattis, id porttitor urna aliquam. Mauris finibus, nisi vitae dapibus viverra, arcu neque cursus dolor, a faucibus purus ante eu mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed elementum lorem eget massa sollicitudin ultricies et id justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras vitae bibendum tortor, quis sagittis ex. Sed id justo vel libero dapibus volutpat vel ut dui. ",
    },

    {
        artistName: "Artiste 3",
        artName: "Art 3",
        label1: "PopArt",
        label2: "Culture",
        backgroundImage: "assets/oeuvre/pexels-photo-1194420.jpeg",
        id : "3",
        keyWord: "artiste Artiste 3 culture Culture popart popArt PopArt Pop Art pop art",
        texte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat et erat id malesuada. Maecenas scelerisque neque arcu, ac luctus sapien hendrerit sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sed hendrerit lacus. Nullam tempor lacinia sapien auctor ullamcorper. Cras accumsan, sem et sodales vulputate, tellus mauris lobortis est, nec feugiat orci erat eu justo. Aliquam vitae accumsan purus. Morbi tortor nisl, consequat luctus purus id, congue posuere nisl. Praesent sit amet augue pellentesque, consectetur tellus ut, mollis dolor. Etiam dictum quam nec massa mattis, id porttitor urna aliquam. Mauris finibus, nisi vitae dapibus viverra, arcu neque cursus dolor, a faucibus purus ante eu mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed elementum lorem eget massa sollicitudin ultricies et id justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras vitae bibendum tortor, quis sagittis ex. Sed id justo vel libero dapibus volutpat vel ut dui. ",
    },

    {
        artistName: "Artiste 4",
        artName: "Art 4",
        label1: "StreetArt",
        label2: "Culture",
        backgroundImage: "assets/oeuvre/pexels-photo-1194420.jpeg",
        id : "4",
        keyWord: "artiste Artiste 4 culture Culture streetart Streetart streetArt StreetArt Street Art street art",
        texte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat et erat id malesuada. Maecenas scelerisque neque arcu, ac luctus sapien hendrerit sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sed hendrerit lacus. Nullam tempor lacinia sapien auctor ullamcorper. Cras accumsan, sem et sodales vulputate, tellus mauris lobortis est, nec feugiat orci erat eu justo. Aliquam vitae accumsan purus. Morbi tortor nisl, consequat luctus purus id, congue posuere nisl. Praesent sit amet augue pellentesque, consectetur tellus ut, mollis dolor. Etiam dictum quam nec massa mattis, id porttitor urna aliquam. Mauris finibus, nisi vitae dapibus viverra, arcu neque cursus dolor, a faucibus purus ante eu mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed elementum lorem eget massa sollicitudin ultricies et id justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras vitae bibendum tortor, quis sagittis ex. Sed id justo vel libero dapibus volutpat vel ut dui. ",
    },

    {
        artistName: "Artiste 5",
        artName: "Art 5",
        label1: "PopArt",
        label2: "Space",
        backgroundImage: "assets/oeuvre/musee-art-contemporain-mac-paola-pivi.jpeg",
        id : "5",
        keyWord: "artiste Artiste 5 space Space espace Espace popart popArt PopArt Pop Art pop art",
        texte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat et erat id malesuada. Maecenas scelerisque neque arcu, ac luctus sapien hendrerit sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sed hendrerit lacus. Nullam tempor lacinia sapien auctor ullamcorper. Cras accumsan, sem et sodales vulputate, tellus mauris lobortis est, nec feugiat orci erat eu justo. Aliquam vitae accumsan purus. Morbi tortor nisl, consequat luctus purus id, congue posuere nisl. Praesent sit amet augue pellentesque, consectetur tellus ut, mollis dolor. Etiam dictum quam nec massa mattis, id porttitor urna aliquam. Mauris finibus, nisi vitae dapibus viverra, arcu neque cursus dolor, a faucibus purus ante eu mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed elementum lorem eget massa sollicitudin ultricies et id justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras vitae bibendum tortor, quis sagittis ex. Sed id justo vel libero dapibus volutpat vel ut dui. ",
    },

    {
        artistName: "Artiste 6",
        artName: "Art 6",
        label1: "PopArt",
        label2: "Culture",
        backgroundImage: "assets/oeuvre/jeff-koons-ballerina-sculpture-3.jpg",
        id : "6",
        keyWord: "artiste Artiste 6 culture Culture Espace popart popArt PopArt Pop Art pop art",
        texte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat et erat id malesuada. Maecenas scelerisque neque arcu, ac luctus sapien hendrerit sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sed hendrerit lacus. Nullam tempor lacinia sapien auctor ullamcorper. Cras accumsan, sem et sodales vulputate, tellus mauris lobortis est, nec feugiat orci erat eu justo. Aliquam vitae accumsan purus. Morbi tortor nisl, consequat luctus purus id, congue posuere nisl. Praesent sit amet augue pellentesque, consectetur tellus ut, mollis dolor. Etiam dictum quam nec massa mattis, id porttitor urna aliquam. Mauris finibus, nisi vitae dapibus viverra, arcu neque cursus dolor, a faucibus purus ante eu mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed elementum lorem eget massa sollicitudin ultricies et id justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras vitae bibendum tortor, quis sagittis ex. Sed id justo vel libero dapibus volutpat vel ut dui. ",
    },

    {
        artistName: "Artiste 7",
        artName: "Art 7",
        label1: "PopArt",
        label2: "Culture",
        backgroundImage: "assets/oeuvre/Ben-Turnbull-Supermen-Eleven-yatzer-4.jpg",
        id : "7",
        keyWord: "artiste Artiste 7 culture Culture Espace popart popArt PopArt Pop Art pop art",
        texte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat et erat id malesuada. Maecenas scelerisque neque arcu, ac luctus sapien hendrerit sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sed hendrerit lacus. Nullam tempor lacinia sapien auctor ullamcorper. Cras accumsan, sem et sodales vulputate, tellus mauris lobortis est, nec feugiat orci erat eu justo. Aliquam vitae accumsan purus. Morbi tortor nisl, consequat luctus purus id, congue posuere nisl. Praesent sit amet augue pellentesque, consectetur tellus ut, mollis dolor. Etiam dictum quam nec massa mattis, id porttitor urna aliquam. Mauris finibus, nisi vitae dapibus viverra, arcu neque cursus dolor, a faucibus purus ante eu mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed elementum lorem eget massa sollicitudin ultricies et id justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras vitae bibendum tortor, quis sagittis ex. Sed id justo vel libero dapibus volutpat vel ut dui. ",
    },

    {
        artistName: "Artiste 8",
        artName: "Art 8",
        label1: "PopArt",
        label2: "Pro",
        backgroundImage: "assets/oeuvre/PixArt.png",
        id : "8",
        keyWord: "artiste Artiste 8 pro Pro popart popArt PopArt Pop Art pop art",
        texte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat et erat id malesuada. Maecenas scelerisque neque arcu, ac luctus sapien hendrerit sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sed hendrerit lacus. Nullam tempor lacinia sapien auctor ullamcorper. Cras accumsan, sem et sodales vulputate, tellus mauris lobortis est, nec feugiat orci erat eu justo. Aliquam vitae accumsan purus. Morbi tortor nisl, consequat luctus purus id, congue posuere nisl. Praesent sit amet augue pellentesque, consectetur tellus ut, mollis dolor. Etiam dictum quam nec massa mattis, id porttitor urna aliquam. Mauris finibus, nisi vitae dapibus viverra, arcu neque cursus dolor, a faucibus purus ante eu mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed elementum lorem eget massa sollicitudin ultricies et id justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras vitae bibendum tortor, quis sagittis ex. Sed id justo vel libero dapibus volutpat vel ut dui. ",
    },
    {
        artistName: "Artiste 9",
        artName: "Art 9",
        label1: "Space",
        label2: "StreetArt",
        backgroundImage: "assets/oeuvre/Test.jpg",
        id : "9",
        keyWord: "artiste Artiste 9 space Space espace Espace streetart Streetart streetArt StreetArt Street Art street art",
        texte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat et erat id malesuada. Maecenas scelerisque neque arcu, ac luctus sapien hendrerit sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sed hendrerit lacus. Nullam tempor lacinia sapien auctor ullamcorper. Cras accumsan, sem et sodales vulputate, tellus mauris lobortis est, nec feugiat orci erat eu justo. Aliquam vitae accumsan purus. Morbi tortor nisl, consequat luctus purus id, congue posuere nisl. Praesent sit amet augue pellentesque, consectetur tellus ut, mollis dolor. Etiam dictum quam nec massa mattis, id porttitor urna aliquam. Mauris finibus, nisi vitae dapibus viverra, arcu neque cursus dolor, a faucibus purus ante eu mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed elementum lorem eget massa sollicitudin ultricies et id justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras vitae bibendum tortor, quis sagittis ex. Sed id justo vel libero dapibus volutpat vel ut dui. ",
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

    card.addEventListener("click", () => openModal(workofArt))
}

//

// Création des cartes
for (let i = 0; i < worksofArt.length; i++) {
    createCard(worksofArt[i]);
}


// Data modal
function createModalCard(workModal) {

    const modalOverlay = document.createElement("div");
    modalOverlay.classList.add("overlay");
    modalCards.appendChild(modalOverlay);

    const modalCard = document.createElement("div");
    modalCard.classList.add("modal-card");
    modalOverlay.appendChild(modalCard);

    //create Modal Close
    const modalClose = document.createElement("div");
    modalClose.classList.add("modal-close");
    modalCard.appendChild(modalClose);

    //create Closebtn
    let closeBtn = new Image();
    closeBtn.src = 'assets/icons/fermer.png';
    closeBtn.classList.add("close");
    closeBtn.alt = "Croix";
    modalClose.appendChild(closeBtn)

    //create Header
    const modalHeader = document.createElement("div");
    modalHeader.classList.add("modal-header");
    modalCard.appendChild(modalHeader);

    //create Image
    const modalImg = document.createElement("div");
    modalImg.style.backgroundImage = `url(${workModal.backgroundImage})`;
    modalImg.classList.add("modal-img");
    modalHeader.appendChild(modalImg);

    //create artist name
    const modalTitle = document.createElement("h2");
    modalTitle.classList.add("modal-title");
    modalTitle.innerText = `${workModal.artistName}`;
    modalHeader.appendChild(modalTitle);

    //create art name
    const modalTitle2 = document.createElement("h3");
    modalTitle2.classList.add("modal-title2");
    modalTitle2.innerText = `${workModal.artName}`;
    modalHeader.appendChild(modalTitle2);


    //create body
    const modalBody = document.createElement("div");
    modalBody.classList.add("modal-body");
    modalCard.appendChild(modalBody);

    //create text
    const modalText = document.createElement("p");
    modalText.classList.add("modal-text");
    modalText.innerText = `${workModal.texte}`;
    modalBody.appendChild(modalText);


    //create label parent
    const modalLabel = document.createElement("div");
    modalLabel.classList.add("modal-label");
    modalBody.appendChild(modalLabel);

    //create label 1
    const modalLabel1 = document.createElement("p");
    modalLabel1.classList.add("modal-label-1");
    modalLabel1.innerText = `${workModal.label1}`;
    modalLabel.appendChild(modalLabel1);

    //create label 2
    const modalLabel2 = document.createElement("p");
    modalLabel2.classList.add("modal-label-1");
    modalLabel2.innerText = `${workModal.label2}`;
    modalLabel.appendChild(modalLabel2);

    closeBtn.addEventListener("click", () => closeModal())
    modalImg.addEventListener("click", () => openModal2(workModal))
}

// Pour clear la modal  
function clearModal() {
    const modalOverlay = document.querySelector('.overlay');
    if (modalOverlay) {
        modalOverlay.remove();
    }
}

// Création Modal

function openModal(work) {
    clearModal();
    createModalCard(work);
    document.querySelector('.overlay').style.display = 'block';
    document.querySelector('.modal-card').classList.add('modal-open')
    document.querySelector('.sectionFooter').style.display = 'none';
}

function closeModal() {
    clearModal();
    document.querySelector('.sectionFooter').style.display = 'block';
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
    return ImgRecherche;
}
// ---

for (let i = 0; i < worksofArt.length; i++) {
    clickImgToClosed(addImgRecherche(worksofArt[i]));
}  


    // Affichage des oeuvres par les Boutons rapides

const popArtClic = () => {
    document.querySelectorAll(".gridRechercheImgModal").forEach(e => e.remove());
    for(let i = 0; i < worksofArt.length; i++) {
        if("PopArt" === worksofArt[i].label1 || "PopArt" === worksofArt[i].label2) {
            clickImgToClosed(addImgRecherche(worksofArt[i]));
        }
    }
}

const streetArtClic = () => {
    document.querySelectorAll(".gridRechercheImgModal").forEach(e => e.remove());
    for(let i = 0; i < worksofArt.length; i++) {
        if("StreetArt" === worksofArt[i].label1 || "StreetArt" === worksofArt[i].label2) {
            clickImgToClosed(addImgRecherche(worksofArt[i]));
        }
    }
}
const cultureClic = () => {
    document.querySelectorAll(".gridRechercheImgModal").forEach(e => e.remove());
    for(let i = 0; i < worksofArt.length; i++) {
        if("Culture" === worksofArt[i].label1 || "Culture" === worksofArt[i].label2) {
            clickImgToClosed(addImgRecherche(worksofArt[i]));
        }
    }
}
const allClic = () => {
    document.querySelectorAll(".gridRechercheImgModal").forEach(e => e.remove());
    for (let i = 0; i < worksofArt.length; i++) {
            clickImgToClosed(addImgRecherche(worksofArt[i]));
    }  
}

    // Affichage des oeuvres par barre de recherche

const search = () => {
    const userSearch = document.getElementById("inputRecherche").value;
    const userSearchNone = document.getElementById("inputRecherche");
    const allImage = document.querySelectorAll(".gridRechercheImgModal");

    // Ici, je checher à savoir si le mot clé saisi par l'utilisateur 
    // est connu dans mon array `worksofArt`.
    const displayImg = worksofArt.filter(img => img.keyWord.includes(userSearch))

    // permet de supprimer les images 
    allImage.forEach(e => e.remove());

    // Si displayImg est supérieur à 0 donc j'ai des oeuvres
    if(displayImg.length > 0){
        for(let i = 0; i < worksofArt.length; i++) { 
            // if(worksofArt[i].keyWord.includes(userSearch) || worksofArt[i].artistName.includes(userSearch) || worksofArt[i].artName.includes(userSearch)) {}  marche pas
            if(worksofArt[i].keyWord.includes(userSearch)) {
                clickImgToClosed(addImgRecherche(worksofArt[i]));
                userSearchNone.placeholder = "stylé";
            }
        }
    } 
    // sinon, j'affiche 
    else {
        const random = Math.ceil(Math.random() * worksofArt.length)
        userSearchNone.placeholder = `Je n'ai rien trouvé, tu peux essayé '${worksofArt[random].label1}' si tu veux.`;
        userSearchNone.value = "";
        console.log("vraiment rien");
    } 
}

function clickImgToClosed(img) {
    img.addEventListener("click", () => {
        const sectionRecherche = document.getElementById("sectionRecherche");
         const sectionFooter = document.getElementById("sectionFooter")
         sectionRecherche.style.display = "none";
         sectionFooter.style.display = "block";
    })
}


    //Key Enter

const inputEnterKey = document.getElementById("inputRecherche");
const btnSearch = document.getElementById("btnSearch");
inputEnterKey.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        btnSearch.click();
  }
}); 

// Pour la modal 2 
// Data modal 2


function createModal2(work2Modal) {

    const modal2Overlay = document.createElement("div");
    modal2Overlay.classList.add("overlay");
    modal2Cards.appendChild(modal2Overlay);

    const modal2Card = document.createElement("div");
    modal2Card.classList.add("modal-card");
    modal2Overlay.appendChild(modal2Card);

    const modal2Close = document.createElement("div");
    modal2Close.classList.add("modal-close");
    modal2Card.appendChild(modal2Close);

    //create Closebtn
    let closeBtn = new Image();
    closeBtn.src = 'assets/icons/fermer.png';
    closeBtn.classList.add("close");
    closeBtn.alt = "Croix";
    modal2Close.appendChild(closeBtn)

    //create body

    const modal2Body = document.createElement("div");
    modal2Body.classList.add("modal-body");
    modal2Card.appendChild(modal2Body);

    //create Image
    const modal2Img = document.createElement("img");
    modal2Img.src = work2Modal.backgroundImage;
    modal2Img.classList.add("modal-img-1");
    modal2Body.appendChild(modal2Img);

    //create Closebtn
    const closeBtn2 = document.createElement("button")
    closeBtn2.innerText = "Retourner à l'accueil";
    closeBtn2.classList.add("homepageBtn");
    modal2Body.appendChild(closeBtn2)

    closeBtn.addEventListener("click", () => closeModal())
    closeBtn2.addEventListener("click", () => closeModal())
}

function openModal2(work2Modal) {
    clearModal();
    createModal2(work2Modal);
    document.querySelector('.overlay').style.display = 'block';
    document.querySelector('.modal-card').classList.add('modal-open')
    document.querySelector('.sectionFooter').style.display = 'none';
}
