let computerNumber = [];

export function setComputerNumber(){
    computerNumber = MissionUtils.Random.pickUniqueNumbersInRange(1,9,3);
}

export function getComputerNumber(){
    return computerNumber;
}