$(document).ready(function(){
    console.log("we are using jquery ")

    //element selector
// $('p').click();
// $("p").dblclick(function(){
//     console.log("paragraph",this)//here this will curreent whole html para  code
// })
// $("p").hide()


//id selector 
// $("#hel").mouseleave(function(){ //it will  print  after  leave  mouse
//     console.log("im using id ")
// })



//class selector
// $(".para").mouseenter(function(){ //mouse enter here
//     console.log("im using class")
// })
// $("*").click()//this will select all the elements 
// $(".odd").click();
// $("p:first").click();


// events

//mouse events=click ,double click ,mouse leave ,mouse enter
//key events =keypress,keydown ,mediakeystatusmap
//form events=submit ,change ,focus ,scroll
//document /window events =load resize scroll unload

//on method 

$("p").on(
    {
        click:function(){
    console.log("this is on method",this)
    },mouseleave
    :function(){
        console.log("mouseleave")
        
    }
})

$("#wiki").hide(1000,function(){//it is used to hide the content in animattions way
    console.log("it is hidden")
})
$("#wiki").show(1000,function(){  //it will show the content in animationn wayn
    console.log("show ")
})


$("#btn").click(function(){
    $("#wiki").fadeOut(1000,function(){
        console.log("it is hidden")
    })
    // $("#wiki").toggle(1000,function(){
        
    // })

    //methods
    //fadeOut
    //fadeTo
    //fadeToggle
    //toggle

    
    //sliding merthos
   $("#wiki").slideDown(1000) //it will slide down your paran agrument spend leta hai 
    $("#wiki").slideUp(1000,function(){
        console.log("done")
    }) //it will take callback parameters are optional
$("#wiki").slideToggle(1000)

//animate function in jquery

$("#wiki").animate({    
    opacity:0.3,
    
},4000)


$("#wiki").animate({
    opacity:0.9,
    
},2000)

$("#wiki").animate({
    opacity:0.9,
    height:"100px",
    width:"350px"
    
},2000)
$("#wiki").stop(function(){ //it will stoop the animation
    console.log("stopped")
})

})
$("#wiki").text()
// $("#wiki").text("hello")

//html change kran hai html tag ek ander ki then us val

// $("#wiki").empty()//it is used to remove

// $("#wiki").addClass("my class")
// $("#wiki").removClass("myclass")

// $("#wiki").css('background-color','red')

// $.get("https://code.jquery.com/jquery-3.7.1.js")








})







