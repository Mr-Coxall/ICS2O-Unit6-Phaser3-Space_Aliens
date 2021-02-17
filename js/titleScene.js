/* global Phaser */

class TitleScene extends Phaser.Scene {
  constructor () {
    super({ key: 'titleScene' })
  }

  init (data) {

  }

  preload () {
    this.load.image('background', 'assets/splashSceneImage.png')
    this.load.image('start', 'assets/start.png')
  }

  create (data) {
    if (this.sound.context.state === 'suspended') {
      this.sound.context.resume()
    }
    const backgroundImage = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'background')
    const startButton = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'start').setInteractive()
    startButton.on('pointerdown', () => this.clickButton())
  }

  update (time, delta) {

  }

  clickButton () {
    console.log('Clicked')
    this.scene.switch('menuScene')
  }
}

export default TitleScene
