(function() {
    'use strict';

    function Tutorial() {
        this.titleTxt = null;
        this.startTxt = null;
        this.text = null;
        this.textReflect = null;

    }

    Tutorial.prototype = {

        create: function () {
            var x = this.game.width / 2
            , y = this.game.height / 2;


            this.stage.backgroundColor = 0x0D0DB7;

            this.text = this.add.text(this.world.centerX, this.world.centerY, "- TUTORIAL -");

            //  Centers the text
            this.text.anchor.set(0.5);
            this.text.align = 'center';

            //  Our font + size
            this.text.font = 'Arial';
            this.text.fontWeight = 'bold';
            this.text.fontSize = 70;
            this.text.fill = '#ffffff';

            //  Here we create our fake reflection :)
            //  It's just another Text object, with an alpha gradient and flipped vertically

            this.textReflect = this.add.text(this.world.centerX, this.world.centerY + 50, "- TUTORIAL -");

            //  Centers the text
            this.textReflect.anchor.set(0.5);
            this.textReflect.align = 'center';
            this.textReflect.scale.y = -1;

            //  Our font + size
            this.textReflect.font = 'Arial';
            this.textReflect.fontWeight = 'bold';
            this.textReflect.fontSize = 70;

            //  Here we create a linear gradient on the Text context.
            //  This uses the exact same method of creating a gradient as you do on a normal Canvas context.
            var grd = this.textReflect.context.createLinearGradient(0, 0, 0, this.text.canvas.height);

            //  Add in 2 color stops
            grd.addColorStop(0, 'rgba(255,255,255,0)');
            grd.addColorStop(1, 'rgba(255,255,255,0.08)');

            //  And apply to the Text
            this.textReflect.fill = grd;

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

    window['molecule-power'] = window['molecule-power'] || {};
    window['molecule-power'].Tutorial = Tutorial;

}());