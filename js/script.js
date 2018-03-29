$(".project .images img").on("click", function(){
  if($(this).siblings().length){
    $(this).fadeOut(200, function(){
      $(this).attr("data-visible", "false");
      if($(this).next().length){
        $(this).next().fadeIn(300, function(){
          $(this).attr("data-visible", "true");
        });
      }
      else{
        $(this).siblings().first().fadeIn(300, function(){
          $(this).attr("data-visible", "true");
        });
      }
    });
  }
});

$("#table-of-contents .item").on("click", function(){
  el = $(this);
  var i = $(el).index("#table-of-contents .item");
  if($("#content").attr("data-toc") == "true"){
    $("#table-of-contents .item").removeClass("current");
    $(el).addClass("current");
    scrollToProject(i);
    hideMenu();
  }
  else{
    window.location.href = "/#" + i;
  }
})

$("#menu-button").on("click", function(){
  showMenu();
})

$("#hide-menu-button").on("click", function(){
  hideMenu();
})

$(window).bind('enterBreakpoint800',function() {
  hideMenu();
  $("#sidebar").removeClass("mobile");
});

$(window).bind('exitBreakpoint800',function() {
  $("#sidebar").addClass("mobile");
});

function showMenu(){
  $("#sidebar").addClass("mobile");
  $("#screen").fadeIn(125);
  $("body").attr("data-fixed", "true");
  $("#sidebar").addClass("in-view");
}

function hideMenu(){
  $("#screen").fadeOut(125);
  $("body").attr("data-fixed", "false");
  $("#sidebar").removeClass("in-view");
}

function scrollToProject(i){
  if(isMobile()){
    $('html, body').animate({
         scrollTop: $(".project").eq(i).offset().top - 140
     }, 200);
   }
   else{
     $('html, body').animate({
          scrollTop: $(".project").eq(i).offset().top - 80
      }, 200);
   }
}

function isMobile(){
  if ($('#menu-button').css('display') == 'block'){
    return true;
  }
  else{
    return false;
  }
}

$(window).setBreakpoints({
	distinct: true,
	breakpoints: [
		800,
	]
});

$(document).ready(function() {
    $('a[href="' + location.pathname + '"]').closest("li").addClass("current");
    i = location.hash.substring(1);
    if(i.length){
      $("#table-of-contents .item").eq(i).addClass("current");
      scrollToProject(i);
    }
});
