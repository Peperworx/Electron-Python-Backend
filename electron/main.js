const { app, BrowserWindow, Menu, MenuItem } = require("electron");
const electron = require("electron"),
  ipc = electron.ipcMain;
const url = require("url");
const path = require("path");
var startTime = Date.now();
let win;

function createWindow() {
  win = new BrowserWindow({
    webPreferences: { nodeIntegration: true },
    width: 1200,
    height: 600,
    minWidth: 950,
    minHeight: 600,
    frame: false,
    show: false
  });
  win.loadURL("http://localhost:4976/");

  win.webContents.on("did-finish-load", function() {
    setTimeout(function() {
      win.show();
      console.error(Date.now() - startTime);
    }, 40);
  });
  //win.setProgressBar();
}

ipc.on("close", _ => {
  status = 1;
  mainWindow = null;
  if (process.platform !== "darwin") {
    app.quit();
  }
});

ipc.on("minimized", _ => {});

app.on("ready", createWindow);
