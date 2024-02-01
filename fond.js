 let circles = [];

    function setup() {
      createCanvas(windowWidth, windowHeight);
      // Créer quelques cercles avec des propriétés aléatoires
      for (let i = 0; i < 30; i++) {
        let colorChoice = random() > 0.5 ? color(200, 200, 200, 100) : color(0, 0, 255, 100); // Choix aléatoire entre gris et bleu
        circles.push({
          x: random(width), // Position x aléatoire
          y: random(height), // Position y aléatoire
          diameter: random(10, 100), // Diamètre aléatoire
          color: colorChoice, // Couleur aléatoire avec transparence
          speedX: random(-2, 2), // Vitesse horizontale aléatoire
          speedY: random(-2, 2) // Vitesse verticale aléatoire
        });
      }
    }

    function draw() {
      background(255); // Fond blanc
      // Dessiner et déplacer chaque cercle
      circles.forEach(circle => {
        fill(circle.color);
        noStroke();
        ellipse(circle.x, circle.y, circle.diameter);
        circle.x += circle.speedX;
        circle.y += circle.speedY;
        // Rebondir au bord de l'écran
        if (circle.x < 0 || circle.x > width) {
          circle.speedX *= -1;
        }
        if (circle.y < 0 || circle.y > height) {
          circle.speedY *= -1;
        }
      });
    }