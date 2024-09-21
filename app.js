//getting some dom elements
const hourContainer = document.querySelector("#hour");
const minContainer = document.querySelector("#min");
const secContainer = document.querySelector("#sec");

//as there is only one h1 so this won't be any problem
const header = document.querySelector("h1");

//this is the timer in seconds
let timer_set = 0;

//the hour, min and second
let hour = 0;
let min = 0;
let sec = 0;

//if user updates these when editable then check if set >= 60 and stop them form doing that
minContainer.addEventListener("change", () => {
    //code to update minutes goes here
  });
  
  secContainer.addEventListener("change", () => {
    //code to update seconds goes here
  });
  
  hourContainer.addEventListener("change", () => {
    //code to update hours goes here
  });

  hourContainer.addEventListener("change", () => {
    hour = parseInt(hourContainer.value);
  });

  minContainer.addEventListener("change", () => {
    min = parseInt(minContainer.value);
    if (min >= 60) {
      hour = Math.floor(hour + min / 60);
      min = min % 60;
    }
  });
  
  secContainer.addEventListener("change", () => {
    sec = parseInt(secContainer.value);
    if (sec >= 60) {
      min = Math.floor(min + sec / 60);
      sec = sec % 60;
      if (min > 60) {
        hour = Math.floor(hour + min / 60);
        min = min % 60;
      }
    }
  });

  const updateUI = () => {
    hourContainer.value = hour;
    minContainer.value = min;
    secContainer.value = sec;
}

minContainer.addEventListener("change", () => {
    //rest of code
    updateUI();
  });
  
secContainer.addEventListener("change", () => {
    //rest of code
    updateUI();
  });
  
hourContainer.addEventListener("change", () => {
    //rest of code
    updateUI();
  });

  const resetTime = () => {
    hour = 0
    min = 0
    sec = 0
    timer_set = 0;
    hourContainer.removeAttribute("readonly");
    minContainer.removeAttribute("readonly");
    secContainer.removeAttribute("readonly");
    hourContainer.value = "";
    minContainer.value = "";
    secContainer.value = "";
}

const startTime = () => {
    hourContainer.setAttribute("readonly", "true");
    minContainer.setAttribute("readonly", "true");
    secContainer.setAttribute("readonly", "true");
  
    timer_set = hour * 60 * 60 + min * 60 + sec;
    startTicking();
  };

  const startTicking = () => {
    setInterval(() => {
      timer_set -= 1;
    }, 1000);
  };

  const updateHMS = () => {
    sec = timer_set % 60;
    min = Math.floor(timer_set / 60);
    hour = Math.floor(min / 60);
    min = min % 60;
    updateUI();
  };

  const startTicking = () => {
    setInterval(() => {
      timer_set -= 1;
      updateHMS();
    }, 1000);
  };

  const header = document.querySelector("h1");

const endTicking = () => {
    header.innerText = "Time's Up!!"
    var audio = new Audio('bell_sound.mp3');
    audio.play();
    setTimeout(() => {
        header.innerText = "Timer app"
    }, 3000)

    resetTime();
}

const startTicking = () => {
    interval = setInterval(() => {
        timer_set -= 1;

        if (timer_set <= 0) {
            endTicking();
            clearInterval(interval);
        }
        updateHMS();
        }, 1000)
    }
}

const resetTime = () => {
    //rest of code
    if (interval) {
      clearInterval(interval);
    }
  };

  if (timer_set > 0) {
    interval = setInterval(() => {
      timer_set -= 1;
  
      if (timer_set <= 0) {
        endTicking();
        clearInterval(interval);
      }
  
      updateHMS();
    }, 1000);
  } else {
    endTicking();
  }