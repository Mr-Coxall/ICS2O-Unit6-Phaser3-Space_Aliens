/* global Phaser */

import TitleScene from './titleScene.js'
import MenuScene from './menuScene.js'
import GameScene from './gameScene.js'

// Our scenes
var titleScene = new TitleScene();
var menuScene = new MenuScene();
var gameScene = new GameScene();

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
game.scene.add("menuScene", menuScene)
game.scene.add("gameScene", gameScene)

// start title
game.scene.start('titleScene')
