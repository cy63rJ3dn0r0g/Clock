const secondHand = document.querySelector(".second");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");
function setDate() {

  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondsDegrees = (seconds / 60) * 360 + 90;
  const minutesDegrees = (minutes / 60) * 360 + 90;
  const hoursDegrees = (hours*360/12)+((minutes*360/60)/12) + 90;

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  console.log("seconds =>", seconds);
  console.log("minutes =>", minutes);
  console.log("hours =>", hours, "H");

  if(seconds==0){
     secondHand.style.transitionDuration = "0s" ;
     minuteHand.style.transitionDuration = "0s";
     hourHand.style.transitionDuration = "0s" ;
     
  } else {
     secondHand.style.transitionDuration = "0.05s";
     minuteHand.style.transitionDuration = "0.05s";
     hourHand.style.transitionDuration = "0.05s" ;
    
}
setInterval(setDate, 1000);
}
setDate();