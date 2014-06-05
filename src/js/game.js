(function ()
 {
     'use strict';

     function Game()
     {
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
         this.wall9 = null;
         this.wall10 = null;
         this.wall11 = null;
         this.fondoTexto = null;
         this.bitmapText = null;
         this.scaleStop = false;
     }

     Game.prototype = {

         create: function () {

             var x = this.game.width / 2, y = this.game.height / 2;
             this.game.physics.startSystem(Phaser.Physics.ARCADE);

             this.bg = this.add.tileSprite(0, 0, 1280, 860, 'fondo');

             this.wall1 = this.add.sprite(0, 325, '', 0);
             this.physics.enable(this.wall1, Phaser.Physics.ARCADE);
             this.wall1.body.immovable = true;
             this.wall1.body.setSize(375, 500, 0, 0);

             this.wall2 = this.add.sprite(650, 325, '', 0);
             this.physics.enable(this.wall2, Phaser.Physics.ARCADE);
             this.wall2.body.immovable = true;
             this.wall2.body.setSize(375, 116, 0, 0);

             this.wall3 = this.add.sprite(675, 315, '', 0);
             this.physics.enable(this.wall3, Phaser.Physics.ARCADE);
             this.wall3.body.immovable = true;
             this.wall3.body.setSize(600, 220, 0, 0);

             this.wall4 = this.add.sprite(0, 225, '', 0);
             this.physics.enable(this.wall4, Phaser.Physics.ARCADE);
             this.wall4.body.immovable = true;
             this.wall4.body.setSize(390, 180, 0, 0);

             this.wall5 = this.add.sprite(385, 245, '', 0);
             this.physics.enable(this.wall5, Phaser.Physics.ARCADE);
             this.wall5.body.immovable = true;
             this.wall5.body.setSize(100, 100, 0, 0);

             this.wall6 = this.add.sprite(540, 245, '', 0);
             this.physics.enable(this.wall6, Phaser.Physics.ARCADE);
             this.wall6.body.immovable = true;
             this.wall6.body.setSize(100, 100, 0, 0);

             this.wall7 = this.add.sprite(325, 280, '', 0);
             this.physics.enable(this.wall7, Phaser.Physics.ARCADE);
             this.wall7.body.immovable = true;
             this.wall7.body.setSize(100, 100, 0, 0);

             this.wall8 = this.add.sprite(568, 285, '', 0);
             this.physics.enable(this.wall8, Phaser.Physics.ARCADE);
             this.wall8.body.immovable = true;
             this.wall8.body.setSize(100, 100, 0, 0);

             this.wall9 = this.add.sprite(860, 800, '', 0);
             this.physics.enable(this.wall9, Phaser.Physics.ARCADE);
             this.wall9.body.immovable = true;
             this.wall9.body.setSize(500, 100, 0, 0);

             this.wall10 = this.add.sprite(920, 730, '', 0);
             this.physics.enable(this.wall10, Phaser.Physics.ARCADE);
             this.wall10.body.immovable = true;
             this.wall10.body.setSize(500, 100, 0, 0);

             this.wall11 = this.add.sprite(1070, 530, '', 0);
             this.physics.enable(this.wall11, Phaser.Physics.ARCADE);
             this.wall11.body.immovable = true;
             this.wall11.body.setSize(500, 300, 0, 0);

             this.mendigo = this.add.sprite(770, 440, 'mendigo');
             this.physics.enable(this.mendigo, Phaser.Physics.ARCADE);
             this.mendigo.scale.set(0.294);
             this.mendigo.body.immovable = true;
             this.mendigo.body.setSize(280, 320, -20, 25);

             this.perro = this.add.sprite(850, 500, 'perro');
             this.physics.enable(this.perro, Phaser.Physics.ARCADE);
             this.perro.scale.set(0.302);
             this.perro.body.immovable = true;
             this.perro.body.setSize(280, 170, 30, 15);

             this.nina = this.add.sprite(100, 500, 'nina');
             this.physics.enable(this.nina, Phaser.Physics.ARCADE);
             this.nina.scale.set(0.5);
             this.nina.body.immovable = true;
             this.nina.body.setSize(431, 80, 60, 280);

             this.vecina1 = this.add.sprite(610, 320, 'vecina1');
             this.physics.enable(this.vecina1, Phaser.Physics.ARCADE);
             this.vecina1.scale.set(0.15);
             this.vecina1.body.immovable = true;
             this.vecina1.body.setSize(290, 530, -5, 15);

             this.fondoTexto = this.add.sprite(12,0, 'fondoTexto', 0);
             this.fondoTexto.immovable = true;

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

             this.input.onDown.addOnce(this.removeText, this);

             this.input.onDown.addOnce(this.removeText, this);
             this.text = this.add.text(25, 18, 'Jack se levanto esa mañana temprano para ir a caminar',{ font: "20pt Old English MT", fill: "#000000", stroke: "#000066", strokeThickness: 2 });
             this.textodelanina = this.add.text(25, 60, '',{ font: "20pt Old English MT", fill: "#000000", stroke: "#000066", strokeThickness: 2 });
             this.textodelmendigo = this.add.text(25, 60, '',{ font: "20pt Old English MT", fill: "#000000", stroke: "#000066", strokeThickness: 2 });
             this.textodelperro = this.add.text(25, 60, '',{ font: "20pt Old English MT", fill: "#000000", stroke: "#000066", strokeThickness: 2 });
             this.textodelavecina1 = this.add.text(25, 60, '',{ font: "20pt Old English MT", fill: "#000000", stroke: "#000066", strokeThickness: 2 });

         },

         update: function () {
             // MOVIMIENTO DEL PERSONAJE

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
                 if(this.player.position.y >= 365){
                     this.player.body.velocity.y = -100;
                     if(!this.scaleStop){
                         this.player.scale.y -= this.vScale;
                         this.player.scale.x -= this.vScale;
                         this.player.scale.set(this.player.scale.x,this.player.scale.y);
                     }
                     this.player.animations.play('forward', 10, true);
                 }

                 //este bucle sustituye todos los ifs de abajo,
                 //                if (this.player.position.y >= 300)
                 //                {
                 //                    if (this.player.position.y <= this.scale)
                 //                    {
                 //                        this.player.scale.set(this.escala);
                 //                    }
                 //                    this.scale --;
                 //                    this.escala --;
                 //                }
             }

             else if(this.player.position.y <= 365){
                 this.player.animations.play('still');
                 this.player.body.velocity.y = 0;
             }

             else if (this.input.keyboard.isDown(Phaser.Keyboard.DOWN))
             {
                 if(this.player.position.y <=856){    
                     this.player.body.velocity.y = 100;
                     this.player.scale.y += this.vScale;
                     this.player.scale.x += this.vScale;
                     this.player.animations.play('back', 10, true);
                 }
             }
             else 
             {
                 this.player.animations.play('still');
                 this.player.body.velocity.y = 0;
             }

             this.physics.arcade.collide(this.wall1, this.player,function (wall1, player){this.scaleStop=true;},null,this);
             this.physics.arcade.collide(this.wall2, this.player,function (wall2, player){this.scaleStop=true;},null,this);
             this.physics.arcade.collide(this.wall3, this.player,function (wall3, player){this.scaleStop=true;},null,this);
             this.physics.arcade.collide(this.wall4, this.player,function (wall4, player){this.scaleStop=true;},null,this);
             this.physics.arcade.collide(this.wall5, this.player,function (wall5, player){this.scaleStop=true;},null,this);
             this.physics.arcade.collide(this.wall6, this.player,function (wall6, player){this.scaleStop=true;},null,this);
             this.physics.arcade.collide(this.wall7, this.player,function (wall7, player){this.scaleStop=true;},null,this);
             this.physics.arcade.collide(this.wall8, this.player,function (wall8, player){this.scaleStop=true;},null,this);
             this.physics.arcade.collide(this.wall9, this.player,function (wall9, player){this.scaleStop=true;},null,this);
             this.physics.arcade.collide(this.wall10, this.player,function (wall10, player){this.scaleStop=true;},null,this);
             this.physics.arcade.collide(this.wall11, this.player,function (wall11, player){this.scaleStop=true;},null,this);

             // colisiones entre la nina y el player
             this.physics.arcade.overlap(this.nina, this.player,function (nina, player)
                                         {
                                             window['el-escritor'].Global.nina = true;
                                             this.textoNina ();
                                         },null,this);

             //  colisiones entre mendigo y el player
             this.physics.arcade.overlap(this.mendigo, this.player,function (mendigo, player)
                                         {
                                             window['el-escritor'].Global.mendigo = true;

                                             this.textoMendigo ();
                                         },null,this);

             // colisiones entre el perro y el player
             this.physics.arcade.overlap(this.perro, this.player,function (perro, player)
                                         {
                                             window['el-escritor'].Global.perro = true;

                                             this.textoPerro ();
                                         },null,this);

             // colisiones entre la vecina1 y el player 
             this.physics.arcade.overlap(this.vecina1, this.player,function (vecina1, player)
                                         {
                                             window['el-escritor'].Global.vecina1 = true;

                                             this.textoVecina1();
                                         },null,this);

             /*if (this.player.position.y <= 565)
            {
                this.player.scale.set(0.1,0.1);
            }*/
             //Scales the player
             //            while (this.player.position.y >= 300)
             //            {
             //                if (this.player.position.y <= this.scale)
             //                {
             //                    this.player.scale.set(this.escala);
             //                }
             //                this.scale --;
             //                this.escala --;
             //            }
             this.escalar ();

             if (this.player.position.y <= 365){
                 this.game.state.start('menu');
             }
         },

         render: function () {
             this.game.debug.body(this.player);
             this.game.debug.body(this.perro);
             this.game.debug.body(this.mendigo);
             this.game.debug.body(this.vecina1);
             this.game.debug.body(this.nina);
             this.game.debug.body(this.wall1);
             this.game.debug.body(this.wall2);
             this.game.debug.body(this.wall3);
             this.game.debug.body(this.wall4);
             this.game.debug.body(this.wall5);
             this.game.debug.body(this.wall6);
             this.game.debug.body(this.wall7);
             this.game.debug.body(this.wall8);
             this.game.debug.body(this.wall9);
             this.game.debug.body(this.wall10);
             this.game.debug.body(this.wall11);
             this.game.debug.body(this.fondoTexto);
         },

         removeText: function ()
         {
             //this.time.events.add(Phaser.Timer.SECOND * 4, this.removeText, this);
             //this.text.destroy();
             this.textodelanina.setText(" ");
             this.textodelmendigo.setText(" ");
             this.textodelperro.setText(" ");
             this.textodelavecina1.setText(" ");
         },

         textoNina: function ()
         {
             this.removeText ();
             this.textodelanina.setText("Nunca habia visto una chica tan guapa… Se decía a si mismo en su cabeza");

             if (this.input.keyboard.isDown(Phaser.Keyboard.B))
             {
                 this.textodelanina.setText("Se acerco a ella para declararsele abiertamente e invitarle a cenar");
             }
             else if (this.input.keyboard.isDown(Phaser.Keyboard.M))
             {
                 this.textodelanina.setText("Tiene que ser mía… -Se repetía, mientras se acercaba a ella y la forzaba");
             }
         },
         textoMendigo: function ()
         {
             this.removeText ();

             this.textodelmendigo.setText("Nunca habia visto una chica tan guapa… Se decía a si mismo en su cabeza");
             this.textodelmendigo.setText("Otro indigente más en las calles de la ciudad");

             if (this.input.keyboard.isDown(Phaser.Keyboard.B))
             {
                 this.textodelmendigo.setText("que menos podia hacer que ayudarle con el dinero que llevaba en sus bolsillos");
             }
             else if (this.input.keyboard.isDown(Phaser.Keyboard.M))
             {
                 this.textodelmendigo.setText("¿Es que no tenemos ya bastantes vagos como tu? le grito al hombre");
             }
         },
         textoPerro: function ()
         {
             this.removeText ();
             this.textodelperro.setText("Ahí estaba el perro que aguardaba tras su edificio todas las mañanas");
             if (this.input.keyboard.isDown(Phaser.Keyboard.B))
             {
                 this.textodelperro.setText("Jack acariciaba al perro mientras recordaba a su mascota de nino Bobby");
             }
             else if (this.input.keyboard.isDown(Phaser.Keyboard.M))
             {
                 this.textodelperro.setText("“¡Largate de una vez, estoy harto de ver tus mierdas por aquí!");
             }
         },
         textoVecina1: function ()
         {
             this.removeText ();
             this.textodelperro.setText("Se topó con su vecina de abajo,");
             if (this.input.keyboard.isDown(Phaser.Keyboard.B))
             {
                 this.textodelperro.setText("era una joven agradable cuya mirada penetraba en el inminentemente");
             }
             else if (this.input.keyboard.isDown(Phaser.Keyboard.M))
             {
                 this.textodelperro.setText("a la que mando un corte de mangas para no tener que saludarla puesto que no estaba de humor para nadie");
             }

         },
         escalar: function()
         {
             if (this.player.position.y <= 850)
             {
                 this.player.scale.set(0.3);
             }
             if (this.player.position.y <= 825)
             {
                 this.player.scale.set(0.285);
             }
             if (this.player.position.y <= 800)
             {
                 this.player.scale.set(0.27);
             }
             if (this.player.position.y <= 775)
             {
                 this.player.scale.set(0.255);
             }
             if (this.player.position.y <= 750)
             {
                 this.player.scale.set(0.24);
             }
             if (this.player.position.y <= 725)
             {
                 this.player.scale.set(0.225);
             }
             if (this.player.position.y <= 700)
             {
                 this.player.scale.set(0.21);
             }
             if (this.player.position.y <= 675)
             {
                 this.player.scale.set(0.195);
             }
             if (this.player.position.y <= 650)
             {
                 this.player.scale.set(0.18);
             }
             if (this.player.position.y <= 625)
             {
                 this.player.scale.set(0.165);
             }
             if (this.player.position.y <= 600)
             {
                 this.player.scale.set(0.15);
             }
             if (this.player.position.y <= 575)
             {
                 this.player.scale.set(0.135);
             }
             if (this.player.position.y <= 550)
             {
                 this.player.scale.set(0.12);
             }
             if (this.player.position.y <= 525)
             {
                 this.player.scale.set(0.1);
             }
             if (this.player.position.y <= 500)
             {
                 this.player.scale.set(0.09);
             }
             if (this.player.position.y <= 475)
             {
                 this.player.scale.set(0.08);
             }
             if (this.player.position.y <= 450)
             {
                 this.player.scale.set(0.070);
             }
             if (this.player.position.y <= 425)
             {
                 this.player.scale.set(0.065);
             }
             if (this.player.position.y <= 400)
             {
                 this.player.scale.set(0.06);
             }
             if (this.player.position.y <= 375)
             {
                 this.player.scale.set(0.050);
             }
             if (this.player.position.y <= 350)
             {
                 this.player.scale.set(0.01);
             }

         },

         onInputDown: function () {
             this.game.state.start('menu');
         }

     };

     window['el-escritor'] = window['el-escritor'] || {};
     window['el-escritor'].Game = Game;

 }());
