
function validateName()
{
    var name=document.getElementById('firstname').value;
    var reg= new RegExp(/^[A-Za-z]+$/)
    if (name==null || name==""){  
        alert("Name can't be blank");  
        return false;  
      } 
      if(!reg.test(name))
      {
          alert("name should contain only alphabets");
          document.form1.firstname.focus();
      }

}
function validatePassword(){
var firstpassword=document.getElementById("password").value; 
var secondpassword=document.getElementById("confirm_password").value;
if(firstpassword.length<8)
{
    alert("password should be of min 8 char");
}
  
if(firstpassword==secondpassword){  
return true;  
}  
else{  
alert("password must be same!");  
return false;  
}

}
function validateEmail()
{

    var email=document.getElementById('email').value;
    var r= new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);

  
   if(!r.test(email))
   {
      alert("enter a valid email");
      document.form1.emailid.focus();
  
      return false;
   }
}

function validateForm()
{
    validateEmail();
    validateName();
    validatePassword();
    document.write('<h2>Your form is submitted successfully <h1>');

}
