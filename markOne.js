var readlineSync = require('readline-Sync');
var score = 0;


var question1 ="What is my Age";
var question2 ="What is the name of my favourite Headphone?";
var question3 ="What is the nickname of my car";

var ans1 ="23";
var ans2 ="sundara";
var ans3 ="panda";

print("_____Lets quiz you on How well you know parth!______");
var username = readlineSync.question("First, Tell me your name: ")

print("Hello, ",username)



var userAns= readlineSync.question(question1);
if(userAns===ans1.toLowerCase()){
    print("Correct Answer, You get 10 points!!");
    score= score+10;
}else{
    print("Oh No!, That was an incorrect answer :(");
    print("Dont worry, try again");
}

var userAns= readlineSync.question(question2);
if(userAns===ans2.toLowerCase()){
    print("Correct Answer, You get 10 points!!");
    score= score+10;
}else{
    print("Oh No!, That was an incorrect answer :(");
    print("Dont worry, try again");
}

var userAns= readlineSync.question(question3);
if(userAns===ans3.toLowerCase()){
    print("Correct Answer, You get 10 points!!");
    score= score+10;
}else{
    print("Oh No!, That was an incorrect answer :(");
    print("Dont worry, try again");
}


print("Your total Score is: ", score);
if(score.valueOf()>10){
    print("You know me really well!")
}else{
    print("Dont worry, you can try again! :( ")
}


