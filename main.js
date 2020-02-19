const { app, BrowserWindow } = require('electron');

app.setAppUserModelId('com.schoolofnet.son-electron-anotacoes')

const createWindow = () => {
  let mainWindow = new BrowserWindow({
    width: 900, 
    height: 750
  }); 

  mainWindow.loadFile(__dirname + '/src/index.html');
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);