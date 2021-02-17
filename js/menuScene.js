/* global Phaser */

class MenuScene extends Phaser.Scene {
  constructor () {
    super({ key:'menuScene' })
  }
  
  init () {

  }
  
  preload () {

  }
  
  create () {
    this.scene.remove('titleScene')
  }
  
  update () {
    this.scene.switch('gameScene')
  }
  
  end () {
    
  }
}

export default MenuScene
