/* global Phaser */
import TitleScene from './titleScene.js'

// Our game scenes
//var gameScene = new GameScene();
var titleScene = new TitleScene();

const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  backgroundColor: 0xffffff,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
}
const game = new Phaser.Game(config)

// load scenes
game.scene.add('titleScene', titleScene)
//game.scene.add("game", gameScene)

// start title
game.scene.start('titleScene')
