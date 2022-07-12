var readlineSync = require('readline-Sync');
var score = 0;


var question1 ="What is my Age";
var question2 ="What is the name of my favourite Headphone?";
var question3 ="What is the nickname of my car";

var ans1 ="23";
var ans2 ="sundara";
var ans3 ="panda";

console.log("_____Lets quiz you on How well you know parth!______");
var username = readlineSync.question("First, Tell me your name: ")

console.log("Hello, ",username)



var userAns= readlineSync.question(question1);
if(userAns===ans1.toLowerCase()){
    console.log("Correct Answer, You get 10 points!!");
    score= score+10;
}else{
    console.log("Oh No!, That was an incorrect answer :(");
    console.log("Dont worry, try again");
}

var userAns= readlineSync.question(question2);
if(userAns===ans2.toLowerCase()){
    console.log("Correct Answer, You get 10 points!!");
    score= score+10;
}else{
    console.log("Oh No!, That was an incorrect answer :(");
    console.log("Dont worry, try again");
}

var userAns= readlineSync.question(question3);
if(userAns===ans3.toLowerCase()){
    console.log("Correct Answer, You get 10 points!!");
    score= score+10;
}else{
    console.log("Oh No!, That was an incorrect answer :(");
    console.log("Dont worry, try again");
}


console.log("Your total Score is: ", score);
if(score.valueOf()>10){
    console.log("You know me really well!")
}else{
    console.log("Dont worry, you can try again! :( ")
}


