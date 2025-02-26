const VARIANCE = {
    GREATER: "больше",
    LESS: "меньше",
}
function FirstComputer(){
    this.value = Math.ceil(Math.random()*100);
    this.checkAnswer = function(num){
        if(num === this.value){
            return { isRightAnswer:true }
        } else {
            return {
                isRightAnswer: false,
                variance: num - this.value < 0 ? VARIANCE.GREATER : VARIANCE.LESS}
        }
    }
}

function SecondComputer(){
    this.prevTryValue = 0,
    this.curTryValue = 50,
    this.curTryVariance = VARIANCE.GREATER,
    this.nextTry = function(){
        const dif = Math.abs(Math.floor((this.curTryValue-this.prevTryValue)/2));
        const sign = this.curTryVariance === VARIANCE.GREATER ? 1 : -1;
        const res = this.curTryValue + (dif||1)*sign;
        this.prevTryValue = this.curTryValue;
        this.curTryValue = res;
        return res;
    }
}

let C1, C2;
function gameInit(){
    C1 = new FirstComputer();
    C2 = new SecondComputer();
    console.log(`C1: ${C1}`);
    console.log(`C2: ${C2}`);
}

function gameTick(){
    console.log(`Компьютер 2: Пробую число ${C2.curTryValue}`);
    
    //Проверка ответа:
    const check = C1.checkAnswer(C2.curTryValue);
    if(check.isRightAnswer){
        console.log(`Компьютер 1: Угадал!`);
    } else {
        console.log(`Компьютер 1: ${check.variance}`);
        C2.curTryVariance = check.variance;
        C2.nextTry();
        gameTick();
    }
}

function gameStart(){
    gameInit();
    console.log(`Компьютер 1 загадал число: ${C1.value}`);
    gameTick();
}

gameStart();