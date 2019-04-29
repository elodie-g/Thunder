const electron = require('electron');
const application = electron.app;
const fenetreNavigateur = electron.BrowserWindow;

function creationFenetre () {
  // Cree la fenetre du navigateur
  let fenetrePrincipale = new fenetreNavigateur({
    width: 800,
    height: 600,
    show: true,
    frame: true
  })
  // and load the index.html of the app.
  fenetrePrincipale.loadFile('content/index.html')
  // Cache la barre d'outil
  fenetrePrincipale.setMenuBarVisibility(false)
  console.log("Fenêtre créer");
}

application.on('ready', creationFenetre)


application.on('window-all-closed', () => {
    console.log("l'application va ce fermé");
    application.quit();
});
