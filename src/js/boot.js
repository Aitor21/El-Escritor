(function () {
  'use strict';

  function Boot() {}

  Boot.prototype = {
    
    preload: function () {
      this.load.image('preloader', 'assets/preloader.gif');
    },

    create: function () {
      this.game.input.maxPointers = 1;
      // this.game.stage.disableVisibilityChange = true;

      if (this.game.device.desktop) {
        this.game.stage.scale.pageAlignHorizontally = true;
      } else {
        this.game.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL;
        this.game.stage.scale.minWidth =  1280;
        this.game.stage.scale.minHeight = 860;
        this.game.stage.scale.maxWidth = 1280;
        this.game.stage.scale.maxHeight = 860;
        this.game.stage.scale.forceLandscape = true;
        this.game.stage.scale.pageAlignHorizontally = true;
        this.game.stage.scale.setScreenSize(true);
      }
      this.game.state.start('preloader');
    }
  };

  window['el-escritor'] = window['el-escritor'] || {};
  window['el-escritor'].Boot = Boot;
  window['el-escritor'].Global = { vecina: false, mendigo: false, perro: false, niña: false};
    

}());

