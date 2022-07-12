const puntaje = prompt("Ingrese la cantidad de puntos acumulados durante el carnaval para saber por cual premio puede canjearlos. Por favor, ingrese el puntaje sin . ni ,")

const lapices = ""

for (let i=0; i <= 1000; i++){
    if (puntaje <= 100){
        alert ("Lo sentimos pero debes seguir acumulando puntos para poder intercambiarlos por un premio.");
        break;
    } 
    else if (puntaje <= 250){
        alert ("¡Felicidades! Puedes canjear tus puntos por unos lapices.")
        console.log("Canje por unos lapices")
        break;
    } 
    else if (puntaje <= 500){
        alert ("¡Felicidades! Puedes canjear tus puntos por una cartuchera.");
        console.log("Canje por una cartuchera")
        break;
    }
    else if (puntaje <= 750){
        alert ("¡Felicidades! Puedes canjear tus puntos por una cartuchera y unos lapices.");
        console.log("Canje por una cartuchera y unos lapices")
        break;
    }
    else if (puntaje <= 1000){
        alert ("¡Felicidades! Puedes canjear tus puntos por una cartuchera, unos lapices y unas carpetas.");
        console.log("Canje por cartuchera, lapices y carpetas")
        break;
    }

}


/* prompt("¡Felicidades! Puedes canjear tus puntos por unos lapices. ¿Te gustaría hacerlo?")
        if (lapices === "si"){
            alert ("Perfecto. En breve nos contactaremos con usted sobre el envío de los lapices");
            console.log ("Canjeó sus puntos por lapices");
        } else if (lapices === "no"){
            alert ("¡No hay problema! Puedes seguir acumulando puntos");
            console.log("Decidió no realizar el canje");
        }
        break; */