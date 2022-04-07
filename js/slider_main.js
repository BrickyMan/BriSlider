let slides = document.getElementsByClassName('slide'),
	next = document.querySelector('#btnNext'),
	prev = document.querySelector('#btnPrev'),
	current = 0,
	transitionSpeed = 500,
	transitionValue = 'ease-in-out ' + transitionSpeed + 'ms',
	isSlideStop = true;

function switchNext() {
	if (isSlideStop) {
		isSlideStop = false;
		setTimeout(() => {isSlideStop = true;}, transitionSpeed * 1.2);
		let nextSlide = (current == slides.length - 1) ? 0 : (current + 1);
		slides[nextSlide].style.transition = 'none';
		slides[nextSlide].style.transform = 'translateX(100%)';
		slides[current].style.transition = transitionValue;
		setTimeout(() => {slides[nextSlide].style.transition = transitionValue}, 20);
		setTimeout(() => {
			slides[nextSlide].style.transform = 'translateX(0%)';
			slides[current].style.transform = 'translateX(-100%)';
		}, 40);
		setTimeout(() => {
			current++;
			if (current > slides.length - 1) {
				current = 0;
			}
			changeNavbarCurrent();
		}, 60);
	}
}

function switchPrev() {
	if (isSlideStop) {
		isSlideStop = false;
		setTimeout(() => {isSlideStop = true;}, transitionSpeed * 1.2);
		let prevSlide = (current == 0) ? (slides.length - 1) : (current - 1);
		slides[prevSlide].style.transition = 'none';
		slides[prevSlide].style.transform = 'translateX(-100%)';
		slides[current].style.transition = transitionValue;
		setTimeout(() => {slides[prevSlide].style.transition = transitionValue}, 20);
		setTimeout(() => {
			slides[prevSlide].style.transform = 'translateX(0%)';
			slides[current].style.transform = 'translateX(100%)';
		}, 40);
		setTimeout(() => {
			current--;
			if (current < 0) {
				current = slides.length - 1;
			}
			changeNavbarCurrent();
		}, 60);
	}
}

if (slides.length > 1) {
	for (let i = 0; i < slides.length; i++) {
		if (i != current) {
			slides[i].style.transform = 'translateX(100%)';
		}
	}

	next.onclick = switchNext;	
	prev.onclick = switchPrev;
}