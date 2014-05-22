(function() {
  'use strict';

  function Menu() {
    this.titleTxt = null;
    this.startTxt = null;
    this.text = null;
  }

  Menu.prototype = {
            
            
            

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;
        this.add.sprite(0, 0, 'bg');
        this.add.sprite(195,20, 'titulo');
        this.startTxt = this.add.sprite(385,380, 'start',function(){this.game.state.start('game');});
        this.startTxt.scale.set(0.55);
            
            this.text = this.add.text(20, 820, 'Diseño: JS Programacción: AS',{ font: "20pt Courier", fill: "#000000", stroke: "#119f4e", strokeThickness: 2 });


      this.input.onDown.add(this.onDown, this);

    },

    update: function () {
       if (this.input.keyboard.isDown(Phaser.Keyboard.ENTER)) {
          this.game.state.start('game');
        }
        
    },

    onDown: function () {
      this.game.state.start('game');
    }
  };

  window['el-escritor'] = window['el-escritor'] || {};
  window['el-escritor'].Menu = Menu;

}());