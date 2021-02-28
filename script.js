let usrName;
let index = 0;
let m_point= 0;
let b_point= 0;
let t_point= 0;
let i_point= 0;


function displayQuestion(){
  
  document.querySelector("#number").textContent = 
  questions[index].nnn
  
  document.querySelector("#question__h2").textContent = questions[index].text
  
  document.querySelector("#answer__a1").textContent = questions[index].one
  
  document.querySelector("#answer__a2").textContent = questions[index].two
}

const startBtn = document.querySelector("#start")
const answerBtn1 = document.querySelector("#answer__a1")
const answerBtn2 = document.querySelector("#answer__a2")

startBtn.onclick = function(){
  usrName = document.querySelector("#name").value

  if(usrName == "") return;
  
  document.querySelector("#home").style.display = "none"
  
  document.querySelector("#quiz").style.display = "block"
  
  
  displayQuestion()
}

answerBtn1.onclick = function(){
  
  
  selectAnswer(true)
  index++;
  
  
  if(index > 11){ 
    document.querySelector("#home").style.display = "none"
    document.querySelector("#quiz").style.display = "none"
    document.querySelector("#loading").style.display="block"
    document.querySelector("#result").style.display = "none"
    setTimeout(function(){
      displayResult()
    }, 2000)
    //displayResult()
    return; 
  }
  
  displayQuestion()
}

answerBtn2.onclick = function(){
  
  selectAnswer(false)
  index++;
  
  if(index > 11){ 
    document.querySelector("#home").style.display = "none"
    document.querySelector("#quiz").style.display = "none"
    document.querySelector("#loading").style.display="block"
    document.querySelector("#result").style.display = "none"
    setTimeout(function(){
      displayResult()
    }, 2000)
    //displayResult()
    return; 
  }
  
  displayQuestion()
}


function selectAnswer(isPositive){
  if(questions[index].checkPoint == "m"){
    m_point += isPositive ? 1 : -1;
  }else if(questions[index].checkPoint == "b"){
    b_point += isPositive ? 1 : -1;
  }else if(questions[index].checkPoint == "t"){
    t_point += isPositive ? 1 : -1;
  }else if(questions[index].checkPoint == "i"){
    i_point += isPositive ? 1 : -1;
  }
}


function displayResult(){
  
  let characterResult = "";
  let characterResultIdx = 0;
  
  m_point > 0 ? characterResult+="E" : characterResult+="I"
  b_point > 0 ? characterResult+="S" : characterResult+="N"
  t_point > 0 ? characterResult+="T" : characterResult+="F"
  i_point > 0 ? characterResult+="P" : 
  characterResult+="J"
    
  console.log("당신의 점수는 : ", {
    m_point, b_point, t_point, i_point
  }, characterResult)
  
  if(characterResult == "ISTJ"){
    characterResultIdx = 0;
  }
    if(characterResult == "ISFJ"){
    characterResultIdx = 1;
  }
    if(characterResult == "ISFP"){
    characterResultIdx = 2;
  }
    if(characterResult == "ISTP"){
    characterResultIdx = 3;
  }
    if(characterResult == "INFJ"){
    characterResultIdx = 4;
  }
    if(characterResult == "INTJ"){
    characterResultIdx = 5;
  }
    if(characterResult == "INFP"){
    characterResultIdx = 6;
  }
    if(characterResult == "INTP"){
    characterResultIdx = 7;
  }
    if(characterResult == "ESTP"){
    characterResultIdx = 8;
  }
    if(characterResult == "ESFP"){
    characterResultIdx = 9;
  }
    if(characterResult == "ESTJ"){
    characterResultIdx = 10;
  }
    if(characterResult == "ESFJ"){
    characterResultIdx = 11;
  }
    if(characterResult == "ENFP"){
    characterResultIdx = 12;
  }
    if(characterResult == "ENFJ"){
    characterResultIdx = 13;
  }
    if(characterResult == "ENTP"){
    characterResultIdx = 14;
  }
    if(characterResult == "ENTJ"){
    characterResultIdx = 15;
  }
  
  
  document.querySelector("#home").style.display = "none"
  document.querySelector("#quiz").style.display = "none"
  document.querySelector("#loading").style.display="none"
  document.querySelector("#result").style.display = "block"
  

  

 
  
  document.querySelector("#ppp").src = RESULT[characterResultIdx].picture
  
  document.querySelector(".user-name").textContent = usrName
  
  document.querySelector("#ch").textContent = RESULT[characterResultIdx].name
  
  document.querySelector("#ch").style.color=RESULT[characterResultIdx].theme
    
    
  document.querySelector("#ex").textContent = RESULT[characterResultIdx].ex

}

const reStart = document.querySelector("#restart")
reStart.onclick = function (){
  location.reload();
}



