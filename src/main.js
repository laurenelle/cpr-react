require("../styles/main.css");

import $ from 'jquery';
class Test {
	constructor() {
		this.name = "yay";
	}

	say(message) {
		return `${this.name}: ${message}`;
	}
}

$("body").append(new Test().say("puppies!"));
