let sliderBody = document.querySelector('#sliderBody'),
	beginTouch = 0;

sliderBody.onmousedown = (event) => {
	beginTouch = event.clientX;
}

sliderBody.onmouseup = (event) => {
	let endTouch = event.clientX,
		isSwipe = Math.abs(beginTouch - endTouch) > 250 ? true : false;
	// console.log(beginTouch, endTouch);
	if (beginTouch < endTouch && isSwipe) {
		console.log('to the left');
		switchPrev();
	}
	else if (beginTouch > endTouch && isSwipe) {
		console.log('to the right');
		switchNext();
	}
}