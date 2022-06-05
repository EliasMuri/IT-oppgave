// Henter body-elementet
let bodyEl = document.querySelector("body");

// Setter i gang den rekursive funksjonen
tegnFirkant(10, 10, 300);

// Funksjon som tegner en firkant med bredde b på posisjonen (x , y)
function tegnFirkant(x, y, b) {
    let FirkantEl = document.createElement("div");
    FirkantEl.style.left = x + "px";
    FirkantEl.style.top = y + "px";
    FirkantEl.style.width = b + "px";
    FirkantEl.style.height = b + "px";
    bodyEl.appendChild(FirkantEl);

    // Hvis bredden er større enn 2, tegnes to nye firkanter
    if (b > 2) {
        tegnFirkant(x, y + b, b * 0.5);
        tegnFirkant(x + b, y, b * 0.5);
    }
}

/* function rekursjon() {   //shift+alt+a
    let t = 10;

    for (let i = 0; i < 10; i++) {
        let sirkel = document.getElementById("CanvasT");
        let figur = c.getContext("2d");
        figur.beginPath();
        figur.arc(t * 3, 300, t, 0, 2 * Math.PI);
        t += t;
        figur.stroke();
    }
}

rekursjon(); */
