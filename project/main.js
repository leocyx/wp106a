const {app, BrowserWindow} = require("electron")
const path = require("path");
app.on("ready", createwindow);

function createwindow(){
    var win = new BrowserWindow({width:800, height:600})
    win.loadURL(path.join(__dirname, "/index.html"))
}
//app.on("ready", createwindow);