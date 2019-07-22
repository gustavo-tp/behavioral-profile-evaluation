let screenOrientation = '';
let favoriteAnimal = null;
let currentQuestion = 0;
let lastQuestionsIndex = questions.length - 1;

let animalImgs = {
	eagle: null,
	cat: null,
	shark: null,
	wolf: null
};

let tests = [];
let answers = [];

let results = {
	I: 0,
	C: 0,
	A: 0,
	O: 0
}

var menuHtml = null;
var questionsHtml = null;
var resultsHtml = null;
var aboutAnimals = null;

var questionsContent = null;
var navigationArrows = null;
var leftArrow = null;
var rightArrow = null;

var aboutAnimals = null;
var currentAboutAnimal = null;