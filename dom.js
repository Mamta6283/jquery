console.log($("p").next())
console.log($("h1").prev())

// $("h1").on("click",function(){
    // $(this).next().hide(3000)
// })
// $("h1").on("click",function(){
    // $(this).next().show(3000)
// })



$("h1").on("click",function(){
    $(this).prevAll("p").hide()
   
     $(this).next().nextAll("p").hide()
     $(this).next().toggle(300)
})
// $("h1").on("click",function(){
//      $("p").prevAll("h1")
// })




$(".box").before("phle")
$(".box").after("bad mein ")
$(".box").append("inside ")
$(".box").prepend("inside pre")

let ans=$("li").parents()
console.log(ans)
let ans2=$("li").parent()
console.log(ans2)

let ans3=$("div").children()
console.log(ans3)

let ans4=$("li").parentsUntil("body")
console.log(ans4)

let a=$("#container").nextAll("P")
console.log(a)