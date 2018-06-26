import 'whatwg-fetch';

const kickers = {
	previous: "Previous reading",
	next: "Keep reading"
};

function getCurrentStory(){
	// Fetches the story id from the url
	return Number(location.href.split("?")[1]);
}

function addStoryMeta(story){
	document.querySelector('#headline').innerHTML = story.headline;
	document.querySelector('#image img').setAttribute('src', story.image)
}

function addRefer(target, story){

	const referContainer = document.querySelector(`#${target}`);

	referContainer.style.backgroundImage = `url(${story.image})`;

	referContainer.innerHTML = `<div class='refer__text'>
			<small class='refer__kicker'>${kickers[target]}</small>
			<h2 class='refer__headline'>
				<a id='refer-${target}-headline' href='/${story.url}' class='refer__link'>${story.headline}</a>
			</h2>
			<small class='refer__readtime'>${story.readtime.replace('min', 'minute')} read</small>
		</div> 
		<a class='refer__icon' aria-hidden='true' aria-describedby='refer-${target}-headline' href='/${story.url}'>
			<img class='' src='img/arrow.svg' alt="" />
		</a>`;
}


function addRefers(stories, currentStory){
	// REMINDER: The stories are numbered from 1, the array begins at zero (like it should)
	const indeces = {
		previous: currentStory === 1 ? stories.length - 1 : currentStory - 2,
		next: currentStory >= stories.length ? 0 : currentStory
	};

	Object.keys(indeces).forEach(target => {
		// For each index in the prev/next array of indeces, 
		// get the desired info and drop it onto the page
		addRefer(target, stories[indeces[target]]);
	})
	
	
}


window.addEventListener('DOMContentLoaded', function(e){
	fetch("https://www.gannett-cdn.com/labs/sdt/developer-mock-nav.json")
	  .then(function(response) {
	    // Parse the fetched infomation into sweet JSON.
	    return response.json()
	  }).then(function(json) {

	  	// For demo purposes, add theheadline and image to the page
	  	addStoryMeta(json["items"][getCurrentStory() - 1])

	  	// Fill out the refers
	    addRefers(json["items"], getCurrentStory());
	  
	  }).then(function(){

	  	// Reveal the refers in all their glory
	  	document.querySelector('#refers').style.opacity = 1;

	  }).catch(function(ex) {

	  	// Oops
	    console.log('parsing failed', ex)
	  });
})
