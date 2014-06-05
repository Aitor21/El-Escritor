window.onload = function () {
  'use strict';

  var game
    , ns = window['el-escritor'];

  game = new Phaser.Game(1280, 860, Phaser.AUTO, 'el-escritor-game');
  game.state.add('boot', ns.Boot);
  game.state.add('preloader', ns.Preloader);
  game.state.add('menu', ns.Menu);
  game.state.add('credit', ns.Credit);
  game.state.add('game', ns.Game);
  game.state.start('boot');
};
