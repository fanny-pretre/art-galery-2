const cards = document.querySelector(".cards");
const modalCards = document.querySelector(".modal-cards");
const modal2Cards = document.querySelector(".modal-2-cards");

const worksofArt = [
    {
        artistName: "SAYPE",
        artName: "Le soleil a rendez-vous avec la lune",
        copyright: "© SAYPE Photo: Keystone/Laurent Gillieron",
        label1: "Land Art",
        label2: "Ecologie",
        backgroundImage: "assets/oeuvre/SAYPE.webp",
        id: "1",
        alt: "Oeuvre réalisée sur une montagne représentant un enfant dessinant",
        keyWord: "SAYPE Saype saype soleil lune Le soleil a rendez-vous avec la lune Lune Soleil rendez-vous RENDEZ-VOUS LAND ART Land Art Landart landart Ecologie ECOLOGIE Ecologie",
        texte: "Dans le village suisse de Villars-sur-Ollon, Saype a utilisé le relief des montagnes comme toile pour créer deux fresques géantes représentant des enfants en train de dessiner la vision du monde qui les entoure. Ces fresques, réalisées avec de la craie et du charbon directement sur l'herbe, montrent un garçon et une fille traçant des lignes sinueuses pour représenter des montagnes, des arbres, des étoiles et la lune. L'artiste suisse-français SAYPE, créateur de ces fresques d'environ 3 000 mètres carrés, affirme que celles-ci symbolisent le rejet de l'uniformité et l'acceptation des différentes perspectives. Les fresques, visibles depuis le sommet de la montagne et les pâturages environnants, durent quelques jours selon les conditions météorologiques. Connu principalement pour sa série Beyond Walls, où il peint des mains géantes se tenant dans différentes villes du monde, SAYPE explore ainsi une nouvelle forme d'expression artistique en intégrant le paysage naturel dans ses créations.",
        backgroundColor: "rgba(56, 189, 242, 0.7)", //bleu
    },

    {
        artistName: "Duane Hanson",
        artName: "Housewife",
        copyright: "© Duane Hanson Photo: Regan Vercruysse",
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
        copyright: "© Lady Pink Photo: Eddie Crimmins",
        label1: "Street Art",
        label2: "Société",
        backgroundImage: "assets/oeuvre/Pink.jpg",
        id: "3",
        alt: "Fresque de street art représentant une déesse amérindienne",
        keyWord: "Lady Pink Fresque Welling Court LADY PINK FRESQUE WELLING COURT Street Art STREET ART street art StreetArt STREETART streetart société Société SOCIETE ",
        texte: "La peinture murale à Welling Court est une fresque réalisée par l'artiste de rue Lady Pink. Située dans le quartier de Welling Court (Queens, New York), cette fresque est une œuvre d'art colorée et vibrante qui représente des thèmes sociaux et culturels importants. Pour cette peinture, Lady Pink utilise des couleurs vives et des motifs accrocheurs pour attirer l'attention des spectateurs. L'oeuvre de Lady Pink apporte de l'art dans l'espace public, le rendant accessible à tous ceux qui passent. Lady Pink est l'une des rares femmes à avoir émergé dans le mouvement du graffiti dans les années 1980. Elle a joué un rôle prépondérant en brisant les stéréotypes de genre dans le monde de l'art urbain.  Sa peinture murale dans le Queens est un exemple frappant de son talent artistique et de son engagement envers l'expression créative dans les espaces urbains.",
        backgroundColor: "rgba(250, 215, 49, 0.7)", //jaune
    },

    {
        artistName: "David Hockney",
        artName: "A bigger interior with blue terrace and garden",
        copyright: "© David Hockney Photo: Sokleine",
        label1: "Pop Art",
        label2: "Paysage",
        backgroundImage: "assets/oeuvre/Hockney.jpg",
        id: "4",
        alt: "Tableau représentant une terrasse donnant sur la verdure",
        keyWord: "David Hockney DAVID HOCKNEY david hockney Interior INTERIOR interior Blue blue BLUE TERRACE Terrace terrace popart Popart popArt PopArt Pop Art pop art",
        texte: "A Bigger Interior with Blue Terrace and Garden est une œuvre d'art emblématique réalisée par le célèbre artiste britannique David Hockney. Cette peinture représente une scène intérieure avec une terrasse bleue et un jardin, où des éléments architecturaux et des plantes luxuriantes se mélangent dans un espace lumineux et spacieux. Ce qui rend cette œuvre spéciale, c'est l'utilisation audacieuse des couleurs et des formes par Hockney pour créer une composition vibrante et pleine de vie. Les tons bleus dominants, caractéristiques de nombreuses œuvres de Hockney, confèrent à la pièce une atmosphère rafraîchissante et contemplative. A Bigger Interior with Blue Terrace and Garden reflète l'intérêt de Hockney pour la représentation de l'espace et de la lumière, ainsi que sa fascination pour les environnements domestiques et les paysages naturels. Cette peinture invite les spectateurs à se perdre dans un monde imaginaire où la réalité et l'imagination se fondent harmonieusement. En exposant cette œuvre dans des galeries et des musées du monde entier, Hockney a contribué à élargir notre compréhension de l'art contemporain et à inspirer de nouvelles générations d'artistes. A Bigger Interior with Blue Terrace and Garden reste un témoignage durable du talent et de la vision créative de l'un des plus grands artistes de notre époque.",
        backgroundColor: "rgba(56, 189, 242, 0.7)", //bleu
    },

    {
        artistName: "Steve Johnson",
        artName: "Peinture d’art abstraite",
        copyright: "© Steve Johnson",
        label1: "Tableau",
        label2: "Peinture",
        backgroundImage: "assets/oeuvre/Johnson.jpg",
        id: "5",
        alt: "Peinture d’un tableau à la gouache",
        keyWord: "Steve Johnson steve jonhson Art art Peinture peinture gouache Gouache gouache Gouache abstraite abstrait Abstrait Abstraite Multicolore multicolore Color color Tableau tableau",
        texte: "Cette œuvre captivante s'étale sur la toile dans une explosion de couleurs vives et audacieuses. À première vue, elle semble être un kaléidoscope de formes et de textures, créant un effet visuel dynamique et envoûtant. Des nuances vibrantes de rouge, jaune, bleu, vert et violet se mélangent harmonieusement, créant des contrastes saisissants et des transitions subtiles entre les tons. Les coups de pinceau expressifs et les mélanges de couleurs fluides ajoutent une dimension de mouvement et de vie à la composition. Dans cette œuvre abstraite, les formes semblent se fondre les unes dans les autres, créant une sensation d'unité et d'harmonie malgré la diversité des éléments. Des lignes sinueuses et des contours organiques se superposent à des angles géométriques, offrant une profondeur visuelle et une variété de perspectives. Les textures variées, allant des surfaces lisses aux zones plus texturées, invitent le spectateur à explorer chaque recoin de la toile avec curiosité. L'énergie brute et l'expression libre qui émanent de cette peinture évoquent une gamme d'émotions et d'interprétations différentes pour chaque observateur. Certaines parties de l'œuvre semblent évoquer des paysages abstraits, tandis que d'autres suggèrent des formes organiques ou des motifs géométriques. C'est cette ambiguïté qui rend cette œuvre si captivante et ouverte à l'interprétation. Dans l'ensemble, cette peinture abstraite multicolore à la guache est une célébration de la créativité et de la spontanéité artistique. Elle invite le spectateur à plonger dans un monde de couleurs et de formes où l'imagination est libre de vagabonder et où chaque regard révèle de nouvelles nuances et de nouveaux détails à découvrir.",
        backgroundColor: "rgba(56, 189, 242, 0.7)", //bleu
    },


    {
        artistName: "Francesco Ungaro",
        artName: "Sculpture Numérique De L'Homme",
        copyright: "© Francesco Ungaro",
        label1: "Sculpture",
        label2: "Art Moderne",
        backgroundImage: "assets/oeuvre/Ungaro.jpg",
        id: "6",
        alt: "Sculpture d'un homme vert allongé dans les airs avec les pieds au mur",
        keyWord: "Francesco Ungaro francesco ungaro Sculpture Numérique homme sculpture numérique numerique Homme Art Moderne art moderne vert Vert Green green",
        texte: "Cette sculpture intrigante présente un homme figé dans une posture allongée, mais avec une torsion inhabituelle : il semble être couché le long d'un mur vertical plutôt que sur une surface horizontale. Réalisée dans un matériau vert émeraude, la sculpture se fond harmonieusement dans son environnement, créant un contraste saisissant avec le mur qui la soutient. L'homme, dont les traits sont finement détaillés, semble à la fois calme et contemplatif dans sa pose. Ses membres sont étendus avec grâce le long du mur, évoquant une sensation de détente et de sérénité. Son visage, tourné vers l'horizon, semble exprimer une profonde réflexion ou une méditation paisible. La sculpture suscite une gamme d'interprétations et d'émotions chez les spectateurs. Certains peuvent voir dans cette représentation une métaphore de l'homme en harmonie avec son environnement, tandis que d'autres pourraient interpréter la position verticale de l'homme comme symbolisant une lutte contre la gravité ou les contraintes de la vie quotidienne. Quelle que soit l'interprétation, cette sculpture invite à la contemplation et à la réflexion sur la condition humaine, le rapport entre l'homme et son environnement, ainsi que sur les notions d'équilibre et de tranquillité dans un monde en perpétuel mouvement.",
        backgroundColor: "rgba(56, 189, 242, 0.7)", //bleu
    },

    {
        artistName: "Inconnu",
        artName: "Tatouage Calavera",
        copyright: "© Pop Sugar",
        label1: "Tatoo",
        label2: "Culture",
        backgroundImage: "assets/oeuvre/Inconnu.jpg",
        id: "7",
        alt: "Tatouage Calavera",
        keyWord: "Inconnu Tatouage Calavera calavera tatouage Tatoo  tatoo Culture culture Mexique mexique Mexico mexico Crane crane Crâne crâne Fête Morts fête morts Mort mort Fete fete dia muerte Muerte Dia couleur Couleur couleurs Couleurs",
        texte: "Ce tatouage célèbre la tradition mexicaine du Dia de los Muertos, ou Jour des Morts, à travers la représentation d'un crâne richement décoré. Le crâne est orné de motifs complexes et de symboles traditionnels, tels que des fleurs, des motifs géométriques et des motifs floraux. Chaque détail de cette œuvre témoigne de l'importance de la fête du Dia de los Muertos dans la culture mexicaine, où les familles honorent leurs proches décédés en célébrant leur mémoire avec joie et festivités. Le crâne, souvent considéré comme un symbole de la mortalité, est transformé en une représentation de la vie et de la célébration dans cette œuvre, reflétant la croyance mexicaine en la continuité de l'âme après la mort. Les couleurs vives et les motifs exubérants de cette œuvre incarnent l'esprit festif et joyeux du Dia de los Muertos, invitant le spectateur à s'immerger dans une célébration de la vie et de la mémoire de ceux qui ne sont plus parmi nous. C'est un hommage vibrant et coloré à une tradition culturelle profondément ancrée dans l'identité mexicaine, qui célèbre la vie même au milieu de la mort.",
        backgroundColor: "rgba(250, 215, 49, 0.7)", //jaune
    },

    {
        artistName: "Rafael Mendoza",
        artName: "Hendrix et sa guitare",
        copyright: "© Rafael Mendoza",
        label1: "Culture",
        label2: "Street Art",
        backgroundImage: "assets/oeuvre/Mendoza.jpg",
        id: "8",
        alt: "Peinture de Jimi Hendrix sur un mur",
        keyWord: "Musique musique Music music Hendrix hendrix Peinture Murale Guitare Homme peinture murale guitare Street Art STREET ART street art StreetArt STREETART streetart Culture culture jimy Jimi jimi Jimy",
        texte: "Cette peinture murale captivante représente le légendaire musicien Jimi Hendrix. Sur un mur urbain, cette fresque rend hommage à l'iconique guitariste de rock, connu pour sa virtuosité et son influence révolutionnaire dans l'histoire de la musique. Hendrix est représenté dans une pose emblématique, sa guitare en feu et son visage éclairé par une passion brûlante. Les couleurs vives et les contrastes saisissants captent l'essence électrique de la musique de Hendrix, tandis que des éléments symboliques tels que des motifs psychédéliques et des éclairs ajoutent une dimension de mystère et d'aventure à l'œuvre. Le style expressif et audacieux du street art donne vie à la figure emblématique de Hendrix, capturant son énergie contagieuse et son aura de rébellion artistique. Cette peinture murale de Jimi Hendrix transcende les limites de l'art urbain pour devenir un symbole de liberté d'expression et d'inspiration pour les générations futures. Elle rappelle l'impact durable de Hendrix sur la musique et la culture, tout en invitant les passants à se plonger dans l'univers envoûtant de son héritage musical. Cette œuvre street art incarne ainsi l'esprit rebelle et novateur de Hendrix, tout en célébrant son héritage indélébile dans l'histoire de la musique.",
        backgroundColor: "rgba(217, 50, 111, 0.7)", //rose
    },
    {
        artistName: "Vassily Kandinsky",
        artName: "Black Lines",
        copyright: "© Vassily Kandinsky",
        label1: "Couleur",
        label2: "Art Moderne",
        backgroundImage: "assets/oeuvre/Kandinsky.jpg",
        id: "9",
        alt: "Peinture Black Lines de Vassily Kandinsky",
        keyWord: "Kandinsky abstrait art toile moderne",
        texte: "Black Lines est une œuvre abstraite de Vassily Kandinsky qui date de 1920. Cette peinture vibrante et expressive se caractérise par l'utilisation audacieuse de lignes noires qui traversent la toile, créant un réseau complexe de formes et d'espaces. Les lignes, tantôt droites et géométriques, tantôt courbes et sinueuses, se chevauchent et s'entrelacent, formant un paysage visuel dynamique et intrigant. Au milieu de ce réseau de lignes, des éclats de couleur émergent, apportant une vitalité et une profondeur supplémentaires à l'œuvre. Black Lines est un exemple captivant du style caractéristique de Kandinsky, où la forme et la couleur sont utilisées pour communiquer des émotions et des concepts abstraits, invitant le spectateur à une exploration visuelle et intellectuelle fascinante.",
        backgroundColor: "rgba(56, 189, 242, 0.7)", //bleu
    },
    {
        artistName: "Takashi Murakami",
        artName: "Le futur sera plein de sourires",
        copyright: "© Takashi Murakami",
        label1: "Culture",
        label2: "Contemporain",
        backgroundImage: "assets/oeuvre/Murakami.jpg",
        id: "10",
        alt: "Le futur sera plein de sourires de Murakami",
        keyWord: "Murakami murakami takashi Takashi Japon Japan japan japon pop culture contemporain moderne société ",
        texte: "Le futur sera plein de sourires est une œuvre de l’artiste japonais Takashi Murakami, célèbre pour son style distinctif mêlant l’art traditionnel japonais et la culture pop contemporaine. Cette pièce emblématique, réalisée en 2014, présente un paysage fantastique et coloré peuplé de personnages et de motifs caractéristiques de l'œuvre de Murakami. A travers son œuvre, Murakami explore les thèmes de la joie, de l’innocence et de l’imaginaire tout en interrogeant la place de l’art contemporain dans la société moderne. Cette œuvre captivante incarne le génie créatif de Murakami et son talent pour fusionner l’esthétique traditionnelle avec la culture pop, créant ainsi une expérience visuelle et émotionnelle puissante et inoubliable.",
        backgroundColor: "rgba(250, 215, 49, 0.7)", //jaune
    },

    {
        artistName: "Yayoi Kusama",
        artName: "Dots Obsession",
        copyright: "© Yayoi Kusama",
        label1: "Culture",
        label2: "Contemporain",
        backgroundImage: "assets/oeuvre/Kusama.jpg",
        id: "11",
        alt: "Exposition de Dots Obsession par Yayoi Kusama ",
        keyWord: "Dot Obsession dot obsession yayoi Yayoi Kusama kusama Japon japon Japan japan contemporain point points ",
        texte: "Dot Obsession est une série d'œuvres emblématique de l’artiste japonaise Yayoi Kusama. Dans cette série, Kusama explore son obsession pour les points en les utilisant de manière répétitive et obsessionnelle dans ses installations artistiques. Les points, qui peuvent varier en taille, en couleur et en densité recouvrent souvent des surfaces entières créant ainsi une expérience immersive pour le spectateur. Ces œuvres sont souvent représentées dans des environnements tridimensionnels où les points se propagent sur les murs, les sols, les meubles et parfois même sur les visiteurs eux-mêmes. Cette prolifération de points crée une sensation de mouvement et d’infini tout en évoquant des thèmes de répétition, d’accumulation et d' illusion. Cette série est caractéristique du style de l’artiste qui mêle l’art pop, le minimalisme et le surréalisme pour créer des expériences artistiques uniques et captivantes. En explorant la répétition infinie des points, Kusama invite le spectateur à réfléchir sur la nature de l’obsession, de l’identité et de l’infini tout en offrant une expérience visuelle et sensorielle inoubliable.",
        backgroundColor: "rgba(56, 189, 242, 0.7)", //bleu
    },
    {
        artistName: "Banksy",
        artName: "Girl with a Balloon",
        copyright: "© Banksy",
        label1: "Street Art",
        label2: "Graffiti",
        backgroundImage: "assets/oeuvre/Banksy.jpg",
        id: "12",
        alt: "Graffiti de Girl with a Balloon par l'artiste Banksy",
        keyWord: "Banksy banksy fille ballon street streetart street-art pop graffiti ",
        texte: "Girl with a Balloon est une des œuvres les plus célèbres de l’artiste urbain Banksy. Cette peinture murale représente une silhouette de fille enfantine, se tenant debout avec son bras tendu vers le haut, tenant un ballon en forme de cœur. L’oeuvre est simple et puissante, avec une palette de couleur limitée et des contours nets, le contraste entre la simplicité de la silhouette noire et la forme détaillée du ballon rouge vif crée une image saisissante qui attire l’attention du spectateur. La signification de l'œuvre est sujette à interprétation. Certains voient en celle ci une représentation de l’innocence de l’enfance, symbolisée par la fille tenant le ballon en forme de coeur tandis que d’autres interprétations suggèrent des thèmes plus profonds comme la perte, l’espoir, ou la fugacité de la vie.",
        backgroundColor: "rgba(217, 50, 111, 0.7)", //rose
    },
    {
        artistName: "Thomas Dambo",
        artName: "Mother Moon",
        copyright: "© Thomas Dambo  Photo: Mia Steiness",
        label1: "Ecologie",
        label2: "Sculpture",
        backgroundImage: "assets/oeuvre/Dambo.jpg",
        id: "13",
        alt: "Sculpture représentant une femme enceinte dans une forêt au Danemark",
        keyWord: "artiste Artiste 1 pro Pro popart popArt PopArt Pop Art pop art",
        texte: "L'artiste danois Thomas Dambo est reconnu pour ses créations spectaculaires et interactives et Mother Moon ne fait pas exception. Cette œuvre captivante est une sculpture géante en bois située dans la forêt de Copenhague. Mesurant plusieurs mètres de haut, elle représente une femme allongée qui semble se fondre harmonieusement dans son environnement naturel. Dambo utilise des matériaux recyclés pour donner vie à ses visions, tout en invitant les spectateurs à explorer et à interagir avec ses œuvres. Mother Moon incarne ainsi la fusion entre l'art, la nature et l'imagination, offrant une expérience sensorielle unique à tous ceux qui s'y aventurent.",
        backgroundColor: "rgba(56, 189, 242, 0.7)", //bleu
    },
    {
        artistName: "Niki de Saint Phalle",
        artName: "L'Arbre-serpents",
        copyright: "© Niki de Saint Phalle",
        label1: "Sculpture",
        label2: "Art Moderne",
        backgroundImage: "assets/oeuvre/SaintPhalle.jpg",
        id: "14",
        alt: "Sculpture représentant des serpents autour d'un arbre",
        keyWord: "Niki Saint Phalle NIKI SAINT PHALLE niki saint phalle Arbre-serpents ARBRE SERPENTS arbre serpents serpent SERPENTS Sculpture SCULPTURE sculpture ART art Art MODERNE moderne Moderne",
        texte: "Niki de Saint Phalle, artiste franco-américaine, a créé une série emblématique de sculptures serpentines. Ces œuvres monumentales, colorées et ludiques, incarnent la force féminine et la rébellion contre les normes établies. Utilisant des miroirs, des céramiques et des matériaux recyclés, elle donne vie à des créatures sinueuses et envoûtantes. Ces serpents, symboles de transformation et de mystère, reflètent son exploration de la psyché féminine et son plaidoyer pour la liberté d'expression. À travers ces œuvres, Niki de Saint Phalle invite le spectateur à embrasser sa propre authenticité et à célébrer la diversité.",
        backgroundColor: "rgba(250, 215, 49, 0.7)", //jaune
    },
    {
        artistName: "Pierre Chanteau",
        artName: "Les yeux céramiques",
        copyright: "© Pierre Chanteau Photo: Pierre-Yvon Boisnard",
        label1: "Land Art",
        label2: "Culture",
        backgroundImage: "assets/oeuvre/Chantreau.jpg",
        id: "15",
        alt: "Oeil réalisé en mosaïque",
        keyWord: "Pierre Chanteau pierre chanteau PIERRE CHANTEAU yeux YEUX Yeux CERAMIQUES céramiques Céramiques Land land LAND Art ART art culture CULTURE Culture",
        texte: "Pierre Chanteau, artiste français contemporain, façonne des pièces céramiques singulières qui illustrent son génie créatif. Ces œuvres, véritables fenêtres sur l'âme, captent l'essence humaine à travers des regards saisissants et intenses. Utilisant la céramique comme médium, Chanteau sculpte avec précision chaque iris, chaque pupille, révélant une profondeur émotionnelle et une sensibilité palpable. À travers ses yeux, l'artiste nous invite à contempler notre propre humanité, explorant la complexité des sentiments et des expériences. Les Yeux Céramiques de Pierre Chanteau incarnent ainsi une exploration fascinante de la condition humaine, captivant et inspirant le spectateur.",
        backgroundColor: "rgba(56, 189, 242, 0.7)", //bleu
    },
    {
        artistName: "Anthony Gorski",
        artName: "Java ?",
        copyright: "© Anthony Gorski",
        label1: "Culture",
        label2: "Art Moderne",
        backgroundImage: "assets/oeuvre/Antho.jpeg",
        id: "16",
        alt: "Image de style pixar du meilleur formateur, Anthony Gorski",
        keyWord: "Anthony Gorski ANTHONY GORSKI Java JAVA java anthony gorski Culture Art culture moderne art Moderne MODERNE CULTURE",
        texte: "'Des formes d'art, y'en a une palanquée ma gatée!' C'est en ces termes inhabituels au chaleureux parfum du sud, qu'Anthony Gorski, artiste inclassable et développeur JAVA à ses heures perdues, exposa sa vision à Wild Art Magazine durant la Windows fan expo de mars 2024. 'Je vais encore digresser mais l'idée c'était de pas être dans les codes tout en rendant le code accessible à tous, t'y as compris!' poursuivit-il. En effet, en contemplant l'oeuvre de ce perfectionniste adepte d'un minimalisme capillaire à l'entretien irréprochable, impossible de ne pas remarquer la dimension bienveillante de ce regard 'align-item : center' et de ce sourire énigmatique qui semble nous dire 'La semaine pro on fait du React, t'inquiètes le 100!'. Vous l'aurez compris, sous ce design à première vue passe-partout se cache toute la complexité d'un artiste qui se plait décidemment à jongler avec les niveaux de lecture. Un talent prometteur dont l'éclosion ne saurait tarder!",
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

    cardBody.addEventListener("click", () => openModal(workofArt, createModalCard, cardHeader));
    clic.addEventListener("click", () => openModal(workofArt, createModalCard, cardHeader));
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

    //create body
    const modalBody = document.createElement("div");
    modalBody.classList.add("modal-body");
    modalCard.appendChild(modalBody);

    //create image Section
    const modalSection = document.createElement("div");
    modalSection.classList.add("modal-section");
    modalBody.appendChild(modalSection);

    //create Image
    const modalImg = document.createElement("img");
    modalImg.src = workofArt.backgroundImage;
    modalImg.alt = `${workofArt.alt}`;
    modalImg.classList.add("modal-img");
    modalSection.appendChild(modalImg);

    //create copyright 
    const modalCopyright = document.createElement("p");
    modalCopyright.classList.add("modal-copyright");
    modalCopyright.innerText = `${workofArt.copyright}`;
    modalBody.appendChild(modalCopyright);

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

    //create copyright 
    const modal2Copyright = document.createElement("p");
    modal2Copyright.classList.add("modal-copyright");
    modal2Copyright.innerText = `${workofArt.copyright}`;
    modal2Body.appendChild(modal2Copyright);

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
        if ("Pop Art" === worksofArt[i].label1 || "Pop Art" === worksofArt[i].label2) {
            clickImgToClosed(addImgRecherche(worksofArt[i]));
        }
    }
}

const streetArtClic = () => {
    document.querySelectorAll(".gridRechercheImgModal").forEach(e => e.remove());
    for (let i = 0; i < worksofArt.length; i++) {
        if ("Street Art" === worksofArt[i].label1 || "Street Art" === worksofArt[i].label2) {
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

//Clic sur Image -> Retour Accueil

const scrollTop = document.querySelectorAll(".logoSection");
for (let i = 0; i < scrollTop.length; i++) {
    scrollTop[i].addEventListener("click", function () {
        window.location.href = "#myAnchor";
    });
}

const scrollTopFooter = document.getElementById("logoFooter")
scrollTopFooter.addEventListener("click", () => {
    window.location.href = "#myAnchor";
});