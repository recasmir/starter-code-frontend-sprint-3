// Get the input fields
const checkoutForm = document.getElementById('checkoutFormId');

// Exercise 8
function validate() {
    var password = document.querySelector(".password");
    var phone = document.querySelector('.phone');
    var fName = document.querySelector('.name');
    var email = document.getElementById('email');
    var address = document.getElementById('address');
    var lName = document.getElementById('lName');

    // Get the error elements
    // var errorPassword = document.getElementById("errorPassword");
    // var errorName = document.getElementById('errorName');  
    // var errorPhone = document.getElementById('errorPhone');  

    var regexName = /^[A-Za-z]+$/;
    var regexEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var regexPassword = /(?=.*?[0-9])(?=.*?[A-Za-z]).+/;
    var regexPhone = /^[0-9]+$/;

    var acumErrors=0;

    if(fName.value == ''){
        fName.classList.add('error');
        document.getElementById('errorName').innerHTML ="Enter a name.";
        acumErrors ++;
    } else if (!(fName.value.match(regexName))){
        fName.classList.add('error');
        document.getElementById('errorName').innerHTML ='Numbers in the name are not valid';
        acumErrors ++;
    } else if (fName.value.length < 3){
        fName.classList.add('error');
        document.getElementById('errorName').innerHTML ='Name must be more than 3 characters.';
        acumErrors ++;
    }else{
        fName.classList.remove('error');
        fName.classList.add('valid');
        document.getElementById("errorName").innerHTML="";
    }
    if(lName.value == ''){
        lName.classList.add('error');
        document.getElementById('errorLastName').innerHTML ="Enter a last name.";
        acumErrors ++;
    } else if (!(lName.value.match(regexName))){
        lName.classList.add('error');
        document.getElementById('errorLastName').innerHTML ='Numbers in the name are not valid';
        acumErrors ++;
    } else if (lName.value.length < 3){
        lName.classList.add('error');
        document.getElementById('errorLastName').innerHTML ='Name should be more than 3 characters.';
        acumErrors ++;
    }else{
        lName.classList.remove('error');
        lName.classList.add('valid');
        document.getElementById("errorLastName").innerHTML='';
    }
    if(email.value == ''){
        email.classList.add('error');
        document.getElementById('errorEmail').innerHTML ='Enter an email address';
        acumErrors ++;
    }else if(!(email.value.match(regexEmail))){
        email.classList.add('error');
        document.getElementById('errorEmail').innerHTML ='Email needs to be in the correct format. example@example.com';
        acumErrors ++;
    }else{
        email.classList.remove('error');
        email.classList.add('valid');
        document.getElementById('errorEmail').innerHTML ='';
    }
    if(address.value ==''){
        address.classList.add('error');
        document.getElementById('errorAddress').innerHTML='Enter an address.'
        acumErrors ++;
    }else if(address.value.length < 3){
        address.classList.add('error');
        document.getElementById('errorAddress').innerHTML='Address must have more than 3 characters.'
        acumErrors ++;
    }else{
        address.classList.remove('error');
        address.classList.add('valid');
        document.getElementById('errorAddress').innerHTML ='';
    }
    if(password.value ==''){
        password.classList.add('error');
        document.getElementById('errorPassword').innerHTML='Enter a password.'
        acumErrors ++;
    }else if(!(password.value.match(regexPassword))){
        password.classList.add('error');
        document.getElementById('errorPassword').innerHTML='Password must have at least one letter and one number.'
        acumErrors ++;
    }else if(password.value.length < 3){
        password.classList.add('error');
        document.getElementById('errorPassword').innerHTML='Password must have at least 3 characters.'
        acumErrors ++;
    }else{
        password.classList.remove('error');
        password.classList.add('valid');
        document.getElementById('errorPassword').innerHTML=''
    }
    if(phone.value ==''){
        phone.classList.add('error');
        document.getElementById('errorPhone').innerHTML='Enter a phone number.'
        acumErrors ++;
    }else if(!(phone.value.match(regexPhone))){
        phone.classList.add('error');
        document.getElementById('errorPhone').innerHTML='Phone number must contain only numbers.'
        acumErrors ++;
    }else if(phone.value.length< 3){
        phone.classList.add('error');
        document.getElementById('errorPhone').innerHTML='Phone number must contain more than 3 numbers.'
        acumErrors ++;
    }else{
        phone.classList.remove('error');
        phone.classList.add('valid');
        document.getElementById('errorPhone').innerHTML='';
    }
    if(acumErrors > 0){
        return false;
    }else{
        return true;
    } 
};

checkoutForm.addEventListener("blur", validate, true);
// Validate fields entered by the user: name, phone, password, and email