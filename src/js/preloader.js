(function() {
  'use strict';

  function Preloader() {
    this.asset = null;
    this.ready = false;
  }

  Preloader.prototype = {

    preload: function () {
      this.asset = this.add.sprite(320, 240, 'preloader');
      this.asset.anchor.setTo(0.5, 0.5);

      this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
      this.load.setPreloadSprite(this.asset);
      this.load.image('fondo', 'assets/1lvl.png');
    this.load.bitmapFont('minecraftia','assets/minecraftia.png','assets/minecraftia.xml');
      this.load.image('caracol', 'assets/enemigo.png', 72, 48);
         this.load.image('colision', 'assets/Colision.png');
    this.load.spritesheet('mummy', 'assets/metalslug_mummy37x45.png', 37, 45, 18);
        this.load.spritesheet('personajeEspaldas', 'assets/personaje.png', 561.57, 1761);
        
        this.load.physics('physicsData', 'assets/sprites.json');
    },

    create: function () {
      this.asset.cropEnabled = false;
    },

    update: function () {
      if (!!this.ready) {
        this.game.state.start('menu');
      }
    },

    onLoadComplete: function () {
      this.ready = true;
    }
  };

  window['el-escritor'] = window['el-escritor'] || {};
  window['el-escritor'].Preloader = Preloader;

}());
