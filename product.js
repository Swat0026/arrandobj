var products = [{"id":101,"name":"Basket Ball","image":"basketball.png","price":150},{"id":102,"name":"Football","image":"football.png","price":120},{"id":103,"name":"Soccer","image":"soccer.png","price":110},{"id":104,"name":"Table Tennis","image":"table-tennis.png","price":130},{"id":105,"name":"Tennis","image":"tennis.png","price":100}];
var cart=[];


display =()=>{
    var itemslist="";
    products.forEach(element=>{
        itemslist+=`
        <div id="product-101" class="product">
        <img src="images/${element.image}">
        <h3 class="title"><a href="#">${element.name}</a></h3>
        <span>${element.price}</span>
        <a class="add-to-cart" id="${element.id}" href="#">Add To Cart</a>
        </div>`
        
        

    }); $("#products").append(itemslist)
    
    
  

}; display();


    $(document).on("click",".add-to-cart", function(){
    console.log("hi")
    var id=this.id
    console.log(id);
    var obj=""
    products.forEach(element=>{
        console.log(id);
        if(element.id == id){
        console.log("dbg")
        var obj={
            "id":element.id,
            "name":element.name,
            "price":element.price,
            "quantity":1,
        }
        var count=cart.length
        var count1=0;
        if(cart!=0){
            console.log("hiiiiiii");
            for(var i=0;i<count;i++){
                if(cart[i].id==id){
                    cart[i].quantity+=1;
                    count1=1;
                    break;

                }
            }

        }if(count1==0){
            cart.push(obj)
    }
        
    }
    }); 
    display1();
    console.log(cart)
    

  
    
    

}); 
console.log(cart)


var html=`<table id="tab">
<tr>
<th>ID</th>
<th>NAME</th>
<th>PRICE</th>
<th>QUANTITY</th>
<th>TOTAL<th>
<th>ACTION</th>
</tr>`

display1=()=>{
    var itemslist="";
    $("#tab1").empty()
    cart.forEach(element=>{
        var sum=element.price*element.quantity;
        itemslist+=`<tr>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.price}</td>
        <td><input type="number" class="quantinp" id="${element.id}" value="${element.quantity}"></td>
        <td id="sum1">${sum}<td>
        <td class="rem" id="${element.id}" >REMOVE</td>
        </tr>`
    }); 
       $("#tab1").append(html+itemslist+"</table>")
       var count3 = $(".sum1").length;
       var sum = 0;
    for(var i=0;i<count3;i++){
    
        var x = $(".sum1")[i].innerHTML
        console.log(x)
        
        sum += Number(x)
    }
   $("#total").empty();
   $("#total").append(sum)
}
console.log(cart)

$(document).on("click" , ".rem", function(){
    var idi= this.id;
    console.log(idi);
    cart.forEach((element,index) => {
        console.log(index)
        console.log(element.id);
        console.log(idi);
        if(element.id == idi){
            console.log("dgdgdfhbgdfhtjtgfjfgjfgjgfjtgjtgfjgfj")
            cart.splice(index,1)
        }
    });
    display1();
   
})











