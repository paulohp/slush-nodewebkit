var gui = require('nw.gui');
var Window = gui.Window.get();

$(function(){
  $("#minimize").on('click',function(){
    Window.minimize();
  });

  $("#fullscreen").on('click',function(){
    Window.toggleFullscreen();
  });

  $("#close").on('click',function(){
    Window.close();
  });
});