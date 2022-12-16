import { ctx } from "./Canvas.mjs"
import { Vector } from "./Utilities.mjs"
import { tick } from "./Main.mjs"

class UI {
	constructor() {
		this.elementRegister = []
	}
	register(element) {
		this.elementRegister.push(element)
	}
	draw() {
		this.elementRegister.forEach((a) => {a.update()})
	}
}
export let ui = new UI()
class Element {
	constructor(details, controller, pos) {
		this.details = details
		this.controller = controller
		this.pos = pos
		this.show = true
		ui.register(this)
	}
	update() {
		let move = this.controller(tick, this.pos)
		
		this.pos = new Vector(move[0], move[1])
		console.log(this.pos.x, this.pos.y)
	}
	// draw() {
	// 	pass
	// }
}
class Text extends Element {
	constructor(text, details, controller, pos) {
		super(details, controller, pos)
		this.text = text
		this.details = details
		this.controller = controller
		this.pos = pos
	}
	update() {
		super.update()
		this.draw()
	}
	draw() {
		
		// console.log(this.pos.x, this.pos.y)
		ctx.fillText(this.text, this.pos.x, this.pos.y)
	}
}

new Text("Hello", {}, (t, p) => [250 + (Math.cos(t/600)*20), 250 + (Math.sin(t/600)*20)], new Vector(250, 250))