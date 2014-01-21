function setNewsletter(object){
	var state = document.getElementById(object).checked;
	
if(state == false){
	document.getElementById("newsletter").value="n";
	document.getElementById("subscribe_to_news").value="n";
	
}else{
		document.getElementById("newsletter").value="y";
		document.getElementById("subscribe_to_news").value="y";
	
}

}


	function validateRegistration(form){
	var r = true;

	var myTarget = document.getElementById(form);
	var product = myTarget.subscription_id.value;
	var newletter = myTarget.c_first_name.value;
	var firstname = myTarget.c_first_name.value;
	var lastname = myTarget.c_last_name.value;
	var address = myTarget.c_address.value;
	var telephone = myTarget.c_telephone.value;
	var fax = myTarget.c_fax.value;

	var username = myTarget.c_username.value;
    var password = myTarget.c_password.value;
    
	var email =myTarget.c_email.value;
	var promotion =myTarget.c_promo.value;
	var terms =myTarget.c_terms.checked;
	
	
	
	 if(product ==0){
		alert("Please select a subscription / product");
		r = false;

	}else if(firstname ==""){
		alert("Please provide your first name");
		r = false;
	}else if(lastname ==""){
		alert("Please provide your surname");
		r= false;
	}else if(telephone.length < 9){
		alert("Please provide a contact number");
		r= false;
	}else if(email ==""){
	alert("Please provide an email address");
	r= false;
	
	}else if(email.indexOf("@")<2){
	alert("Please provide a valid email address");
	     r = false;
             

	}else if(address.length < 15){
		alert("Please provide your full address including postcode");
		r= false;
	
	}else if(username.length < 5){
		alert("Your login name must equal or be greater than 5 characters");
		r= false;
	}else if(password.length < 5){
		alert("Your login password must equal or be greater than 5 characters");
		r= false;
	}else if(terms ==false){
		alert("You must agree to the Veritas Traders terms & Conditions to proceed");
		r= false;
		
	}
if(r == true){
	var con =confirm("By continuing you have read, understood and agreed to our Terms and Conditions. For subscription based services please have your PayPal or credit card details to hand.");
}

if(con ==true){
	r = true;
}else{
	r = false;
}
	return r;
}

function validateLogin(form){

	var r = true;

	var myTarget = document.getElementById(form);
	var username = myTarget.c_username.value;
    var password = myTarget.c_password.value;
     if(username.length < 5){
		alert("Your login name must equal or be greater than 5 characters");
		r= false;
	}else if(password.length < 5){
		alert("Your login password must equal or be greater than 5 characters");
		r= false;
	}
	
	return r;

}

function validateContact(form){

	var r = true;

	var myTarget = document.getElementById(form);

	var firstname = myTarget.c_first_name.value;
	var lastname = myTarget.c_last_name.value;
	var email =myTarget.c_email.value;
	var telephone =myTarget.c_telephone.value;
	var subject =myTarget.c_subject.value;
	var message =myTarget.c_message.value;
          if(firstname ==""){
		alert("Please provide your first name");
		r = false;
	}else if(lastname ==""){
		alert("Please provide your surname");
		r= false;
	}else if(email ==""){
	alert("Please provide an email address");
	r= false;
	
	}else if(email.indexOf("@")<2){
	alert("Please provide a valid email address");
	     r = false;
             

	}else if(subject ==""){
		alert("Please provide a subject for this message");
		r= false;
		}else if(message ==""){
		alert("Please provide a query");
		r= false;
		}
	
			if(r == true){
		var ajaxObject = false;

		if(window.XMLHttpRequest){
		ajaxObject = new XMLHttpRequest;

		}else if(window.ActiveXObject){
			ajaxObject = new ActiveXObject("Microsoft.XMLHTTP");

		}

		if(ajaxObject){

	
		var formVars = new Array();
		formVars.push(firstname,lastname,email,telephone,subject,message)
	
		ajaxObject.open("GET","mini_form.php?user_vars="+formVars,true);
		
		ajaxObject.onreadystatechange = function(){
		
		if(ajaxObject.readyState ==4 && ajaxObject.status==200){
			
			var response = ajaxObject.responseText;
			switch(response){
				case 'R1':
				document.getElementById("response").innerHTML="<b>Thank you. Your message has been sent successfully.</b>";
					myTarget.c_first_name.value="";
					myTarget.c_last_name.value="";
					myTarget.c_email.value="";
					myTarget.c_telephone.value="";
					myTarget.c_subject.value="";
					myTarget.c_message.value="";
				break;
				
				case 'R2':
				document.getElementById("response").innerHTML="<b>Sorry an error occured sending your message.</b>";
				break;
				
	
		
				
				
			}
			
		}
	}
	ajaxObject.send(null);
	
}
		}
	return false;

}

function validateReminder(form){
	var r = true;
	var myTarget = document.getElementById(form);
	
	if(myTarget.c_email_reminder.value ==""){
		alert("Please provide an email address");
		r = false;
	}else if(myTarget.c_email_reminder.value.indexOf("@")<2){
		alert("Please provide a valid email address");
		r = false;
	}

	return r;
	
}