'use strict';

const electron = require('electron');
const walk = require('walk');
const jimp = require('jimp');
const _ = require('lodash')
// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

const ipcMain = electron.ipcMain;
const dialog = electron.dialog;

function sendSourceFolder(event, folder_path) {
  event.sender.send('source-folder-chosen', folder_path[0])
}

ipcMain.on('choose-source-folder', function(event) {
  dialog.showOpenDialog(
    mainWindow,
    { properties: [ 'openDirectory' ]},
    function(val) {
      sendSourceFolder(event, val)
    });
});

function sendDestFolder(event, folder_path) {
  event.sender.send('dest-folder-chosen', folder_path && folder_path[0])
}

ipcMain.on('choose-dest-folder', function(event) {
  dialog.showOpenDialog(
    mainWindow,
    { properties: [ 'openDirectory' ]},
    function(val) {
      sendDestFolder(event, val)
    });
});

ipcMain.on('resize', function(event, arg) {
  if (!(arg.sourceFolder && arg.destFolder)) return
  // Read all files in source
  var files = [];

  // Walker options
  var walker = walk.walk(arg.sourceFolder, { followLinks: false });

  walker.on('file', function(root, stat, next) {
      // Add this file to the list of files
      files.push({
        root: root,
        name: stat.name
      });
      next();
  });

  walker.on('end', function() {
    // Map the files to an array of promises, use .all to send finished message
    // back to ui.
    _.each(files, function(f) {
      jimp.read(f.root + '/' + f.name).then(function(img) {
        var w = arg.maxWidth
        var h = arg.maxHeight
        var factor = (w/h > img.bitmap.width/img.bitmap.height) ?
        h/img.bitmap.height : w/img.bitmap.width;
        img.clone()
          .scale(factor)
          .write(arg.destFolder + '/' + f.name)
      }).catch(function (err) {
        console.error(err);
      });
    });
  });

});

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600});

  // and load the index.html of the app.
  mainWindow.loadURL('file://' + __dirname + '/dist/index.html');

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});
