import {ctx} from './Canvas.mjs'
import {loadImage} from './Utilities.mjs'

class Player {
	constructor() {
		this.pos = [0, 0]
		this.direction = 1
		this.loaded = 0
		this.images = [
			loadImage('./images/player/player_up.png'),
			loadImage('./images/player/player_down.png'),
			loadImage('./images/player/player_left.png'),
			loadImage('./images/player/player_right.png'),
		]
	}
	draw() {
		ctx.drawImage(this.images[this.direction], 128, 128)
	}
}

export let player = new Player()