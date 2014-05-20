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
        this.upKey = null;
        this.downKey = null;
        this.bg = null;
        this.wall =null;
    }

    Game.prototype = {

        create: function () {
            var x = this.game.width / 2, y = this.game.height / 2;
            //this.game.physics.startSystem(Phaser.Physics.ARCADE);
            this.game.physics.startSystem(Phaser.Physics.P2JS);
            this.game.physics.p2.enable([ this.player, this.wall, this.caracol ], true);
            this.bg = this.add.tileSprite(0, 0, 1280, 860, 'fondo');
            this.bg.fixedToCamera = true;

            this.wall = this.add.group();
            this.wall.setAll('body.collideWorldBounds', true);
            this.wall = this.add.sprite(0, 0, 'colision');
            //this.physics.enable(this.wall, Phaser.Physics.ARCADE);
            this.wall.body.clearShapes();
            this.wall.body.loadPolygon('physicsData', 'colision');
            //this.wall.body.imovable = true;
          
      //player  

            this.player = this.add.sprite(550, 900, 'personajeEspaldas');
            //this.player.animations.add('walkStraight');
            /*this.player.animations.add('walkStraight', [0, 1, 2, 3, 4, 5], 10, true);
            this.player.animations.add('paused', [6], 10, true);
            this.player.animations.add('walkFlip', [5, 4, 3, 2, 1, 0], 10, true);*/
            // this.player.animations.play('walkStraight', 5, true);
            //this.player = this.add.sprite(20, 1500, 'personajeEspaldas');
            //this.physics.enable(this.player, Phaser.Physics.ARCADE);
            this.player.body.collideWorldBounds = true;
            this.player.anchor.setTo(0.5, 0.98);
            this.player.body.setSize(280,320,0,0);
            //this.add.tween(this.player.scale).to({ x: 3, y: 3 }, 2000, true, 0, 0, true);
            this.player.scale.set(0.275, 0.275);
      
            this.caracol= this.add.group();
            this.caracol.enableBody = false;
            //this.caracol.physicsBodyType = Phaser.Physics.ARCADE;
            this.caracol.setAll('body.collideWorldBounds', true);
            this.caracol = this.add.sprite(600, 350, 'mummy', 5);
            this.caracol.scale.set(1.0);
            this.caracol.animations.add('zombiewalk');
            this.caracol.animations.play('zombiewalk',5,true);
            this.caracol.body.clearShapes();
            this.caracol.body.loadPolygon('physicsData', 'mummy');
            

            this.cursors = this.input.keyboard.createCursorKeys();
            this.upKey = this.input.keyboard.addKey(Phaser.Keyboard.UP);                   
            this.downKey = this.input.keyboard.addKey(Phaser.Keyboard.DOWN);       
              
        },

        update: function () {
        
            if (this.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                this.player.x -= 6.2;
            }
                
            else if (this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                this.player.x +=6,2;
            }
                
            if ((this.upKey.isDown))
            {
            this.player.y -= 2;
            this.player.scale.y -= 0.000985;
            this.player.scale.x -= 0.000985;
            this.player.animations.play('walkStraight', 10, true);
            }
                
            else if ((this.downKey.isDown))
            {
            this.player.y += 2;
            this.player.scale.y += 0.000985;
            this.player.scale.x += 0.000985;
            this.player.animations.play('walkFlip', 10, true);
            } 
            else {
            this.player.animations.play('stillStraight');
            this.player.y += 0;
            }
            
            this.physics.arcade.collide(this.wall, this.player,function (wall, player)
            {return true;}, null, this); 
            
            this.physics.arcade.overlap(this.caracol, this.player, function (player, caracol)
            {
                while(animationStarted)
                {
                    if (this.input.keyboard.isDown(Phaser.Keyboard.LEFT))
                    {
                        this.player.body.velocity.x=0;
                    }
            }
            this.add.bitmapText(200,20, 'minecraftia','RETARD',64);
            }, null, this);  
            
    },
        
    render: function () {
        this.game.debug.body(this.player);
        this.game.debug.body(this.wall);
    },


    onInputDown: function () {
        this.game.state.start('menu');
    }
        

  };

  window['el-escritor'] = window['el-escritor'] || {};
  window['el-escritor'].Game = Game;

}());
