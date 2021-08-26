const readLineSync = require('readline-sync');
const chalk = require('chalk');
const fs = require('fs');

let userName = readLineSync.question("Enter your name ");
const log = console.log;
var score = 0;
let c = 0;


function fillScoreBoardArray(content){
  content = content.split("\n\r");
  content = content[0].split("\n");
  score = [];
  for(let p of content){
    let profile = p.split(" ");
    score.push({"Name":profile[0], "Score":profile[1]});
  }
  return score;
}
function play(question, answer){
  let userAnswer = readLineSync.question(`${question} `);
  
  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    log("Correct answer, Great Job!");
    score = score + 1;
  }else{
    log("Incorrect answer, The correct answer is "+ chalk.green(answer));
  }
}

let questionBank = [{
  question: `How many seasons of Friends are there?
  a.10
  b.12
  c.8
  d.11\n`,
  answer:"a"
},{
  question: `Joey played Dr. Drake Ramoray on which soap opera show?
  a.Doctors
  b.Dr. Drake Ramoray
  c.Days of Our Lives
  d.Life of a Doctor\n`,
  answer: "c"
},{
  question: `How many times did Ross get divorced?
  a.1
  b.4
  c.2
  d.3\n`,
  answer: "d"
},{
  question: `What store does Phoebe hate?
  a.Bloomingdale
  b.Nordstrom
  c.Pottery Barn
  d.Macy\n`,
  answer: "c"
},{
  question: `Who was the maid of honor at Monica’s wedding?
  a.Phoebe
  b.Ursula
  c.Rachel
  d.Carol\n`,
  answer: "c"
},{
  question: `Monica dated an ophthalmologist named?
  a.Chandler
  b.Richard
  c.Chip Matthews
  d.Pete\n`,
  answer: "b"
},{
  question: `Which Sprouse brother played Ross’ son Ben?
  a.Chandler 
  b.Cole
  c.Frank
  d.Harry\n`,
  answer: "b"
},{
  question: `What is the name of Phoebe’s twin sister?
  a.Ursula
  b.Pheeb
  c.Katherine
  d.Coey\n`,
  answer: "a"
},{
  question: `Brad Pitt and David Schwimmer’s characters cofounded what club in high school?
  a.I Love Rachel Club
  b.I Hate Rachel Green Club
  c.I Hate Rachel Club
  d.Rachel Green The Bitch\n`,
  answer: "b"
},{
  question: `Who mistakingly threw a woman’s wooden leg into a fire?
  a.Chandler
  b.Richard
  c.Ross
  d.Joey\n`,
  answer: "d"
}];

for(let ques of questionBank){
  let Question = ques;
  play(Question.question, Question.answer);
}
let db = fs.readFileSync("database.txt");
db += `\n${userName} ${score}`;
fs.writeFileSync("database.txt", db);
let ScoreBoard = [];
ScoreBoard = fillScoreBoardArray(db);

ScoreBoard.sort(function(profile1, profile2){
  return profile2.Score-profile1.Score;
})
for(let i in ScoreBoard){
  if(ScoreBoard[i].Name === userName){
    if(i!=0){
      log(chalk.magenta(`You are at the ${parseInt(i)+1} position, No one told you it's going to be easy`));
    }else{
      log(chalk.magenta("Congratulation you break the highest score"));
    }
  }
}
// log(ScoreBoard);
