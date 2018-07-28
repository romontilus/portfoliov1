//Globals 
var profilePic = 'assets/media/Rommel1.png';
var profilePic2 = 'assets/media/Rommel1.png';
var profilePic3 = 'assets/media/Rommel1.png';
// var projImage = "hmm"; 
var fadeIn = 'animated fadeIn';
var fadeUp = 'animated fadeOutUp';
var fadeDown = 'animated fadeOutDown';
var fadeLeft = 'animated fadeOutLeft';
var fadeRight = 'animated fadeOutRight';
var comeUp = 'animated fadeInUp';
var comeLeft = 'animated fadeInLeft';
var comeRight = 'animated fadeInRight';
var comeDown = 'animated fadeInDown';
var fadeOut = 'animated fadeOut';
var endAnimation = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';


//Original State
// var originalFiller = $(".projTitle").text("Portfolio");
// var originalFiller1 = $(".projPreview").attr("src", "assets/media/slender3.jpg");
// var originalFiller2 = $(".projDescription").text("Here's a little info about myself");
//

//Portfolio Array
var portfolioList = [
    {
        title: "Meal Planner",
        thumbnail: "assets/media/mealplanner3.png",
        overlay: "Meal Planner",
        bigPicture: "assets/media/mealplanner3.png",
        description: "My first group project. We decided on a nutrition based app for those who meal prep. Plan your breakfast, lunch, and dinner and know your macros with a shopping list on the go.  Uses Firebase along with the Google Charts and Edamam APIs to help track your macros for the entire day. Mobile-friendly",
        location:"https://romontilus.github.io/Meal-Planner/",
          },
    {
    title: "Marvel Hang-Man",
    thumbnail: "assets/media/comicthumb.png",
    overlay: "Hang-Man Game",
    bigPicture: "assets/media/comicthumb.png",
    description: "My first project involving javascript. A Marvel-themed Hang-Man game that incorporates familiar characters in the Marvel Comic Universe.",
    location:"https://romontilus.github.io/Word_Guess_Game/",
      },
      {
      title: "NBA Trivia",
      thumbnail: "assets/media/logoextended.png",
      overlay: "Trivia Game",
      bigPicture: "assets/media/logoextended.png",
      description:"NBA Trivia game from a pretty big basketball nerd. A trivia game that only die-hard NBA fans will be able to ace featuring questions on teams and players from all eras in NBA History. Features the standard 24-second shot clock",
      location:"https://romontilus.github.io/TriviaGame/",
    },
    {
        title: "Mass Effect RPG",
        thumbnail: "assets/media/masseffect.jpg",
        overlay: "RPG Game",
        bigPicture: "assets/media/masseffect.jpg",
        description: "My first project involving javascript. A Marvel-themed Hang-Man game that incorporates familiar characters in the Marvel Comic Universe.",
        location:"https://facebook.com/therealrommel",
          }
];

    // var display = [
    //     {title:"Portfolio",
    //     bigPicture: "assets/media/slender1.jpg",
    //     description:"Here's a little something about myself"

    // }];

    // function originalDisplay
//     {
//     title: ,
//     thumbnail: ,
//     bigPicture: ,
//     description: ,
// },
//     {
//     title: ,
//     thumbnail: ,
//     bigPicture: , 
//     description: ,
// },
// }];
function portfolioGen (){
  for (let i = 0; i < portfolioList.length; i++) {
    
      var project = $('<div class="project">');
      

    var hmm = portfolioList[i];
    
    var projTitle = (portfolioList[i].title);
    var projThumb = $("<img class='thumbnail'>");
    projThumb.attr("src", portfolioList[i].thumbnail);
    var projOverlay = $('<div class="overlay">');
    projOverlay.html(portfolioList[i].overlay);
    var projPic = (portfolioList[i].bigPicture);
    var projDesc = (portfolioList[i].description);
    var projLink = portfolioList[i].location;


    project.append(projThumb);
    project.append(projOverlay);
    project.attr("title",projTitle);
    project.prop("pic",projPic);
    project.prop("description", projDesc);
    project.prop("link",projLink);
    $(".items").append(project);
    
    
}
}
// function portfolioReel() {

//     project.append(projThumb);
//     project.append(projOverlay);
//     $(".items").append(project);

// };

$(document).on("click", ".project", portfolioInfo);


function portfolioInfo(){
    console.log(this);
    console.log(this.description);
    console.log(this.link);
    console.log(this.pic);
    $(".projTitle").text(this.title);
    $(".projDescription").text(this.description);
    $(".projPreview").attr("src", this.pic);
    $(".projLink").attr("href", this.link);
    // $(this).css({"opacity" : ".05"});
    // $(".project").css({"border": "solid yellow 12px"});
    $(".projButton").fadeIn();
}

//Sticky Nav function
$(document).ready(function() {
    // grab the initial top offset of the navigation 
       var navSticker = $('.trueNav').offset().top;
    //determines whether or not to add sticky class
       var stickyNav = function(){
    //current position from the top
        var scrollTop = $(window).scrollTop(); 
    // if/else adds or removes stick class depending on position
        if (scrollTop > navSticker) { 
            $('.trueNav').addClass('sticky');
        }
         else {
            $('.trueNav').removeClass('sticky'); 
        }
    };
    stickyNav();
    // and run it again every time you scroll
    $(window).scroll(function() {
        stickyNav();
    });
});

// $(document).ready(function () {

//     if ($('body').css({"background":"#ffd900"})) {
//         $('.projTitle, .projDescription').css({"color":"black"});
//     }
//     else  {
//         return
//     }
   
// });
//Function Runners
// $(window).on("load", reset);
$(document).on("click", '#mindBox', think);
$(document).on("click", "#bodyBox", bodied);
$(document).on("click", '#soulBox', ki);
$(document).on("click", "#cButton", reset);
$(document).on("click", "#menu", sideMenu);
$(document).on("click", "#tout", free);
$(document).on("click", "#aucun", cover);
$(document).on("click", "#closeContact", xContact);
$(document).on("click", "#closePortfolio", xPortfolio);


//C logo resets everything to normal
function reset () {

    //reset entire page to defaults
    xContact();
    xPortfolio();

    $("#menu").removeClass("open");
    $("#menu").addClass("closed");
    $("#sideNav").css({"width":"0vw"});
    $("#menu").removeAttr('style');
    //re-enable events
    $(document).on("click", '#mindBox', think);
    $(document).on("click", "#bodyBox", bodied);
    $(document).on("click", '#soulBox', ki);
    // bring it all back
    $('body').css({"background":"black"});
    $('.trueNav').removeAttr('style');
    //fades out whatever may be pressed first 
    $(".aboutMeDynamic, .aboutMe2Dynamic, .aboutMe3Dynamic").addClass(fadeOut);
    //after a while restores to original
    setTimeout(function(){ 
        $('#MBS').removeClass("hidden");
        $('#mindBox, #bodyBox, #soulBox').removeClass("hidden");
        $('#mindBox').addClass(comeLeft).one(endAnimation, function () {
            $(this).removeClass(comeLeft);
        });
        $('#bodyBox').addClass(comeUp).one(endAnimation, function () {
            $(this).removeClass(comeUp);
        });
        $('#soulBox').addClass(comeRight).one(endAnimation, function () {
            $(this).removeClass(comeRight);
        });
    }, 2000); 
    setTimeout(function(){ 
        $('#c-logo').attr("src","assets/media/clogo1.png");
        $("#aboutMe, #aboutMe2, #aboutMe3, #parallax1, #parallax2, #parallax3").addClass("hidden");
        $(".aboutMeDynamic, .aboutMe2Dynamic, .aboutMe3Dynamic").removeClass(fadeOut);
        $("#tout").fadeIn();
        $("#aucun").fadeOut();
    }, 2000);
    // return
}

//Mind Function
function think () {
   
    $('#c-logo').attr("src","assets/media/clogo2.png");

    //split fade
    $('#bodyBox').addClass(fadeDown).one(endAnimation, function () {
        $(this).removeClass(fadeDown);
        $(this).addClass('hidden');
    });
    $('#soulBox').addClass(fadeRight).one(endAnimation, function () {
        $(this).removeClass(fadeRight);
        $(this).addClass('hidden');

    });
    //timeout selected a bit longer
    setTimeout(function(){ 
        $('body').css({"background":"#990000"});
        $('.trueNav').css({"box-shadow":"2px 2px 2px 2px #0d0d0d"})
        $('#mindBox').addClass(fadeOut).one(endAnimation, function () {
            $(this).removeClass(fadeOut);
            $(this).addClass('hidden');
        });; 
        }, 70);
     //bring in body divs dynamically (profile for now)
    setTimeout(function(){ 
        profiler ();
        return
    }, 200);
    console.log("clicked");
};

//Body Function 
function bodied () {
    
    $('#c-logo').attr("src","assets/media/clogo2.png");
  

    //split fade
    $('#mindBox').addClass(fadeLeft).one(endAnimation, function () {
        $(this).removeClass(fadeLeft);
        $(this).addClass('hidden');
    });
    $('#soulBox').addClass(fadeRight).one(endAnimation, function () {
        $(this).removeClass(fadeRight);
        $(this).addClass('hidden');

    });
    //timeout selected a bit longer
    setTimeout(function(){ 
        $('body').css({"background":"#0d0d0d"});
        $('.trueNav').css({"box-shadow":"2px 2px 2px 2px #ffd900"})
        $('#bodyBox').addClass(fadeOut).one(endAnimation, function () {
            $(this).removeClass(fadeOut);
            $(this).addClass('hidden');
        });; 
        }, 70);
     //bring in body divs dynamically (profile for now)
    setTimeout(function(){ 
        profiler2 ();
        return
    }, 200);
    console.log("clicked");
};

//Soul Function
function ki () {
   
    $('#c-logo').attr("src","assets/media/clogo2.png");

    //split fade
    $('#bodyBox').addClass(fadeDown).one(endAnimation, function () {
        $(this).removeClass(fadeDown);
        $(this).addClass('hidden');
    });
    $('#mindBox').addClass(fadeLeft).one(endAnimation, function () {
        $(this).removeClass(fadeLeft);
        $(this).addClass('hidden');

    });
    //timeout selected a bit longer
    setTimeout(function(){ 
        $('body').css({"background":"#ffd900"});
        $('.trueNav').css({"box-shadow":"2px 2px 2px 2px #990000"})
        $('#soulBox').addClass(fadeOut).one(endAnimation, function () {
            $(this).removeClass(fadeOut);
            $(this).addClass('hidden');
        });; 
        }, 70);
     //bring in body divs dynamically (profile for now)
    setTimeout(function(){ 
        profiler3 ();
        return
    }, 200);
    console.log("clicked");
};


//Profile function
function profiler () {

    //Hides what needs to be hidden (tout button) and brings out divs needed
    $("#MBS, #aboutMe2, #aboutMe3, #parallax1, #parallax2, #parallax3").addClass("hidden");
    $("#tout").fadeOut();
    $("#aucun").fadeOut();
    $('#aboutMe').removeClass("hidden");
    $('#aboutMe').addClass("aboutMeDynamic");
    $('.aboutMeDynamic').addClass("transparentParent");
    $('.aboutMeDynamic').css({"margin-top":"11vh"});
    $('#pictureBox').css('background-image', 'none');
    $('#gmail, #linkedIn, #github, #twitter').css({"color":"transparent"});
    $("#profile").css('background', 'transparent');
    $('#profileText').css({"color":"transparent"});


    //Time fade ins using transparentParent div to move up and then fade in
    setTimeout(function(){ 
        $('.aboutMeDynamic').removeClass("transparentParent");
    }, 2000);
    
    setTimeout(function(){ 
        $('#pictureBox').addClass(fadeIn);
        $('#pictureBox').css('background-image', 'url('+ profilePic  + ')');
    }, 2500);
    
    setTimeout(function(){ 
    $('#profile').addClass(fadeIn);
    $('#profile').css('background', 'rgba(51, 51, 51, 0.3)');
    }, 3300);
    
    setTimeout(function(){ 
        $('#profileText').addClass(fadeIn);
        $('#profileText').css({'color': '#f2f2f2'})
        $('#socialMedia').addClass(fadeIn);
        $('#gmail, #linkedIn, #github, #twitter').css({"color":"whitesmoke"});
        $('#profile').removeClass(fadeIn);
    }, 3800);
//Remove classes for better functionality later
    setTimeout(function (){
        $('#socialMedia').removeClass(fadeIn);
        $('#pictureBox').removeClass(fadeIn);
        $('#profileText').removeClass(fadeIn);
    }, 4500);

}

//Profile2 function
function profiler2 () {


    //Hides what needs to be hidden (tout button) and brings out divs needed
    $("#MBS, #aboutMe, #aboutMe3, #parallax1, #parallax2, #parallax3").addClass("hidden");
    $("#tout").fadeOut();
    $("#aucun").fadeOut();
    $('#aboutMe2').removeClass("hidden");
    $('#aboutMe2').addClass("aboutMe2Dynamic");
    $('.aboutMe2Dynamic').addClass("transparentParent");
    $('.aboutMe2Dynamic').css({"margin-top":"11vh"});
    $('#pictureBox2').css('background-image', 'none');
  
    $("#profile2").css('background', 'transparent');
    $('#media').css('background', 'transparent');
    $('#profile2Text').css({"color" : "transparent"});

    //Time fade ins using transparentParent div to move up and then fade in
    setTimeout(function(){ 
        $('.aboutMe2Dynamic').removeClass("transparentParent");
    }, 2000);
    
    setTimeout(function(){ 
        $('#pictureBox2').addClass(fadeIn);
        $('#pictureBox2').css('background-image', 'url('+ profilePic2  + ')');
    }, 2500);
    
    setTimeout(function(){ 
        $('#profile2').addClass(comeLeft);
        $('#profile2').css('background', 'rgba(51, 51, 51, 0.3)');
        $('#media').addClass(comeRight);
        $('#media').css('background', 'transparent');
    }, 3300);
    
    setTimeout(function(){ 
        $('#profile2Text').addClass(fadeIn);
        $('#profile2Text').css({"color":"whitesmoke"});
        $('#media').removeClass(comeRight);
        $('#profile2').removeClass(comeLeft);
    }, 3900);
//Remove classes for better functionality later
    setTimeout(function (){
        
        $('#pictureBox2').removeClass(fadeIn);
        $('#profile2Text').removeClass(fadeIn);
    }, 5000);

}

//Profile3 function
function profiler3 () {

    //Hides what needs to be hidden (tout button) and brings out divs needed
    $("#MBS, #aboutMe, #aboutMe2, #parallax1, #parallax2, #parallax3").addClass("hidden");
    $("#tout").fadeOut();
    $("#aucun").fadeOut();
    $('#aboutMe3').removeClass("hidden");
    $('#aboutMe3').addClass("aboutMe3Dynamic");
    $('.aboutMe3Dynamic').addClass("transparentParent");
    $('.aboutMe3Dynamic').css({"margin-top":"11vh"});
    $('#pictureBox3').css('background-image', 'none');
    $("#profile3").css('background', 'transparent');
    $('#profile3Text').css({"color" : "transparent"});
    //Time fade ins using transparentParent div to move up and then fade in
    setTimeout(function(){ 
        $('.aboutMe3Dynamic').removeClass("transparentParent");
    }, 2000);
    
    setTimeout(function(){ 
        $('#pictureBox3').addClass(fadeIn);
        $('#pictureBox3').css('background-image', 'url('+ profilePic3  + ')');
    }, 2500);
    
    setTimeout(function(){ 
        $('#profile3').addClass(comeUp);
        $('#profile3').css('background', 'rgba(51, 51, 51, 0.3)');
        // $('#media').addClass(comeRight);
        // $('#media').css('background', 'whitesmoke');
    }, 3300);
    
    setTimeout(function(){ 
        $('#profile3Text').addClass(fadeIn);
        $('#profile3Text').css({"color":"whitesmoke"});
        // $('#media').removeClass(comeRight);
        $('#profile3').removeClass(comeUp);
    }, 4000);
//Remove classes for better functionality later
    setTimeout(function (){
        // $('#media').removeClass(fadeIn);
        $('#pictureBox3').removeClass(fadeIn);
        $('#profile3').removeClass(fadeIn);
        $('#profile3Text').removeClass(fadeIn);
    }, 5000);

}

function sideMenu() {
    console.log(this);
    if ($(this).hasClass("closed")){
        $(this).removeClass("closed");
        $(this).addClass("open");
        $("#sideNav").css({"width":"30vw"});
        $("#menu").css({"color": "gold", "text-shadow": "0px 0px 10px #DA4E46"});
        $(".pageContainer").css({"opacity" : ".05"});
    }

    else if (($("#openContact").hasClass("open")) || ($("#openPortfolio").hasClass("open")) ) {
        $(this).removeClass("open");
        $(this).addClass("closed");
        $("#sideNav").css({"width":"0vw"});
        $("#menu").removeAttr('style'); 
    }

    else {
        $(this).removeClass("open");
        $(this).addClass("closed");
        $("#sideNav").css({"width":"0vw"});
        $("#menu").removeAttr('style');   
        $(".pageContainer").removeAttr('style'); 
    }



}

function free () {

    $('#c-logo').attr("src","assets/media/csharp.png");
    $(document).off("click", '#mindBox', think);
    $(document).off("click", "#bodyBox", bodied);
    $(document).off("click", '#soulBox', ki);
    // $("#mindBox, #bodyBox, #soulBox").css({"visibility":"hidden", "transition": "1s"});
    $("html, body").animate({ scrollTop: 100 }, "slow");
    //remove hidden classes and add correct css
    $("#aboutMe, #aboutMe2, #aboutMe3, #parallax1, #parallax2, #parallax3").removeClass("hidden");
    $('#aboutMe, #aboutMe2, #aboutMe3').removeAttr("style");
    $('#pictureBox').css('background-image', 'url('+ profilePic  + ')');
    $('#pictureBox2').css('background-image', 'url('+ profilePic2 + ')');
    $('#pictureBox3').css('background-image', 'url('+ profilePic3 + ')');
    $('#profile, #profile2, #profile3, #media').css('background', 'rgba(51, 51, 51, 0.3)');
    $('#profileText, #profileText2, #profile3Text').css({'color': 'whitesmoke'})
    $('#gmail, #linkedIn, #github, #twitter').css({"color":"white"});
    //fade out
    $("#tout").fadeOut();
    $("#aucun").html('<i id="icon" class="fas fa-angle-double-up"></i>').fadeIn();
}

function cover () {
    $('#c-logo').attr("src","assets/media/clogo1.png");
    $(document).on("click", '#mindBox', think);
    $(document).on("click", "#bodyBox", bodied);
    $(document).on("click", '#soulBox', ki);
    // $("#mindBox, #bodyBox, #soulBox").css({"visibility":"visible", "transition": "1s"});
    //add hidden classes and add hiding css
    $("#aboutMe, #aboutMe2, #aboutMe3, #parallax1, #parallax2, #parallax3").addClass("hidden");
    $('#pictureBox').css('background-image', 'none');
    $('#pictureBox2').css('background-image', 'none');
    $('#pictureBox3').css('background-image', 'none');
    $('#profile, #profile2, #profile3, #media').css('background', 'transparent');
    $('#profileText, #profileText2').css({'color': 'transparent'})
    $('#gmail, #linkedIn, #github, #twitter').css({"color":"transparent"});
    //fade out
    $("#aucun").fadeOut();
    $("#tout").fadeIn();
   
}

//Contact "Page" function
function callMe () {
    console.log("clicked");
    if ($("#openContact").hasClass("closed")){
        xPortfolio();
        $("#menu").removeClass("open");
        $("#menu").addClass("closed");
        $("#sideNav").css({"width":"0vw"});
        $("#menu").removeAttr('style');
        $(".pageContainer").css({"opacity" : ".05"});
        $("#openContact").removeClass("closed");
        $("#openContact").addClass("open");
        $("#contact, #contactBox").removeClass("hidden");
        $('#contactBox').addClass(comeUp).one(endAnimation, function () {
            $(this).removeClass(comeUp);
        });
        $('#closeContact').fadeIn();
        //disable other events
        $(document).off("click", '#mindBox', think);
        $(document).off("click", "#bodyBox", bodied);
        $(document).off("click", '#soulBox', ki);
    }


    else {
        return 
       
    }
}

function xContact () {
    $("#openContact").removeClass("open");
    $("#openContact").addClass("closed");
    $("#contactBox").addClass(fadeDown).one(endAnimation, function () {
            $(this).removeClass(fadeDown);
            $(this).addClass('hidden');
    });
    $("#closeContact").fadeOut();
    $("#contact").addClass("hidden");
    //enable other events
    $(document).on("click", '#mindBox', think);
    $(document).on("click", "#bodyBox", bodied);
    $(document).on("click", '#soulBox', ki);

    if ($("#menu").hasClass("closed")) {
        $(".pageContainer").removeAttr("style");

    }
}

//Portfolio "Page" function
function checkMe () {
    console.log("clicked");
    if ($("#openPortfolio").hasClass("closed")){
        $("#menu").removeClass("open");
        $("#menu").addClass("closed");
        $("#sideNav").css({"width":"0vw"});
        $("#menu").removeAttr('style');
        xContact();
        $(".pageContainer").css({"opacity" : ".05"});
        $("#openPortfolio").removeClass("closed");
        $("#openPortfolio").addClass("open");
        $("#portfolio, #portfolioBox").removeClass("hidden");
        $('#portfolioBox').addClass(comeUp).one(endAnimation, function () {
            $(this).removeClass(comeUp);
        });
        $('#closePortfolio').fadeIn();
        //disable other events
        $(document).off("click", '#mindBox', think);
        $(document).off("click", "#bodyBox", bodied);
        $(document).off("click", '#soulBox', ki);

        portfolioGen();
        // portfolioReel();
       
    }

    else {
        return 
       
    }
}

function xPortfolio () {
    $("#openPortfolio").removeClass("open");
    $("#openPortfolio").addClass("closed");
    $("#portfolioBox").addClass(fadeDown).one(endAnimation, function () {
            $(this).removeClass(fadeDown);
            $(this).addClass('hidden');
            $("#projButton").addClass("hidden");
    });
    $("#closePortfolio").fadeOut();
    $("#portfolio").addClass("hidden");
    $(".projButton").fadeOut();
    //enable other events
    $(document).on("click", '#mindBox', think);
    $(document).on("click", "#bodyBox", bodied);
    $(document).on("click", '#soulBox', ki);
    $(".projTitle").text("Portfolio").addClass("hidden");
    $(".projPreview").attr("src", "assets/media/slender1.jpg").addClass("hidden");
    $(".projDescription").text("Here's a little info about myself").addClass("hidden");
    $(".items").empty();
    if ($("#menu").hasClass("closed")) {
        $(".pageContainer").removeAttr("style");

    }

    setTimeout(function(){ 

        $(".projTitle").text("Portfolio").removeClass("hidden");
        $(".projPreview").attr("src", "assets/media/slender1.jpg").removeClass("hidden");
        $(".projDescription").text("").removeClass("hidden");
    }, 2000); 
}


$()

//Scroll Function that dynamically changes backgrounds on page
$(window).scroll(function () {
    if ($(this).scrollTop() > 1130) {
        $('#aboutMe').addClass('aboutMeDynamic');
        $('body').css({"background":"#990000"});
    }
    if ($(this).scrollTop() < 1130) {
        $('#aboutMe').removeClass('aboutMeDynamic');
        $('body').removeAttr('style');
        $('.sticky').removeAttr('style');
    }
    if ($(this).scrollTop() > 2230) {
        $('#aboutMe2').addClass('aboutMe2Dynamic');
        $('body').css({"background":"#0d0d0d"});
        $('.sticky').css({"box-shadow": "2px 2px 2px 2px #ffd900"})
    }
    if ($(this).scrollTop() < 2230) {
        $('#aboutMe2').removeClass('aboutMe2Dynamic');
        $('.sticky').removeAttr('style');
    }
    if ($(this).scrollTop() > 3300) {
        $('#aboutMe3').addClass('aboutMe3Dynamic');
        $('body').css({"background":"#ffd900"});
        $('.sticky').css({"box-shadow": "2px 2px 2px 2px #990000"});
    }
    if ($(this).scrollTop() < 3300) {
        $('#aboutMe3').removeClass('aboutMe3Dynamic');
    }
 });

