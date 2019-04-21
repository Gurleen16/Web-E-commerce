var checkout=document.getElementById("checkout");
var divProductList=document.getElementById("divProductList");
var productList=document.getElementById("productList");
var products=[];
var productId;
var cartQuantity=[];
retrieveData();
checkout.onclick=function() {
  window.location.href='/home/gurleen/web/web-ecommerce/checkout.html'
}
function retrieveData()
{
  var data=localStorage.getItem("dataProducts");

   if(data)
   {
     products=JSON.parse(data);
   var len=products.length;
   productId=len;
   var i=0;
   while(i<len)
   {
     makeProductList(products[i]);
     i++;
   }
 }
}


function makeProductList(objProduct)
{
  //var space=" ";
  var listItem=document.createElement("li");
  listItem.setAttribute("id","li"+objProduct.Id);


  var input=document.createElement("input");
  input.setAttribute("id","input"+objProduct.Id);
  input.setAttribute("class","input");
  input.setAttribute("placeholder","Enter the Quantity");

  var addBtnToCart=document.createElement("button");
  addBtnToCart.setAttribute("id","cartBtn"+objProduct.Id);
  addBtnToCart.setAttribute("class","button1");
  addBtnToCart.innerHTML="Add To Cart";

  listItem.innerHTML="Prod Name : "+objProduct.name+"<br/>Description : "+objProduct.desc+"<br/>Price : Rs. "+objProduct.price+"<br/> Quantity : "+objProduct.quantity+"      ";
  insertBlankLine(listItem);
  listItem.appendChild(input);
//  listItem.innerHTML=" ";
  listItem.appendChild(addBtnToCart);

  productList.appendChild(listItem);
  insertBlankLine(listItem);
  insertBlankLine(listItem);

  addBtnToCart.addEventListener("click",function(event){
  addToCart(objProduct);
  });


}

function getCartQuantity(obj)
{
  var cartlen=cartQuantity.length;
  var i=0;
  while(i<cartlen)
  {
    if(obj.Id==cartQuantity[i].Id)
    {
      cartQuantity[i].quantity=obj.quantity;
      break;
    }
    i++;
  }
  if(i==cartlen)
  {
    cartQuantity.push(obj);
  }
}


function insertBlankLine(targetElement)
{
	var br = document.createElement("br");
    targetElement.appendChild(br);
}


function addToCart(objProduct)
{
  var qty=document.getElementById("input"+objProduct.Id).value;

  if(parseInt(qty)>parseInt(objProduct.quantity))
  {
    alert("Quantity not available");
    document.getElementById("input"+objProduct.Id).value="";
  }
  else if(qty==""||qty<0)
  {
    alert("Quantity not null");
    document.getElementById("input"+objProduct.Id).value="";
  }
  else
  {
  var obj=new Object();
  obj.name=objProduct.name;
  obj.quantity=qty;
  obj.price=objProduct.price;
  obj.Id=objProduct.Id;
  console.log(qty);
  console.log(objProduct.quantity);
  getCartQuantity(obj);
  storingCartValue();
  }
}



function storingCartValue()
{
  var product=JSON.stringify(cartQuantity);
  localStorage.setItem("cartQuantity",product);

}
