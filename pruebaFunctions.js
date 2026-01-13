//este bloque ayuda al usuario a seleccionar el string y returnarlo como seleccion para comparar y sino evaluar si fue una seleccion valida
const getUserChoice = userChoice =>{
userChoice = userChoice.toLowerCase();
if (userChoice === 'rock'){return userChoice}
else if (userChoice === 'paper'){return userChoice}
else if (userChoice === 'scissors'){return userChoice}
else {console.log('make a selection')}
}

//debajo de la funcion define la decision de la computadora con un numero al azar y convirtiendolo a string
function getComputerChoice(){
const computerChoice = Math.floor(Math.random()*3)
switch (computerChoice){
case 0:
return 'rock'
break;
case 1:
return 'paper'
break;
case 2:
return 'scissors'
break;
}
} 

const determineWinner = (userChoice, computerChoice) => {
//debajo se define el empate al ser el mas facil de comparar
if (userChoice === computerChoice){return 'tie'}
//debajo se define el ganador o perdedor si el usuario selecciona roca
if (userChoice === 'rock'){if (computerChoice === 'paper'){return 'computer wins'}
else if (computerChoice === 'scissors'){return 'user wins'}
}
//se define el ganador con el usuario seleccionando papel
if (userChoice === 'paper'){if (computerChoice === 'scissors'){return 'computer wins'}
else if (computerChoice === 'rock'){return 'user wins'}}
//debajo se define tijeras
if (userChoice === 'scissors'){if (computerChoice === 'rock'){return 'computer wins'}
else if (computerChoice === 'paper'){return 'user wins'}
}
if (userChoice === 'bomb'){return 'CHEAT CODE ENABLED, USER WINSS!!!'}

}
//funcion para que cada funcion previa haga su parte en el resultado final
function playGame(userChoice){
console.log(userChoice)
let computerChoice = getComputerChoice()
console.log(computerChoice)
console.log(determineWinner(userChoice,computerChoice)
)
}
//juego
playGame('bomb')
