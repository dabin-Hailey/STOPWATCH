const appendTens = document.getElementById('tens');
const appendSeconds = document.getElementById('seconds');
const buttonStart = document.getElementById('button-start');
const buttonStop = document.getElementById('button-stop');
const buttonReset = document.getElementById('button-reset');

let seconds = 0;
let tens = 0;
let Interval;

//appendTens가 100이 되면 appendSeconds를 1 올림
//interval 값으로 10을 넣어주는 이유
//10ms * 100tens = 1000ms = 1s
buttonStart.onclick = function() {
  //start 버튼을 누르면 초기화하고 시간을 잴 수 있도록
  clearInterval(Interval);
  
  Interval = setInterval(startTimer, 10);
}

buttonStop.onclick = function() {
  clearInterval(Interval);
}

buttonReset.onclick = function() {
  clearInterval(Interval);
  tens = 0;
  seconds = 0;

  appendTens.innerHTML = tens;
  appendSeconds.innerHTML = seconds;
}

function startTimer() {
  tens++;

  console.log(appendTens)
  if (tens <= 9) {
    appendTens.innerHTML = tens;
  }

  if (tens > 9) {
    appendTens.innerHTML = tens;
  }

  if (tens > 99) {
    seconds++;
    appendSeconds.innerHTML = seconds;

    tens = 0;
    appendTens.innerHTML = 0;
  }
}