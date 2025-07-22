// quiz.js
const questions = [
    {
        question: "Q1 – Quelle fonction permet de filtrer dynamiquement une plage de données selon un critère ?",
        choices: ["A) CHOISIRCOLS", "B) TRIER", "C) FILTRE", "D) UNIQUE"],
        answer: 2
    },
    {
        question: "Q2 – Quelle combinaison permet de nommer une cellule de façon à ce qu’elle s’adapte en glissant verticalement ?",
        choices: ["A) $A$2", "B) Feuil2!$A$2", "C) Feuil2!$A2", "D) A$2"],
        answer: 2
    },
    {
        question: "Q3 – Quelle formule permet de créer une fonction personnalisée dans Excel ?",
        choices: ["A) LET", "B) NOMMER", "C) LAMBDA", "D) ADRESSE"],
        answer: 2
    },
    {
        question: "Q4 – La fonction NB.JOURS.OUVRES.INTL permet de :",
        choices: [
            "A) Compter uniquement les jours ouvrables du lundi au vendredi",
            "B) Compter les jours ouvrés avec des week-ends personnalisés",
            "C) Compter les jours de congé uniquement",
            "D) Compter les jours fériés selon un pays"
        ],
        answer: 1
    },
    {
        question: "Q5 – Quelle syntaxe permet de mettre en forme conditionnellement une ligne entière si une cellule contient “URGENT” ?",
        choices: [
            "A) =$A1=\"URGENT\"",
            "B) =A1=\"URGENT\"",
            "C) =$A$1=\"URGENT\"",
            "D) =SI(A1=\"URGENT\")"
        ],
        answer: 0
    },
    {
        question: "Q6 – À quoi sert la fonction ADRESSE(2;3) ?",
        choices: [
            "A) Donne la valeur de la cellule B2",
            "B) Donne l’adresse sous forme de texte de la cellule ligne 2, colonne 3",
            "C) Renvoie une cellule vide",
            "D) Crée une adresse mail"
        ],
        answer: 1
    },
    {
        question: "Q7 – Laquelle de ces fonctions est nouvelle avec Excel 365 ?",
        choices: [
            "A) CONCATENER",
            "B) STXT",
            "C) JOINDRE.TEXTE",
            "D) TEXTE"
        ],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");

function loadQuestion() {
    nextBtn.disabled = true;
    scoreEl.textContent = "";
    let q = questions[currentQuestion];
    questionEl.textContent = q.question;
    choicesEl.innerHTML = "";
    q.choices.forEach((choice, i) => {
        let btn = document.createElement("button");
        btn.textContent = choice;
        btn.className = "choice";
        btn.onclick = function() {
            document.querySelectorAll('.choice').forEach(c => c.classList.remove('selected'));
            btn.classList.add('selected');
            nextBtn.disabled = false;
        };
        choicesEl.appendChild(btn);
    });
}

nextBtn.addEventListener('click', () => {
    let selected = Array.from(document.querySelectorAll('.choice')).findIndex(c => c.classList.contains('selected'));
    if (selected === questions[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        questionEl.textContent = "Quiz terminé !";
        choicesEl.innerHTML = "";
        nextBtn.style.display = "none";
        scoreEl.textContent = `Votre score : ${score} / ${questions.length}`;
    }
});

loadQuestion();
