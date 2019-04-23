const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Cree la fenetre du navigateur
  let win = new BrowserWindow({ width: 800, height: 600, show: true })
  // and load the index.html of the app.
  win.loadFile('content/index.html')
  // Cache la barre d'outil
  win.setMenuBarVisibility(false)
}

app.on('ready', createWindow)

app.on('blur', (e, cmd) => {
  console.log('app lost focus!')
})
