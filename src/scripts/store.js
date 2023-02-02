let arr= JSON.parse(localStorage.getItem("mobile_data"))||[];

append(arr)

function append(arr){

 let div=document.getElementById("mobile_list");

div.innerHTML=null;

arr.forEach(function(el,index){

let container=document.createElement("div");
container.setAttribute("class","mobile");

let image=document.createElement("img");
image.src=el.image;

let brand=document.createElement("p");
brand.innerHTML=el.brand;

let name=document.createElement("p");
name.innerHTML=el.name;

let price=document.createElement("p");
price.innerHTML=el.price;



let button=document.createElement("btn");
button.innerText="Remove";
button.setAttribute("class","remove")
button.onclick=function(){
    Remove(index);
}
container.append(image,brand,name,price,button)
div.append(container);

})
}
// document.getElementById("sort_lth").addEventListener("click",sortlh);

function Remove(index){
    arr.splice(index,1);
    localStorage.setItem("mobile_data",JSON.stringify(arr));
    
    append(arr)
    }

function sortlh(){
    let data=arr;
    data=data.sort(function(a,b){
return a.price-b.price;
    }) 
    append(data)
}

function sorthl(){
    let data=arr;
    data=data.sort(function(a,b){
return b.price-a.price;
    }) 
    append(data)
}




document.getElementById("sort_htl")