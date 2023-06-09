function openPopup(popupId) {
  var popup = document.getElementById(popupId);
  popup.style.display = "block";
}

function closePopup(popupId) {
  var popup = document.getElementById(popupId);
  popup.style.display = "none";
}

function signup(e) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  var user = {
    username: username,
    password: password,
  };

  var json = JSON.stringify(user);
  localStorage.setItem(username, json);
  console.log("user added");
}

function login(e) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var result = document.getElementById("result");

  var user = localStorage.getItem(username);
  var data = JSON.parse(user);
  console.log(data);

  if (user == null) {
    result.innerHTML = "wrong username";
  } else if (username == data.username && password == data.password) {
    location.replace("../index.html");
  } else {
    result.innerHTML = "wrong password";
  }
}

const quizData = [
  {
    question: "Soru 1 ?",
    a: "cds",
    b: "dcs csd",
    c: "cds sdc",
    d: "cds dc",
    e: "dsc dsc",
    correct: "a",
  },
  {
    question: "cds dc dcs dcs?",
    a: "dc dcs dcs",
    b: "dcs ds",
    c: "dcs dc",
    d: "d dcs",
    e: "dc cds",
    correct: "b",
  },
  {
    question: "ddc dc dc ds?",
    a: "dcs dc ds",
    b: "dcs dcs",
    c: "dcs dc",
    d: "dcs dc",
    e: "dsc dsc",
    correct: "d",
  },
  {
    question: "dsc dcs dcs dcs?",
    a: "dc sdc dcs",
    b: "dsc d",
    c: "dc dcs",
    d: "dsc dc",
    e: "dsc dcs",
    correct: "c",
  },
  {
    question: " dc-dcs dcs?",
    a: "dcs dcs cds",
    b: "dcs dcs",
    c: "dcs dcs",
    d: "dcs dcs",
    e: "dcs dcs",
    correct: "e",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const e_text = document.getElementById("e_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];

  deselectedAnswers();

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
  e_text.innerText = currentQuizData.e;
}

function deselectedAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  //console.log(answer)

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
      <h2> Test tamamlandı, ${score * 20} puan aldınız🥳 </h2>
      <button class="submit" onClick="location.reload()"> Tekrar Dene 🌀  </button>

    `;
    }
  }
});

function openPopup(popupId) {
  var popup = document.getElementById(popupId);
  popup.style.display = "block";
}

function closePopup(popupId) {
  var popup = document.getElementById(popupId);
  popup.style.display = "none";
}
