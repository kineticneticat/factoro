export class Vector {
	constructor(x, y) {
		this.x = x
		this.y = y
	}
	add(vec) {
		return new Vector(this.x + vec.x, this.y + vec.y)
	}
	sub(vec) {
		return new Vector(this.x - vec.x, this.y - vec.y)
	}
}

export class TilePos {
	constructor(x, y) {
		this.x = x
		this.y = y
	}
	zero() {
		return new TilePos(0, 0)
	}
	offset(x, y) {
		return new TilePos(this.x+x, this.y+y)
	}
}

export function tagToPath(tag) {
	//tile:aaa/bbb/ccc
	// /\ to \/
	//images/tile/aaa/bbb/ccc
	return `./images/${tag.replace(':', '/')}/`
}

let loaded = 0
let target = 0
export function loadImage(path) {
	target++
	let img = new Image()
	img.src = path
	img.onload = () => {loaded++}

	return img
}

export function testForAllImagesLoaded() {
	return target == loaded
}