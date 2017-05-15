// Exécute un appel AJAX GET

// Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès

var listePages = ["accueil",
                  "lapension",
                  "tarifs",
                  "reservation",
                  "contact",
                  "plan",
                  "videos",
                  "cond"
                 ];

listePages.forEach(function(lien) {
    document.getElementById(lien).addEventListener("click", function(e) {clicSurUnLien(e, lien)});
});

function ajaxGet(url, callback) {
    var req = new XMLHttpRequest();

    req.open("GET", url);

    req.addEventListener("load", function () {

        if (req.status >= 200 && req.status < 400) {

            // Appelle la fonction callback en lui passant la réponse de la requête
            callback(req.responseText);

        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });

    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });

    req.send(null);
}

function clicSurUnLien(e, nomLien)
{
    ajaxGet("./pages/" + nomLien + ".html", function(reponse) {
        document.getElementById("principal").innerHTML = reponse;
    });
    
    console.log("clic sur le lien : " + nomLien);
    
    // Annulation du lien lors du clic
    e.preventDefault();
}

