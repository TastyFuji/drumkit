
var drumButtons = document.querySelectorAll(".drum");

for (var i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener("click", function () {
    console.log(this.innerHTML);
    playSound(this.innerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  var keyPressed = event.key.toLowerCase();
  playSound(keyPressed);
});

function playSound(key) {

  var keyMap = {
    "w": "w",
    "a": "a",
    "s": "s",
    "d": "d",
    "j": "j",
    "k": "k",
    "l": "l",
    // แมพคีบอร์ดภาษาไทย
    "ไ": "w",
    "ฟ": "a",
    "ห": "s",
    "ก": "d",
    "่": "j",
    "า": "k",
    "ส": "l"
  };

  var mappedKey = keyMap[key] || key;
  switch (mappedKey) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
  }
}
