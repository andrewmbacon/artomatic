// artomatic. by andrew bacon. 

$( document ).ready(function() {






// flow
function init(){
	//console.log('init()...')
	welcome()
	loadingMessage()
	createObjects()
	newArt()
	graphCompletion()
	calcPermutations()

}


function welcome(){
	//console.log('welcome()...')
	var adjust = $('#welcome-icon span').height()
	adjust = adjust/2
	$('#welcome-icon span').css('margin-top', '-'+adjust+'px')
}



function newArt(){
	//console.log('newArt()...')
	
	var art = $('#art')
	var imgs = $('#imgs')
	var imgsWrap = $('#imgs-wrap')
	imgs.removeClass('visible').addClass('hidden')
	
	if (gifs.unplayed.length<3){
		localStorage.removeItem('gifs')
		createObjects()
	}
	if (audios.unplayed.length<1){
		localStorage.removeItem('audios')
		createObjects()
	}
	
	
	var gifCount = 1
	
	// fn
	function newLayout(){}
	function newGifs(){
		
		function buildGif(){
			shuffle(gifs.unplayed)
			var imgWrap = $('<div>')
			imgWrap.addClass('img')
			imgWrap.attr('id', 'img'+gifCount)
	
			var img = $('<img>')
			img.attr('src', 'img/gifs/'+gifs.unplayed[0]+'.gif')
			img.attr('id', 'gif'+gifCount)
			img.addClass('gif')
			gifs.unplayed.shift()
			
			////console.log(img.width())
			
			imgWrap.append(img)
			gifCount++
			
			return imgWrap
		}
		
		function appendGifs(num){
			for (i=0; i<num; i++){
				var thisGif = buildGif()
				imgsWrap.append(thisGif)
			}
		}
		
		appendGifs(3)		
		
	}
	
	function newAudio(){
		shuffle(audios.unplayed)
		var audio = $('<audio>')
		audio.attr('id', 'current-audio')
		//audio.attr('controls', '')
		audio.attr('loop', '')
		/*
		var ogg = $('<source>')
		ogg.attr('src', audios.unplayed[0]+'.ogg')
		ogg.attr('type', 'audio/ogg');
		audio.append(ogg)
		*/
		var mp3 = $('<source>')
		mp3.attr('src', 'audio/'+audios.unplayed[0]+'.mp3')
		mp3.attr('type', 'audio/mp3');
		audio.append(mp3)
		
		art.append(audio)
		audios.unplayed.shift()
	}
	function updateRemaining(obj){
		var remaining = obj.unplayed.length
		$('#'+obj.title+'-remaining').html(remaining)	
	}

	// go
	newAudio()
	newGifs()
	updateRemaining(gifs)
	updateRemaining(audios)
	writeToLocal('gifs', gifs)
	writeToLocal('audios', audios)
	
	

} 
function resizeGifs(){
	//console.log('resizing gifs....');
	$('.img').each(function(){
		var  thisWidth = $(this).width()
		$(this).height(thisWidth)
	})
	$('.gif').each(function(){
		var giffy = $(this)
		var sourceHeight = giffy.height()
		var sourceWidth = giffy.width()

		if (sourceWidth > sourceHeight) {
			giffy.height('100%')
			sourceWidth = giffy.width()
			var parentWidth = giffy.parent().width()
			var adjust = (sourceWidth - parentWidth)/2
			giffy.css('left', '-'+adjust+'px')
		} else if (sourceWidth < sourceHeight) {
			giffy.width('100%')
			sourceHeight = giffy.height()
			var parentHeight = giffy.parent().height()
			var adjust = (sourceHeight - parentHeight)/2
			giffy.css('top', '-'+adjust+'px')
		} else {
			giffy.width('100%')
			giffy.height('100%')
		}
	})
	/*
	// needed if I want to perfcetly vertical align the imgs div. 
	var imgsAdjust = $('#imgs').height()
	$('#imgs').css('margin-top', '-'+imgsAdjust/2+'px');
	*/
}

function revealGifs(){
	resizeGifs()
	$('#loading').hide()
	$('#imgs').removeClass('hidden').addClass('visible')	
}

function createObjects(){
	// creates the gifs and audios objects used in many other functions. 
	// either creates them from values in localstorage, or creates fresh blank ones. 
	
	if (readFromLocal('gifs') != null){
		var localGifs = readFromLocal('gifs')
		gifs = localGifs	
	} else {
		gifs = {
			title : 'gifs',
			total : 557,
			unplayed : []
			}
		createUnplayedArr(gifs)
		writeToLocal('gifs', gifs)
	}
	if (readFromLocal('audios') != null){
		var localAudios = readFromLocal('audios')
		audios = localAudios
	} else {
		audios = {
			title : 'audios',
			total : 114,
			unplayed : []
			}
		createUnplayedArr(audios)
		writeToLocal('audios', audios)
	}
	
}
/*

	var gifsObj = readFromLocal('gifs')
	if (gifsObj != null) {
		//you've been here before.
		gifs = gifsObj
	} else {
		build the gifs object.
		writeToLocal(newGifsObj)
	}


*/
function loadingMessage(){
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
		'Privatization'
		];
	var loadVerbPrint = loadVerb[Math.floor((Math.random()*(loadVerb.length)))];
	var loadAdjPrint = loadAdj[Math.floor((Math.random()*(loadAdj.length)))];
	var loadNounPrint = loadNoun[Math.floor((Math.random()*(loadNoun.length)))];
		
	$('#loading-message').append(loadVerbPrint +' the '+ loadAdjPrint +' of '+ loadNounPrint);
}



	
	
	
// utilities

function graphCompletion(){
	$('#pie2 .pie').hide()
	$('#pie3 .pie').hide()
	
	var precentComplete = Math.round(100-((gifs.unplayed.length / gifs.total)*100))
	////console.log('precentComplete'+precentComplete)
	
	
	function percentToDegree(num){
		var degrees = (num/100)*350
		degrees = 180-degrees
		return degrees
	}
	function rotatePie(selector, angle){
		$(selector)	.css('-webkit-transform', 'rotate(-'+angle+'deg)')
		$(selector)	.css('-moz-transform', 'rotate(-'+angle+'deg)') 
		$(selector)	.css('-o-transform', 'rotate(-'+angle+'deg)') 
		$(selector)	.css('transform', 'rotate(-'+angle+'deg)') 
	}
	var angle2 = percentToDegree(precentComplete)
	rotatePie('#pie2 .pie', angle2)
	$('#pie2 .pie').show()
	var thing = precentComplete
	if (thing > 50){
		var diff = precentComplete-50
		var angle3 = percentToDegree(diff)
		//$('#pie3 .pie').css('-webkit-transform', 'rotate(-'+angle3+'deg)')
		rotatePie('#pie3 .pie', angle3)
		$('#pie3 .pie').show()
	}
}




function shuffle(arr) {
	for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
	return arr;
};	
function createUnplayedArr(obj){
	////console.log('resetArr()...'+obj)
	obj.unplayed = []
	for (i=0; i<obj.total; i++){
		obj.unplayed[i] = i+1	
	}
}
function writeToLocal(localName, value){
	////console.log('writing to local...'+localName);
	var string = JSON.stringify(value);
	////console.log('string to local: '+string);
	localStorage.setItem(localName, string)
}

function readFromLocal(localName){
	////console.log('getting item from local...'+localName);
	var string = localStorage.getItem(localName);
	////console.log('string from local: '+JSON.parse(string));
	return JSON.parse(string);
}
function calcPermutations(){
	// permuation without repetition.
	var gifPerm = gifs.total * (gifs.total-1) * (gifs.total-2);
	var totalPerm = commaSeparateNumber(gifPerm * audios.total);
	
	////console.log('possible permutations = '+ totalPerm)
}
function commaSeparateNumber(val){
	while (/(\d+)(\d{3})/.test(val.toString())){
		val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
	}
	return val;
}

// GO
init();

	

////console.log(readFromLocal('gifs'))
//window.onresize = //console.log('boo')

window.addEventListener('resize', function(event){
  resizeGifs()
})
$( window ).load(function() {
	//console.log('window.load...')
	setTimeout (function(){
		//console.log('timer done...')
		var muteStatus = readFromLocal('muteStatus')
		if 	(muteStatus != 'muted'){
			var a = document.getElementsByTagName("audio")[0];
			a.play();
			$('#play').hide()
		} else {
			$('#stop').hide()
		}
		$('#audio-controls').css('visibility', 'visible')
		revealGifs()
	}, 2500)	
})






$('#more-art').on('click', function(e){
	e.preventDefault;
	location.reload();
});

$('#mute').on('click', function(e){
	e.preventDefault;
	muteAudio()
});
$('#play').on('click', function(e){
	e.preventDefault;
	var a = document.getElementsByTagName("audio")[0];
	a.play()
	localStorage.removeItem('muteStatus')
	$(this).hide()
	$('#stop').show()
	
});
$('#stop').on('click', function(e){
	e.preventDefault;
	var a = document.getElementsByTagName("audio")[0];
	a.pause()
	writeToLocal('muteStatus', 'muted')
	$(this).hide()
	$('#play').show()
});


$('#reset-local').on('click', function(e){
	e.preventDefault();
	////console.log('resetting app...');
	localStorage.clear();
	location.reload();
});

// end doc ready
});