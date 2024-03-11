 // Désactiver le zoom avec Ctrl + Scroll
 window.addEventListener("wheel", function(event) {
    if (event.ctrlKey === true) {
        event.preventDefault();
    }
}, { passive: false });

// Désactiver le zoom avec Ctrl + "+"
window.addEventListener("keydown", function(event) {
    if (event.ctrlKey === true && (event.key === "+" || event.key === "=" || event.key === "-")) {
        event.preventDefault();
    }
});