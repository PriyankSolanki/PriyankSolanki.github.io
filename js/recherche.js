document.addEventListener('DOMContentLoaded', function () {
    const textContainer = document.getElementById('rechercheStage');
    const textToWrite = "EN RECHERCHE DE STAGE";
    const textToWrite2 = "VOIR MON CV";
    let currentIndex = 0;

    function writeText() {
        if (currentIndex <= textToWrite.length) {
            textContainer.innerText = textToWrite.substring(0, currentIndex);
            currentIndex++;
            setTimeout(writeText, 100);
        } else {
            currentIndex = textToWrite.length;
            deleteText();
        }
    }

    function deleteText() {
        if (currentIndex >= 0) {
            textContainer.innerText = textToWrite.substring(0, currentIndex);
            currentIndex--;
            setTimeout(deleteText, 100);
        } else {
            currentIndex = 0;
            writeText2();
        }
    }

    function writeText2() {
        if (currentIndex <= textToWrite.length) {
            textContainer.innerText = textToWrite2.substring(0, currentIndex);
            currentIndex++;
            setTimeout(writeText2, 100);
        } else {
            currentIndex = textToWrite2.length;
            deleteText2();
        }
    }

    function deleteText2() {
        if (currentIndex >= 0) {
            textContainer.innerText = textToWrite2.substring(0, currentIndex);
            currentIndex--;
            setTimeout(deleteText2, 100);
        } else {
            currentIndex = 0;
            writeText();
        }
    }


    writeText();
});
