$(function(){
    $(".controls i").on("click",function(){
        $(this).css({"box-shadow":"0 0 0 0.25rem rgb(248 249 250 / 50%)"}).siblings().css("box-shadow","none")
        if($(this).is(".fa-chevron-right")){ 
            $(".testi-cont.active").fadeOut(400,function(){
                $(this).removeClass("active").next(".testi-cont").addClass("active").fadeIn();
                checkClients();        
            })
        }
        else{
            $(".testi-cont.active").fadeOut(400,function(){
            $(this).removeClass("active").prev(".testi-cont").addClass("active").fadeIn();
            checkClients()
            })
        }
    })
    function checkClients(){
        $(".testi-cont:first").hasClass("active") ? $(".fa-chevron-left").fadeOut() : $(".fa-chevron-left").fadeIn()
        $(".testi-cont:last").hasClass("active") ? $(".fa-chevron-right").fadeOut() : $(".fa-chevron-right").fadeIn()
    }
    $(".faq-box p").click(function(){
        var plusIcon = document.querySelectorAll(".faq-box p i");
        $(plusIcon).toggleClass("clicked")
        $(this).toggleClass("active");
        $(this).next().slideToggle();
        $("p.drop-p").not($(this).next()).slideUp()
    })
    $(workImg).click(function(){
    //    console.log($(this).data()); 
    // console.log($(this).data());

    })
})

var workLi = document.querySelectorAll(".latest-work li");
var workImg = document.querySelectorAll(".latest-work img");

workLi.forEach(li => {
    if(li.classList.contains("all")){
        $(workImg).addClass("active")
    }
    li.addEventListener("click",(e)=> {
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        });
        e.target.classList.add("active");

        if(e.target.classList.contains("all")){
            $(workImg).removeClass("active").addClass("active");
        }
        else{ 
        var liD = e.target.dataset.name;
        workImg.forEach(img=> {
        $(img).removeClass("active").filter(`#${liD}`).addClass("active").animate()
        })            
    }
    });
});

// workImg.forEach(img=> {
//     console.log(img.getAttribute("id"));    
//     })        
