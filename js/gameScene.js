/* global Phaser */

class GameScene extends Phaser.Scene {
  constructor () {
    super({ key: 'gameScene' })

    this.spaceShip = null
    this.leftButton = null
    this.rightButton = null
    this.fireButton = null
  }

  init () {
    console.log('Starting game scene')
  }

  preload () {
    this.load.image('starBackground', 'assets/star_background.png')
    this.load.image('ship', 'assets/spaceShip.png')
    this.load.image('leftButton', 'assets/leftButton.png')
    this.load.image('rightButton', 'assets/rightButton.png')
    this.load.image('fireButton', 'assets/redButton.png')
  }

  create () {
    console.log('Game scene started')

    const starBackgroundImage = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'starBackground')
    starBackgroundImage.depth = 0

    this.spaceShip = this.add.sprite(this.cameras.main.centerX, 1000, 'ship')

    this.leftButton = this.add.sprite(100, 1000, 'leftButton')
    this.leftButton.alpha = 0.5

    this.rightButton = this.add.sprite(300, 1000, 'rightButton')
    this.rightButton.alpha = 0.5

    this.fireButton = this.add.sprite(1920 - 100, 1000, 'fireButton')
    this.fireButton.alpha = 0.5
  }

  update () {
    const cursorKeys = this.input.keyboard.createCursorKeys()

    if (cursorKeys.left.isDown === true) {
      this.spaceShip.x = this.spaceShip.x - 10
    } else if (cursorKeys.right.isDown === true) {
      this.spaceShip.x = this.spaceShip.x + 10
    }
  }

  end () {
  }
}

export default GameScene
