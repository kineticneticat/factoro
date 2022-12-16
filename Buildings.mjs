import {tagToPath, loadImage} from './Utilities.mjs'

class Building {
	constructor(tag, wx, wy) {
		this.tag = tag
		this.wx = wx
		this.wy = wy
		this.path = tagToPath(tag)
		this.imgs = [
			loadImage(`${this.path}up.png`),
			loadImage(`${this.path}down.png`),
			loadImage(`${this.path}left.png`),
			loadImage(`${this.path}right.png`)
		]
	}
	debug() {
		console.log(this.imgs)
	}
}

class Conveyor extends Building {
	constructor(tier) {
		super(`tile:logistics/conveyors/${tier}`, 1, 1)
		this.direction = 0
		this.side = {
			'A': [],
			'B': []
		}
	}
}


///////////////////////////
export let conveyor = new Conveyor(0)
