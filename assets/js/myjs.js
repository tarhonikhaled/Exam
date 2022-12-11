$(function() {
    $(".burger-menu").click(function() {
        $(".menu-content").slideToggle();
        $(this).toggleClass("active");
    });
    $(".container section *, .menu-content a").click(function() {
        $(".menu-content").hide("slow").removeClass("active")
    });
});