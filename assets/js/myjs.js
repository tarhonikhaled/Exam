$(function() {
    $(".burger-menu").click(function() {
        $(".menu-content").slideToggle().toggleClass("active");
    });
    $(".container section *, .menu-content a").click(function() {
        $(".menu-content").hide("slow").removeClass("active")
    });
});