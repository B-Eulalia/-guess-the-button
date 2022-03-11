function random() {
          var number =  document.getElementById("1").innerHTML = Math.floor(Math.random() * 3);
          if(number == 1){
                    document.write("<h1>Congratulations!!! You are the winner!</h1>");
          } else {
                    document.write("<h1>Sorry! You have to try again!</h1>");
           }
}
