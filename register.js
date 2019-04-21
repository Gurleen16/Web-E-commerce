var name=document.getElementById("name");
var user=document.getElementById("user");
var pass=document.getElementById("pass");
var login=document.getElementById("login");
var registerDetails=[];
retrieveDetails();
login.onclick=function() {
  if(name.value==''||user.value=='' || pass.value=='')
  alert("Enter all fields");
  else {
    register();
  }
}

function register()
{
  var obj=new Object();
  obj.Name=name.value;
  obj.User=user.value;
  obj.Pass=pass.value;
  registerDetails.push(obj);
  name.value='';
  user.value='';
  pass.value='';
  var detail=JSON.stringify(registerDetails);
  localStorage.setItem("registerDetails",detail);
  window.location.href='/home/gurleen/web/web-ecommerce/firstpage.html'
  alert("Data Saved Successfully");
  console.log(typeof registerDetails);
}

function retrieveDetails()
{
  var detail=localStorage.getItem("registerDetails");
  if(detail)
  registerDetails=JSON.parse(detail);
}
