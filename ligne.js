 // Récupérer la taille de la fenêtre pour définir la taille du canvas
 var windowWidth = window.innerWidth;
 var windowHeight = window.innerHeight;

 // Récupérer le contexte 2D du canvas
 var canvas = document.getElementById('canvas2');
 canvas.width = windowWidth;
 canvas.height = windowHeight;
 var ctx = canvas.getContext('2d');

 // Définir les propriétés de la ligne
 ctx.strokeStyle = 'rgb(44, 44, 44)'; // Couleur de la ligne
 ctx.lineWidth = 20; // Épaisseur de la ligne

 // Définir la position de départ de la ligne (au milieu de l'écran)
 var startX = 0;
 var startY = canvas.height / 2 -50;

 // Définir la position de fin de la ligne (au milieu de l'écran)
 var endX = canvas.width;
 var endY = canvas.height / 2 -50;

 function drawLine() {
    var currentX = startX;
    var increment = 5; // Valeur à incrémenter pour déplacer la ligne

    function draw() {
        ctx.beginPath();
        ctx.moveTo(currentX, startY);
        ctx.lineTo(currentX + increment, endY);
        ctx.stroke();

        currentX += increment;

        if (currentX <= endX) {
            setTimeout(draw, 0); // Ralentir la vitesse de dessin
        }
    }

    draw();
}

// Appeler la fonction pour dessiner la ligne
drawLine();

 // Appeler la fonction pour dessiner la ligne
 drawLine();