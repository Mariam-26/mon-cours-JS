let heure_user = parseInt(prompt("entrer une heure"));

let minutes_user = parseInt(prompt("entrer des minutes"));

let secondes_user = parseInt(prompt("entrer des secondes"));

document.getElementById("p1").innerHTML =
    heure_user +
    "Heures " +
    minutes_user +
    "minutes " +
    secondes_user +
    " secondes ";

// corrections

if (
    heure_user >= 0 &&
    heure_user <= 23 &&
    minutes_user >= 0 &&
    minutes_user <= 59 &&
    secondes_user >= 0 &&
    secondes_user <= 59
) {
    secondes_user++;
    if (secondes_user === 60) {
        secondes_user = 0;
        minutes_user++;
        if (minutes_user === 60) {
            minutes_user = 0;
            heure_user++;
            if (heure_user === 24) {
                heure_user = 0;
            }
        }
    }
    document.getElementById("p2").innerHTML =
        "Dans une secondes il saura " +
        heure_user +
        "h" +
        minutes_user +
        "minutes" +
        secondes_user +
        "s";
} else {
    document.getElementById("p2").innerHTML =
        "L'heure que vous avez donné est incorect";
}