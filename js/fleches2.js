document.addEventListener('DOMContentLoaded', function () {
    const arrow = document.getElementById('droite');
    const textContainer = document.getElementById('textContainer2');
    const textToWrite = textContainer.textContent;
    textContainer.innerText = ''; 
    let currentIndex = 0;
  
    arrow.addEventListener('mouseenter', function () {
      textContainer.innerText = '';
      currentIndex = 0;
      writeText();
    });
  
    arrow.addEventListener('mouseleave', function () {
        currentIndex = 0;
        textContainer.innerText = '';
    });
  
    function writeText() {
      if (currentIndex <= textToWrite.length) {
        textContainer.innerText = textToWrite.substring(0, currentIndex);
        currentIndex++;
        setTimeout(writeText, 30); 
      }
    }

  });
  