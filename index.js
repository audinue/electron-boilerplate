
var app = require('electron').app
var BrowserWindow = require('electron').BrowserWindow
var path = require('path')

app.on('ready', function () {
  var window = new BrowserWindow({
    width: 600,
    height: 400,
    title: 'Hello World'
  })
  window.on('close', function () {
    app.quit(0)
  })
  window.loadURL(path.resolve('./index.html'))
})
