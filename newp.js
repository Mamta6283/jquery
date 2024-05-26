let data=$("#container").text();
console.log(data)

let data2=$("#container").html();
console.log(data2)

let username="mamta"
let pre=$("#container").text();
$("#container").text(pre+username);

//this is how you can apply css here 
container=$("#container")
container.css('background-color','red')

//for multiple properties 
//elem.css({property:value ,property:value})
container.css({backgroundColor:'red',color:'yellow'})


//this is for add class
// container.addClass("big")
// container.addClass("red")

// container.removeClass("big")

// let ans=container.hasClass("big")
// console.log(ans)

let btn=$("#btn")


// let container=$("#container")
btn.click(function(){

 let ans=container.hasClass("big")
 if(ans==true){
     container.removeClass("big")
 }
 else{
    container.addClass("big")
}
})

btn.click(function(){
    container.toggleClass("red")
    // container.toggle("red")
})

let body=$("#body1")
btn.click(function(){

    body.toggleClass("bg-black")
})


//syntax: selector.on(event,eventhandler)

$("#btn").on("click",function(){
    console.log("clicked")
})
 
$("button").on("mouseover",function(){
    console.log("clicked")
})

$("button").on({
    mouseover:function(){console.log("entered")},
    mouseleave:function(){console.log("left")}
})
 
// $("#btn1").on("click",function(){
//     $("#btn1").css('background-color','black')
// })


// $("#btn2").on("mouseleave",function(){
//     $("#btn1").css('background-color','black')
// })

// $("h1").on("click",function(){
//     $(this).css('color','green')
// })


// $('h1').on("click",function(){
//     $(this).hide()
// })


// $('h1').on("click",function(){
//     $(this).css('opacity','0')
// })

let button=$("#btn1")
let dialog=$("dialog")
button.on("click",function(){
    console.log(dialog)
})