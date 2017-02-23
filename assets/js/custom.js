$(function(){
	beltSwapper();
	workDescLoad();
	changeLangWorkSection();
});

var currentLanguage = 'EN',
		to_about = $('.to_about'),
		belt_cnt = $('.belt_cnt')

function beltSwapper(){
	$('.to_about').click(function(){
		belt_cnt.css('left', '0%')
	})

	$('.to_works').click(function(){
		belt_cnt.css('left', '-100%')
	})

	$('.to_work_desc').click(function(){
		belt_cnt.css('left', '-200%')
	})		
}

function workDescLoad(){
	$.ajaxSetup({ cache: true })
	$('.to_work_desc').click(function(){
			var newTitle = $(this).find('strong').text(),
					newFolder = $(this).data('folder'),
					newHtml = 'work/'+ currentLanguage +'/'+ newFolder +'.html'						

			$('.work_desc_inner').load(newHtml)
			$('.work_title').text(newTitle)
	})
}

function changeLangWorkSection(){

	$('.lang_cnt').click(function(){
		if ($(this).hasClass('selected_lang')){return}
		$('.selected_lang').removeClass('selected_lang')
		$(this).addClass('selected_lang')

		if ($(this).hasClass('ru_cnt')){
			toRu()
		} else {
			toEn()
		}

	})
}

function toRu(){
	$('.select_arrow').css({
		'transform': 'rotate(180deg)'
	})
	currentLanguage = 'RU'
	changeToAbout('Навыки')
	changeHeaderAbout('Навыки')
	changeHeaderWork(180)
}

function toEn(){
	$('.select_arrow').css({
		'transform': 'rotate(0deg)'
	})
	currentLanguage = 'EN'
	changeToAbout('Skills')
	changeHeaderAbout('Skills')
	changeHeaderWork(0)
}

function changeToAbout(s){
	to_about.css({
		'transform': 'translate(0px, -200px)'
	})
	setTimeout(function(){
		to_about.text(s)
		to_about.css({
			'transform': 'translate(0px, 0px)'
		})
	}, 250)
}

function changeHeaderWork(deg){
	$('.flipper').css({
		'transform': 'rotateY('+ deg +'deg)'
	})
}

function changeHeaderAbout(s){
	$('.about_header h1').text(s)
}
