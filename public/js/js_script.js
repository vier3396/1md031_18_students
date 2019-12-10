function menuItem(name, kCal,lactose,gluten,img) {
    this.name = name; // The this keyword refers to the object itself
    this.kCal = kCal;
    this.lactose = lactose;
    this.gluten = gluten;
    this.img = img;
    }

function namecKal(items){
  console.log('The name is: ' + items.name);
  console.log('The kCal is: '+ items.kCal);
  return ('The name is: ' + items.kCal)}


// Objects are then instantiated using the new keyword
var item1 = new menuItem('The Super Burger', 1550, true, false,'https://cdn.pixabay.com/photo/2017/08/02/22/11/burger-2573682_1280.jpg');
var item2 = new menuItem('The Veggie delight', 780, true,true,'https://live.staticflickr.com/65535/48436455446_163bfdb6ac_b.jpg');
var item3 = new menuItem('The notABigMac',8000,true,false,'https://live.staticflickr.com/5218/5386641085_42b19cff0d_b.jpg');
var item4 = new menuItem('The Chicken',800,true,false,'https://cdn.pixabay.com/photo/2017/11/16/05/51/chicken-burger-2953388_1280.jpg');
var item5 = new menuItem('The Fish',100,false,false,'https://live.staticflickr.com/3072/2572625481_c26bf8ffe2_b.jpg');

var menuArray = [item1,item2,item3,item4,item5];

var contactArray = [];
var ordDisp = [];
function contactInfo(){
  var gender = '';
  if(document.getElementById('male').checked){
    gender = document.getElementById('male').value;
  }else if(document.getElementById('female').checked){
    gender = document.getElementById('female').value;
  }else if(document.getElementById('non-binary').checked){
    gender = document.getElementById('non-binary').value;
  }else if(document.getElementById('undisclosed').checked){
    gender = document.getElementById('undisclosed').value;
  };

  var contactArray = [document.getElementById("fullName").value,
  document.getElementById("email").value,
  document.getElementById("payment").value,
  gender
  ]
  return contactArray;
}


function getBurgers(){
var burgerOrder = [];
  for (i in menuArray) {
    if(document.getElementById(menuArray[i].name).checked){
      burgerOrder.push(document.getElementById(menuArray[i].name).value);
}

}
return burgerOrder;
}
/* var myButton = document.getElementById('orderButton');
myButton.addEventListener("click", orderClick);

function orderClick(){
  console.log('Button Clicked!');
}
*/
