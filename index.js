function ValidateForm(){

 var validFName = false;
 var validLName = false;
 var validNumber = false;
 var validEmail = false;

  
 var letters = /^[A-Za-z]+$/;
 var numbers = /^[0-9]+$/;

  
 var errorMessages =""; 

 if (myContact.fname.value==null ||
 myContact.fname.value=== "" ||
 myContact.f.value.length >=20 ||  !myContact.fname.value.match(letters))
 errorMessages += "<p>The firstname must contain 20 characters. Only letters are accepted</p>";
 else
 validFName = true; 
  
 if (myContact.lname.value==null ||
 myContact.lname.value=== "" ||
 myContact.lname.value.length >=50 ||  !myContact.lname.value.match(letters))
 errorMessages += "<p>The lastname must contain 50 characters. Only letters are accepted</p>";
 else
 validLName = true; 
  

 if (myContact.email.value==null ||
 myContact.email.value=== "" ||
!myContact.email.value.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))

 errorMessages += "<p> Email Not Valid.</p>";
 else
 validEmail = true; 
    

 if (myContact.number.value==null ||
 myContact.number.value=== "" ||
 myContact.number.value.length >15 ||  
!myContact.number.value.match(numbers))
 errorMessages += "<p>The phone number must contain 15 characters. Only numbers are accepted</p>";
 else
 validNumber = true; 
  

  

  
 document.getElementById("errorMessages").innerHTML = errorMessages;

 return ( validFName && validLName && validNumber && validEmail) ;
}
