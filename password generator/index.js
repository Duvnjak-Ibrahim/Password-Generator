// numbers[Math.floor(Math.random()*9)]
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

const numbersAndLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const lettersAndSigns = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

const numbersAndSigns = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

const signs = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

let passwordPrinted = false
let pass1El = document.getElementById("password1-el");
let pass2El = document.getElementById("password2-el");

 function resetValues(){
    pass1El.textContent = " ";
     pass2El.textContent = " ";
 }


function generate(){
  for(let i =0;i<16;i++){
      pass1El.textContent += characters[Math.floor(Math.random()*90)];
      pass2El.textContent += characters[Math.floor(Math.random()*90)];
 
  }
}


function generatenums(){
    for(let i=0;i<16;i+=1){
        
        pass1El.textContent += numbers[Math.floor(Math.random()*9)];
        pass2El.textContent += numbers[Math.floor(Math.random()*9)];
    }
    
}

function NumbersAndLetters(){
    for(let i = 0;i<16;i++){
        pass1El.textContent+=numbersAndLetters[Math.floor(Math.random()*numbersAndLetters.length)]
        pass2El.textContent+=numbersAndLetters[Math.floor(Math.random()*numbersAndLetters.length)]
    }    
}


function lettersAndSign(){
    for(let i = 0;i<16;i++){
        pass1El.textContent+=lettersAndSigns[Math.floor(Math.random()*lettersAndSigns.length)]
        pass2El.textContent+=lettersAndSigns[Math.floor(Math.random()*lettersAndSigns.length)]
    }
}


function numbersAndSign(){
    for(let i=0;i<16;i++){
        pass1El.textContent+=numbersAndSigns[Math.floor(Math.random()*numbersAndSigns.length)]
        pass2El.textContent+=numbersAndSigns[Math.floor(Math.random()*numbersAndSigns.length)]
    }
    
}

function letter(){
    for(let i = 0;i<16;i++){
        pass1El.textContent+=letters[Math.floor(Math.random()*letters.length)]
        pass2El.textContent+=letters[Math.floor(Math.random()*letters.length)]
    }
}


function sign(){
    for(let i=0; i<16;i++){
        pass1El.textContent+=signs[Math.floor(Math.random()*signs.length)]
        pass2El.textContent+=signs[Math.floor(Math.random()*signs.length)]
}
}