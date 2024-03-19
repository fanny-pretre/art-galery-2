/* En cours de test */
const cards = document.querySelector(".cards");
const modalCards = document.querySelector(".modal-cards");
const modal2Cards = document.querySelector(".modal-2-cards");

const worksofArt = [
    {
        artistName: "SAYPE",
        artName: "Le soleil a rendez-vous avec la lune",
        label1: "Land Art",
        label2: "Ecologie",
        backgroundImage: "assets/oeuvre/SAYPE.jpg",
        id: "1",
        alt: "Oeuvre réalisée sur une montagne représentant un enfant dessinant",
        keyWord: "SAYPE Saype saype soleil lune Le soleil a rendez-vous avec la lune Lune Soleil rendez-vous RENDEZ-VOUS LAND ART Land Art Landart landart Ecologie ECOLOGIE Ecologie",
        texte: "Dans le village suisse de Villars-sur-Ollon, Saype a utilisé le relief des montagnes comme toile pour créer deux fresques géantes représentant des enfants en train de dessiner la vision du monde qui les entoure. Ces fresques, réalisées avec de la craie et du charbon directement sur l'herbe, montrent un garçon et une fille traçant des lignes sinueuses pour représenter des montagnes, des arbres, des étoiles et la lune. L'artiste suisse-français SAYPE, créateur de ces fresques d'environ 3 000 mètres carrés, affirme que celles-ci symbolisent le rejet de l'uniformité et l'acceptation des différentes perspectives. Les fresques, visibles depuis le sommet de la montagne et les pâturages environnants, durent quelques jours selon les conditions météorologiques. Connu principalement pour sa série Beyond Walls, où il peint des mains géantes se tenant dans différentes villes du monde, SAYPE explore ainsi une nouvelle forme d'expression artistique en intégrant le paysage naturel dans ses créations.",
        backgroundColor: "rgba(56, 189, 242, 0.7)", //bleu
    },

    {
        artistName: "Duane Hanson",
        artName: "Housewife",
        label1: "Réalisme",
        label2: "Société",
        backgroundImage: "assets/oeuvre/Hanson.jpg",
        id: "2",
        alt: "Sculpture réaliste représentant une femme de classe moyenne américaine en train de fumer dans son fauteuil",
        keyWord: "Duane duane DUANE Hanson HANSON hanson Housewife House wife HOUSEWIFE housewife Réalisme réalisme REALISME realisme société Société SOCIETE",
        texte: "Housewife est une sculpture emblématique réalisée par l'artiste américain Duane Hanson en 1972. Cette œuvre saisissante capture la vie quotidienne d'une femme au foyer typique des États-Unis des années 1970. La sculpture représente une femme assise sur une chaise, vêtue d'une robe fleurie et portant un tablier, avec un air fatigué et mélancolique. Ce qui rend Housewife si remarquable, c'est le niveau de détail impressionnant et la réalité trompeuse qu'elle offre. Hanson a utilisé des matériaux tels que la résine de polyester et la fibre de verre pour créer une reproduction incroyablement réaliste de la figure humaine. Chaque pli de la peau, chaque veinure des mains, chaque ride du visage est rendu avec une précision étonnante, ce qui donne à la sculpture une présence saisissante. Au-delà de sa qualité technique, Housewife incarne également des thèmes sociaux et culturels profonds. En immortalisant une figure souvent reléguée aux marges de l'histoire de l'art, Hanson souligne l'importance de la vie quotidienne et du travail domestique dans la société américaine. La femme au foyer devient ainsi le symbole de la classe ouvrière, des luttes et des réalités de la vie quotidienne. En exposant Housewife dans des musées et des galeries d'art, Hanson défie les conventions de l'art traditionnel et invite les spectateurs à réfléchir à la valeur de toutes les formes de travail, y compris celles qui sont souvent négligées ou invisibilisées. En fin de compte, Housewife offre un commentaire poignant sur la condition humaine, la classe ouvrière et les rôles de genre dans la société contemporaine.",
        backgroundColor: "rgba(217, 50, 111, 0.7)", //rose
    },

    {
        artistName: "Lady Pink",
        artName: "Fresque à Welling Court",
        label1: "Street Art",
        label2: "Société",
        backgroundImage: "assets/oeuvre/pink.jpg",
        id: "3",
        alt: "Fresque de street art représentant une déesse amérindienne",
        keyWord: "Lady Pink Fresque Welling Court LADY PINK FRESQUE WELLING COURT Street Art STREET ART street art StreetArt STREETART streetart société Société SOCIETE ",
        texte: "La peinture murale à Welling Court est une fresque réalisée par l'artiste de rue Lady Pink. Située dans le quartier de Welling Court (Queens, New York), cette fresque est une œuvre d'art colorée et vibrante qui représente des thèmes sociaux et culturels importants. Pour cette peinture, Lady Pink utilise des couleurs vives et des motifs accrocheurs pour attirer l'attention des spectateurs. L'oeuvre de Lady Pink apporte de l'art dans l'espace public, le rendant accessible à tous ceux qui passent. Lady Pink est l'une des rares femmes à avoir émergé dans le mouvement du graffiti dans les années 1980. Elle a joué un rôle prépondérant en brisant les stéréotypes de genre dans le monde de l'art urbain.  Sa peinture murale dans le Queens est un exemple frappant de son talent artistique et de son engagement envers l'expression créative dans les espaces urbains.",
        backgroundColor: "rgba(250, 215, 49, 0.7)", //jaune
    },

    {
        artistName: "David Hockney",
        artName: "A bigger interior with blue terrace and garden",
        label1: "Pop Art",
        label2: "Paysage",
        backgroundImage: "assets/oeuvre/Hockney.jpg",
        id: "4",
        alt: "Tableau représentant une terrasse donnant sur la verdure",
        keyWord: "David Hockney DAVID HOCKNEY david hockney Interior INTERIOR interior Blue blue BLUE TERRACE Terrace terrace streetart Streetart streetArt StreetArt Street Art street art",
        texte: "A Bigger Interior with Blue Terrace and Garden est une œuvre d'art emblématique réalisée par le célèbre artiste britannique David Hockney. Cette peinture représente une scène intérieure avec une terrasse bleue et un jardin, où des éléments architecturaux et des plantes luxuriantes se mélangent dans un espace lumineux et spacieux. Ce qui rend cette œuvre spéciale, c'est l'utilisation audacieuse des couleurs et des formes par Hockney pour créer une composition vibrante et pleine de vie. Les tons bleus dominants, caractéristiques de nombreuses œuvres de Hockney, confèrent à la pièce une atmosphère rafraîchissante et contemplative. A Bigger Interior with Blue Terrace and Garden reflète l'intérêt de Hockney pour la représentation de l'espace et de la lumière, ainsi que sa fascination pour les environnements domestiques et les paysages naturels. Cette peinture invite les spectateurs à se perdre dans un monde imaginaire où la réalité et l'imagination se fondent harmonieusement. En exposant cette œuvre dans des galeries et des musées du monde entier, Hockney a contribué à élargir notre compréhension de l'art contemporain et à inspirer de nouvelles générations d'artistes. A Bigger Interior with Blue Terrace and Garden reste un témoignage durable du talent et de la vision créative de l'un des plus grands artistes de notre époque.",
        backgroundColor: "rgba(56, 189, 242, 0.7)", //bleu
    },

    {
        artistName: "Artiste 5",
        artName: "Art 5",
        label1: "PopArt",
        label2: "Space",
        backgroundImage: "assets/oeuvre/musee-art-contemporain-mac-paola-pivi.jpeg",
        id: "5",
        keyWord: "artiste Artiste 5 space Space espace Espace popart popArt PopArt Pop Art pop art",
        texte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat et erat id malesuada. Maecenas scelerisque neque arcu, ac luctus sapien hendrerit sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sed hendrerit lacus. Nullam tempor lacinia sapien auctor ullamcorper. Cras accumsan, sem et sodales vulputate, tellus mauris lobortis est, nec feugiat orci erat eu justo. Aliquam vitae accumsan purus. Morbi tortor nisl, consequat luctus purus id, congue posuere nisl. Praesent sit amet augue pellentesque, consectetur tellus ut, mollis dolor. Etiam dictum quam nec massa mattis, id porttitor urna aliquam. Mauris finibus, nisi vitae dapibus viverra, arcu neque cursus dolor, a faucibus purus ante eu mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed elementum lorem eget massa sollicitudin ultricies et id justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras vitae bibendum tortor, quis sagittis ex. Sed id justo vel libero dapibus volutpat vel ut dui. ",
        backgroundColor: "rgba(217, 50, 111, 0.7)", //rose
    },

    {
        artistName: "Artiste 6",
        artName: "Art 6",
        label1: "PopArt",
        label2: "Culture",
        backgroundImage: "assets/oeuvre/jeff-koons-ballerina-sculpture-3.jpg",
        id: "6",
        keyWord: "artiste Artiste 6 culture Culture Espace popart popArt PopArt Pop Art pop art",
        texte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat et erat id malesuada. Maecenas scelerisque neque arcu, ac luctus sapien hendrerit sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sed hendrerit lacus. Nullam tempor lacinia sapien auctor ullamcorper. Cras accumsan, sem et sodales vulputate, tellus mauris lobortis est, nec feugiat orci erat eu justo. Aliquam vitae accumsan purus. Morbi tortor nisl, consequat luctus purus id, congue posuere nisl. Praesent sit amet augue pellentesque, consectetur tellus ut, mollis dolor. Etiam dictum quam nec massa mattis, id porttitor urna aliquam. Mauris finibus, nisi vitae dapibus viverra, arcu neque cursus dolor, a faucibus purus ante eu mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed elementum lorem eget massa sollicitudin ultricies et id justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras vitae bibendum tortor, quis sagittis ex. Sed id justo vel libero dapibus volutpat vel ut dui. ",
        backgroundColor: "rgba(56, 189, 242, 0.7)", //bleu
    },

    {
        artistName: "Artiste 7",
        artName: "Art 7",
        label1: "PopArt",
        label2: "Culture",
        backgroundImage: "assets/oeuvre/Ben-Turnbull-Supermen-Eleven-yatzer-4.jpg",
        id: "7",
        keyWord: "artiste Artiste 7 culture Culture Espace popart popArt PopArt Pop Art pop art",
        texte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat et erat id malesuada. Maecenas scelerisque neque arcu, ac luctus sapien hendrerit sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sed hendrerit lacus. Nullam tempor lacinia sapien auctor ullamcorper. Cras accumsan, sem et sodales vulputate, tellus mauris lobortis est, nec feugiat orci erat eu justo. Aliquam vitae accumsan purus. Morbi tortor nisl, consequat luctus purus id, congue posuere nisl. Praesent sit amet augue pellentesque, consectetur tellus ut, mollis dolor. Etiam dictum quam nec massa mattis, id porttitor urna aliquam. Mauris finibus, nisi vitae dapibus viverra, arcu neque cursus dolor, a faucibus purus ante eu mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed elementum lorem eget massa sollicitudin ultricies et id justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras vitae bibendum tortor, quis sagittis ex. Sed id justo vel libero dapibus volutpat vel ut dui. ",
        backgroundColor: "rgba(56, 189, 242, 0.7)", //bleu
    },

    {
        artistName: "Artiste 8",
        artName: "Art 8",
        label1: "PopArt",
        label2: "Pro",
        backgroundImage: "assets/oeuvre/Antho.jpeg",
        id: "8",
        keyWord: "artiste Artiste 8 pro Pro popart popArt PopArt Pop Art pop art",
        texte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat et erat id malesuada. Maecenas scelerisque neque arcu, ac luctus sapien hendrerit sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sed hendrerit lacus. Nullam tempor lacinia sapien auctor ullamcorper. Cras accumsan, sem et sodales vulputate, tellus mauris lobortis est, nec feugiat orci erat eu justo. Aliquam vitae accumsan purus. Morbi tortor nisl, consequat luctus purus id, congue posuere nisl. Praesent sit amet augue pellentesque, consectetur tellus ut, mollis dolor. Etiam dictum quam nec massa mattis, id porttitor urna aliquam. Mauris finibus, nisi vitae dapibus viverra, arcu neque cursus dolor, a faucibus purus ante eu mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed elementum lorem eget massa sollicitudin ultricies et id justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras vitae bibendum tortor, quis sagittis ex. Sed id justo vel libero dapibus volutpat vel ut dui. ",
        backgroundColor: "rgba(217, 50, 111, 0.7)", //rose
    },
    {
        artistName: "Artiste 9",
        artName: "Art 9",
        label1: "Space",
        label2: "StreetArt",
        backgroundImage: "assets/oeuvre/Test.jpg",
        id: "9",
        keyWord: "artiste Artiste 9 space Space espace Espace streetart Streetart streetArt StreetArt Street Art street art",
        texte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat et erat id malesuada. Maecenas scelerisque neque arcu, ac luctus sapien hendrerit sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sed hendrerit lacus. Nullam tempor lacinia sapien auctor ullamcorper. Cras accumsan, sem et sodales vulputate, tellus mauris lobortis est, nec feugiat orci erat eu justo. Aliquam vitae accumsan purus. Morbi tortor nisl, consequat luctus purus id, congue posuere nisl. Praesent sit amet augue pellentesque, consectetur tellus ut, mollis dolor. Etiam dictum quam nec massa mattis, id porttitor urna aliquam. Mauris finibus, nisi vitae dapibus viverra, arcu neque cursus dolor, a faucibus purus ante eu mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed elementum lorem eget massa sollicitudin ultricies et id justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras vitae bibendum tortor, quis sagittis ex. Sed id justo vel libero dapibus volutpat vel ut dui. ",
        backgroundColor: "rgba(217, 50, 111, 0.7)", //rose
    },
];

// Creation of cards
for (let i = 0; i < worksofArt.length; i++) {
    createCard(worksofArt[i]);
}

// Function for the creation of cards
function createCard(workofArt) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute('id', workofArt.id);
    card.style.backgroundImage = `url(${workofArt.backgroundImage})`;
    card.alt = `${workofArt.alt}`;
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

    // create flex section
    const cardFlex = document.createElement("div");
    cardFlex.classList.add("card-flex");
    cardBody.appendChild(cardFlex);

    //create artist name
    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = `${workofArt.artistName}`;
    cardFlex.appendChild(cardTitle);

    //create art name
    const cardTitle2 = document.createElement("h3");
    cardTitle2.classList.add("card-title2");
    cardTitle2.innerText = `${workofArt.artName}`;
    cardFlex.appendChild(cardTitle2);

    //create label parent
    const cardLabel = document.createElement("div");
    cardLabel.classList.add("card-label");
    cardFlex.appendChild(cardLabel);

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

    card.addEventListener("click", () => openModal(workofArt, createModalCard, cardHeader));
}

// To create the first modal

function createModalCard(workofArt) {

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
    closeBtn.alt = "Home";
    modalClose.appendChild(closeBtn)

    //create Header
    const modalHeader = document.createElement("div");
    modalHeader.classList.add("modal-header");
    modalCard.appendChild(modalHeader);

    //create Image
    const modalImg = document.createElement("div");
    modalImg.style.backgroundImage = `url(${workofArt.backgroundImage})`;
    modalImg.alt = `${workofArt.alt}`;
    modalImg.classList.add("modal-img");
    modalHeader.appendChild(modalImg);

    //create body
    const modalBody = document.createElement("div");
    modalBody.classList.add("modal-body");
    modalCard.appendChild(modalBody);

    //create artist name
    const modalTitle = document.createElement("h2");
    modalTitle.classList.add("modal-title");
    modalTitle.innerText = `${workofArt.artistName}`;
    modalBody.appendChild(modalTitle);

    //create art name
    const modalTitle2 = document.createElement("h3");
    modalTitle2.classList.add("modal-title2");
    modalTitle2.innerText = `${workofArt.artName}`;
    modalBody.appendChild(modalTitle2);

    //create text
    const modalText = document.createElement("p");
    modalText.classList.add("modal-text");
    modalText.innerText = `${workofArt.texte}`;
    modalBody.appendChild(modalText);


    //create label parent
    const modalLabel = document.createElement("div");
    modalLabel.classList.add("modal-label");
    modalBody.appendChild(modalLabel);

    //create label 1
    const modalLabel1 = document.createElement("p");
    modalLabel1.classList.add("modal-label-1");
    modalLabel1.innerText = `${workofArt.label1}`;
    modalLabel.appendChild(modalLabel1);

    //create label 2
    const modalLabel2 = document.createElement("p");
    modalLabel2.classList.add("modal-label-1");
    modalLabel2.innerText = `${workofArt.label2}`;
    modalLabel.appendChild(modalLabel2);

    modalImg.addEventListener("click", () => openModal(workofArt, createModal2))
    closeBtn.addEventListener("click", () => closeModal())
}

// Create modal 2 


function createModal2(workofArt) {

    const modal2Overlay = document.createElement("div");
    modal2Overlay.classList.add("overlay");
    modal2Cards.appendChild(modal2Overlay);

    const modal2Card = document.createElement("div");
    modal2Card.classList.add("modal-card");
    modal2Overlay.appendChild(modal2Card);

    //create body

    const modal2Body = document.createElement("div");
    modal2Body.classList.add("modal-body");
    modal2Card.appendChild(modal2Body);

    // Create Button Section 
    const buttonSection = document.createElement("div");
    buttonSection.classList.add("button-section");
    modal2Body.appendChild(buttonSection);

    //create Homepage Button
    let homepageBtn = new Image();
    homepageBtn.src = 'assets/icons/home.png';
    homepageBtn.classList.add("modalBtn");
    homepageBtn.alt = "Home";
    buttonSection.appendChild(homepageBtn);

    //create Download Button
    let downloadBtn = new Image();
    downloadBtn.src = 'assets/icons/download.png';
    downloadBtn.classList.add("modalBtn");
    downloadBtn.alt = "Télécharger";
    buttonSection.appendChild(downloadBtn);

    //create Return Button
    let returnBtn = new Image();
    returnBtn.src = 'assets/icons/previous.png';
    returnBtn.classList.add("modalBtn");
    returnBtn.alt = "Précédent";
    buttonSection.appendChild(returnBtn);

    //create Image
    const modal2Img = document.createElement("img");
    modal2Img.src = workofArt.backgroundImage;
    modal2Img.alt = `${workofArt.alt}`;
    modal2Img.classList.add("modal-img-1");
    modal2Body.appendChild(modal2Img);

    homepageBtn.addEventListener("click", () => closeModal())
    returnBtn.addEventListener("click", () => openModal(workofArt, createModalCard))
    downloadBtn.addEventListener("click", function () {
        downloadImg(workofArt)
    });
}

// Clear the overlay which contains the modal
function clearModal() {
    const modalOverlay = document.querySelector('.overlay');
    if (modalOverlay) {
        modalOverlay.remove();
    }
}

// Clear previous modals (if any) and create a new one based on the callback function

function openModal(workofArt, callback, header) {
    clearModal();
    callback(workofArt);
    const overlay = document.querySelector('.overlay');
    overlay.style.display = 'block';
    overlay.style.backgroundColor = workofArt.backgroundColor;

    document.querySelector('.modal-card').classList.add('modal-open')
    document.querySelector('.sectionFooter').style.display = 'none';

    //Hide header when opening the modal
    if (header != null) {
        header.style.display = 'none';
    }
}

// Close the current modal

function closeModal() {
    clearModal();
    document.querySelector('.sectionFooter').style.display = 'block';
    const cardsHeader = document.querySelectorAll(".card-header");
    cardsHeader.forEach(item => {
        if (item.style.display === 'none') {
            item.style.display = 'flex'
        }
    });
}


// Download the picture in your web browser on click 
async function downloadImg(workofArt) {
    // Download image from URL
    const image = await fetch(workofArt.backgroundImage);
    const imageblock = await image.blob();
    const imageurl = URL.createObjectURL(imageblock);

    // Send URL to browser
    const link = document.createElement("a");
    link.href = imageurl;
    link.download = workofArt.artName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


// Barre de Recherche

// Bouton d'affichage de la Barre de Recherche


const buttonImg = document.getElementById("btnRecherche");
buttonImg.addEventListener("click", () => {
    const sectionRecherche = document.getElementById("sectionRecherche");
    const sectionFooter = document.getElementById("sectionFooter")
    if (getComputedStyle(sectionRecherche).display == "none") {
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
    if (getComputedStyle(sectionRecherche).display == "none") {
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

    for (let i = 0; i < worksofArt.length; i++) {
        if ("PopArt" === worksofArt[i].label1 || "PopArt" === worksofArt[i].label2) {
            clickImgToClosed(addImgRecherche(worksofArt[i]));
        }
    }
}

const streetArtClic = () => {
    document.querySelectorAll(".gridRechercheImgModal").forEach(e => e.remove());
    for (let i = 0; i < worksofArt.length; i++) {
        if ("StreetArt" === worksofArt[i].label1 || "StreetArt" === worksofArt[i].label2) {
            clickImgToClosed(addImgRecherche(worksofArt[i]));
        }
    }
}
const cultureClic = () => {
    document.querySelectorAll(".gridRechercheImgModal").forEach(e => e.remove());

    for (let i = 0; i < worksofArt.length; i++) {
        if ("Culture" === worksofArt[i].label1 || "Culture" === worksofArt[i].label2) {
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
    if (displayImg.length > 0) {
        for (let i = 0; i < worksofArt.length; i++) {
            // if(worksofArt[i].keyWord.includes(userSearch) || worksofArt[i].artistName.includes(userSearch) || worksofArt[i].artName.includes(userSearch)) {}  marche pas
            if (worksofArt[i].keyWord.includes(userSearch)) {
                clickImgToClosed(addImgRecherche(worksofArt[i]));
            }
        }

    }
    // sinon, j'affiche 
    else {
        const random = Math.ceil(Math.random() * worksofArt.length)
        userSearchNone.placeholder = `Je n'ai rien trouvé, tu peux essayer '${worksofArt[random].label1}' si tu veux.`;
        userSearchNone.value = "";
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
inputEnterKey.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        btnSearch.click();
    }
});