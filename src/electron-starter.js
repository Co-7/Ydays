const electron = require('electron');
// app is to control application's life
const app = electron.app;
// BrowserWindow is used to create native browser window
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

// global reference of the window object
let mainWindow;

function createWindow() {
    // create the browser window
    mainWindow = new BrowserWindow({width: 800, height: 600});

    // load the index.html of the app
    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, '/../build/index.html'),
        protocol: 'file',
        slashes: true
    });
    mainWindow.loadURL(startUrl);

    // open the DevTools
    mainWindow.webContents.openDevTools();

    // emitted when window closed
    mainWindow.on('closed', function () {
        // dereference window object
        mainWindow = null;
    })
}

// method called when electron has finished initialization
app.on('ready', createWindow);

// quit when all windows are closed
app.on('window-all-closed', function () {
    // for OS X
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

app.on('activate', function () {
    // for OS X
    if (mainWindow === null) {
        createWindow();
    }
})