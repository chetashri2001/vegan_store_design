
console.log('loaded')
var review1 = document.getElementById("card1");
review1.addEventListener("mouseover", function(){
    review1.style.boxShadow = '0 12px 16px 0 rgba(39, 39, 47, 0.06)';
})

review1.addEventListener("mouseout", function(){
    review1.style.boxShadow = '0px 0px 0px 0px';
})

var review2 = document.getElementById("card2");
review2.addEventListener("mouseover", function(){
    review2.style.boxShadow = '0 12px 16px 0 rgba(39, 39, 47, 0.06)';
})

review2.addEventListener("mouseout", function(){
    review2.style.boxShadow = '0px 0px 0px 0px';
})

var step_one = document.getElementById("step1");
step_one.addEventListener("mouseover", function(){
    document.getElementById("cut").style.transform = "scale(1.1)";
})

step_one.addEventListener("mouseout", function(){
    document.getElementById("cut").style.transform = "scale(1)";
})

var step_two = document.getElementById("step2");
step_two.addEventListener("mouseover", function(){
    document.getElementById("brush").style.transform = "scale(1.1)";
})

step_two.addEventListener("mouseout", function(){
    document.getElementById("brush").style.transform = "scale(1)";
})

var step_three = document.getElementById("step3");
step_three.addEventListener("mouseover", function(){
    document.getElementById("bag").style.transform = "scale(1.1)";
})

step_three.addEventListener("mouseout", function(){
    document.getElementById("bag").style.transform = "scale(1)";
})

var step_four = document.getElementById("step4");
step_four.addEventListener("mouseover", function(){
    document.getElementById("smile").style.transform = "scale(1.1)";
})

step_four.addEventListener("mouseout", function(){
    document.getElementById("smile").style.transform = "scale(1)";
})
