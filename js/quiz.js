const quiz = [
  { q: "What is the middle name of our founder?", a: ["Jamal", "Jackson", "Joseph"], correct: 2 },
  { q: "What year was Real Life founded?", a: ["1988", "1998", "1992"], correct: 0 },
  { q: "What is MJ the King of?", a: ["Pop", "Rock", "Music"], correct: 0 },
  { q: "What is the second name of the man who made an attempt on MJ's life?", a: ["Jim", "James", "Jones"], correct: 2 },
  { q: "With enough training what powers can be attained?", a: ["Mental Obliteration", "Eternal Life", "Flight" , "All of the above"], correct: 3 },
  { q: "What is the eighth planet in the solar system?", a: ["Mars", "Neptune", "Pluto"], correct: 1 }
];

let i = 0;

function load() {
  document.getElementById("feedback").textContent = "";

  document.getElementById("question").textContent = quiz[i].q;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  quiz[i].a.forEach((text, index) => {
    const btn = document.createElement("button");
    btn.textContent = text;

    btn.onclick = function () {
  if (index === quiz[i].correct) {
    i++;

    if (i === quiz.length) {
      document.getElementById("answers").innerHTML = "";
      completeTask("quiz");
      window.location.href = "lessons.html";
    } else {
      load();
    }

  } else {
    document.getElementById("feedback").textContent = "Wrong answer! Starting over";
    i = 0; 
    setTimeout(load, 1000); //delay between failure text and reset
  }
};

    answersDiv.appendChild(btn);
    answersDiv.appendChild(document.createElement("br"));
  });
}

load();