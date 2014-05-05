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
      //this.load.image('player', 'assets/player.png');
            //this.load.image('fondo', 'assets/fondo terminado primer nivel.png');
      this.load.bitmapFont('minecraftia', 'assets/minecraftia.png', 'assets/minecraftia.xml');
      this.load.image('caracol', 'assets/enemigo.png', 72, 48);
      //this.load.spritesheet('player', 'assets/player.png', 37, 45, 18);  // esta es para cuado metamos el personaje 
    this.load.spritesheet('mummy', 'assets/metalslug_mummy37x45.png', 37, 45, 18);
        this.load.spritesheet('personajeEspaldas', 'assets/personaje de espaldas.png', 674, 1761);  
        
        
      //this.load.tilemap('map', 'assets/features_test.json', null, Phaser.Tilemap.TILED_JSON);


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
