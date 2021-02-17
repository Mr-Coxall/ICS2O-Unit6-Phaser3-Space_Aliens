/* global Phaser */

class MenuScene extends Phaser.Scene {
  constructor () {
    super({ key: 'menuScene' })
  }

  init () {
  }

  preload () {
    this.load.image('start', 'assets/start.png')
  }

  create () {
    this.scene.remove('titleScene')

    const startButton = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'start').setInteractive()
    startButton.on('pointerdown', () => this.clickButton())
  }

  update () {
  }

  end () {
  }

  clickButton () {
    this.scene.switch('gameScene')
  }
}

export default MenuScene
