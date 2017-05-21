// Liste des liens de page
var listePages = [{lien: "accueil", texte: "Accueil"},
                  {lien: "lapension", texte: "La pension"},
                  {lien: "tarifs", texte: "Tarifs et horaires"},
                  {lien: "reservation", texte: "Réservation"},
                  {lien: "contact", texte: "Nous contacter"},
                  {lien: "plan", texte: "Plan d'accès"},
                  {lien: "videos", texte: "Vidéos"},
                  {lien: "cond", texte: "Règlement"}
                 ];

// Construction de la liste de navigation en fonction de la liste ci-dessus
listePages.forEach(function(obj) {
    var elt=document.createElement("li");
    var a=document.createElement("a");
    a.id = obj.lien;
    a.textContent = obj.texte;
    a.href = "#";
    elt.appendChild(a);
    document.getElementById("listeNav").appendChild(elt);
    
    document.getElementById(obj.lien).addEventListener("click", function(e) {clicSurUnLien(e, obj.lien)});
});

// Initialisation de la première page
ajaxGet("./pages/accueil.html", function(reponse) {
    document.getElementById("principal").innerHTML = reponse;
});

// Fonction d'appel vers le site en Ajax
// Exécute un appel AJAX GET
// Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès
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

// Fonction du clic sur un lien pour afficher la page correspondante au niveau central
function clicSurUnLien(e, nomLien)
{
    ajaxGet("./pages/" + nomLien + ".html", function(reponse) {
        document.getElementById("principal").innerHTML = reponse;
    });
    
    console.log("clic sur le lien : " + nomLien);
    
    // Annulation du lien lors du clic
    e.preventDefault();
}

document.getElementById("style1").addEventListener("click", function(e) {
    document.querySelector("link").href = "default.css";
    e.preventDefault();
});

document.getElementById("style2").addEventListener("click", function(e) {
    document.querySelector("link").href = "default2.css";
    e.preventDefault();
});

document.getElementById("style3").addEventListener("click", function(e) {
    document.querySelector("link").href = "default3.css";
    e.preventDefault();
});