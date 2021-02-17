/* global Phaser */

class GameScene extends Phaser.Scene {
  constructor () {
    super({ key: 'gameScene' })
  }

  init () {
    console.log("Starting game scene")
  }

  preload () {
  }

  create () {
    console.log('Game scene started')
  }

  update () {
  }

  end () {
  }
}

export default GameScene
