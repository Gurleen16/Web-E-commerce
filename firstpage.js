var user=document.getElementById("user");
var pass=document.getElementById("pass");
var login=document.getElementById("login");
var reg=document.getElementById("register");
var obj=[];
retrieveDetails();
login.onclick=function() {
  if(user.value=='' || pass.value=='')
  alert("Enter both fields");
  else {
      loginRequest();
  }
}

function loginRequest(){
  var i=0;
  var len=obj.length;
  while(i<len)
  {
    if(obj[i].User==user.value&&obj[i].Pass==pass.value)
    {
      window.location.href='/home/gurleen/web/web-ecommerce/showProducts.html';
      break;
    }
    i++;
      if(i==len)
      {
        user.value='';
        pass.value='';
        alert("INCORRECT VALUES");
      }

  }
}

reg.onclick=function () {
  window.location.href='/home/gurleen/web/web-ecommerce/register.html';
}

function retrieveDetails()
{
  var detail=localStorage.getItem("registerDetails");
  if(detail)
  {
    obj=JSON.parse(detail);
  }
}
