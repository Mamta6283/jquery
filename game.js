//#container,box

let usertype;
let score=0;

$("#even").click(function(){
    usertype="even"
    $("button").attr("disabled",true)
})

$("#odd").click(function(){
    usertype="odd"
    $("button").attr("disabled",true)
})

$(".box").on("click",function(){
    if(usertype){
    $(this).addClass("show")
    let randomnum=Math.floor(Math.random()*12);
    $(this).html(randomnum)

    if(randomnum%2==0)
        {
            if(usertype=="even"){
                score+=10
               
            }
            else{
                score-=10
               
            }
            
        }
        else{
            if(usertype=="odd"){
                score+=10
            }
            else{
                score-=10
            }
            $("#score").html("score"+score);
    

        }
    }
   
})



// $("#play").on("click", function() {
//     $(".box").removeClass("show");
//     $("button").attr("disabled", true);
// });


    $("#play-again").on("click",function(){
       
        score=0; 
        usertype=null;   
        $(".box").removeClass("show")
        $(".box").html(null)
                                                            
        $("#score").html(score)
        $("#play-again").attr("disabled",true)
        // $(".box").hide();
    
    })

    $(".box").on("click",function(){
        if(usertype){
            if($(".box.show").length===$(".box.show").length){

                $("$play-again").show()
            }
            
        }
    })

