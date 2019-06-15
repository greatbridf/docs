const electron = require('electron')
const BrowserWindow = electron.BrowserWindow
const app = electron.app

var window

app.on('ready', ()=>{
  window = new BrowserWindow({
    width: 1280,
    height: 720,
  })
  window.on('close', ()=>{app.quit()})
  window.loadFile('index.html')
})