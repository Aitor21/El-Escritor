(function() {
  'use strict';

  function Credit() {
    this.titleTxt = null;
    this.startTxt = null;
    this.text = null;
  }

  Credit.prototype = {
            
            
            

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;
        this.add.sprite(0, 0, 'bg');
        this.add.sprite(195,20, 'titulo');
        this.startTxt = this.add.sprite(555,720, 'salir',function(){this.game.state.start('menu');});
        this.startTxt.scale.set(0.55);
            
        this.text = this.add.text(430, 240, 'Diseño:',{ font: "62pt Old English MT", fill: "#000000", stroke: "#000066", strokeThickness: 2 });
        this.text = this.add.text(450, 325, 'Sandra',{ font: "30pt Old English MT", fill: "#000000", stroke: "#000066", strokeThickness: 2 });
        this.text = this.add.text(450, 360, 'Julia',{ font: "30pt Old English MT", fill: "#000000", stroke: "#000066", strokeThickness: 2 });
        
        this.text = this.add.text(430, 440, 'Programación:',{ font: "62pt Old English MT", fill: "#000000", stroke: "#000066", strokeThickness: 2 });
        this.text = this.add.text(450, 525, 'Sergio',{ font: "30pt Old English MT", fill: "#000000", stroke: "#000066", strokeThickness: 2 });
        this.text = this.add.text(450, 560, 'Aitor',{ font: "30pt Old English MT", fill: "#000000", stroke: "#000066", strokeThickness: 2 });
        


      this.input.onDown.add(this.onDown, this);

    },

    update: function () {
       if (this.input.keyboard.isDown(Phaser.Keyboard.ENTER)) {
          this.game.state.start('menu');
        }
        
    },

    onDown: function () {
      this.game.state.start('menu');
    }
  };

  window['el-escritor'] = window['el-escritor'] || {};
  window['el-escritor'].Credit = Credit;

}());