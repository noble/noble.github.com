function boldLink(page){
	document.getElementById(page).className ="over";
}

              function valSearch(){
              	var r = true;
              	var result = document.getElementById("search_field").value;
              	if(result =="search news..." || result ==""){
              		alert("Please provide a search query");
              		r = false;
              	}
              	
              	return r;
              }
              
              function showSubNavigation(id){
              var max = 8;
              
              	if(document.getElementById("sub"+id).className="black_nav show"){
              	
              	for(i =1; i <=max; i++){
              		
              		if(i !=id){
              	document.getElementById("sub"+i).className="black_nav hidden";
              		}
              	}
              	}else{
              			
              		for(i =1; i <=max; i++){
              		
       
              	document.getElementById("sub"+i).className="black_nav hidden";
              	
              	}
              		
              	}
              	
              }
              
                       function hideSubNavigation(){
              	var max = 8;
              	   		for(i =1; i <=max; i++){
              		
       
              	document.getElementById("sub"+i).className="black_nav hidden";
              	
              	}
              	
         
              	
              }
              
                 function assignProduct(id,productName){
   	document.getElementById("productChange").innerHTML=productName;
   	document.getElementById("product_name").value=productName;
   	document.getElementById("subscription_id").value=id;
   	
   }
   
   function changePage(id,max, start){
           
          var currentID = document.getElementById(id);
       
           if(id < max){
           	id++;

           }else{
            id =start;
           }
           currentID.setAttribute('id',id);
        
	 for(i =start; i <=max; i++){
	 	if(i == id){
	 		document.getElementById("page"+i).className="show";

	 	}else{
	 		 		document.getElementById("page"+i).className="hidden";	
	 	}
	 }
	
	return false;
}

function openPopup(video){

var ajaxObject = false;

if(window.XMLHttpRequest){
	ajaxObject = new XMLHttpRequest;

}else if(window.ActiveXObject){
	ajaxObject = new ActiveXObject("Microsoft.XMLHTTP");

}

if(ajaxObject){
	
	var player = document.getElementById('video_popup');
	var title = document.getElementById('v_title');
	var description = document.getElementById('v_description');
    var r = true;
	var v = video;
	ajaxObject.open("GET","getVideo.php?video_id="+v,true);
	ajaxObject.onreadystatechange = function(){
		
		if(ajaxObject.readyState ==4 && ajaxObject.status==200){
			var response = ajaxObject.responseText;
			var responseArray = response.split('+');
			videoFile = responseArray[0];
			writeVideo(videoFile);
			title.innerHTML = responseArray[1];
			description.innerHTML= responseArray[2];
			player.className ='show';
		}
	}
	ajaxObject.send(null);
	
}

return false;

	
}

function closePopup(player){
document.getElementById(player).className ='hidden';
	return false;
}