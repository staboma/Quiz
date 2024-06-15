const questions = [
    {
      question: "Türkiye'nin başkenti neresidir?",
      answers: ["İstanbul", "Ankara", "İzmir", "Bursa"],
      correct: 1
    },
    {
      question: "En büyük okyanus hangisidir?",
      answers: ["Atlantik Okyanusu", "Hint Okyanusu", "Arktik Okyanusu", "Pasifik Okyanusu"],
      correct: 3
    },
    {
      question: "2 + 2 kaç eder?",
      answers: ["3", "4", "5", "6"],
      correct: 1
    },
    {
      question: "Dünyanın en yüksek dağı hangisidir?",
      answers: ["K2", "Everest", "Kangchenjunga", "Lhotse"],
      correct: 1
    },
    {
      question: "Dünyanın en uzun nehri hangisidir?",
      answers: ["Amazon", "Nil", "Yangtze", "Mississippi"],
      correct: 1
    },
    {
      question: "Dünyanın en büyük kıtası hangisidir?",
      answers: ["Afrika", "Avrupa", "Asya", "Antarktika"],
      correct: 2
    },
    {
      question: "Einstein'ın ünlü denklemi nedir?",
      answers: ["E=mc^2", "a^2+b^2=c^2", "F=ma", "V=IR"],
      correct: 0
    },
    {
      question: "Bir kilometre kaç metredir?",
      answers: ["10", "100", "1000", "10000"],
      correct: 2
    },
    {
      question: "Python nedir?",
      answers: ["Bir yılan türü", "Bir programlama dili", "Bir araba markası", "Bir gezegen"],
      correct: 1
    },
    {
      question: "HTML ne anlama gelir?",
      answers: ["HyperText Markup Language", "HyperText Machine Language", "HyperText and links Markup Language", "HomeTool Markup Language"],
      correct: 0
    }
  ];
  
  let currentQuestion = 0;
  
  function loadQuestion() {
    const questionEl = document.getElementById("question");
    const answer0El = document.getElementById("answer0");
    const answer1El = document.getElementById("answer1");
    const answer2El = document.getElementById("answer2");
    const answer3El = document.getElementById("answer3");
  
    questionEl.textContent = questions[currentQuestion].question;
    answer0El.textContent = questions[currentQuestion].answers[0];
    answer1El.textContent = questions[currentQuestion].answers[1];
    answer2El.textContent = questions[currentQuestion].answers[2];
    answer3El.textContent = questions[currentQuestion].answers[3];
  }
  
  function checkAnswer(answer) {
    const resultEl = document.getElementById("result");
    if (answer === questions[currentQuestion].correct) {
      resultEl.textContent = "Doğru!";
      resultEl.style.color = "green";
    } else {
      resultEl.textContent = "Yanlış!";
      resultEl.style.color = "red";
    }
    setTimeout(nextQuestion, 2000);
  }
  
  function nextQuestion() {
    const resultEl = document.getElementById("result");
    resultEl.textContent = "";
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      document.getElementById("question").textContent = "Quiz bitti!";
      document.getElementById("answers").style.display = "none";
    }
  }
  
  window.onload = loadQuestion;
  