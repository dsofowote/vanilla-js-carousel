// var transits = document.getElementsByClassName("transit-img");
// var transitArrays = document.querySelectorAll(".transit-img");

// transitArrays.forEach(function(){
//     transits.addEventListener("scroll", function(){
//         console.log(this);
//         this.classList.add("fadedIn", "transition");
//     });
// });

window.addEventListener('scroll', function(){
    var scrollItem = document.getElementsByClassName("transit-img");
var navbar = document.querySelectorAll(".transit-img");
var bodyScroll = document.getElementById("root");
var n = 0;
    navbar.forEach(function () {
        n++;
        console.log(scrollItem[n]);
        if (scrollItem[n].offsetTop < window.pageYOffset){
            scrollItem[n].classList.add("sticky");
            console.log("elegible");
        } else {
            scrollItem[n].classList.remove("sticky");
            console.log("not elegible");
        }
    });
});
