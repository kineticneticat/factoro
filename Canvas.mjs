export const canvas = document.getElementById('canvas')
export const ctx = canvas.getContext('2d')

export function drawImage(img, x, y) {
	if (img.complete) {
		ctx.drawImage(img, x, y)
	}
}



