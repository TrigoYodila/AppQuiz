// Questions will be asked
const Questions = [
  {
    id: 0,
    q: "Quel est le type d'un fichier javascript ?",
    a: [
      { text: ".ts", isCorrect: false },
      { text: ".jsx", isCorrect: false },
      { text: ".js", isCorrect: true },
      { text: ".j", isCorrect: false },
    ],
  },
  {
    id: 1,
    q: "Dans quelle balise plaçons nous le javascript ?",
    a: [
      { text: "<html>", isCorrect: false },
      { text: "<style>", isCorrect: false },
      { text: "<body>", isCorrect: false },
      { text: "<script>", isCorrect: true },
    ],
  },
  {
    id: 2,
    q: "Qui est le père fondateur de javascript ?",
    a: [
      { text: "Brendan Eich", isCorrect: true },
      { text: "Tim beerners Lee", isCorrect: false },
      { text: "Mark Zuckeberg", isCorrect: false },
      { text: "Mark Otto", isCorrect: false },
    ],
  },
  {
    id: 3,
    q: "Javascript est utilisé actuellement :",
    a: [
      { text: "du côté client seulement", isCorrect: false },
      { text: "du côté client et du côté serveur", isCorrect: true },
      { text: "du côté serveur seulement", isCorrect: false },
      { text: "du côté backend", isCorrect: false },
    ],
  },
  {
    id: 4,
    q: "Comment écrivez vous hello world dans une boite d'alerte ?",
    a: [
      { text: "msg('hello world')", isCorrect: false },
      { text: "msgbox('hello world')", isCorrect: false },
      { text: "alert('hello world')", isCorrect: true },
      { text: "alertbox('hello world')", isCorrect: false },
    ],
  },
  {
    id: 5,
    q: "Comment inserer un commentaire sur plusieurs lignes ?",
    a: [
      { text: "/* commentaire */", isCorrect: true },
      { text: "//commentaire ", isCorrect: false },
      { text: "' commentaire '", isCorrect: false },
      { text: "<!-- commentaire -->", isCorrect: false },
    ],
  },
  {
    id: 6,
    q: "Comment trouvez vous la plus grande valeur de a et b ?",
    a: [
      { text: "Math.ceil(a,b)", isCorrect: false },
      { text: "Math.max(a,b)", isCorrect: true },
      { text: "ceil(a,b)", isCorrect: false },
      { text: "top(a,b)", isCorrect: false },
    ],
  },
  {
    id: 7,
    q: "Quelle est la syntaxe correcte de la boucle for ?",
    a: [
      { text: "for (i <= 10; i++)", isCorrect: false },
      { text: "for i = 1 to 10", isCorrect: false },
      { text: "for (i = 0; i <= 10)", isCorrect: false },
      { text: "for (i = 0; i <= 10; i++)", isCorrect: true },
    ],
  },
  {
    id: 8,
    q: "Lequel n'est pas un opérateur de comparaison ?",
    a: [
      { text: "<", isCorrect: false },
      { text: ">", isCorrect: false },
      { text: "=", isCorrect: true },
      { text: "!=", isCorrect: false },
    ],
  },
  {
    id: 9,
    q: "Quel événement est spécifique au clavier ?",
    a: [
      { text: "onkeypress", isCorrect: true },
      { text: "onkeydown", isCorrect: false },
      { text: "onclick", isCorrect: false },
      { text: "onfocus", isCorrect: false },
    ],
  },
  
  {
    id: 10,
    q: "Quelle déclaration fournit la valeur d'une fonction ?",
    a: [
      { text: "cancel", isCorrect: false },
      { text: "return", isCorrect: true },
      { text: "continue", isCorrect: false },
      { text: "value of", isCorrect: false },
    ],
  },
  {
    id: 11,
    q: "Quelle méthode renvoie le caractère à l'index specifié ?",
    a: [
      { text: "characterAt()", isCorrect: false },
      { text: "getcharAt()", isCorrect: true },
      { text: "getAt()", isCorrect: false },
      { text: "charAt()", isCorrect: false },
    ],
  },
  {
    id: 12,
    q: "Lequel des éléments suivants n’est pas un événement de souris ?",
    a: [
      { text: "onmousescroller()", isCorrect: true },
      { text: "onclick()", isCorrect: false },
      { text: "onmouseover()", isCorrect: false },
      { text: "onmousemove", isCorrect: false },
    ],
  },
  {
    id: 13,
    q: "Comment savoir le nombre d’éléments d’un formulaire ?",
    a: [
      { text: "document.myform.elements.count", isCorrect: false },
      { text: "document.myform.length", isCorrect: false },
      { text: "document.myform.elements.length", isCorrect: true },
      { text: "document.myform.count", isCorrect: false },
    ],
  },
  {
    id: 14,
    q: "Laquelle des fonctions suivantes trie les éléments d’un tableau ?",
    a: [
      { text: "toSource()", isCorrect: false },
      { text: "toString()", isCorrect: false },
      { text: "unShift()", isCorrect: false },
      { text: "sort()", isCorrect: true },
    ],
  },
];
var start = true; //start
/* ciblage des options */
const op2 = document.querySelector("#option2");
const op1 = document.querySelector("#option1");
const op3 = document.querySelector("#option3");
const op4 = document.querySelector("#option4");
const op2lbl = document.querySelector(".option2"); // label d'options
const op1lbl = document.querySelector(".option1");
const op3lbl = document.querySelector(".option3");
const op4lbl = document.querySelector(".option4");
//Fonction Iterate
function iterate(id) {
  const question = document.querySelector(".question-text"); // Getting the question
  question.textContent = Questions[id].q; // Setting the question text
  // Providing option text
  op1lbl.textContent = Questions[id].a[0].text;
  op2lbl.textContent = Questions[id].a[1].text;
  op3lbl.textContent = Questions[id].a[2].text;
  op4lbl.textContent = Questions[id].a[3].text;
  // Providing the true or false value to the options
  op1.value = Questions[id].a[0].isCorrect;
  op2.value = Questions[id].a[1].isCorrect;
  op3.value = Questions[id].a[2].isCorrect;
  op4.value = Questions[id].a[3].isCorrect;
}
// Next button and method
const next = document.querySelector(".suivant");
const quitter = document.querySelector(".quitter");
const accueil = document.querySelector(".btacceuil");
//ciblage des blocs
const globalR = document.querySelector(".resultat");
const globalop = document.querySelector(".global-questions");
const btnCommencer = document.querySelector("#btcommencer");
const content = document.querySelector(".global");
//const content_op = document.querySelector(".global-questions");
//recuperation number
const text = document.querySelector(".question-number");
const textfinal = document.querySelector(".text-result");
//nom et email
const nom = document.querySelector(".name-class");
const email = document.querySelector(".email-class");
// const nomR = document.querySelector("name-resultat");
// const mailR = document.querySelector("mail-resultat");
let id = 0;
let NbreReussite = 0;
let result;
//Button suivant
next.addEventListener("click", () => {
  //annuler le cochage
  resetborder();
  resetbulle();

  let resfinal = 0;
  debuter(); /* Redemarrage du compteur */
  if (id < 14) {
    result = ischecked(id);
    id++;
    // alert("reponse " + result);
    //Test de l'assertion coché
    if (result == true) NbreReussite++;
    iterate(id);
    text.textContent = id + 1 + "/15";
    //appel de la méthode inaccess
  } else {
    id = 14;
    result = ischecked(id);
    if (result == true) NbreReussite++; //
    Affichage();
  }
  reset_radio("radios");
  inaccessButton();
});

//fonction affichage
function Affichage() {
  let iconereussite = document.querySelector("i");
  //test pour recupérere le resultat final
  let pourcentage = Math.round((NbreReussite * 100) / 15);
  if (pourcentage >= 50) {
    iconereussite.classList.add(
      "fa-regular",
      "fa-circle-check",
      "icone-reussite"
    );
  } else {
    iconereussite.classList.add("fa-regular", "fa-circle-xmark", "icone");
  }
  textfinal.textContent = NbreReussite + "/15";
  document.querySelector(".name-resultat").textContent = nom.value;
  document.querySelector(".mail-resultat").textContent = email.value;
  globalop.style.display = "none";
  globalR.style.display = "block";
}
//button quitter
quitter.addEventListener("click", function () {
  Affichage();
});

/* appel de la deuxième page */
btnCommencer.addEventListener("click", function (event) {
  event.preventDefault();
  valid();
  //disparaitre les textes après ecriture
  nom.addEventListener("keypress", function () {
    erreurName.style.display = "none";
  });
  email.addEventListener("keypress", function () {
    erreurEmail.style.display = "none";
  });
});

function refresh() {
  location.reload();
}

function valid() {
  const erreurName = document.querySelector(".erreur-nom");
  const erreurEmail = document.querySelector(".erreur-mail");
  if (nom.value == "") {
    erreurName.style.display = "block";
    nom.classList.add("inputborder");
    setTimeout(refresh, 1500);
  }
  if (email.value == "") {
    erreurEmail.style.display = "block";
    email.classList.add("inputborder");
    setTimeout(refresh, 1500);
  }
  if (nom.value.length > 20) {
    erreurName.style.display = "block";
    erreurName.textContent = "Votre nom ne doit pas dépasser 25 caractères";
    nom.classList.add("inputborder");
    setTimeout(refresh, 1500);
  }
  if (email.value != "" && !email.value.includes("@gmail")) {
    erreurEmail.style.display = "block";
    erreurEmail.textContent = "Votre email n'est pas valide";
    email.classList.add("inputborder");
    setTimeout(refresh, 1500);
  }
  if (nom.value != "" && email.value.includes("@gmail")) {
    content.style.display = "none";
    globalop.style.display = "block";
    iterate("0");
    debuter();
  }
}
//button accueil
accueil.addEventListener("click", function () {
  content.style.display = "block";
  globalR.style.display = "none";
  location.reload();
});
/* fonction reset radio */
function reset_radio(id_global) {
  let id_glo = document.getElementById(id_global);

  if (id_glo) {
    let tab = new Array();
    tab = document.getElementsByTagName("input");
    //liste des éléments du tableau
    for (let i = 0; i < tab.length; i++) {
      //si la balise est du type radio
      if (tab[i].type == "radio") tab[i].checked = false;
    }
  }
}
/* fonction verification réponse */
function ischecked(id) {
  const op2 = document.querySelector("#option2");
  const op1 = document.querySelector("#option1");
  const op3 = document.querySelector("#option3");
  const op4 = document.querySelector("#option4");
  let result;
  if (op1.checked == true) result = Questions[id].a[0].isCorrect;
  else if (op2.checked == true) result = Questions[id].a[1].isCorrect;
  else if (op3.checked == true) result = Questions[id].a[2].isCorrect;
  else if (op4.checked == true) result = Questions[id].a[3].isCorrect;

  return result;
}
/* function progress bar */
var intervalId = null;

function debuter() {
  //s'il existe une intervalle annule
  if (intervalId) {
    clearInterval(intervalId);
  }
  const progress = document.querySelector("#progress");
  const time = document.querySelector(".time-counter");
  let counter = 60;

  function progression() {
    counter--;
    if (counter == -1) {
      clearInterval(intervalId);
      //recupère contenu label(radio) 1
      for (let i = 0; i < Questions.length; i++) {
        if (op1lbl.textContent == Questions[i].a[0].text) {
          var takeid = Questions[i].id;
        }
      }
      //si on a pas atteint la fin
      if (id < 14) {
        resetborder();
        resetbulle();
        iterate(takeid + 1);
        text.textContent = takeid + 2 + "/15";
        debuter();

        result = ischecked(id);
        id++; //
        //Test de l'assertion coché
        if (result == true) NbreReussite++; //
        reset_radio("radios");
        inaccessButtonTimer();
      } else {
        id = 14; //14
        result = ischecked(id);
        if (result == true) NbreReussite++; //
        Affichage();
      }
    } else {
      time.textContent = counter;
      progress.style.width = counter * 1.6667 + "%";
    }
  }
  intervalId = setInterval(progression, 1000); //1000
}

//rendre le bouton suivant accessible
const inputs = document.querySelectorAll("input");
// const bulle = document.querySelector(".spanall");
for (let i = 0; i < inputs.length; i++) {
  if (inputs[i].type == "radio") {
    inputs[i].addEventListener("click", function () {
      const next = document.querySelector(".suivant");
      const valclass = document.querySelector(".S" + this.id);
      // alert("valclass = " + valclass);
      //récuperation de la classe pas d'opacity
      if (next.disabled == true) {
        next.style.opacity = "1";
        next.disabled = false;
      }
      //si le div contient la classe border (pour cibler le radio qui ale bordure)
      resetborder();
      resetbulle();
      if (this.checked == true) {
        // alert("parent " + this.parentNode);
        this.parentNode.classList.add("borderradio");
        valclass.classList.add("bulle");
      }
    });
  }
}
function resetborder() {
  if (document.querySelector(".div-opt.borderradio")) {
    document
      .querySelector(".div-opt.borderradio")
      .classList.remove("borderradio");
  }
}
function resetbulle() {
  if (document.querySelector(".all.bulle")) {
    document.querySelector(".all.bulle").classList.remove("bulle");
  }
}
//fonction pour rendre le boutton suivant inaccessible
function inaccessButton() {
  const next = document.querySelector(".suivant");
  //si bouton inactif, on active
  if (next.disabled == true) {
    next.disabled = false;
    next.style.opacity = "1";
  } else {
    next.disabled = true;
    next.style.opacity = "0.4";
  }
}
function inaccessButtonTimer() {
  const next = document.querySelector(".suivant");
  next.disabled = true;
  next.style.opacity = "0.4";
}
//fonction d'interdiction des chiffres
function makeletters(input) {
  let regex = /[^a-z]/gi;
  input.value = input.value.replace(regex, "");
}
