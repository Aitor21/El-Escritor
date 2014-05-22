(function () {
    'use strict';

    function Game() {
        this.player = null;
        this.text = null;
        this.upKey = null;
        this.downKey = null;
        this.bKey = null;
        this.mKey = null;
        this.bg = null;
        this.wall1 = null;
        this.wall2 = null;
        this.wall3 = null;
        this.wall4 = null;
        this.wall5 = null;
        this.wall6 = null;
        this.wall7 = null;
        this.wall8 = null;
        this.bitmapText = null;
        this.scaleStop=false;
        this.vScale=0.00081;
        
    }

    Game.prototype = {

        create: function () {
            var x = this.game.width / 2, y = this.game.height / 2;
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            
            this.bg = this.add.tileSprite(0, 0, 1280, 860, 'fondo');
            //this.bg.fixedToCamera = true;
            
            this.wall1 = this.add.sprite(0,325,'',0);
            this.physics.enable(this.wall1, Phaser.Physics.ARCADE);
            this.wall1.body.immovable = true;
            this.wall1.body.setSize(375,500,0,0);
            
            this.wall2 = this.add.sprite(650,325,'',0);
            this.physics.enable(this.wall2, Phaser.Physics.ARCADE);
            this.wall2.body.immovable = true;
            this.wall2.body.setSize(375,116,0,0);
            
            this.wall3 = this.add.sprite(675,315,'',0);
            this.physics.enable(this.wall3, Phaser.Physics.ARCADE);
            this.wall3.body.immovable = true;
            this.wall3.body.setSize(600,220,0,0);
            
            this.wall4 = this.add.sprite(0,225,'',0);
            this.physics.enable(this.wall4, Phaser.Physics.ARCADE);
            this.wall4.body.immovable = true;
            this.wall4.body.setSize(390,180,0,0);
            
            this.wall5 = this.add.sprite(385,245,'',0);
            this.physics.enable(this.wall5, Phaser.Physics.ARCADE);
            this.wall5.body.immovable = true;
            this.wall5.body.setSize(100,100,0,0);
            
            this.wall6 = this.add.sprite(540,245,'',0);
            this.physics.enable(this.wall6, Phaser.Physics.ARCADE);
            this.wall6.body.immovable = true;
            this.wall6.body.setSize(100,100,0,0);
            
            this.wall7 = this.add.sprite(325,280,'',0);
            this.physics.enable(this.wall7, Phaser.Physics.ARCADE);
            this.wall7.body.immovable = true;
            this.wall7.body.setSize(100,100,0,0);
            
            this.wall8 = this.add.sprite(568,285,'',0);
            this.physics.enable(this.wall8, Phaser.Physics.ARCADE);
            this.wall8.body.immovable = true;
            this.wall8.body.setSize(100,100,0,0);
            
            this.mendigo = this.add.sprite(770,440, 'mendigo');
            this.physics.enable(this.mendigo, Phaser.Physics.ARCADE);
            this.mendigo.scale.set(0.294);
            this.mendigo.body.immovable = true;
            this.mendigo.body.setSize(280,320,-20,25);
            
            this.perro = this.add.sprite(850, 500, 'perro');
            this.physics.enable(this.perro, Phaser.Physics.ARCADE);
            this.perro.scale.set(0.302);
            this.perro.body.immovable = true;
            this.perro.body.setSize(280,170,30,15);
            
            this.niña = this.add.sprite(100,500, 'niña');
            this.physics.enable(this.niña, Phaser.Physics.ARCADE);
            this.niña.scale.set(0.5);
            this.niña.body.immovable = true;
            this.niña.body.setSize(431,80,60,280);
            
            this.vecina1 = this.add.sprite(610, 320, 'vecina1');
            this.physics.enable(this.vecina1, Phaser.Physics.ARCADE);
            this.vecina1.scale.set(0.15);
            this.vecina1.body.immovable = true;
            this.vecina1.body.setSize(290,530,-5,15);
          
      //player  
            
            this.player = this.add.sprite(550, 858, 'personajeEspaldas');
            this.player.animations.add('forward', [0,1,2,3,4,5],5, true);
            this.player.animations.add('still', [6],20,true);
            this.player.animations.add('back', [5,4,3,2,1,0],5, true);
            this.physics.enable(this.player, Phaser.Physics.ARCADE);
            this.player.body.collideWorldBounds = true;
            this.player.anchor.setTo(0.5, 0.98);
            this.player.body.setSize(280,320,0,0);
            this.player.scale.set(0.275, 0.275);
            
            this.cursors = this.input.keyboard.createCursorKeys();
            this.upKey = this.input.keyboard.addKey(Phaser.Keyboard.UP);                   
            this.downKey = this.input.keyboard.addKey(Phaser.Keyboard.DOWN); 
            this.bKey = this.input.keyboard.addKey(Phaser.Keyboard.B);
            this.mKey = this.input.keyboard.addKey(Phaser.Keyboard.M);                   


              
        },

        update: function () {
        
            console.log("Escala enX: "+this.player.scale.x+", Escala en Y: "+ this.player.scale.y);
            console.log("Velocidad de escala: "+this.vScale);
            // MOVIMIENTO DEL PERSONAJE
            // error en la funcion de escalar.  
            //  se altera segun pasa el tiempo :/
            if (this.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                this.player.body.velocity.x = -100;
            }
                
            else if (this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                this.player.body.velocity.x = 100;
            }
            
            else {
            this.player.body.velocity.x = 0;
            }
                
            if (this.input.keyboard.isDown(Phaser.Keyboard.UP))
            {
                //this.player.y -= 2;
                if(this.player.position.y >= 365){
                    this.player.body.velocity.y = -100;
                    if(!this.scaleStop){
                    this.player.scale.y -= this.vScale;
                    this.player.scale.x -= this.vScale;
                    this.player.scale.set(this.player.scale.x,this.player.scale.y);
                    }
                    this.player.animations.play('forward', 10, true);
                }
            }
            
             else if(this.player.position.y <= 365){
                 this.player.animations.play('still');
                    this.player.body.velocity.y = 0;
                }
                
            else if (this.input.keyboard.isDown(Phaser.Keyboard.DOWN))
            {
                if(this.player.position.y <=856){    
                    this.player.body.velocity.y = 100;
                    //this.player.body.acceleration.x = 0;
                    this.player.scale.y += this.vScale;
                    this.player.scale.x += this.vScale;
                    this.player.animations.play('back', 10, true);
                    //this.player.animations.play('walkFlip', 10, true);
                }
            }
            else {
            this.player.animations.play('still');
            this.player.body.velocity.y = 0;
            }
            
            //COMENTARIOS
            this.add.bitmapText(0,0, 'minecraftia','Jack se levanto esa mañana temprano para ir a caminar',32);
            
            
            
            
            
            
            
            
            
            
            this.physics.arcade.collide(this.wall1, this.player,function (wall1, player){this.scaleStop=true;},null,this);
            this.physics.arcade.collide(this.wall2, this.player,function (wall2, player){this.scaleStop=true;},null,this);
            this.physics.arcade.collide(this.wall3, this.player,function (wall3, player){this.scaleStop=true;},null,this);
            this.physics.arcade.collide(this.wall4, this.player,function (wall4, player){this.scaleStop=true;},null,this);
            this.physics.arcade.collide(this.wall5, this.player,function (wall5, player){this.scaleStop=true;},null,this);
            this.physics.arcade.collide(this.wall6, this.player,function (wall6, player){this.scaleStop=true;},null,this);
            this.physics.arcade.collide(this.wall7, this.player,function (wall7, player){this.scaleStop=true;},null,this);
            this.physics.arcade.collide(this.wall8, this.player,function (wall8, player){this.scaleStop=true;},null,this);
            
            this.physics.arcade.overlap(this.niña, this.player,function (niña, player)
            {
                this.add.bitmapText(0,30, 'minecraftia','Nunca habia visto una chica tan guapa… Se decía a si mismo',32);
                //this.bitmapText.cameraOffset (299,299);
                this.add.bitmapText(0,60, 'minecraftia','en su cabeza',32);

                this.add.bitmapText(0,90, 'minecraftia','accion buena',32);
                this.add.bitmapText(0,120, 'minecraftia','accion mala',32);

                if (this.input.keyboard.isDown(Phaser.Keyboard.B))
                {
                    this.add.bitmapText(0,150, 'minecraftia','Se acerco a ella para declararsele abiertamente e invitarle ',32);
                    this.add.bitmapText(0,180, 'minecraftia','a cenar',32);
                    /*if(this.create ()){
                        this.player.x=this.lastx;
                        this.player.y=this.lasty;
                    }*/
                }
                else if (this.input.keyboard.isDown(Phaser.Keyboard.M))
                {
                    this.add.bitmapText(0,150, 'minecraftia','Tiene que ser mía… -Se repetía, mientras se acercaba a ella',32);
                    this.add.bitmapText(0,185, 'minecraftia','y la forzaba',32);
                }

            },null,this);
            
            this.physics.arcade.overlap(this.mendigo, this.player,function (mendigo, player)
            {
                this.add.bitmapText(0,30, 'minecraftia','Otro indigente mas en las calles de la ciudad,,',32);
                this.add.bitmapText(0,60, 'minecraftia','accion buena',32);
                this.add.bitmapText(0,90, 'minecraftia','accion mala',32);
                if (this.input.keyboard.isDown(Phaser.Keyboard.B))
                {
                    this.add.bitmapText(0,150, 'minecraftia','que menos podia hacer que ayudarle con el dinero que',32);
                    this.add.bitmapText(0,185, 'minecraftia','llevaba en sus bolsillos',32);


                }
                else if (this.input.keyboard.isDown(Phaser.Keyboard.M))
                {
                    this.add.bitmapText(0,150, 'minecraftia','¿Es que no tenemos ya bastantes vagos como tu? le',32);
                    this.add.bitmapText(0,185, 'minecraftia','grito al hombre mientras le agredia con una patada',32);
                }

            },null,this);
            
            this.physics.arcade.overlap(this.perro, this.player,function (perro, player)
            {
                this.add.bitmapText(0,30, 'minecraftia','Ahí estaba el perro que aguardaba tras su edificio todas las mañanas',32);
                this.add.bitmapText(0,60, 'minecraftia','accion buena',32);
                this.add.bitmapText(0,90, 'minecraftia','accion mala',32);
                if (this.input.keyboard.isDown(Phaser.Keyboard.B))
                {
                    this.add.bitmapText(0,150, 'minecraftia','Jack acariciaba al perro mientras recordaba a su mascota',32);
                    this.add.bitmapText(0,185, 'minecraftia','de nino Bobby, hacia el que tenia un gran apego',32);


                }
                else if (this.input.keyboard.isDown(Phaser.Keyboard.M))
                {
                    this.add.bitmapText(0,150, 'minecraftia','“¡Largate de una vez, estoy harto de ver tus mierdas',32);
                    this.add.bitmapText(0,185, 'minecraftia','por aquí! le chillaba al animal mientras le tiraba piedras',32);
                }
            },null,this);
            
            this.physics.arcade.overlap(this.vecina1, this.player,function (vecina1, player)
            {
                this.add.bitmapText(0,30, 'minecraftia','Se topó con su vecina de abajo,',32);
                this.add.bitmapText(0,60, 'minecraftia','accion buena',32);
                this.add.bitmapText(0,90, 'minecraftia','accion mala',32);
                if (this.input.keyboard.isDown(Phaser.Keyboard.B))
                {
                    this.add.bitmapText(0,150, 'minecraftia','era una joven agradable cuya mirada penetraba en el',32);
                    this.add.bitmapText(0,185, 'minecraftia',' inminentemente',32);


                }
                else if (this.input.keyboard.isDown(Phaser.Keyboard.M))
                {
                    this.add.bitmapText(0,150, 'minecraftia','a la que mando un corte de mangas para no tener que saludarla',32);
                    this.add.bitmapText(0,185, 'minecraftia',' puesto que no estaba de humor para nadie',32);
                }
            },null,this);

            //console.log(this.player.position.x);                
            //console.log(this.player.position.y);
            
            /*function updateLine () {
                if (this.line.length < this.content[this.index].length)
                {
                    this.line = this.content[this.index].substr(0, this.line.length + 1);
                    // text.text = line;
                    this.text.setText(this.line);
                }
                else
                {
                //  Wait 2 seconds then start a new line
                this.time.events.add(Phaser.Timer.SECOND * 2, nextLine, this);
                }

            }*/
            
            if (this.player.position.y <= 365){
                this.game.state.start('menu');
            }

    },
        

        
    render: function () {
        /*this.game.debug.body(this.player);
        this.game.debug.body(this.perro);
        this.game.debug.body(this.mendigo);
        this.game.debug.body(this.vecina1);
        this.game.debug.body(this.niña);
        this.game.debug.body(this.wall1);
        this.game.debug.body(this.wall2);
        this.game.debug.body(this.wall3);
        this.game.debug.body(this.wall4);
        this.game.debug.body(this.wall5);
        this.game.debug.body(this.wall6);
        this.game.debug.body(this.wall7);
        this.game.debug.body(this.wall8);*/
    },


    onInputDown: function () {
        this.game.state.start('menu');
    }
        

  };

  window['el-escritor'] = window['el-escritor'] || {};
  window['el-escritor'].Game = Game;

}());
