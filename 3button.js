function random() {
          return Math.floor(Math.random() * (3 + 1));
}
let randomButton = random();
function button(id) {
          if(randomButton == id) {
                    document.getElementById("display").innerHTML = "Congratulations!!! You are the winner!";
          } else {
          document.getElementById("display").innerHTML = "Sorry! You have to try again!";
          }
}
