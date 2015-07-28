$(document).ready(function(){
    $("#go").click(function(){
        $(".anim").css("animation-play-state", "running");
    });
  
    $("#stop").click(function(){
        $(".anim").css("animation-play-state", "paused");
    }); 
});
