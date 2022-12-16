import { ctx, drawImage } from './Canvas.mjs'
import {player} from './Player.mjs'
import {loadImage} from './Utilities.mjs'

class Tile {
	constructor() {
		this.ore = null
		this.building = null
		this.biome = null
	}
	draw(dx, dy) {
		// console.log(`${world.ground}, ${dx}, ${dy}`)
		drawImage(world.ground, dx, dy)
	}
	
}

class World {
	constructor() {
		this.offset = [0, 0]
		this.ground = loadImage('./images/tile/ground/test.png')
		this.seed = 0
		this.grid = []
		for (let y = 0; y < 100; y++) {
			this.grid.push([])
			for (let x = 0; x < 100; x++) {
				//                  ore     biome   building
				this.grid[y].push(new Tile())
			}
		}
		// this.wx = this.wy = 12
		// this.trim = []
		// for (let y = 0; y < this.wy; y++) {
		// 	this.trim.push([])
		// 	for (let x = 0; x < this.wx; x++) {
		// 		this.trim[y].push(['x', 'y'])
		// 	}
		// }

		// console.table(this.trim)
		// this.limit()
		// console.table(this.bounds)
	}

	getTile() {
		
	}
	
	limit() {
		// at 00 -> 0,0  9,0  0,9  9,9
		// at 11 -> 1,1  10,1  1,10  10,10
		this.bounds = [
			[0, 0],
			[0, 0],
			[0, 0],
			[0, 0]
		]

		this.bounds[0] = [player.pos[0], player.pos[1]]
		this.bounds[1] = [player.pos[0] + 9, player.pos[1]]
		this.bounds[2] = [player.pos[0], player.pos[1] + 9]
		this.bounds[3] = [player.pos[0] + 9, player.pos[1] + 9]

		for (let y=0; y<this.bounds[1][0]-this.bounds[0][0]; y++) {
			for (let x=0; x<this.bounds[2][1]-this.bounds[0][1]; x++) {
				this.trim[y][x] = [x, y]
			}
		}
		console.table(this.trim)
		document.getElementById('test').innerHTML = `${this.bounds}`
		// console.log(document.getElementById('test').innerHTML)
	}
	draw() {
		for (let y = 0; y < 100; y++) {
			for (let x = 0; x < 100; x++) {
				
				this.grid[y][x].draw((x*32) + this.offset[0]*32, (y*32) + this.offset[1]*32)
				// drawImage(this.ground, (x*32) + this.offset[0]*32, (y*32) + this.offset[1]*32)

			
				// if (x == this.bounds[0][0] && y == this.bounds[0][1]) { ctx.fillRect((x) + this.offset[0], (y) + this.offset[1], 32, 32) }
			}
		}
		
	}
}

export let world = new World()