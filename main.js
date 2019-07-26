document.getElementById("btn1").addEventListener("click", myName)
document.getElementById("btn2").addEventListener("click", mySchool)
document.getElementById("btn3").addEventListener("click", myCareer)
document.getElementById("btn4").addEventListener("click", myHobbies)


function myName() {
    document.getElementById("name").innerHTML = "My name's Sritha Yalamanchili. I'm 14 years old, and sometimes I can be really dumb.";
}

function mySchool() {
    document.getElementById("school").innerHTML = "I'm going to be a freshman at Westwood Highscool.";
}

function myCareer() {
    document.getElementById("career").innerHTML = "I want to have a career in forensics, but if a job at Taco Bell comes along, I wouldn't refuse.";
}

function myHobbies() {
    document.getElementById("hobbies").innerHTML = "";
}
