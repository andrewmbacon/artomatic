$( document ).ready(function() {	

var loadVerb = 	[
						'Calibrating',
						'Tabulating',
						'Indexing',
						'Compiling',
						'Compressing',
						'Defragmenting',
						'Securing',
						'Adding',
						'Retrofitting',
						'Subtracting',
						'Multiplying',
						'Dividing',
						'Stripping',
						'Splicing',
						'Hacking',
						'Designing',
						'Engineering',
						'Programming',
						'Analyzing',
						'Conceptulaizing',
						'Deconstructing',
						'Constructing',
						'Testing',
						'Contemplating',
						'Ruminating upon',
						'Addressing',
						'Considering',
						'Judging',
						'Comprehending',
						'Envisioning',
						'Devising',
						'Digitizing',
						'Categorizing',
						'Polarizing',
						'Disclosing',
						'Documenting',
						/*
						'x',
						'x',
						'x',
						'x',
						'x',
						'x',
						'x',
						'x',
						'x',
						'x',
						'x',
						'x',
						*/
						'Interpreting'
						];
						
//						the						
var loadAdj = 	[
						'Essence',
						'Meaning',
						'Duality',
						'Future',
						'Secrets',
						'Mystery',
						'Shape',
						'Size',
						'Mass',
						'Weight',
						'Velocity',
						'Impact',
						'Evolution',
						'Creation',
						'Possibilities',
						'Concept',
						'Contours',
						'Definition',
						'Experience',
						'Radicalization',
						'Liberation',
						'Subjugation',
						'Methods',
						'Movements',
						'Thoughts',
						'Decisions',
						'Unity',
						'Multiplicity',
						'End',
						'Origins',
						'Brutality',
						'Corruption'
						];
						
//						of
var loadNoun = 	[
						'the Soul',
						'Art',
						'Man',
						'Nationalism',
						'Racism',
						'Woman',
						'the Masculine',
						'the Feminine',
						'Class Struggle',
						'Liberty',
						'Freedom',
						'Democracy',
						'Civilization',
						'Humanity',
						'Consciousness',
						'Infinity',
						'the Universe',
						'the Galaxy',
						'the Planet',
						'God',
						'Culture',
						'Society',
						'the Academy',
						'the Media',
						'the Establishment',
						'the Man',
						'Big Brother',
						'the Presidency',
						'Chastity',
						'Authority',
						'the Clergy',
						'Capitalism',
						'Communism',
						'Socialism',
						'Christianity',
						'America',
						'Globalization',
						'the Collective',
						'Truth',
						'Idealogy',
						'Intent',
						'Compassion',
						'Binary',
						'History',
						'Identity',
						'Passion',
						'the Zeitgeist',
						'Rights',
						'Science',
						/*
						'x',
						'x',
						'x',
						'x',
						'x',
						'x',
						'x',
						'x',
						'x',
						'x',
						*/
						'Privatization'
						];


var loadVerbPrint = loadVerb[Math.floor((Math.random()*(loadVerb.length)))];
var loadAdjPrint = loadAdj[Math.floor((Math.random()*(loadAdj.length)))];
var loadNounPrint = loadNoun[Math.floor((Math.random()*(loadNoun.length)))];


//$('<div>').appendTo('body').attr('id','loading');
	
$('#loading').append(loadVerbPrint +' the '+ loadAdjPrint +' of '+ loadNounPrint);



// SHUFFLE: https://github.com/coolaj86/knuth-shuffle
function shuffle(array) {
	var currentIndex = array.length
	, temporaryValue
	, randomIndex
	;
	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}

//Prepare the Random Numbers!
var maxImgs = 507;
var imgNums = [];
for (i=1;i<=maxImgs;i++) {
	imgNums.push(i);
}
shuffle(imgNums);

var imgTheme = [
				'adj',
				'dance',
				'noun',
				'verb',
				'patriot',
				'scene',
				'type',
				'verb'
				];

var imgAdj 			= 36;
var imgDance 		= 31;
var imgNoun 		= 120;
var imgPatriot 	= 10;
var imgScene 		= 57;
var imgType 		= 63;
var imgVerb 		= 112;


/*

patterns...

noun verb noun
verb type noun
scene noun verb
scene adj noun



*/


// for each img
$('.img img').each(function(){
	// get the first value from the imgNums Array, assign it as the SRC, then remove it from array.
	var randImgNum = imgNums[0];
	var randImg = 'img/gifs/'+randImgNum+'.gif';
	$(this).attr('src', randImg);
	imgNums.shift();

	$(this).load(function(){		
		// Width and Height of the parent element, the target.
		var targetW = $(this).parent().css('width').replace('px', '');
		var targetH = $(this).parent().css('height').replace('px', '');
		
		// W & H of image as it first gets loaded, before we resize 
		var imgW = $(this).width();
		var imgH = $(this).height();		
		
		// If we have a vertical image, make the width full ,and crop the top/bottom off.
		// If we have a horizontal image, make the height full ,and crop the keft/right off.
		if (imgH >= imgW){
			$(this).width('100%');
			var imgH = $(this).height();
			var imgHdiff = Math.abs(targetH-imgH);
			var slide = (imgHdiff/2)*-1;
			$(this).css('top', slide);
		} else {
			$(this).height('100%');
			var imgW = $(this).width();
			var imgWdiff = Math.abs(targetW-imgW);
			var slide = (imgWdiff/2)*-1;
			$(this).css('left', slide);
		} 
			
	});

	
});

// Create an array of cool words.

var words = [
				'Rage, rage against the dying of the light.',
				'Hoping towards havoc.',
				'Prepare for death, and follow me.',
				'To err is human; to forgive, divine.',
				'I am the master of my fate.',
				'The child is father of the man.',
				'And miles to go before I sleep.',
				'Not with a bang but a whimper.',
				'Tread softly because you tread on my dreams.',
				'To strive, to seek, to find, and not to yield.',
				'Look on my works, ye mighty, and despair.',
				'Tis better to have loved and lost, Than never to have loved at all.',
				'Because I could not stop for death, he kindly stopped for me.',
				'Things fall apart; the centre cannot hold.',
				'My mistress’ eyes are nothing like the sun.',
				'Candy is dandy but liquor is quicker.',
				'But at my back I always hear.',
				'A little learning is a dangerous thing.',
				'The proper study of mankind is man.',
				'To be or not to be: that is the question.',
				'Beauty is truth, truth beauty; that is all.',
				'"The time has come", the Walrus said, "To talk of many things".',
				'The mind is its own place, and in itself, Can make a Heav\'n of Hell, a Hell of Heav\'n.',
				'Full fathom five thy father lies.',
				'How do I love thee? Let me count the ways.',
				'If music be the food of love, play on.',
				'We few, we happy few, we band of brothers.',
				'What is this life if, full of care, We have no time to stand and stare.',
				'The moving finger writes; and, having writ, Moves on.',
				'They also serve who only stand and wait.',
				'The quality of mercy is not strained.',
				'Friends, Romans, countrymen, lend me your ears.',
				'Shall I compare thee to a summers day.',
				'Wealth without work.',
				'A thing of beauty is a joy forever.',
				'Do not go gentle into that good night.',
				'Busy old fool, unruly sun.',
				'Stop all the clocks, cut off the telephone.',
				'Human kind cannot bear very much reality.',
				'The lady doth protest too much, methinks.',
				'The old lie: Dulce et Decorum Est.',
				'Rose is a rose is a rose is a rose.',
				'Pleasure without conscience.',
				'I think that I shall never see, a poem lovely as a tree.',
				'Hope springs eternal in the human breast.',
				'Science without humanity.',
				'I grow old... I grow old...I shall wear the bottoms of my trousers, rolled.',
				'No man is an island.',
				'The moving finger writes; and, having writ, Moves on.',
				'Better to reign in Hell than serve in Heaven.',
				'Seek not to know for whom the bell tolls; it tolls for thee.',
				'How do I love thee? Let me count the ways.',
				'Water, water, every where, and all the boards did shrink.',
				'Mine eyes have seen the glory of the coming of the Lord.',
				'Out of the night that covers me, Black as the pit from pole to pole.',
				'A screaming comes across the sky.',
				'All lies and jest, still, a man hears what he wants to hear and disregards the rest.',
				'An honest man\'s pillow is his peace of mind.',
				'I get by with a little help from my friends.',
				'Freedom\'s just another word for nothing left to lose.',
				'I was so much older then, I\'m younger than that now.',
				'It\'s the end of the world as we know it and I feel fine.',
				'The words of the prophets are written on the subway walls.',
				'You don\'t need a weatherman to know which way the wind blows.',
				'Heard ten thousand whispering and nobody listening.',
				'Let us not talk falsely now, the hour is getting late.',
				'It\'s only after we\'ve lost everything that we\'re free to do anything.',
				'The things you own end up owning you.',
				'This is your life and it\'s ending one minute at a time.',
				'I don\'t want to die without any scars.',
				'Advertising has us chasing cars and clothes... working jobs we hate, so we can buy shit we dont need.',
				'We hold these truths to be self-evident.',
				'If not now, when?',
				'The price of freedom is eternal vigilance.',
				'It is sometimes an appropriate response to reality to go insane.',
				'Reality is that which, when you stop believing in it, doesn\'t go away.',
				'I\'m not much, but I\'m all I have.',
				'If you think this Universe is bad, you should see some of the others.',
				'Well, I wake up in the morning, fold my hands and pray for rain.',
				'I saw ten thousand talkers whose tongues were all broken.',
				'Looks like we\'re in for nasty weather.',
				'We\'ll settle for nothing now, and we\'ll settle for nothing later.',
				'The lie is my expense, the scope with my desire.',
				'Give me your tired, your poor, your huddled masses yearning to breathe free',
				'That we shall be as a city upon a hill, the eyes of all people are upon us.',
				'Hello darkness, my old friend.',
				'Which side are you on?',
				'This land was made for you and me.',
				'This machine kills fascists.',
				'Don\'t cry because it\'s over, smile because it happened.',
				'If you tell the truth, you don\'t have to remember anything.',
				'If you\'re going through hell, keep going.',
				'The people have nothing to loose but their chains.',
				'People who enjoy waving flags don\'t deserve to have one.',
				'You can\'t afford to be neutral on a moving train.',
				'Education is a system of imposed ignorance.',
				'Crimes are actions that others commit.',
				'Ignorance is strength.',
				'Scratch any cynic and you will find a disappointed idealist.',
				'Knowledge without character.',
				'Politics without principle.',
				'Commerce without morality.',
				'Worship without sacrifice.',
				'Science gathers knowledge faster than society gathers wisdom.',
				'Richest man in the cemetary.',
				'I want to put a ding in the universe.'
			];

// pick a value at random from the array, and print it on screen
var wordNum = Math.floor((Math.random()*(words.length)));
var theWord = words[wordNum];
$('#word').text(theWord);

var wordColor =	[
					'pink',
					'blue',
					'green',
					'orange',
					'red',
					'black',
					'grey',
					'black',
					'grey',
					'black',
					'grey',
					'black',
					'grey',
					'white'
					];
var wordColorPrint = wordColor[Math.floor((Math.random()*(wordColor.length)))];

var wordStyle = 	[
					'',
					'',
					'',
					'caps',
					'low'
					];
var wordStylePrint = wordStyle[Math.floor((Math.random()*(wordStyle.length)))];


var wordSize =	[
				'tiny',
				'massive',
				'',
				'',
				'',
				'',
				'',
				'',
				'',
				'',
				''
				];
var wordSizePrint = wordSize[Math.floor((Math.random()*(wordSize.length)))];


$('#word').addClass(wordColorPrint).addClass(wordStylePrint);


//wait for all the assets of the page (images) to load, and then add this class. All the CSS animation is triggered off this class. 
	


});
$( window ).load(function() {
	setTimeout(function(){
	$('body').addClass('loaded');
	},2700);
	var audioFile = [Math.floor((Math.random()*114))]
	function playAudio(){
		var audio = document.createElement("audio");
		audio.src = 'audio/'+ audioFile +'.mp3';
		audio.addEventListener("ended", function () {
			this.currentTime = 0;
    		this.play();
		}, false);
		console.log(audioFile);
		audio.play();   
	}
	playAudio();
});

