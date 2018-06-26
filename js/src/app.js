import 'whatwg-fetch';

const kickers = {
	previous: "Previous reading",
	next: "Keep reading"
};

function getCurrentStory(){
	return Number(location.href.split("?")[1]);
}


function addRefer(target, story){
	console.log(target, story);

	const referContainer = document.querySelector(`#${target}`);

	referContainer.style.backgroundImage = `url(${story.image})`;

	referContainer.innerHTML = `<div class='refer__text'>
							<small class='refer__kicker'>${kickers[target]}</small>
							<h2 class='refer__headline'>
								<a href='/${story.url}' class='refer__link'>${story.headline}</h2>
							<small class='refer__readtime'>${story.readtime.replace('min', 'minute')} read</small>
						</div> 
						<div class='refer__icon'>
							<img class='' src='img/arrow.svg' alt="" />
						</div>`;

}


function addRefers(stories, currentStory){
	// REMINDER: The stories are numbered from 1, the array begins at zero (like it should)
	
	const indeces = {
		previous: currentStory === 1 ? currentStory.length - 1 : currentStory - 2,
		next: currentStory >= stories.length ? 0 : currentStory
	};

	Object.keys(indeces).forEach(target => {
		// For each index in the prev/next array of indeces, 
		// get the desired info and drop it onto the page
		addRefer(target, stories[indeces[target]]);
	})
	
	
}


window.addEventListener('DOMContentLoaded', function(e){
	console.log('DOMContentLoaded');
	fetch("https://www.gannett-cdn.com/labs/sdt/developer-mock-nav.json")
	  .then(function(response) {
	    return response.json()
	  }).then(function(json) {
	    console.log('parsed json', json,getCurrentStory()+1);
	   	// Add the content to the refers
	    addRefers(json["items"], getCurrentStory());
	  }).then(function(){
	  	document.querySelector('#refers').style.opacity = 1;
	  }).catch(function(ex) {
	    console.log('parsing failed', ex)
	  });
})
