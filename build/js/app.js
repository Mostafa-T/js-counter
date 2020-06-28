/*
 1.0) calling the document from the HTML 

*/
  // Declearing variables for the HTML document
  const counterNumber = document.getElementById('counterNumber');
  const counterBtn = document.querySelectorAll('.btn');
  // set intial value 
  let count = 0;

  // count fucntion

  counterBtn.forEach(function(btn) {
    btn.addEventListener('click', function () { 
      // targetin the current clicked button 
      const currentBtn = this.classList;

      // if the current button contains this class then do an acction
      if(currentBtn.contains('increase')) {
        if(count >= 0) {
          counterNumber.style.color = "green";
        }
        count++;
      } else if(currentBtn.contains('decerase')) {
        if(count <= 0) {
          counterNumber.style.color = "red";
        }
        count--;
      } else if(currentBtn.contains('reset')) {
        counterNumber.style.color = "#333";
        count = 0;
      }
      counterNumber.textContent = count;
    })
  })