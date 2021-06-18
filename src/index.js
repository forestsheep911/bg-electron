// const { app, BrowserWindow } = require('electron')
import { app, BrowserWindow } from 'electron'

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  })

  win.loadFile('../html/index.html')
}
app.whenReady().then(() => {
  createWindow()
})
