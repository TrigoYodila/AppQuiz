const Questions = [
  {
    id: 0,
    question: "Quel est le type d'un fichier javascript ?",
    assertions: [
      { text: ".ts", isCorrect: false },
      { text: ".jsx", isCorrect: false },
      { text: ".js", isCorrect: true },
      { text: ".j", isCorrect: false },
    ],
  },
  {
    id: 1,
    question: "Dans quelle balise plaçons nous le javascript ?",
    assertions: [
      { text: "<html>", isCorrect: false },
      { text: "<style>", isCorrect: false },
      { text: "<body>", isCorrect: false },
      { text: "<script>", isCorrect: true },
    ],
  },
  {
    id: 2,
    question: "Qui est le père fondateur de javascript ?",
    assertions: [
      { text: "Brendan Eich", isCorrect: true },
      { text: "Tim beerners Lee", isCorrect: false },
      { text: "Mark Zuckeberg", isCorrect: false },
      { text: "Mark Otto", isCorrect: false },
    ],
  },
  {
    id: 3,
    question: "Javascript est utilisé actuellement :",
    assertions: [
      { text: "du côté client seulement", isCorrect: false },
      { text: "du côté client et du côté serveur", isCorrect: true },
      { text: "du côté serveur seulement", isCorrect: false },
      { text: "du côté backend", isCorrect: false },
    ],
  },
  {
    id: 4,
    question: "Comment écrivez vous hello world dans une boite d'alerte ?",
    assertions: [
      { text: "msg('hello world')", isCorrect: false },
      { text: "msgbox('hello world')", isCorrect: false },
      { text: "alert('hello world')", isCorrect: true },
      { text: "alertbox('hello world')", isCorrect: false },
    ],
  },
  {
    id: 5,
    question: "Comment inserer un commentaire sur plusieurs lignes ?",
    assertions: [
      { text: "/* commentaire */", isCorrect: true },
      { text: "//commentaire ", isCorrect: false },
      { text: "' commentaire '", isCorrect: false },
      { text: "<!-- commentaire -->", isCorrect: false },
    ],
  },
  {
    id: 6,
    question: "Comment trouvez vous la plus grande valeur de a et b ?",
    assertions: [
      { text: "Math.ceil(a,b)", isCorrect: false },
      { text: "Math.max(a,b)", isCorrect: true },
      { text: "ceil(a,b)", isCorrect: false },
      { text: "top(a,b)", isCorrect: false },
    ],
  },
  {
    id: 7,
    question: "Quelle est la syntaxe correcte de la boucle for ?",
    assertions: [
      { text: "for (i <= 10; i++)", isCorrect: false },
      { text: "for i = 1 to 10", isCorrect: false },
      { text: "for (i = 0; i <= 10)", isCorrect: false },
      { text: "for (i = 0; i <= 10; i++)", isCorrect: true },
    ],
  },
  {
    id: 8,
    question: "Lequel n'est pas un opérateur de comparaison ?",
    assertions: [
      { text: "<", isCorrect: false },
      { text: ">", isCorrect: false },
      { text: "=", isCorrect: true },
      { text: "!=", isCorrect: false },
    ],
  },
  {
    id: 9,
    question: "Quel événement est spécifique au clavier ?",
    assertions: [
      { text: "onkeypress", isCorrect: true },
      { text: "onkeydown", isCorrect: false },
      { text: "onclick", isCorrect: false },
      { text: "onfocus", isCorrect: false },
    ],
  },

  {
    id: 10,
    question: "Quelle déclaration fournit la valeur d'une fonction ?",
    assertions: [
      { text: "cancel", isCorrect: false },
      { text: "return", isCorrect: true },
      { text: "continue", isCorrect: false },
      { text: "value of", isCorrect: false },
    ],
  },
  {
    id: 11,
    question: "Quelle méthode renvoie le caractère à l'index specifié ?",
    assertions: [
      { text: "characterAt()", isCorrect: false },
      { text: "getcharAt()", isCorrect: true },
      { text: "getAt()", isCorrect: false },
      { text: "charAt()", isCorrect: false },
    ],
  },
  {
    id: 12,
    question: "Lequel des éléments suivants n’est pas un événement de souris ?",
    assertions: [
      { text: "onmousescroller()", isCorrect: true },
      { text: "onclick()", isCorrect: false },
      { text: "onmouseover()", isCorrect: false },
      { text: "onmousemove", isCorrect: false },
    ],
  },
  {
    id: 13,
    question: "Comment savoir le nombre d’éléments d’un formulaire ?",
    assertions: [
      { text: "document.myform.elements.count", isCorrect: false },
      { text: "document.myform.length", isCorrect: false },
      { text: "document.myform.elements.length", isCorrect: true },
      { text: "document.myform.count", isCorrect: false },
    ],
  },
  {
    id: 14,
    question:
      "Laquelle des fonctions suivantes trie les éléments d’un tableau ?",
    assertions: [
      { text: "toSource()", isCorrect: false },
      { text: "toString()", isCorrect: false },
      { text: "unShift()", isCorrect: false },
      { text: "sort()", isCorrect: true },
    ],
  },
];
var start = true; //start

const nom = document.querySelector(".name-class");
const email = document.querySelector(".email-class");

const question = document.querySelector(".question-text");

const option2 = document.querySelector("#option2");
const option1 = document.querySelector("#option1");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");

const labelOption2 = document.querySelector(".option2");
const labelOption1 = document.querySelector(".option1");
const labelOption3 = document.querySelector(".option3");
const labelOption4 = document.querySelector(".option4");

const btnSuivant = document.querySelector(".suivant");
const btnQuitter = document.querySelector(".quitter");
const btnaccueil = document.querySelector(".btacceuil");

const globalResultat = document.querySelector(".resultat");
const globalQuestions = document.querySelector(".global-questions");
const btnCommencer = document.querySelector("#btcommencer");
const global = document.querySelector(".global");

const numeroQuestion = document.querySelector(".question-number");
const textResultat = document.querySelector(".text-result");

const inputs = document.querySelectorAll("input");

const progress = document.querySelector("#progress");
const time = document.querySelector(".time-counter");

const erreurName = document.querySelector(".erreur-nom");
const erreurEmail = document.querySelector(".erreur-mail");

function parcoursQuestions(id) {
  question.textContent = Questions[id].question;
  labelOption1.textContent = Questions[id].assertions[0].text;
  labelOption2.textContent = Questions[id].assertions[1].text;
  labelOption3.textContent = Questions[id].assertions[2].text;
  labelOption4.textContent = Questions[id].assertions[3].text;

  option1.value = Questions[id].assertions[0].isCorrect;
  option2.value = Questions[id].assertions[1].isCorrect;
  option3.value = Questions[id].assertions[2].isCorrect;
  option3.value = Questions[id].assertions[3].isCorrect;
}

let id = 0;
let nbreReussite = 0;
let resultat;

btnSuivant.addEventListener("click", () => {
  annulerBordure();
  ModifierBulle();
  calculResultat();
  reset_radio("radios");
  rendreBtnInaccessible();
});

function calculResultat() {
  let resultatFinal = 0;
  debuter();
  if (id < 14) {
    resultat = ischecked(id);
    id++;
    if (resultat == true) nbreReussite++;
    parcoursQuestions(id);
    numeroQuestion.textContent = id + 1 + "/15";
    chargerTexteButton();
  } else {
    derniereQuestion();
  }
}

function chargerTexteButton() {
  if (id == 14) {
    btnSuivant.textContent = "Terminer";
  }
}
function derniereQuestion() {
  id = 14;
  resultat = ischecked(id);
  if (resultat == true) nbreReussite++;
  affichageResultat();
}

function affichageResultat() {
  let iconereussite = document.querySelector("i");
  let pourcentage = Math.round((nbreReussite * 100) / 15);
  if (pourcentage >= 50) {
    iconereussite.classList.add(
      "fa-regular",
      "fa-circle-check",
      "icone-reussite"
    );
  } else {
    iconereussite.classList.add("fa-regular", "fa-circle-xmark", "icone");
  }
  textResultat.textContent = nbreReussite + "/15";
  document.querySelector(".name-resultat").textContent = nom.value;
  document.querySelector(".mail-resultat").textContent = email.value;
  globalQuestions.style.display = "none";
  globalResultat.style.display = "block";
}
//button quitter
btnQuitter.addEventListener("click", function () {
  affichageResultat();
});

btnCommencer.addEventListener("click", function (event) {
  event.preventDefault();
  validation();
});

nom.addEventListener("keypress", function () {
  erreurName.style.display = "none";
  nom.style.border = "1px solid #dddddd";
});
email.addEventListener("keypress", function () {
  erreurEmail.style.display = "none";
  email.style.border = "1px solid #dddddd";
});

// function rafraichirPage() {
//   location.reload();
// }

function validation() {
  if (nom.value == "") {
    erreurName.style.display = "block";
    nom.classList.add("inputborder");
  }
  if (email.value == "") {
    erreurEmail.style.display = "block";
    email.classList.add("inputborder");
  }
  if (nom.value.length < 2) {
    erreurName.style.display = "block";
    erreurName.textContent = "Votre doit contenir au moins deux caractères";
    nom.classList.add("inputborder");
  }
  if (email.value != "" && !email.value.includes("@gmail.com")) {
    erreurEmail.style.display = "block";
    erreurEmail.textContent = "Votre email n'est pas valide";
    email.classList.add("inputborder");
  }
  if (nom.value != "" && email.value.includes("@gmail.com") && nom.value.length >= 2) {
    global.style.display = "none";
    globalQuestions.style.display = "block";
    parcoursQuestions("0");
    debuter();
  }
}

btnaccueil.addEventListener("click", function () {
  global.style.display = "block";
  globalResultat.style.display = "none";
  location.reload();
});

function reset_radio(id_global) {
  let id_glo = document.getElementById(id_global);

  if (id_glo) {
    let tab = new Array();
    tab = document.getElementsByTagName("input");
    for (let i = 0; i < tab.length; i++) {
      if (tab[i].type == "radio") tab[i].checked = false;
    }
  }
}

function ischecked(id) {
  let result;
  if (option1.checked == true) result = Questions[id].assertions[0].isCorrect;
  else if (option2.checked == true)
    result = Questions[id].assertions[1].isCorrect;
  else if (option3.checked == true)
    result = Questions[id].assertions[2].isCorrect;
  else if (option4.checked == true)
    result = Questions[id].assertions[3].isCorrect;

  return result;
}

let intervalId = null;

function debuter() {
  if (intervalId) {
    clearInterval(intervalId);
  }
  let conteur = 60;

  function recupererId() {
    for (let i = 0; i < Questions.length; i++) {
      if (labelOption1.textContent == Questions[i].assertions[0].text) {
        var id = Questions[i].id;
      }
    }
    return id;
  }

  function progression() {
    conteur--;
    if (conteur == -1) {
      clearInterval(intervalId);
      let idrecu = recupererId();
      if (id < 14) {
        annulerBordure();
        ModifierBulle();
        parcoursQuestions(idrecu + 1);
        numeroQuestion.textContent = idrecu + 2 + "/15";
        debuter();
        resultat = ischecked(id);
        id++;
        if (resultat == true) nbreReussite++; //
        chargerTexteButton();
        reset_radio("radios");
        inaccessButtonTimer();
      } else {
        derniereQuestion();
      }
    } else {
      time.textContent = conteur;
      progress.style.width = conteur * 1.6667 + "%";
    }
  }
  intervalId = setInterval(progression, 1000); //1000
}

for (let i = 0; i < inputs.length; i++) {
  if (inputs[i].type == "radio") {
    inputs[i].addEventListener("click", function () {
      const btnSuivant = document.querySelector(".suivant");
      const valclass = document.querySelector(".S" + this.id);
      if (btnSuivant.disabled == true) {
        btnSuivant.style.opacity = "1";
        btnSuivant.disabled = false;
      }
      annulerBordure();
      ModifierBulle();
      if (this.checked == true) {
        this.parentNode.classList.add("borderradio");
        valclass.classList.add("bulle");
      }
    });
  }
}
function annulerBordure() {
  if (document.querySelector(".conteneur-reponse.borderradio")) {
    document
      .querySelector(".conteneur-reponse.borderradio")
      .classList.remove("borderradio");
  }
}
function ModifierBulle() {
  if (document.querySelector(".all.bulle")) {
    document.querySelector(".all.bulle").classList.remove("bulle");
  }
}
function rendreBtnInaccessible() {
  if (btnSuivant.disabled == true) {
    btnSuivant.disabled = false;
    btnSuivant.style.opacity = "1";
  } else {
    btnSuivant.disabled = true;
    btnSuivant.style.opacity = "0.4";
  }
}
function inaccessButtonTimer() {
  btnSuivant.disabled = true;
  btnSuivant.style.opacity = "0.4";
}

function effacerChiffre(input) {
  let regex = /[^a-z]/gi;
  input.value = input.value.replace(regex, "");
}
