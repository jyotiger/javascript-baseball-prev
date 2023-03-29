  import BaseballGame from "./baseballGame.js";
  

  const game = new BaseballGame();
  game.start();
  
  const confirm = document.getElementById('submit');
  confirm.addEventListener('click', handleClickBtn)
  function handleClickBtn(e){
    e.preventDefault();
    game.checkResult()
  }

  const restartBtn = document.getElementById('game-restart-button');
  restartBtn.addEventListener('click',handleRestartClick);

  function handleRestartClick(e){
    e.preventDefault();
    game.reset();
  }
