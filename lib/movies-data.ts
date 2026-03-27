export type Curtmetratge = {
  id: string
  titol: string
  direccio: string[]
  origen: string[]
  any: number | null
  durada: string
  qualificacio_edats: string
  nivell_educatiu: string[]
  genere: string[]
  sinopsi: string
  temes: string[]
  conceptes_clau: string[]
  contextualitzacio: string[]
  treball_previ: string[]
  documents: string[]
  featured?: boolean
  poster?: string
}

export type Category = {
  id: string
  label: string
  icon: string
  color: string
}

export const categories: Category[] = [
  { id: "drama", label: "Drama", icon: "theater", color: "bg-muted text-primary-foreground" },
  { id: "comedia", label: "Comedia", icon: "laugh", color: "bg-muted text-accent-foreground" },
  { id: "documental", label: "Documental", icon: "camera", color: "bg-secondary text-secondary-foreground" },
  { id: "ciencia-ficcio", label: "Ciencia Ficcio", icon: "rocket", color: "bg-chart-5 text-primary-foreground" },
  { id: "musical", label: "Musical", icon: "music", color: "bg-primary text-primary-foreground" },
  { id: "historic", label: "Historic", icon: "landmark", color: "bg-chart-2 text-primary-foreground" },
  { id: "thriller", label: "Thriller", icon: "eye", color: "bg-chart-1 text-primary-foreground" },
  { id: "western", label: "Western", icon: "star", color: "bg-accent text-accent-foreground" },
]

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}

function parseYear(val: unknown): number | null {
  if (val === null || val === undefined) return null
  const n = Number(val)
  if (Number.isNaN(n)) return null
  return n
}

const posterMap: Record<string, string> = {
  "el-bosc-dels-records": "/images/posters/el-bosc-dels-records.jpg",
  "morfema": "/images/posters/morfema.jpg",
  "crisalide": "/images/posters/crisalide.jpg",
  "l-ultim-ball": "/images/posters/l-ultim-ball.jpg",
  "7-minuts": "/images/posters/7-minuts.jpg",
  "aixeca-el-cap": "/images/posters/aixeca-el-cap.jpg",
  "amors-que-maten": "/images/posters/amors-que-maten.jpg",
  "cridam": "/images/posters/cridam.jpg",
  "directed-by": "/images/posters/directed-by.jpg",
  "diari-d-un-operador-cinematografic": "/images/posters/diari-d-un-operador-cinematografic.jpg",
  "dolors": "/images/posters/dolors.jpg",
  "enrecordar": "/images/posters/enrecordar.jpg",
  "filtres": "/images/posters/filtres.jpg",
  "gris": "/images/posters/gris.jpg",
  "l-alex": "/images/posters/l-alex.jpg",
  "l-infern": "/images/posters/l-infern.jpg",
  "la-creu-secundaria": "/images/posters/la-creu-secundaria.jpg",
  "la-nit": "/images/posters/la-nit.jpg",
  "les-noies-no-fan-boxa": "/images/posters/les-noies-no-fan-boxa.jpg",
  "mysterios-assassinat-a-llobregos-street": "/images/posters/mysterios-assassinat-a-llobregos-street.jpg",
  "ni-un-gram-mes": "/images/posters/ni-un-gram-mes.jpg",
  "nit": "/images/posters/nit.jpg",
  "once-upon-a-time-in-piaget": "/images/posters/once-upon-a-time-in-piaget.jpg",
  "piaget-attacks": "/images/posters/piaget-attacks.jpg",
  "rocky": "/images/posters/rocky.jpg",
  "roma-cap-a-roda": "/images/posters/roma-cap-a-roda.jpg",
  "the-lost-boy": "/images/posters/the-lost-boy.jpg",
  "un-regal-molt-espacial": "/images/posters/un-regal-molt-espacial.jpg",
  "yolo": "/images/posters/yolo.jpg",
}

export const curtmetratges: Curtmetratge[] = [
  {
    id: slugify("El bosc dels records"),
    titol: "El bosc dels records",
    direccio: ["Laia Harraki", "Camila Navarro", "Valeria Rodriguez"],
    origen: ["Catalunya"],
    any: 2024,
    durada: "5:09",
    qualificacio_edats: "Tots els publics",
    nivell_educatiu: ["Primaria"],
    genere: ["Drama"],
    sinopsi: "La Paula i els seus amics van al bosc. Quan l'avi de la Paula desapareix a causa de problemes de memoria, els amics s'uneixen per trobar-lo.",
    temes: ["amistat", "cohesio de grup", "consciencia social", "gent gran"],
    conceptes_clau: ["amistat", "respecte", "empatia", "dignitat", "demencia"],
    contextualitzacio: ["Demencia o Alzheimer"],
    treball_previ: ["Saber que es la demencia i l'Alzheimer"],
    documents: ["https://drive.google.com/open?id=1I0YqBjrmjcebWb0lxr4TpPNWk4rJQ3El"],
    featured: true,
    poster: posterMap["el-bosc-dels-records"],
  },
  {
    id: slugify("Morfema"),
    titol: "Morfema",
    direccio: ["Mireia Garcia", "Iaco Subirats"],
    origen: ["Catalunya"],
    any: 2023,
    durada: "19:58",
    qualificacio_edats: "+12 anys",
    nivell_educatiu: ["Secundaria"],
    genere: ["Drama"],
    sinopsi: "L'Alba pateix una situacio d'assetjament sexual a l'institut. Amb l'ajuda d'una amiga aconsegueix denunciar-ho.",
    temes: ["assetjament sexual", "abus de poder", "aparences", "vincles d'amistat"],
    conceptes_clau: ["assetjament", "abus", "aparences", "amistat", "salut mental"],
    contextualitzacio: ["Coneixer que es l'assetjament sexual"],
    treball_previ: ["Assetjament sexual als infants i joves"],
    documents: ["https://drive.google.com/open?id=1KEdm6mgGTfbmVshKickBANLeecZV1S8v"],
  },
  {
    id: slugify("Crisalide"),
    titol: "Crisalide",
    direccio: ["Anna Lopez", "Iaco Subirats", "Alumnes de 3r ESO"],
    origen: ["Espanya", "Catalunya"],
    any: 2018,
    durada: "15:30",
    qualificacio_edats: "+7 anys",
    nivell_educatiu: ["Secundaria"],
    genere: ["Drama"],
    sinopsi: "Un grup d'amics afronta la mort d'un company de classe i el proces de dol.",
    temes: ["dol", "amistat", "acompanyament", "superacio"],
    conceptes_clau: ["resiliencia", "por", "valentia", "amistat"],
    contextualitzacio: ["La mort com a part de la vida"],
    treball_previ: ["Aspectes tecnics: moviments de camera, tipus de plans", "Reflexio sobre la mort"],
    documents: ["https://drive.google.com/open?id=1vJGXtyrluFsGB0UBmKVI9UCxpdpdQHUb"],
    featured: true,
  },
  {
    id: slugify("L ultim ball"),
    titol: "L'ultim ball",
    direccio: ["4t ESO INS Jaume Salvador i Pedrol", "M. Fabregas", "A. Alvarez", "Iaco Subirats"],
    origen: ["Catalunya", "Espanya"],
    any: 2022,
    durada: "15:00",
    qualificacio_edats: "+16 anys",
    nivell_educatiu: ["Secundaria"],
    genere: ["Drama"],
    sinopsi: "Un adolescent viu un profund malestar emocional que ningu detecta. El seu ultim ball esdeve un gest simbolic.",
    temes: ["salut mental", "suicidi", "empatia", "solitud", "aparences"],
    conceptes_clau: ["emocions", "angoixa", "depressio", "invisibilitat", "prevencio del suicidi"],
    contextualitzacio: ["Diferenciar emocions basiques", "Coneixer recursos d'ajuda emocional"],
    treball_previ: ["Mites i realitats sobre el suicidi", "Senyals d'alarma"],
    documents: ["https://drive.google.com/open?id=11AfWxZnObcLq1ueEqUhM81QK-Ses5MOr"],
  },
  {
    id: slugify("7 minuts"),
    titol: "7 minuts",
    direccio: ["Laura Alonso", "Alex Armada", "Jamila Baslem", "Andreina Cabrera", "Marta Garcia", "Idris Kadmiri"],
    origen: ["Espanya"],
    any: 2014,
    durada: "17:00",
    qualificacio_edats: "+12 anys",
    nivell_educatiu: ["Secundaria"],
    genere: ["Drama"],
    sinopsi: "Set minuts canvien completament la vida de l'Aina, que afronta les consequencies de la seva manca de previsio amb ajuda del seu entorn.",
    temes: ["amistat", "relacions familiars", "relacions sexuals", "adolescencia", "metodes anticonceptius"],
    conceptes_clau: ["adolescencia", "amistat", "relacions familiars", "embaras", "reproduccio"],
    contextualitzacio: ["Metodes anticonceptius, educacio sexual, reproduccio"],
    treball_previ: ["Pubertat, reproduccio, fecundacio, embaras"],
    documents: ["https://drive.google.com/open?id=1Dis9E3FJ4XppxkUgk5PObDChUX8jQlOP"],
  },
  {
    id: slugify("Aixeca el cap"),
    titol: "Aixeca el cap",
    direccio: ["Raimon Ferrerons", "Laura Baldrich", "Azahara Lopez"],
    origen: ["Espanya"],
    any: 2025,
    durada: "7:24",
    qualificacio_edats: "Tots els publics",
    nivell_educatiu: ["Primaria"],
    genere: ["Comedia"],
    sinopsi: "Uns alumnes caminen per un poble mirant el telefon sense veure el que passa al seu voltant. Finalment deixen el telefon per jugar amb altres nens.",
    temes: ["us excessiu del telefon mobil"],
    conceptes_clau: ["noves tecnologies", "adiccio al telefon", "incomunicacio"],
    contextualitzacio: ["Normativa sobre l'us del telefon mobil en infants"],
    treball_previ: ["Normativa sobre l'us del telefon mobil, adiccio"],
    documents: ["https://drive.google.com/open?id=10m3no0AdeS1or1eIffo8Pm9ZLSNO9Mh5"],
    featured: true,
  },
  {
    id: slugify("Amors que maten"),
    titol: "Amors que maten",
    direccio: ["Teresa Caimari", "Jose Juan Guijarro"],
    origen: ["Comunitat Valenciana", "Espanya"],
    any: 2012,
    durada: "10:21",
    qualificacio_edats: "Tots els publics",
    nivell_educatiu: ["Secundaria"],
    genere: ["Comedia"],
    sinopsi: "L'art de seduir en diferents moments de la historia.",
    temes: ["historia", "masculinitat toxica", "rols de genere"],
    conceptes_clau: ["seduccio", "historia", "evolucio"],
    contextualitzacio: ["Diferents moments historics (prehistoria, edat mitjana, edat moderna, edat actual)"],
    treball_previ: ["Maneres socialment acceptades de seduccio"],
    documents: ["https://drive.google.com/open?id=13xEC16qOQhloV9XPK2Zgag3cGO4xLVQw"],
  },
  {
    id: slugify("Cridam"),
    titol: "Crida'm",
    direccio: ["Joan Puls"],
    origen: ["Espanya"],
    any: 2022,
    durada: "13:15",
    qualificacio_edats: "Tots els publics",
    nivell_educatiu: ["Post-obligatori"],
    genere: ["Drama"],
    sinopsi: "Una parella casada de fa 20 anys conviu amb la mare de l'home, explorant la cura i la relacio intergeneracional.",
    temes: ["demencia senil", "relacio de parella", "cura"],
    conceptes_clau: ["vellesa", "maternitat", "parella"],
    contextualitzacio: ["Xalet amb la parella i la mare de l'home"],
    treball_previ: ["Cercar informacio sobre demencies senils"],
    documents: ["https://drive.google.com/open?id=13pjkSPjrZmFPRZAdQq4QKR-eUDcXAowN"],
  },
  {
    id: slugify("Directed by"),
    titol: "Directed by",
    direccio: ["A Piaget Film Production", "Alumnes de 6e"],
    origen: ["Espanya", "Catalunya"],
    any: null,
    durada: "10:00",
    qualificacio_edats: "Tots els publics",
    nivell_educatiu: ["Primaria"],
    genere: ["Comedia"],
    sinopsi: "Un nen esta a punt d'esternudar, i cada esternut es converteix en una petita escena amb estil segons directors famosos.",
    temes: ["creativitat", "humor", "expressio artistica", "cinema", "imaginacio"],
    conceptes_clau: ["cinema", "generes cinematografics", "creativitat", "humor"],
    contextualitzacio: ["Conceptes basics sobre que es una pel·licula, generes cinematografics"],
    treball_previ: ["Definir que es un director de cinema", "Identificar generes de pel·licules"],
    documents: ["https://drive.google.com/open?id=1PIolD3jYmBPMikZ-8t9u2HsmBNte4AA8"],
    featured: true,
  },
  {
    id: slugify("Diari d un operador cinematografic"),
    titol: "Diari d'un operador cinematografic",
    direccio: ["Dani Segui"],
    origen: ["Espanya"],
    any: 2022,
    durada: "12:44",
    qualificacio_edats: "Tots els publics",
    nivell_educatiu: ["Post-obligatori"],
    genere: ["Biografia", "Historic", "Drama"],
    sinopsi: "Biografia d'un operador de cinema de la quinta del bibero.",
    temes: ["origen del cinema", "censura", "guerra civil espanyola", "drets dels treballadors"],
    conceptes_clau: ["guerra civil espanyola", "cinema", "postguerra"],
    contextualitzacio: ["Va be coneixer la societat espanyola durant la guerra civil"],
    treball_previ: ["Que es la Republica", "Que es el falangisme"],
    documents: ["https://drive.google.com/open?id=1NpG_kNPJSMNSTx8lNQXG9DFibVH2vAUQ"],
  },
  {
    id: slugify("Dolors"),
    titol: "Dolors",
    direccio: ["Marta Arjona", "Maite Blasco"],
    origen: ["Espanya (Valls)"],
    any: 2025,
    durada: "15:00",
    qualificacio_edats: "+16 anys",
    nivell_educatiu: ["Post-obligatori"],
    genere: ["Documental"],
    sinopsi: "Memoria Historica. Memoria de Dolors Vives Rodon, aviadora oblidada de la II Republica.",
    temes: ["Guerra civil", "Memoria historica", "Franquisme", "Aviacio", "II Republica"],
    conceptes_clau: ["guerra civil", "franquisme", "aviacio", "Dolors Vives Rodon"],
    contextualitzacio: ["Coneixer la historia de Dolors Vives Rodon"],
    treball_previ: ["II Republica, Guerra civil i pilots civils"],
    documents: ["https://drive.google.com/open?id=1Y8eRHNRos6BMLENNZ9M4gtChJ_wTYwRh"],
  },
  {
    id: slugify("EnREcordar"),
    titol: "En(RE)cordar",
    direccio: ["Marta Arjona Blasco", "Maite Blasco"],
    origen: ["Espanya"],
    any: 2023,
    durada: "15:00",
    qualificacio_edats: "Tots els publics",
    nivell_educatiu: ["Primaria"],
    genere: ["Documental"],
    sinopsi: "Aquest curtmetratge documental dona protagonisme a l'ofici d'encordar cadires de forma manual. Una tecnica que s'ha enviat de pares a fills i que esta en perill d'extincio.",
    temes: ["Oficis tradicionals", "Cultura popular", "Biografies", "Castellers"],
    conceptes_clau: ["Documental", "Oficis tradicionals", "Cultura popular", "Castellers"],
    contextualitzacio: ["Existencia de certs oficis artesanals en vies de desapareixer"],
    treball_previ: ["Oficis artesanals com encordar cadires"],
    documents: ["https://drive.google.com/open?id=1iB6yOKGrHSFc47s8g4T0XLmawhyeR34X"],
  },
  {
    id: slugify("Filtres"),
    titol: "Filtres",
    direccio: ["Iaco Subirats"],
    origen: ["Catalunya"],
    any: null,
    durada: "17:46",
    qualificacio_edats: "+12 anys",
    nivell_educatiu: ["Secundaria"],
    genere: ["Drama"],
    sinopsi: "Tres adolescents i tres histories reals; tres noies que comparteixen problematiques reals com poden ser les violencies masclistes, el perill del grooming o la pressio estetica de les xarxes socials.",
    temes: ["Pressio estetica i xarxes socials", "Relacions toxiques", "Violencies masclistes", "Grooming", "Ciberseguretat"],
    conceptes_clau: ["Grooming", "Violencies masclistes", "Xarxes socials", "Ciberseguretat", "Autoestima"],
    contextualitzacio: ["No cal informacio previa mes enlla dels conceptes basics"],
    treball_previ: ["Treball de recerca sobre ciberseguretat i identitat digital"],
    documents: ["https://drive.google.com/open?id=1XYKZDOE38hFCTSgkx1VnPLt8BsHxF9c9"],
  },
  {
    id: slugify("Gris"),
    titol: "Gris",
    direccio: ["Queralt Suria", "Neus Gispert"],
    origen: ["Espanya"],
    any: 2023,
    durada: "22:00",
    qualificacio_edats: "Tots els publics",
    nivell_educatiu: ["Secundaria"],
    genere: ["Drama"],
    sinopsi: "Una adolescent lluita en silenci amb la tristesa i la incomprensio que l'envolta, en un dia que reflecteix el pes invisible de la salut mental.",
    temes: ["Salut mental", "Empatia", "Suport entre iguals", "Educacio emocional"],
    conceptes_clau: ["Benestar", "Amistat", "Tristesa", "Escolta activa", "Prevencio del suicidi"],
    contextualitzacio: ["Coneixement basic sobre les emocions humanes"],
    treball_previ: ["Prendre consciencia de la importancia de la salut mental"],
    documents: ["https://drive.google.com/open?id=1MWmDz6NU5-pfKrKaKsM5TfyraUelSsvE"],
    featured: true,
  },
  {
    id: slugify("L Alex"),
    titol: "L'Alex",
    direccio: ["Iaco Subirats", "Queralt Suria"],
    origen: ["Catalunya"],
    any: 2017,
    durada: "18:30",
    qualificacio_edats: "+7 anys",
    nivell_educatiu: ["Primaria"],
    genere: ["Drama"],
    sinopsi: "Una noia adolescent explica la historia de la seva revelacio sobre la seva tendencia sexual. Aquest fet li causara incomprensions i faltes de respecte.",
    temes: ["Identitat sexual", "LGTBI", "Drets humans", "Amor", "Bullying", "Respecte a la diversitat"],
    conceptes_clau: ["Drets humans", "Respecte", "Discriminacio", "Igualtat", "Amor", "Llibertat"],
    contextualitzacio: ["Breu historia dels drets LGTBI"],
    treball_previ: ["La diversitat afectiva i sexual a l'adolescencia"],
    documents: ["https://drive.google.com/open?id=1dlJ2i2lVAa6-GWhS5SVma2EHtKKHsIE9"],
  },
  {
    id: slugify("L infern"),
    titol: "L'infern",
    direccio: ["Georgina Martinez"],
    origen: ["Catalunya"],
    any: null,
    durada: "21:00",
    qualificacio_edats: "+12 anys",
    nivell_educatiu: ["Secundaria"],
    genere: ["Drama"],
    sinopsi: "La historia d'amor de l'Andrea i de la Mia es va tenyint de fosc per culpa de les inseguretats i la gelosia de l'Andrea, transformant la gran historia d'amor en un infern.",
    temes: ["Relacions humanes", "Feminisme", "Patriarcat", "Emocions", "Gelosia", "Violencia en la parella"],
    conceptes_clau: ["Educacio emocional", "Patriarcat", "Control", "Gelosia", "Violencia psicologica"],
    contextualitzacio: ["Analisi del patriarcat com a sistema cultural i social"],
    treball_previ: ["Buscar i definir els conceptes de patriarcat i violencia de genere"],
    documents: ["https://drive.google.com/open?id=1MJh7YTdREuYexixgsSySWgABOValnI6s"],
  },
  {
    id: slugify("La Creu Secundaria"),
    titol: "La Creu Secundaria",
    direccio: ["Dani Segui"],
    origen: ["Catalunya"],
    any: 2016,
    durada: "16:00",
    qualificacio_edats: "+16 anys",
    nivell_educatiu: ["Post-obligatori"],
    genere: ["Drama"],
    sinopsi: "Els pares d'un noi de 30 anys, mort en un accident de moto, afronten el dol per la perdua de maneres diferents.",
    temes: ["El dol per la mort d'un fill", "La mort", "La religio", "L'acompanyament al dol"],
    conceptes_clau: ["Dol", "Acompanyament al dol", "Dol patologic", "Superacio"],
    contextualitzacio: ["Coneixement basic del proces del dol"],
    treball_previ: ["Les fases del dol", "Reaccions normals davant la perdua"],
    documents: ["https://drive.google.com/open?id=1HwasNcCQuyUo24ACHbzCt7kCgF40afIs"],
  },
  {
    id: slugify("La Nit"),
    titol: "La Nit",
    direccio: ["7e Art"],
    origen: ["Espanya"],
    any: 2016,
    durada: "22:13",
    qualificacio_edats: "+12 anys",
    nivell_educatiu: ["Secundaria"],
    genere: ["Drama"],
    sinopsi: "Una jugadora de futbol femeni prioritza el botello i la festa per damunt dels partits, fet que la portara a prendre decisions amb consequencies importants.",
    temes: ["Amistat toxica", "Consum d'alcohol", "Pressio de grup", "Responsabilitat", "Adolescencia"],
    conceptes_clau: ["Consum d'alcohol", "Si beus no condueixis", "Responsabilitat personal"],
    contextualitzacio: ["Contextualitzar el consum d'alcohol entre joves"],
    treball_previ: ["Reflexionar sobre els riscos del consum d'alcohol"],
    documents: ["https://drive.google.com/open?id=1Y__witYML-3od0TzUj2lzVyMcy8fZRag"],
  },
  {
    id: slugify("Les noies no fan boxa"),
    titol: "Les noies no fan boxa",
    direccio: ["Iaco Subirats (Associacio Melies)"],
    origen: ["Catalunya"],
    any: 2024,
    durada: "3:47",
    qualificacio_edats: "Tots els publics",
    nivell_educatiu: ["Secundaria"],
    genere: ["Documental"],
    sinopsi: "La Carla es una noia de 15 anys que practica boxa i el seu entorn li diu que ho deixi perque no es un esport femeni. Ella segueix fent allo que la fa felic.",
    temes: ["Rol i igualtat de genere", "Lluita contra estereotips", "Feminisme", "Empoderament femeni"],
    conceptes_clau: ["Superacio personal", "Empoderament", "Genere", "Inclusio", "Feminisme"],
    contextualitzacio: ["Saber el concepte de genere i com es construeix socialment"],
    treball_previ: ["No cal fer cap treball, el curt es molt intuitiu"],
    documents: ["https://drive.google.com/open?id=1PIxu9tFInRwYx5NE9EmaN4w8vA9qDjI"],
    featured: true,
  },
  {
    id: slugify("Mysterios assassinat a Llobregoss Street"),
    titol: "Mysterios assassinat a Llobregos Street",
    direccio: ["Alumnes de sise de l'Escola Piaget"],
    origen: ["Espanya"],
    any: 2021,
    durada: "15:00",
    qualificacio_edats: "+7 anys",
    nivell_educatiu: ["Primaria"],
    genere: ["Comedia negra", "Musical"],
    sinopsi: "Apareix un home mort assassinat. Els investigadors van descobrint moltes persones amb motius per matar-lo. Pero realment el condemnat es el culpable?",
    temes: ["Els prejudicis i les aparences"],
    conceptes_clau: ["Respecte", "Prejudicis", "Aparences", "Etica", "Justicia"],
    contextualitzacio: ["Preparar l'alumnat amb imatges i noticies que no son el que semblen"],
    treball_previ: ["Lleis penals al nostre pais d'una forma basica"],
    documents: ["https://drive.google.com/open?id=14VpRRb1pc5zc1yRCP8SAatIKM_-4oSF2"],
  },
  {
    id: slugify("Ni un gram mes"),
    titol: "Ni un gram mes",
    direccio: ["Alumnes de 3r d'ESO de l'Institut Matadepera", "Albert Sarle"],
    origen: ["Espanya"],
    any: 2024,
    durada: "18:37",
    qualificacio_edats: "+12 anys",
    nivell_educatiu: ["Secundaria"],
    genere: ["Fals documental", "Drama", "Biopic"],
    sinopsi: "La Xenia es una adolescent que lluita contra un trastorn de la conducta alimentaria provocat per la pressio social, el bullying i una baixa autoestima.",
    temes: ["Salut mental", "Bullying", "Anorexia", "Autoestima i imatge corporal", "Pressio social"],
    conceptes_clau: ["Bullying", "Anorexia", "Salut mental", "Acceptacio", "Trastorns alimentaris"],
    contextualitzacio: ["Explicar breument els trastorns de conducta alimentaria"],
    treball_previ: ["Buscar informacio sobre l'anorexia"],
    documents: ["https://drive.google.com/open?id=1TL3X2aHstjpVFxgzQ-yTLM0UszTgvenL"],
  },
  {
    id: slugify("Nit"),
    titol: "Nit",
    direccio: ["Projecte 7e art"],
    origen: ["Catalunya", "Espanya"],
    any: 2016,
    durada: "22:13",
    qualificacio_edats: "Tots els publics",
    nivell_educatiu: ["Secundaria"],
    genere: ["Drama"],
    sinopsi: "Una noia deixa de banda les seves amigues de veritat, menteix a la seva familia i deixa l'equip de futbol, per sortir de festa amb altra gent.",
    temes: ["Consum d'alcohol", "Pressio de grup", "Amistat", "Familia"],
    conceptes_clau: ["Alcohol", "Adolescencia", "Relacions"],
    contextualitzacio: ["Dades sobre consum d'alcohol entre adolescents"],
    treball_previ: ["Recerca sobre la perillositat del consum d'alcohol en adolescents"],
    documents: ["https://drive.google.com/open?id=177n8H4fPyrC41CQvdh1nzfoVFj2y_2H_"],
  },
  {
    id: slugify("Once upon a time in Piaget"),
    titol: "Once upon a time in Piaget",
    direccio: ["Alumnes de Sise de Primaria de l'Escola Piaget"],
    origen: ["Espanya"],
    any: 2013,
    durada: "27:19",
    qualificacio_edats: "+7 anys",
    nivell_educatiu: ["Primaria"],
    genere: ["Western"],
    sinopsi: "El curt es un western on dos personatges 'el bo' i 'el Xerif' busquen capturar a 'el dolent', a mes entre mig sorgeixen diverses historietes.",
    temes: ["Amor", "Perdua d'un ser estimat i el pas de dol", "Justicia", "Propaganda"],
    conceptes_clau: ["Amor", "Perdua", "Justicia", "Drets humans"],
    contextualitzacio: ["Periode historic del salvatge oest america"],
    treball_previ: ["Societat i condicions de vida del salvatge oest america"],
    documents: ["https://drive.google.com/open?id=1MEfVfJ4WJ2pz-AAE5_Mr4IxZ31acL8px"],
  },
  {
    id: slugify("Piaget Attacks"),
    titol: "Piaget Attacks",
    direccio: ["Alumnes i equip de l'Escola Piaget"],
    origen: ["Catalunya"],
    any: null,
    durada: "29:58",
    qualificacio_edats: "Tots els publics",
    nivell_educatiu: ["Primaria"],
    genere: ["Ciencia Ficcio"],
    sinopsi: "Un grup de marcians del planeta Arboria es dirigeixen al planeta Terra. A l'escola passen fenomens paranormals i la comunitat educativa ha de desactivar l'autodestruccio del mon.",
    temes: ["Ciencia ficcio", "Multiculturalitat", "Creativitat", "Treball en equip"],
    conceptes_clau: ["Multiculturalitat", "Creativitat", "Ciencia ficcio", "Treball en equip"],
    contextualitzacio: ["Haver vist pel·licules referents com Star Wars, E.T., Alien, Matrix"],
    treball_previ: ["Analitzar les pel·licules referents"],
    documents: ["https://drive.google.com/open?id=16UUWdqcQVlkbbLpKvL66C9MllGtEZMh4"],
  },
  {
    id: slugify("Rocky"),
    titol: "Rocky",
    direccio: ["Alumnes i docents"],
    origen: ["Espanya"],
    any: 2020,
    durada: "10:36",
    qualificacio_edats: "+16 anys",
    nivell_educatiu: ["Secundaria"],
    genere: ["Musical"],
    sinopsi: "Roc, un noi amb sindrome de Down, vol fer un musical a l'institut basat en The Rocky Horror Picture Show.",
    temes: ["Inclusio en la diversitat", "Solidaritat", "Cohesio familiar", "Genere i diversitat funcional"],
    conceptes_clau: ["Transgenere", "Sindrome de Down", "Inclusio", "LGTBI", "Diversitat"],
    contextualitzacio: ["Referencia a The Rocky Horror Picture Show"],
    treball_previ: ["Cercar informacio sobre la sindrome de Down"],
    documents: ["https://drive.google.com/open?id=1Eb7lP8kyC7Rnfo3Qcbi3LyH-w6ILoTOA"],
  },
  {
    id: slugify("Roma cap a Roda"),
    titol: "Roma cap a Roda",
    direccio: ["Alumnes de l'Escola Piaget"],
    origen: ["Espanya"],
    any: null,
    durada: "9:05",
    qualificacio_edats: "Tots els publics",
    nivell_educatiu: ["Primaria"],
    genere: ["Historia", "Ciencia-ficcio", "Fantastic", "Aventures", "Musical"],
    sinopsi: "Uns alumnes fan un treball de recerca i es troben amb jovent que han viatjat en el temps des de l'epoca romana.",
    temes: ["Historia", "Diferencies culturals", "Pertinenca en el territori", "Respecte a l'entorn sociocultural"],
    conceptes_clau: ["Historia", "Llegat cultural", "Ecologia", "Memoria historica"],
    contextualitzacio: ["La influencia d'altres cultures en la nostra"],
    treball_previ: ["Investigar sobre la cultura romana"],
    documents: ["https://drive.google.com/open?id=1-2vxKn-IxnWHslqC7hBsi1DKpt4KoNIM"],
    featured: true,
  },
  {
    id: slugify("The Lost-Boy"),
    titol: "The Lost-Boy",
    direccio: ["Alumnes de sise de primaria de l'Escola Piaget"],
    origen: ["Espanya"],
    any: 2017,
    durada: "14:00",
    qualificacio_edats: "+7 anys",
    nivell_educatiu: ["Primaria"],
    genere: ["Suspens", "Thriller"],
    sinopsi: "Realitat o somni.",
    temes: ["L'aparenca envers la realitat", "Amistat", "Prejudicis socials"],
    conceptes_clau: ["Amistat", "Prejudicis", "Imaginacio", "Creativitat", "Somnis vs realitat"],
    contextualitzacio: ["Exploracio de la frontera entre realitat i somni"],
    treball_previ: ["Lectura d'obres sobre la confusio entre realitat i somni"],
    documents: ["https://drive.google.com/open?id=1JAFqQ0OLmP186XXuxxe8Y_ZejzlXnZfV"],
  },
  {
    id: slugify("Un regal molt espacial"),
    titol: "Un regal molt espacial",
    direccio: ["Jose Juan Guijarro"],
    origen: ["Espanya/Balears"],
    any: 2019,
    durada: "13:23",
    qualificacio_edats: "Tots els publics",
    nivell_educatiu: ["Secundaria"],
    genere: ["Ciencia Ficcio"],
    sinopsi: "Un grup d'amics construeixen una escala humana per ajudar a un d'ells a arribar a la lluna. La noia que li agrada li ha demanat un tros de lluna pel seu aniversari.",
    temes: ["Superacio personal", "Treball en equip", "Amistat", "Amor"],
    conceptes_clau: ["Resiliencia", "Amistat", "Amor", "Treball en equip", "Col·laboracio"],
    contextualitzacio: ["Una festa d'aniversari i una proposta d'amor"],
    treball_previ: ["Estudi d'aspectes tecnics de gravacio"],
    documents: ["https://drive.google.com/open?id=18KCpPQN9ENe12gQOWmOgm6CpNVMwgF-b"],
  },
  {
    id: slugify("YOLO"),
    titol: "YOLO",
    direccio: ["Valenti Vazquez", "Iaco Subirats"],
    origen: ["Catalunya"],
    any: null,
    durada: "13:52",
    qualificacio_edats: "+7 anys",
    nivell_educatiu: ["Secundaria"],
    genere: ["Drama"],
    sinopsi: "Una adolescent pren consciencia de com l'us del mobil suposa una limitacio en diferents ambits de la seva vida des del moment que ha de deixar el seu dispositiu una setmana al servei de reparacions.",
    temes: ["Us i abuis de la tecnologia", "Relacions interpersonals", "Propostes d'oci alternatives"],
    conceptes_clau: ["Xarxes socials", "Dispositius mobils", "Scroll infinit", "Adiccio a la tecnologia"],
    contextualitzacio: ["Reflexio sobre l'us del mobil i les xarxes socials"],
    treball_previ: ["Cercar informacio sobre adiccio a les pantalles"],
    documents: ["https://drive.google.com/open?id=1XYKZDOE38hFCTSgkx1VnPLt8BsHxF9c9"],
  },
]

// Auto-assign poster images to all curtmetratges
curtmetratges.forEach((c) => {
  if (!c.poster && posterMap[c.id]) {
    c.poster = posterMap[c.id]
  }
})

export function getCurtmetratgesByGenre(genreId: string): Curtmetratge[] {
  const genreMap: Record<string, string[]> = {
    drama: ["Drama"],
    comedia: ["Comedia", "Comedia negra"],
    documental: ["Documental", "Biografia", "Biopic", "Fals documental"],
    "ciencia-ficcio": ["Ciencia Ficcio", "Ciencia-ficcio", "Fantastic"],
    musical: ["Musical"],
    historic: ["Historic", "Historia", "Aventures"],
    thriller: ["Suspens", "Thriller"],
    western: ["Western"],
  }
  const matchGenres = genreMap[genreId] || [genreId]
  return curtmetratges.filter((c) =>
    c.genere.some((g) => matchGenres.some((mg) => g.toLowerCase().includes(mg.toLowerCase())))
  )
}

export function getFeaturedCurtmetratges(): Curtmetratge[] {
  return curtmetratges.filter((c) => c.featured)
}

export function getCurtmetratgeById(id: string): Curtmetratge | undefined {
  return curtmetratges.find((c) => c.id === id)
}

export function getCurtmetratgesByNivell(nivell: string): Curtmetratge[] {
  return curtmetratges.filter((c) => c.nivell_educatiu.some((n) => n.toLowerCase() === nivell.toLowerCase()))
}

export function getCurtmetratgesByEdat(edat: string): Curtmetratge[] {
  return curtmetratges.filter((c) => c.qualificacio_edats.toLowerCase().includes(edat.toLowerCase()))
}

export function searchCurtmetratges(query: string): Curtmetratge[] {
  const q = query.toLowerCase()
  return curtmetratges.filter(
    (c) =>
      c.titol.toLowerCase().includes(q) ||
      c.sinopsi.toLowerCase().includes(q) ||
      c.temes.some((t) => t.toLowerCase().includes(q)) ||
      c.conceptes_clau.some((ck) => ck.toLowerCase().includes(q)) ||
      c.genere.some((g) => g.toLowerCase().includes(q)) ||
      c.direccio.some((d) => d.toLowerCase().includes(q))
  )
}

export function getAgeColor(qualificacio: string): string {
  if (qualificacio.includes("Tots")) return "bg-chart-2 text-accent-foreground"
  if (qualificacio.includes("7")) return "bg-chart-3 text-accent-foreground"
  if (qualificacio.includes("12")) return "bg-chart-4 text-accent-foreground"
  if (qualificacio.includes("16")) return "bg-chart-5 text-accent-foreground"
  return "bg-muted text-muted-foreground"
}

export function getNivellColor(nivell: string): string {
  if (nivell.toLowerCase().includes("primaria")) return "bg-muted text-muted-foreground"
  if (nivell.toLowerCase().includes("secundaria")) return "bg-muted text-muted-foreground"
  if (nivell.toLowerCase().includes("post")) return "bg-chart-5 text-primary-foreground"
  return "bg-muted text-muted-foreground"
}

// Filter options extracted from the database
export function getUniqueNivells(): string[] {
  const nivells = new Set<string>()
  curtmetratges.forEach((c) => c.nivell_educatiu.forEach((n) => nivells.add(n)))
  return Array.from(nivells).sort()
}

export function getUniqueEdats(): string[] {
  const edats = new Set<string>()
  curtmetratges.forEach((c) => edats.add(c.qualificacio_edats))
  const order = ["Tots els publics", "+7 anys", "+12 anys", "+16 anys"]
  return Array.from(edats).sort((a, b) => {
    const ia = order.findIndex((o) => a.includes(o.split(" ")[0]))
    const ib = order.findIndex((o) => b.includes(o.split(" ")[0]))
    return ia - ib
  })
}

export function getUniqueGeneres(): string[] {
  const generes = new Set<string>()
  curtmetratges.forEach((c) => c.genere.forEach((g) => generes.add(g)))
  return Array.from(generes).sort()
}

export function getUniqueOrigens(): string[] {
  const origens = new Set<string>()
  curtmetratges.forEach((c) => c.origen.forEach((o) => origens.add(o)))
  return Array.from(origens).sort()
}

export function getUniqueAnys(): number[] {
  const anys = new Set<number>()
  curtmetratges.forEach((c) => {
    if (c.any !== null) anys.add(c.any)
  })
  return Array.from(anys).sort((a, b) => b - a)
}

export function getUniqueTemes(): string[] {
  const temes = new Set<string>()
  curtmetratges.forEach((c) => c.temes.forEach((t) => temes.add(t)))
  return Array.from(temes).sort()
}

export type Filters = {
  nivellEducatiu: string[]
  edat: string[]
  genere: string[]
  origen: string[]
  any: number[]
  temes: string[]
}

export function filterCurtmetratges(filters: Filters): Curtmetratge[] {
  return curtmetratges.filter((c) => {
    // Nivell educatiu filter
    if (filters.nivellEducatiu.length > 0) {
      if (!c.nivell_educatiu.some((n) => filters.nivellEducatiu.includes(n))) return false
    }
    // Edat filter
    if (filters.edat.length > 0) {
      if (!filters.edat.includes(c.qualificacio_edats)) return false
    }
    // Genere filter
    if (filters.genere.length > 0) {
      if (!c.genere.some((g) => filters.genere.includes(g))) return false
    }
    // Origen filter
    if (filters.origen.length > 0) {
      if (!c.origen.some((o) => filters.origen.includes(o))) return false
    }
    // Any filter
    if (filters.any.length > 0) {
      if (c.any === null || !filters.any.includes(c.any)) return false
    }
    // Temes filter
    if (filters.temes.length > 0) {
      if (!c.temes.some((t) => filters.temes.includes(t))) return false
    }
    return true
  })
}

