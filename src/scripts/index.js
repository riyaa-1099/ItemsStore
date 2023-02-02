let form=document.getElementById("mobile_form");
form.addEventListener("submit",formSubmit);
let arr= JSON.parse(localStorage.getItem("mobile_data"))||[];

function formSubmit(event){
event.preventDefault();

let obj={
name : form.mobile_name.value ,
brand : form.mobile_brand.value ,
price : form.mobile_price.value ,
image : form.mobile_image.value 
}
arr.push(obj)
localStorage.setItem("mobile_data",JSON.stringify(arr))
form.reset();

}