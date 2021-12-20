const container = document.querySelector(".container");
const balls = document.querySelectorAll(".ball"); //nous retourne une sorte de tableau;

container.addEventListener("mousemove", (e) => { //"mousemove" : quand notre souris bouge dans le container
    //valeur de départ * 100 / valeur totale
    const x = `${e.clientX * 100 / window.innerWidth}%` //e.clientX : notre position sur x de gauche à droite. "window.innerwidth" : largeur totale de la fenêtre. On aura un résultat en %.
    const y = `${e.clientY * 100 / window.innerHeight}%` 

    for(let i = 0; i < 2 ; i++){ //on distribue à nos deux yeux les valeurs x et y;
        balls[i].style.left = x; //notre première puppile
        balls[i].style.top = y; 
        balls[i].style.transform = `translate(-${x},-${y})`; //on met à jour notre transform-translate pour ne pas rester bloquer sur du -50, 50;
    }
})