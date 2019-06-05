// page scroll for navbar
function scrollPage(){
    var menu=document.querySelector("#header .container .menu");
    var ypos=window.pageYOffset;
    var ulLi=document.getElementsByClassName("ulLi")

    if(ypos> 129.60000610351562){
            menu.style.position="fixed";
            menu.style.top="0px";
            menu.style.left="0px";
            menu.style.width="100%";
            menu.style.borderRadius="0px"
            menu.style.zIndex = "1";
            ulLi[0].style.top = '22px';
            $(".dropdown-content").css("left", "-14.7em")

            $("span.exit").css("left", "50.5em");

    }
    
    else{
        menu.style.position="";
        menu.style.top="";
        menu.style.left="";
        menu.style.width="";
        menu.style.borderRadius = "";

        ulLi[0].style.top = '';

        $("span.exit").css("left", "41.5em");
        $(".dropdown-content").css("left", "-18.7em")
    }
}

window.addEventListener("scroll", scrollPage);

// window.pageYOffset;
// console.log(this.pageYOffset);






// Scroll page top

$(document).ready(function scrollFromBottom(){
     var ypos=window.pageYOffset;

     if(ypos>300){
         $(".fromBottom").show(200)
     }
     else{
         $(".fromBottom").hide(2000)
     }
})


 $(document).ready(function (){
    $("#click").click(function (){
        $('html, body').animate({
            scrollTop: $("#top").offset().top
        }, 900, function(){
             $(".fromBottom").hide(500)
        });
    });
});



$('.owl-carousel').owlCarousel({
    responsive: {
        nav: true,
        dots: true,
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})

// Scroll page from bottom  starts

$(document).ready(function scrollFromBottom(){
     var ypos=window.pageYOffset;
 console.log(ypos);
     if(ypos>300){
         $(".fromBottom").css("display", "block", "transition", "all .5s ease-in-out")
     }
     else{
         $(".fromBottom").css("display", "none", "transition", "all .5s ease-in-out")
     }
     window.addEventListener("scroll", scrollFromBottom);
})
// ends


// navbar search section
var spanSearch=document.querySelector("span.search");
var inputSearch=document.querySelector("input.search");
var liSearch=document.querySelector("li.search");
var help=document.querySelector(".help")




liSearch.addEventListener("click", function(){
    $(".ulLi").css("display", "none", "transform", "rotate(90deg)")
    help.style.visibility="visible";
})

$("input.search").focus(function(){
    $("span.search").animate({
        fontSize:"12px",
        transition:"all .2s ease-in-out",
        marginLeft:"-3px"
    });
    $("input.search").css("padding", "45px 10px");
})


// blur for index of input
$("input.search").blur(function(){
    $("span.search") .animate({
            position: "relative",
            top: "45px",
            left: "130px",
            padding: "30px",
            color: "white",
            fontSize: "30px",
            transition:"all .2s ease-in-out"
    })

    // $("input.search").css("visibility", "hidden")

})
// end




$("span.exit").click(function(){
     $(".ulLi").css( "display", "flex" );
      help.style.visibility="hidden";
})




window.onclick = function(event) {
    if (event.target !=inputSearch) {
        inputSearch.style.display = "hide";
		spanSearch.style ="initial";
    }
}
