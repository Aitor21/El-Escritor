(function () {
    'use strict';

    function Game() {
        this.player = null;
        this.jumpButton = null;
        this.jumpTimer = 0;
        this.caracol;
    }

    Game.prototype = {

      create: function () {
        var x = this.game.width / 2
        , y = this.game.height / 2;
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.stage.backgroundColor = '##38ffff';
          
      //player  
      this.player = this.add.sprite(20, 1500, 'dude');
      this.physics.arcade.enable(this.player);
      this.player.body.linearDamping = 1;
      this.player.body.collideWorldBounds = true;
      this.player.anchor.setTo(0.5, 0.5);
      this.player.body.gravity.y=450;
    
      this.caracol= this.add.group();
      this.caracol.enableBody = true;
      this.caracol.physicsBodyType = Phaser.Physics.ARCADE;
      this.caracol.setAll('body.collideWorldBounds', true);
      this.caracol.create(400 , 730 , 'caracol');
      //this.caracol.body.setSize(72,48,100,48);
      //this.caracol.body.immovable = true;

      this.camera.follow(this.player);
      this.cursors = this.input.keyboard.createCursorKeys();
      this.jumpButton = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
      
    },

    update: function () {
        
    if (this.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
      this.player.x -=6,2;
    }
    else if (this.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
      this.player.x +=6,2;
    }
        
    if (this.jumpButton.isDown && this.game.time.now > this.jumpTimer)
    {
        if (this.player.body.onFloor())
        {
            this.player.body.velocity.y = -300;
        }
    } 
    this.physics.arcade.overlap(this.player, this.caracol, function (player, caracol){
        while(true){
            this.player.body.velocity.x===0;
        }
    });
    
    /*if(this.player.position.x=300){
        this.player.body.velocity.x =0;
    }*/
     /*this.physics.arcade.overlap(this.player, this.caracol, function (player, caracol) {
            this.caracol.play();
            player.x=2972.7;
            player.y=1166.5;
            this.lastx=2972.7;
            this.lasty=1166.5;
            this.player.body.velocity.y= -300;
            this.green=true;
        } null, this);*/
    },


    onInputDown: function () {
      this.game.state.start('menu');
    }

  };

  window['el-escritor'] = window['el-escritor'] || {};
  window['el-escritor'].Game = Game;

}());
