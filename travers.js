$("h1").on("click",function(){
    $(this).prevAll("p").hide()
    $(this).next().nextAll("p").hide()
    $(this).next().toggle(300)
    // $(this).next().nextAll("p")
})

let ans=$("div").children()
console.log(ans)
 let a=$("p").parents()
 console.log(a)

 let b=$("p").nextAll()
 console.log(b)

 let c=$("p").prevAll()
 console.log(c)

 let h1=$("p").before()
 console.log(h1)

 let h2=$("p").after()
 console.log(h2)

//  let h3=$("p").()
//  console.log(h3)
