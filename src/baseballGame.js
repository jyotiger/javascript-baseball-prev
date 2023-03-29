  import { setComputerNumber, getComputerNumber } from "./numberPick.js";
  export default class BaseballGame {
    start() {
        setComputerNumber();
    }
    checkResult() {
        let inputValue = this.getInputValue();
        if(this.inputValidCheck(inputValue)){
            const resultDiv = document.getElementById('result');
            resultDiv.innerText = this.play(getComputerNumber(),inputValue)
        }
    }

    getInputValue(){
        const inputBox = document.getElementById('user-input');
        return inputBox.value.split('');
    }

    inputValidCheck(value){
        let inputArray = [...new Set(value)];
        let checkNumber = /^[1-9]+$/; 
        if(inputArray.length !== 3 || !checkNumber.test(inputArray.join(''))){
            alert('1~9까지의 수를 중복없이 3개 입력해주세요.');
            return false;
        }
        return true;
    }
    
    play(computerNumbers, userNumbers){
        let ball = 0; 
        let strike = 0;
        userNumbers.forEach((row,uIndex)=>{
            for(let i=0; i<3; i++){
                if(computerNumbers[i] == row){
                    if(i===uIndex){
                        strike++;
                    }else{
                        ball++;
                    }
                    break;
                }
            }
        })
        return this.setAnswer(ball, strike);
    }

    setAnswer(ball,strike){
        if(ball > 0 && strike > 0){
            return `${ball}볼 ${strike}스트라이크`;
        }else if(ball>0 && strike === 0){
            return `${ball}볼`
        }else if(ball === 0 && strike >0){
            if(strike === 3){
                this.showRestart(true);
                return '🎉정답을 맞추셨습니다🎉';
            }
            return `${strike}스트라이크`;
        }else{
            return '낫싱';
        }
    }

    showRestart(flag = false){
        const restartBtn = document.getElementById('game-restart-button');
        restartBtn.style.display = flag ? 'block' : 'none';
    }

    reset(){
        const inputBox = document.getElementById('user-input')
        inputBox.value = '';
        const resultDiv = document.getElementById('result');
        resultDiv.innerText = '';
        this.showRestart(false);
        this.start();
    }

    
   
  }