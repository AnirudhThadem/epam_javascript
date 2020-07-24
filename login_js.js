function emailValidation()
{
    var email=document.getElementById('mail').value;
    var pwd =document.getElementById('password').value;
    var r= new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);

  
   if(!r.test(email))
   {
      alert("enter a valid email");
      document.form1.emailid.focus();
   }
   //this password and email validation works only with email id epam@bmail.im and pasword epam12
   if(email.match('epam@bmail.in') && pwd.match('epam12'))
   {
    document.write('<h1>CONGRATULATIONS U HAVE SUCCESSFULLY LOGGED IN</h1>');
   }
   else
   {
    alert('invalid email or password mismatch');
   }
   
}  
