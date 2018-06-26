# USA Today Network - Digital Storytelling Studio Developer Evaluation

This is an evaluation of you ablity to take a mock and build a working prototype module that matches the features and design requirements.


#### Key tasks to be accomplished 

* Working page that shows the navigation module rendered using html, javascript and css that closely resembles the mocks below
* Navigation content should be powered by this json file https://www.gannett-cdn.com/labs/sdt/developer-mock-nav.json
* Page should accept parameters that indicate what page a user is on
* Navigation module should reflect the user's place in the list of articles 


#### Requirements
* Main headline and arrow should point to a url that represents that page _(id will be provide in the URL attribute)_
* Each page in the list of pages should be represented
* Hover state should exist for each nav item

#### Mocks 

##### Previous state
![Previous State](https://www.gannett-cdn.com/labs/sdt/previous.png)

##### Next state
![Next State](https://www.gannett-cdn.com/labs/sdt/next.png)

##### Previous and Next state
![Previous and Next  State](https://www.gannett-cdn.com/labs/sdt/previous_next.png)

### Notes on technology and approach
Vue.js, React or any javascript framework (extra points for Polymer) can be used or you can use vanilla javascript. The same guidlines apply to CSS as well; frameworks such as SASS or LESS can be used, or just regular CSS. The key is to create a module that allows users to understand what article is next, or to view an article they may comes before the current article in the series.


