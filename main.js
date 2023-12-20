'use strict';
var audio = new Audio('/mp3/piano.mp3');
var audio2 = new Audio('/mp3/last.mp3');
audio.play().loop;
let music = true;
const sound = document.querySelector('.material-icons');

sound.addEventListener('click', function () {
  if (music == true) {
    audio.pause();
    sound.textContent = 'volume_off';

    music = false;
  } else {
    audio.play();
    sound.textContent = 'volume_up';
    music = true;
  }
});

if (typeof audio.loop == 'boolean') {
  audio.loop = true;
} else {
  audio.addEventListener(
    'ended',
    function () {
      this.currentTime = 0;
      this.play();
    },
    false
  );
}
audio.play();
audio.loop = true;
const reset = document.querySelector('.reset');
const fel = document.querySelector('.fel');
const fell = document.querySelector('.fell');
const Prix = document.querySelector('.Prx').textContent;
const Percen = document.querySelector('.Prc').textContent;
const btn0 = document.querySelector('.btn0');
const btn1 = document.querySelector('.un');
const btn2 = document.querySelector('.deux');
const btn22 = document.querySelector('.deux2');
const btn23 = document.querySelector('.deux3');
const btn3 = document.querySelector('.trois');
const btn33 = document.querySelector('.trois2');
const btn34 = document.querySelector('.trois3');
const btn5 = document.querySelector('.b5');
const btn6 = document.querySelector('.b6');
const btn7 = document.querySelector('.b7');
const btn8 = document.querySelector('.b8');
const btn9 = document.querySelector('.b9');
const btn10 = document.querySelector('.b10');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');
const l3 = document.querySelector('.l3');
const l4 = document.querySelector('.l4');
const l5 = document.querySelector('.l5');
const l6 = document.querySelector('.l6');
const l7 = document.querySelector('.l7');
const modal = document.querySelector('.modal2');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const tab = document.querySelectorAll('.table');

const progress = document.querySelector('#progress');
const container = document.querySelector('.container');

const form1 = document.querySelector('.Form1');
const form2 = document.querySelector('.Form2');
const form3 = document.querySelector('.Form3');
const form4 = document.querySelector('.Form4');
const form5 = document.querySelector('.Form5');
const form6 = document.querySelector('.Form6');
const form7 = document.querySelector('.Form7');

const next1 = document.getElementById('next1');
const next2 = document.getElementById('next2');
// const next3 = document.getElementById('next3');
const next3 = document.querySelector('.next3');
const next4 = document.getElementById('next4');
const next5 = document.getElementById('next5');
const next6 = document.getElementById('next6');
const next7 = document.getElementById('next7');

const back2 = document.getElementById('back2');
const back3 = document.getElementById('back3');
const back4 = document.getElementById('back4');
const back5 = document.getElementById('back5');
const back6 = document.getElementById('back6');
const back7 = document.getElementById('back7');

let val;
let per;
let ob1, ob2, ob21, ob33, ob32, ob31, ob3, ob11;
function getVal() {
  per = document.querySelector('.perc').value;
  val = document.querySelector('.prix1').value;
  ob1 = document.querySelector('.ob1').value;
  ob11 = document.querySelector('.ob11').value;
  ob2 = document.querySelector('.ob2').value;
  ob21 = document.querySelector('.ob21').value;
  ob3 = document.querySelector('.ob3').value;
  ob31 = document.querySelector('.ob31').value;
  ob32 = document.querySelector('.ob32').value;
  ob33 = document.querySelector('.ob33').value;
}
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  enableScroll();
};
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener(
    'test',
    null,
    Object.defineProperty({}, 'passive', {
      get: function () {
        supportsPassive = true;
      },
    })
  );
} catch (e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent =
  'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}
// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

next1.addEventListener('click', function () {
  if (Number(val) != Number(Prix) && Number(per) == Number(Percen)) {
    document.querySelector('.prix1').value = 'incorrect';
    document.querySelector('.prix1').style.color = '#cc0033';
    document.querySelector('.prix1').addEventListener('click', function () {
      document.querySelector('.prix1').value = ' ';
      document.querySelector('.prix1').style.color = 'rgb(57, 57, 57)';
    });
  } else if (Number(val) == Number(Prix) && Number(per) != Number(Percen)) {
    document.querySelector('.perc').value = 'incorrect';
    document.querySelector('.perc').style.color = '#cc0033';
    document.querySelector('.perc').addEventListener('click', function () {
      document.querySelector('.perc').value = ' ';
      document.querySelector('.perc').style.color = 'rgb(57, 57, 57)';
    });
  } else if (Number(val) == Number(Prix) && Number(per) == Number(Percen)) {
    form1.style.left = '-1400px';
    form2.style.left = '160px';
    progress.style.width = '371.4px';
  } else {
    document.querySelector('.perc').value = 'incorrect';
    document.querySelector('.perc').style.color = '#cc0033';
    document.querySelector('.perc').addEventListener('click', function () {
      document.querySelector('.perc').value = ' ';
      document.querySelector('.perc').style.color = 'rgb(57, 57, 57)';
    });
    document.querySelector('.prix1').value = 'incorrect';
    document.querySelector('.prix1').style.color = '#cc0033';
    document.querySelector('.prix1').addEventListener('click', function () {
      document.querySelector('.prix1').value = ' ';
      document.querySelector('.prix1').style.color = 'rgb(57, 57, 57)';
    });
  }
  // form1.style.left = '-1400px';
  // form2.style.left = '160px';
  // progress.style.width = '371.4px';
});

next2.addEventListener('click', function () {
  if (Number(ob1) != 104) {
    document.querySelector('.ob1').value = 'incorrect';
    document.querySelector('.ob1').style.color = '#cc0033';
    document.querySelector('.ob1').addEventListener('click', function () {
      document.querySelector('.ob1').value = ' ';
      document.querySelector('.ob1').style.color = 'rgb(57, 57, 57)';
    });
  }
  if (Number(ob2) != 1977) {
    document.querySelector('.ob2').value = 'incorrect';
    document.querySelector('.ob2').style.color = '#cc0033';
    document.querySelector('.ob2').addEventListener('click', function () {
      document.querySelector('.ob2').value = ' ';
      document.querySelector('.ob2').style.color = 'rgb(57, 57, 57)';
    });
  }
  if (Number(ob3) != 51402) {
    document.querySelector('.ob3').value = 'incorrect';
    document.querySelector('.ob3').style.color = '#cc0033';
    document.querySelector('.ob3').addEventListener('click', function () {
      document.querySelector('.ob3').value = ' ';
      document.querySelector('.ob3').style.color = 'rgb(57, 57, 57)';
    });
  } else if (
    Number(ob1) == 104 &&
    Number(ob2) == 1977 &&
    Number(ob3) == 51402
  ) {
    form2.style.left = '-1400px';
    form3.style.left = '160px';
    progress.style.width = '557.1px';
  }
  // form2.style.left = '-1400px';
  // form3.style.left = '160px';
  // progress.style.width = '557.1px';
});
back2.addEventListener('click', function () {
  form1.style.left = '150px';
  form2.style.left = '1800px';
  progress.style.width = '185.7px';
});
next3.addEventListener('click', function (e) {
  e.preventDefault();
  if (Number(ob11) != 104) {
    document.querySelector('.ob11').value = 'incorrect';
    document.querySelector('.ob11').style.color = '#cc0033';
    document.querySelector('.ob11').addEventListener('click', function () {
      document.querySelector('.ob11').value = ' ';
      document.querySelector('.ob11').style.color = 'rgb(57, 57, 57)';
    });
  } else {
    form3.style.left = '-1400px';
    form4.style.left = '160px';
    progress.style.width = '742.8px';
    container.style.transition = '0.5s';
  }
  // form3.style.left = '-1400px';
  // form4.style.left = '160px';
  // progress.style.width = '742.8px';
  // container.style.transition = '0.5s';
});
back3.addEventListener('click', function () {
  form2.style.left = '150px';
  form3.style.left = '1800px';
  progress.style.width = '371.4px';
});

next4.addEventListener('click', function (e) {
  e.preventDefault();
  const x = (49425 * 4) / 100;
  if (Number(ob21) != Number(x)) {
    document.querySelector('.ob21').value = 'incorrect';
    document.querySelector('.ob21').style.color = '#cc0033';
    document.querySelector('.ob21').addEventListener('click', function () {
      document.querySelector('.ob21').value = ' ';
      document.querySelector('.ob21').style.color = 'rgb(57, 57, 57)';
    });
  } else {
    form4.style.left = '-1400px';
    form5.style.left = '160px';
    progress.style.width = '928.5px';
    container.style.transition = '0.5s';
  }
  // form4.style.left = '-1400px';
  // form5.style.left = '160px';
  // progress.style.width = '928.5px';
  // container.style.transition = '0.5s';
});
back4.addEventListener('click', function () {
  form3.style.left = '150px';
  form4.style.left = '1800px';
  progress.style.width = '557.1px';
});

next5.addEventListener('click', function (e) {
  e.preventDefault();
  if (Number(ob31) != 51402) {
    document.querySelector('.ob31').value = 'incorrect';
    document.querySelector('.ob31').style.color = '#cc0033';
    document.querySelector('.ob31').addEventListener('click', function () {
      document.querySelector('.ob31').value = ' ';
      document.querySelector('.ob31').style.color = 'rgb(57, 57, 57)';
    });
  } else {
    form5.style.left = '-1400px';
    form6.style.left = '160px';
    progress.style.width = '1114.2px';
    container.style.transition = '0.5s';
  }
  // form5.style.left = '-1400px';
  // form6.style.left = '160px';
  // progress.style.width = '1114.2px';
  // container.style.transition = '0.5s';
});
back5.addEventListener('click', function () {
  form4.style.left = '150px';
  form5.style.left = '1800px';
  progress.style.width = '742.8px';
});

next6.addEventListener('click', function (e) {
  e.preventDefault();
  if (Number(ob32) != 51402) {
    document.querySelector('.ob32').value = 'incorrect';
    document.querySelector('.ob32').style.color = '#cc0033';
    document.querySelector('.ob32').addEventListener('click', function () {
      document.querySelector('.ob32').value = ' ';
      document.querySelector('.ob32').style.color = 'rgb(57, 57, 57)';
    });
  } else {
    form6.style.left = '-1400px';
    form7.style.left = '160px';
    progress.style.width = '1299.9px';
    container.style.transition = '0.5s';
  }
  // form6.style.left = '-1400px';
  // form7.style.left = '160px';
  // progress.style.width = '1299.9px';
  // container.style.transition = '0.5s';
});
back6.addEventListener('click', function () {
  form5.style.left = '150px';
  form6.style.left = '1800px';
  progress.style.width = '928.5px';
});
next7.addEventListener('click', function () {
  if (Number(ob33) == 51402) {
    audio.pause();
    audio2.play();
    fell.classList.remove('hiddenn');
    disableScroll();
    setTimeout(() => {
      audio2.pause();
      audio.play();
      fell.classList.add('hiddenn');
      window.location.reload();
      enableScroll();
    }, 10000);
    reset.addEventListener('click', function () {
      audio2.pause();
      audio.play();
      fell.classList.add('hiddenn');
      window.location.reload();
      enableScroll();
    });
  } else {
    document.querySelector('.ob33').value = 'incorrect';
    document.querySelector('.ob33').style.color = '#cc0033';
    document.querySelector('.ob33').addEventListener('click', function () {
      document.querySelector('.ob33').value = ' ';
      document.querySelector('.ob33').style.color = 'rgb(57, 57, 57)';
    });
  }
});
back7.addEventListener('click', function () {
  form6.style.left = '150px';
  form7.style.left = '1800px';
  progress.style.width = '1114.2px';
});

btn0.addEventListener('click', function () {
  disableScroll();
  openModal();
  console.log(modal.innerHTML);
  modal.innerHTML = `<button class="close-modal">&times;</button>
  <h1 class="hh1"> Correction de question (1):</h1>
  <p>
  <div class="correct">votre prix d'achat du terrain = 49425  €</div>
  <div class="correct">votre percentage d'augmentation = 4 % </div>
  </p>`;

  const btnH = document.querySelector('.close-modal');
  btnH.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
});
btn3.addEventListener('click', function () {
  disableScroll();
  openModal();
  console.log(modal.innerHTML);
  modal.innerHTML = `<button class="close-modal">&times;</button>
  <h1 class="hh1"> Correction de question (2):</h1>
  
      <div class="test1">
        <div>
        <div class="correct small ">( Ob 1)</div>
        <div class="correct small"> votre percentage de vente du terrain = votre prix d'achat du terrain + percentage d'augmentation	 </div>
        <div class="correct small">100 + 4 = 104</div>
    
        <div class="correct small">( Ob 2)</div>
        <div class="correct small">Ob 2 = (49425 X 4) / 100 = 1977  € </div>
      </div>
        <div>
        <div class="correct small">( Ob 3) Methode - 1 -</div>

        <div class="correct small"> votre percentage de vente du terrain =  </div>
          <div class="correct small">ob3 = (49425 X 104) / 100 = 51402  € </div>
          <div class="correct small">&nbsp&nbspMethode - 2 -</div>
          <div class="correct small"> votre percentage de vente du terrain =  </div>
          <div class="correct small">ob3 = (1977 X 104) / 4 = 51402  € </div>
        </div>
      </div>
  

  </p>`;
  // <p class="small">
  // <div class="correct small ">( Ob 1)</div>
  //   <div class="correct small"> votre percentage de vente du terrain = votre prix d'achat du terrain + percentage d'augmentation	 </div>
  //   <div class="correct small">100 + 4 = 104</div>

  //   <div class="correct small">( Ob 2)</div>
  //   <div class="correct small">Ob 2 = (49425 X 4) / 100 = 1977  € </div>
  //   <div class="correct small">( Ob 3) Methode - 1 -</div>

  // <div class="correct small"> votre percentage de vente du terrain =  </div>
  //   <div class="correct small">ob3 = (49425 X 104) / 100 = 51402  € </div>
  //   <div class="correct small">&nbsp&nbspMethode - 2 -</div>
  //   <div class="correct small"> votre percentage de vente du terrain =  </div>
  //   <div class="correct small">ob3 = (1977 X 104) / 4 = 51402  € </div>
  const btnH = document.querySelector('.close-modal');
  btnH.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
});
btn33.addEventListener('click', function () {
  disableScroll();
  openModal();
  console.log(modal.innerHTML);
  modal.innerHTML = `<button class="close-modal">&times;</button>
  <h1 class="hh1"> Correction de question (3):</h1>
  <p>
  <div class="correct"> votre percentage de vente du terrain =  </div>
  <div class="correct">100 + 4 = 104</div>
  </p>`;

  const btnH = document.querySelector('.close-modal');
  btnH.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
});
btn34.addEventListener('click', function () {
  disableScroll();
  openModal();
  console.log(modal.innerHTML);
  modal.innerHTML = `<button class="close-modal">&times;</button>
  <h1 class="hh1"> Correction de question (4):</h1>
  <p>
  <div class="correct">( Ob 2)</div>
    <div class="correct">  Ob 2 = (49425 X 4) / 100 = 1977  €</div>
  </p>`;

  const btnH = document.querySelector('.close-modal');
  btnH.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
});
btn6.addEventListener('click', function () {
  disableScroll();
  openModal();
  console.log(modal.innerHTML);
  modal.innerHTML = `<button class="close-modal">&times;</button>
  <h1 class="hh1"> Correction de question (5):</h1>
  <p>
  <div class="correct">( Ob 3)</div>
  <div class="correct"> votre percentage de vente du terrain =  </div>
    <div class="correct">ob3= 49425 + 1977 = 51402  €</div>
  </p>`;

  const btnH = document.querySelector('.close-modal');
  btnH.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
});
btn8.addEventListener('click', function () {
  disableScroll();
  openModal();
  console.log(modal.innerHTML);
  modal.innerHTML = `<button class="close-modal">&times;</button>
  <h1 class="hh1"> Correction de question (6):</h1>
  <p>
  <div class="correct">( Ob 3)</div>
  <div class="correct"> votre percentage de vente du terrain =  </div>
    <div class="correct">ob3 = (1977 X 104) / 4 = 51402  € </div>
  </p>`;

  const btnH = document.querySelector('.close-modal');
  btnH.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
});
btn10.addEventListener('click', function () {
  disableScroll();
  openModal();
  console.log(modal.innerHTML);
  modal.innerHTML = `<button class="close-modal">&times;</button>
  <h1 class="hh1"> Correction de question (7):</h1>
  <p>
  <div class="correct">( Ob 3)</div>
  <div class="correct"> votre percentage de vente du terrain =  </div>
    <div class="correct">ob3 = (49425 X 104) / 100 = 51402  € </div>
  </p>`;

  const btnH = document.querySelector('.close-modal');
  btnH.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
});