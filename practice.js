
$(document).ready(function(){
    console.log("we are using jquery ")

    $("#para").click(function(){
        alert("para click")
    })
  

    $(".helo").mouseenter(function(){
    console.log("hllo",this)
})

$("p").on(
    {
        click:function(){
    console.log("this is on method",this)
    },mouseleave
    :function(){
        console.log("mouseleave")
        
    }
})

// $(".mypara").hide(1000)
// $(".mypara0").show(1000)

$("#btn1").click(function(){
        $(".para2").slideUp(1000)
                 $(".para2").slideDown(1000)
})




$("#btn").click(function(){
    $(".mypara").toggle(1000,function(){
       $(".mypara").fadeOut(1000,function (){
           console.log("hello")
         })
         $(".mypara").slideDown(10000)
      
    })

   })

   $("#btn2").click(function(){
                $(".para3").animate({
                    opacity:0.4,
                    height:"150px",
                    width:"120px"
                },1000)
                $(".para3").animate({
                    opacity:0.9,
                    height:"220px",
                    width:"420px"
                },12000)
                })
   

    
   

   $("#btn3").click(function(){
    $(".para4").hide()
   
    
})


$("#btn4").click(function(){
   
   let a= $(".para4").html()
   console.log(a)
    
})


// $(".para4").css('background-color','red')




    })

 
   btn=$("#btn4")
    container=$(".container")

    btn.click(function(){
    let ans=container.hasClass("big")
    console.log(ans)

    if(ans==true)
        {
            container.removeClass("big")
        }
        else{
            container.addClass("big")
        }
    })
    

    let para=$(".para3")  
    para.css({backgroundColor:'green',color:'red'})


 btn=$("#btn4")
 b=$("body")
 btn.click(function(){
    b.toggleclass("white")

 })

//you can concat two para graphs and content to another content 
let p=$(".para3").text()
let pre=$(".para4").text()
$("#p").text(p+pre)


//undefined,0,false,"",null is false value


//implement a play again button
//1 remove numbers from box and set color
//reset score 


//










