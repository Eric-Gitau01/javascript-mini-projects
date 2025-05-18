const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum+ 1) + minNum)

console.log(answer)  

let attempts = 0;
let guess = ''
let running = true

while(running) {
    guess = prompt(`Guess a number between ${minNum} - ${maxNum}`)

    if(isNaN(guess)) {
        alert("please enter a valid number")
    } else if (guess < minNum || guess > maxNum) {
        alert("Please enter a number within the range")
    } else { 
        attempts++
        if (guess < answer) {
            window.alert('Too low! Try again!')
        } else if (guess > answer) {
            alert('Too higs Try again')
        } else {
            window.alert(`correct The answer was ${answer}it took ${attempts} attemps`)
            running = false
        }
        
    }
   
}