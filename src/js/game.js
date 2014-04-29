(function () {
    'use strict';

    function Game() {
        this.player = null;
        this.jumpButton = null;
        this.jumpTimer = 0;
        this.caracol;
        this.anim;
        this.text = null;
        this.mummy = null;
        this.loopText;
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
        this.add.tween(this.player.scale).to( { x: 3, y: 3 }, 2000, true, 0, 1000, true);

    
          
          
    
      this.caracol= this.add.group();
      this.caracol.enableBody = true;
      this.caracol.physicsBodyType = Phaser.Physics.ARCADE;
      this.caracol.setAll('body.collideWorldBounds', true);
      this.caracol.create(400 , 730 , 'mummy',5);
      this.caracol = this.add.sprite(400, 730, 'mummy', 5);
      this.caracol.scale.set(4);
      
      //this.anim = this.caracol.animations.add('walk');
      //this.anim.onStart.add(animationStarted,this);
      //this.amim.onComplete.add(animationStopped,this);
      //this.anim.play(10, true);

      this.camera.follow(this.player);
      this.cursors = this.input.keyboard.createCursorKeys();
      this.jumpButton = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
              
    },

    update: function () {
        
    if (this.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
      this.player.x -=6,2;
        this.player.scale.x -= 0.01;
        this.player.scale.y -= 0.01;
    }
    else if (this.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
      this.player.x +=6,2;
      this.player.scale.x += 0.01;
        this.player.scale.y += 0.01;
    }
        
    if (this.jumpButton.isDown && this.game.time.now > this.jumpTimer)
    {
        if (this.player.body.onFloor())
        {
            this.player.body.velocity.y = -300;
        }
    } 
    this.physics.arcade.overlap(this.caracol, this.player, function (player, caracol){
       //while(animationStarted){
        if (this.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
      this.player.body.velocity.x=0;
        this.player.scale.x -= 0;
        this.player.scale.y -= 0;
    }
//}
         this.add.bitmapText(200,20, 'minecraftia','RETARD',64);
    }, null, this);
        
        //this.add.bitmapText(20,20, 'minecraftia','RETARD',64);


/*
    animationStarted: function(sprite, animation) {

	this.add.text(32, 32, 'Animation started', { fill: 'white' });

}

animationLooped: function (sprite, animation) {

	if (animation.loopCount === 1)
	{
		this.loopText = this.add.text(32, 64, 'Animation looped', { fill: 'white' });
	}
	else
	{
		this.loopText.text = 'Animation looped x2';
		animation.loop = false;
	}

}

animationStopped: function(sprite, animation) {

	this.add.text(32, 64+32, 'Animation stopped', { fill: 'white' });

}
*/
    
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
