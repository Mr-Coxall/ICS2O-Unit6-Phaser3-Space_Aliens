/* global Phaser */

class TitleScene extends Phaser.Scene {
  constructor () {
    super({ key: 'titleScene' })
  }

  init (data) {
    console.log("Starting title scene")
  }

  preload () {
    this.load.image('background', 'assets/splashSceneImage.png')
  }

  create (data) {
    // if (this.sound.context.state === 'suspended') {
    //   this.sound.context.resume()
    // }
    const backgroundImage = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'background')
    backgroundImage.depth = 0
  }

  update (time, delta) {
    if (time > 4000) {
      console.log("Moving to menu scene")
      this.scene.switch('menuScene')
    }
  }

  end () {
  }
}

export default TitleScene
