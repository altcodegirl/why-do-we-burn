var question = [
  "Why do we burn?",
]
var intro = [
  "I burn... ",
]
var answers = [
  "to practice vulnerability",
  "to know more about myself",
  "to burn the brain blocks",
  "for the community spirit",
  "to feel accepted",
  "to break down my own barriers",
  "because it’s a great party!",
];
var index = 0;

function setup() {
  createCanvas(1200, 600);
}

function draw() {

  background(0, 128, 145);
  fill(255);
  textSize(50);
  text(question, 14, 150)
  text(intro + answers[index], 14, 300);
}

//to move through to the next word when mouse is pressed
function mousePressed() {
  index = index + 1;

//to make it start again at the beginning no matter how many words you add
  if (index == answers.length) {
    index = 0;
  }
}
