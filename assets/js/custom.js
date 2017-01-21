$(function(){
	someFunction();
	workDescLoad();
});

function someFunction(){

	$('.to_about').click(function(){
		$('.belt_cnt').css('left', '0%')
	})

	$('.to_works').click(function(){
		$('.belt_cnt').css('left', '-100%')
	})

	$('.to_work_desc').click(function(){
		$('.belt_cnt').css('left', '-200%')
	})		
}

function workDescLoad(){

	$('.to_work_desc').click(function(){

			var newTitle = $(this).find('strong').text(),
					newFolder = $(this).data('folder'),
					newHtml = 'work/'+ newFolder +'.html'	

			$('.work_desc_inner').load(newHtml)
			$('.work_title').text(newTitle)
	})
	// $.ajaxSetup({ cache: true });

	// $('.work_el').click(function(){

	// 	var newTitle = $(this).find('strong').text(),
	// 			newFolder = $(this).data('folder'),
	// 			spinner = '<div class="loader">Loading...</div>',
	// 			newHtml = 'work/'+ newFolder +'.html';

	// 	$('.project_load').html(spinner).load(newHtml);
	// 	$('.porject_title').text(newTitle);
	// });
}