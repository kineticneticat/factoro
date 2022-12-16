import {world} from './World.mjs'
import {player} from './Player.mjs'
import {ctx} from './Canvas.mjs'
import {loadImage, testForAllImagesLoaded} from './Utilities.mjs'
import {conveyor} from './Buildings.mjs'
import {ui} from './UI.mjs'


const settings = {
	fps: 10
}

let keyD, keyS, keyA, keyW, keyRi, keyDo, keyLe, keyUp

window.addEventListener("keydown", () => {
	var keyCode = event.keyCode;
	// console.log(keyCode)
	switch (keyCode) {
		case 68: //d
			keyD = true
			break
		case 83: //s
			keyS = true
			break
		case 65: //a
			keyA = true
			break
		case 87: //w
			keyW = true
			break
		case 39: // right
			keyRi = true
			break
		case 37: // left
			keyLe = true
			break
		case 38: // up
			keyUp = true
			break
		case 40: // down
			keyDo = true
			break
	
        
    }
})
window.addEventListener("keyup", () => {
    var keyCode = event.keyCode;
    switch (keyCode) {
		case 68: //d
			keyD = false;
			break;
		case 83: //s
			keyS = false;
			break;
		case 65: //a
			keyA = false;
			break;
		case 87: //w
			keyW = false;
			break;
		case 39: // right
			keyRi = false
			break
		case 37: // left
			keyLe = false
			break
		case 38: // up
			keyUp = false
			break
		case 40: // down
			keyDo = false
			break
    }
})

export let tick = 0
const tickAll = () => {
	ctx.clearRect(0, 0, 320, 320)
	ctx.font = "10px serif"
	tick += 1
	if (tick > 59) {
		tick = 0
	}

	if (keyW || keyUp) {player.pos[1]-=1/32; world.offset[1]+=1/32; player.direction=0}
	if (keyA || keyLe) {player.pos[0]-=1/32; world.offset[0]+=1/32; player.direction=2}
	if (keyS || keyDo) {player.pos[1]+=1/32; world.offset[1]-=1/32; player.direction=1}
	if (keyD || keyRi) {player.pos[0]+=1/32; world.offset[0]-=1/32; player.direction=3}

	// conveyor.debug()
	// world.limit()

	//wait for all images to load
	if (testForAllImagesLoaded()) {
		world.draw()	
		player.draw()
		ui.draw()
	}
	// console.log(world.offset)
	requestAnimationFrame(tickAll)
}
window.onload = tickAll()