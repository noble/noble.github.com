		
$(function()
			{
				// this initialises the demo scollpanes on the page.
				$('#scroller_area_1').jScrollPane({scrollbarWidth:11, scrollbarMargin:10});
				$('#scroller_area_2').jScrollPane({scrollbarWidth:11, scrollbarMargin:10});
				$('#scroller_area_3').jScrollPane({scrollbarWidth:11, scrollbarMargin:10});
				//$('#pane2').jScrollPane({showArrows:true});
				//$('#pane3, #pane4').jScrollPane({scrollbarWidth:20, scrollbarMargin:10});
                
		
			});

			
	function activeLink(id){


	for(i = 0; i <5; i++){

		if(id ==i){

			document.getElementById('lst'+id).className='t';

		}else if(id !=i){

			document.getElementById('lst'+i).className='f';
		}

	}

}


var nextTitle;

function fadePageTitle(){
	
	$('#page_title').fadeOut();

}

	function setCurrentObject(id){
				
	$('#page_title h2').html(nextTitle);
	$('#page_title').fadeIn('slow');
	activeLink(id);

	}