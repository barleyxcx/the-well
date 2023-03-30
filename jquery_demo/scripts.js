$(".dark-btn").click(
    function(){
    $(".box").toggleClass("dark");
    // okay so we're grabbing the selector by class here using .box BUT because toggleClass is already looking for a class there's no need to use a . you can just look it up by name. The dot is already there in the code in a way... it's implied.
    $("body").toggleClass("dark");
  }
  );

  $(".glow-btn").click(
    function(){
    $(".box").toggleClass("glow");
  }
  );

  $(".reveal-btn").click(
    function(){
    $(".poem").addClass("show");
  }
  );

   $(".draggable" ).draggable();