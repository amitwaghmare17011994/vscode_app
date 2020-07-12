// Modules to control application life and create native browser window
const { app, BrowserWindow, dialog } = require("electron");
const path = require("path");

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1830,
    height: 780,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
    // frame: false
  });

  mainWindow.loadFile("index.html");
  let options = {
    // See place holder 1 in above image
    title: "Custom title bar",

    // See place holder 2 in above image
    defaultPath: "E:\\Project",

    // See place holder 3 in above image
    buttonLabel: "Custom button",

    // See place holder 4 in above image
    filters: [
      { name: "Images", extensions: ["jpg", "png", "gif"] },
      { name: "Movies", extensions: ["mkv", "avi", "mp4"] },
      { name: "Custom File Type", extensions: ["as"] },
      { name: "All Files", extensions: ["*"] },
    ],
    properties: ["openFile", "multiSelections"],
  };

  //Synchronous
  // let filePaths = dialog.showOpenDialog(mainWindow, options);

}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
