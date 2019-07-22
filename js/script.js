function main() {
	setHtmlSelectors();
	setScreenOrientation();
	adjustAnimalsLayout();
	defineAnimalImgSelectors();
	setFavoriteAnimal();
	loadLastTests();
	generateQuestions();
	generateAboutAnimals();
}

function setHtmlSelectors() {
	menuHtml = document.getElementById('menu');
	questionsHtml = document.getElementById('questions');
	resultsHtml = document.getElementById('results');
	aboutAnimals = document.getElementById('aboutAnimals');

	questionsContent = document.getElementById('questionsContent');
	navigationArrows = document.getElementById('navigationArrows');
	leftArrow = document.getElementById('leftArrow');
	rightArrow = document.getElementById('rightArrow');	

	aboutAnimals = document.getElementById('aboutAnimals');
}

function setScreenOrientation() {
	if (window.innerWidth < window.innerHeight) {
		screenOrientation = 'portrait';
	} else {
		screenOrientation = 'landscape';
	}
}

function adjustAnimalsLayout() {
	let portrait = document.getElementsByClassName('portrait');
	let landscape = document.getElementsByClassName('landscape');

	if (screenOrientation == 'portrait') {
		for (var i = 0; i < landscape.length; i++) {
			landscape[i].classList.add('hidden');
		}
		for (var i = 0; i < portrait.length; i++) {
			portrait[i].classList.remove('hidden');
		}
	} else {
		for (var i = 0; i < portrait.length; i++) {
			portrait[i].classList.add('hidden');
		}
		for (var i = 0; i < landscape.length; i++) {
			landscape[i].classList.remove('hidden');
		}
	}
}

function defineAnimalImgSelectors() {
	let imgs = document.getElementsByTagName('img');

	if (screenOrientation == 'portrait') {
		animalImgs.eagle = imgs[0];
		animalImgs.cat = imgs[1];
		animalImgs.shark = imgs[2];
		animalImgs.wolf = imgs[3];
	} else {
		animalImgs.eagle = imgs[4];
		animalImgs.cat = imgs[5];
		animalImgs.shark = imgs[6];
		animalImgs.wolf = imgs[7];
	}
}

function setFavoriteAnimal(animal) {
	lastsFavoriteAnimal = favoriteAnimal;

	if (animal != undefined) {
		favoriteAnimal = animal;
		localStorage.setItem('favoriteAnimal', favoriteAnimal);		
	} else
		favoriteAnimal = localStorage.getItem('favoriteAnimal');

	if (lastsFavoriteAnimal != null)
		animalImgs[lastsFavoriteAnimal].classList.remove('animalSelected');

	if (favoriteAnimal != null)
		animalImgs[favoriteAnimal].classList.add('animalSelected');
}

function loadLastTests() {
	var testsTemp = localStorage.getItem('lastTests');

	if (testsTemp != null) {
		tests = JSON.parse(testsTemp);
	}
}

function generateQuestions() {
	let first = true;
	let questionsHtml = '';
	let classForNotShow = '';
	let questionTitleRowClass = 'row-sixth-part';

	let currentQuestionNumber = 1;

	if (screenOrientation == 'landscape') {
		questionTitleRowClass = 'row-fourth-part';
		navigationArrows.classList.add('row-fourth-part');
	} else {
		navigationArrows.classList.remove('row-fourth-part');
	}

	for (var questionIdc in questions) {
		const currentQuestion = questions[questionIdc];

		if (!first)
			classForNotShow = 'hidden';

		questionsHtml += '<div id="question' + questionIdc + '" class="row ' + classForNotShow + '">' +
							'<div class="' + questionTitleRowClass + '">' +
								'<div class="vertical-center-position">' +
									'<h2 class="text-center text-metal">' + currentQuestion.question + '</h2>' +
								'</div>' +
							'</div>';

		currentQuestionNumber = 1;

		if (screenOrientation == 'landscape') {
			questionsHtml += '<div class="row flex">';
		}

		for (var alternativeIdc in currentQuestion.alternatives) {
			const currentAlternative = currentQuestion.alternatives[alternativeIdc];

			if (screenOrientation == 'portrait') {
				questionsHtml += '<div class="row row-sixth-part">' +
									'<div class="col-min horizontal-center vertical-center-position">' +
										'<button id="answer' + questionIdc + alternativeIdc + '" class="btn btn-blue" onclick="setAnswerForCurrentQuestion(\'' + alternativeIdc + '\');">' +
											'<b>' + alternativeIdc + '</b> - ' + currentAlternative +
										'</button>' +
									'</div>' +
								'</div>';
			} else {
				if (currentQuestionNumber == 1 || currentQuestionNumber == 3) {
					questionsHtml += '<div class="col-second-part-rel">';
				}

				questionsHtml += '<div class="row row-fourth-part">' +
									'<div class="col-min horizontal-center vertical-center-position">' +
										'<button id="answer' + questionIdc + alternativeIdc + '" class="btn btn-blue" onclick="setAnswerForCurrentQuestion(\'' + alternativeIdc + '\');">' +
											'<b>' + alternativeIdc + '</b> - ' + currentAlternative +
										'</button>' +
									'</div>' +
								'</div>';

				if (currentQuestionNumber == 2 || currentQuestionNumber == 4) {
					questionsHtml += '</div>';
				}

				currentQuestionNumber++;
			}
		}

		if (screenOrientation == 'landscape') {
			questionsHtml += '</div>';
		}

		questionsHtml += '</div>';

		first = false;
	}

	questionsContent.innerHTML = questionsHtml;
}

function generateAboutAnimals() {
	let aboutAnimalsHtml = '';

	for (var animal in animalsAttributes) {
		const currentAnimal = animalsAttributes[animal];

		aboutAnimalsHtml += '<div id="about' + animal + '" class="row hidden aboutAnimal">' +
								'<button class="btn btn-blue btn-back-to" onclick="backToResults();">X</button>' +
								'<div class="row-eighth-part text-center">' +
									'<img src="./img/' + animal + '.svg" alt="' + currentAnimal.name + '">' +
									'<span class="text-ice">' + currentAnimal.name + '</span>' +
								'</div>';

		aboutAnimalsHtml += generateAnimalBehaviors(currentAnimal.behaviors);
		aboutAnimalsHtml += generateAnimalStrongPoints(currentAnimal.strongPoints);
		aboutAnimalsHtml += generateAnimalImprovementPoints(currentAnimal.improvementPoints);
		aboutAnimalsHtml += generateAnimalMotivations(currentAnimal.motivations);
		aboutAnimalsHtml += generateAnimalValues(currentAnimal.values);

		aboutAnimalsHtml += '</div>';
	}

	aboutAnimals.innerHTML = aboutAnimalsHtml;
}

function generateAnimalBehaviors(behaviors) {
	let behavorsAnimalHtml = 	'<div class="row-eighteenth-part">' +
									'<h2 class="text-blue text-center vertical-center-position">COMPORTAMENTOS</h2>' +
								'</div>' +
								'<ul>' +
									'<li class="text-metal">' +
										'<h3>' + behaviors.spotlight + '</h3>' +
									'</li>';

	for (var behaviorIdc in behaviors.others) {
		const behavior = behaviors.others[behaviorIdc];

		behavorsAnimalHtml += 		'<li class="text-ice">' + behavior + '</li>';
	}

	behavorsAnimalHtml += 		'</ul>';

	return behavorsAnimalHtml;
}

function generateAnimalStrongPoints(strongPoints) {
	let strongPointsAnimalHtml = 	'<div class="row-eighteenth-part">' +
										'<h2 class="text-blue text-center vertical-center-position">PONTOS FORTES</h2>' +
									'</div>' +
									'<ul>' +
										'<li class="text-metal">' +
											'<h3>' + strongPoints.spotlight + '</h3>' +
										'</li>';

	for (var strongPointIdc in strongPoints.others) {
		const strongPoint = strongPoints.others[strongPointIdc];

		strongPointsAnimalHtml += 		'<li class="text-ice">' + strongPoint + '</li>';
	}

	strongPointsAnimalHtml += 		'</ul>';

	return strongPointsAnimalHtml;
}

function generateAnimalImprovementPoints(improvementPoints) {
	let improvementPointsAnimalHtml = 	'<div class="row-eighteenth-part">' +
											'<h2 class="text-blue text-center vertical-center-position">PONTOS DE MELHORIA</h2>' +
										'</div>' +
										'<ul>';

	for (var improvementPointIdc in improvementPoints) {
		const improvementPoint = improvementPoints[improvementPointIdc];

		improvementPointsAnimalHtml +=			'<li class="text-ice">' + improvementPoint + '</li>';
	}

	improvementPointsAnimalHtml += 			'</ul>';

	return improvementPointsAnimalHtml;
}

function generateAnimalMotivations(motivations) {
	let motivationsAnimalHtml = '<div class="row-eighteenth-part">' +
									'<h2 class="text-blue text-center vertical-center-position">MOTIVAÇÕES</h2>' +
								'</div>' +
								'<ul>';

	for (var motivationIdc in motivations) {
		const motivation = motivations[motivationIdc];

		motivationsAnimalHtml +=	'<li class="text-ice">' + motivation + '</li>';
	}

	motivationsAnimalHtml += 	'</ul>';

	return motivationsAnimalHtml;
}

function generateAnimalValues(values) {
	let valuesAnimalHtml = 	'<div class="row-eighteenth-part">' +
								'<h2 class="text-blue text-center vertical-center-position">VALORES</h2>' +
							'</div>' +
							'<ul>' +
								'<li class="text-ice">' + values + '</li>' +
							'</ul>';

	return valuesAnimalHtml;
}

function startQuiz() {
	menuHtml.classList.add('hidden');
	questionsHtml.classList.remove('hidden');
}

function previousQuestion() {
	if (currentQuestion == 0) {
		return;
	} else {
		let lastQuestion = currentQuestion;
		currentQuestion = currentQuestion - 1;

		document.getElementById('question' + lastQuestion).classList.add('hidden');
		document.getElementById('question' + currentQuestion).classList.remove('hidden');
	}

	rightArrow.classList.remove('lastQuestion');
	rightArrow.innerHTML = '>';

	if (currentQuestion == 0) {
		leftArrow.classList.add('disabled');
	}

	if (answers[currentQuestion] != undefined) {
		rightArrow.classList.remove('disabled');
	}
}

function nextQuestion() {
	if (currentQuestion == lastQuestionsIndex) {
		if (answers[currentQuestion] != undefined) {
			showResults();
		} else {
			return;
		}
	} else {
		if (answers[currentQuestion] == undefined) {
			return;
		}

		let lastQuestion = currentQuestion;
		currentQuestion = currentQuestion + 1;

		document.getElementById('question' + lastQuestion).classList.add('hidden');
		document.getElementById('question' + currentQuestion).classList.remove('hidden');
	}

	leftArrow.classList.remove('disabled');
	
	if (answers[currentQuestion] == undefined) {
		rightArrow.classList.add('disabled');
	}
	
	if (currentQuestion == lastQuestionsIndex) {
		rightArrow.classList.add('lastQuestion');
		rightArrow.innerHTML = 'Finalizar';
	}
}

function setAnswerForCurrentQuestion(answer) {
	let currentAwnswerHtml = document.getElementById('answer' + currentQuestion + answer);

	if (answers[currentQuestion] != undefined) {
		let lastAnswer = answers[currentQuestion];
		results[lastAnswer]--;
		document.getElementById('answer' + currentQuestion + lastAnswer).classList.remove('selected');
	}

	answers[currentQuestion] = answer;
	results[answer]++;
	currentAwnswerHtml.classList.add('selected');

	rightArrow.classList.remove('disabled');
}

function showResults() {
	let eagleResult = document.getElementsByClassName('eagleResult');
	let catResult = document.getElementsByClassName('catResult');
	let sharkResult = document.getElementsByClassName('sharkResult');
	let wolfResult = document.getElementsByClassName('wolfResult');

	eagleResult[0].innerHTML = results.I * 4;
	eagleResult[1].innerHTML = results.I * 4;

	catResult[0].innerHTML = results.C * 4;
	catResult[1].innerHTML = results.C * 4;

	sharkResult[0].innerHTML = results.A * 4;
	sharkResult[1].innerHTML = results.A * 4;

	wolfResult[0].innerHTML = results.O * 4;
	wolfResult[1].innerHTML = results.O * 4;

	saveTestInLastTests();

	questionsHtml.classList.add('hidden');
	resultsHtml.classList.remove('hidden');
}

function saveTestInLastTests() {
	if (answers.length == 0) {
		return;
	}

	tests.push(answers);

	localStorage.setItem('lastTests', JSON.stringify(tests));;
}

function viewAbout(animal) {
	let lastAbouAnimal = currentAboutAnimal;
	currentAboutAnimal = document.getElementById('about' + animal);

	if (lastAbouAnimal != null) {
		lastAbouAnimal.classList.add('hidden');
	}

	resultsHtml.classList.add('hidden');
	aboutAnimals.classList.remove('hidden');
	currentAboutAnimal.classList.remove('hidden');
}

function backToResults() {
	aboutAnimals.classList.add('hidden');
	resultsHtml.classList.remove('hidden');
}

function backToMainMenu() {
	resultsHtml.classList.add('hidden');
	menuHtml.classList.remove('hidden');
}

function debugResult() {
	menuHtml = document.getElementById('menu');
	menuHtml.classList.add('hidden');

	results = {I: 8, C: 5, A: 8, O: 4};

	showResults();
}

window.onload = function() {
	main();
};

window.onorientationchange = function() {
	setScreenOrientation();
	adjustAnimalsLayout();
	defineAnimalImgSelectors();
	generateQuestions();
	generateAboutAnimals();
}