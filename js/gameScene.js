/* global Phaser */

class GameScene extends Phaser.Scene {
  constructor () {
    super({ key: 'gameScene' })

    this.spaceShip = null
    this.leftButton = null
    this.rightButton = null
    this.fireButton = null
    this.aliens = null
    this.lasers = null
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
    this.load.image('alien', 'assets/alien.png')
    this.load.image('laser', 'assets/missile.png')
  }

  create () {
    console.log('Game scene started')

    const starBackgroundImage = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'starBackground')
    starBackgroundImage.depth = 0

    this.spaceShip = this.add.sprite(this.cameras.main.centerX, 1000, 'ship')

    this.leftButton = this.add.sprite(100, 1000, 'leftButton').setInteractive()
    this.leftButton.alpha = 0.5
    this.leftButton.on('isDown', () => this.moveShipLeft())

    this.rightButton = this.add.sprite(300, 1000, 'rightButton').setInteractive()
    this.rightButton.alpha = 0.5
    this.rightButton.on('pointerdown', () => this.moveShipRight())

    this.fireButton = this.add.sprite(1920 - 100, 1000, 'fireButton').setInteractive()
    this.fireButton.alpha = 0.5

    //  Here we create 2 new groups
    this.aliens = this.add.group();
    this.lasers = this.add.group();

    // start with 1 alien coming down
    this.createAnAlien()
  }

  update () {
    const cursorKeys = this.input.keyboard.createCursorKeys()

    if (cursorKeys.left.isDown === true) {
      this.moveShipLeft()
    } else if (cursorKeys.right.isDown === true) {
      this.moveShipRight()
    }
  }

  end () {
  }

  moveShipLeft () {
    this.spaceShip.x = this.spaceShip.x - 10
  }

  moveShipRight () {
    this.spaceShip.x = this.spaceShip.x + 10
  }

  createAnAlien () {
    //  This creates a new Alien instance within the group
    // random integer: Math.floor(Math.random() * (max - min) ) + min
    const xPosition = Math.floor(Math.random() * ((1920 - 100) - 100) ) + 100
    const yPosition = Math.floor(500)

    this.aliens.create(xPosition, yPosition, 'alien');
  }
}

export default GameScene
