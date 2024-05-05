$(function () {
    gsap.registerPlugin(GSDevTools, DrawSVGPlugin);
    let mobileNav = $("#mobile-nav");
    let homeContent = $("#home-content");
    let menu = $(".hamburger-menu");

    menu.click(()=> {
        // mobileNav.animate({display: "flex", zIndex: "1"}, 200);
        mobileNav.toggleClass("show");
    })

    

    // openMobNav.click(OpenningMobNav);
    // closeMobNav.click(ClosingMobNav);
    // function OpenningMobNav() {
    //     mobileNav.css("visibility", "visible"); 
    //     mainContent.css("visibility", "hidden");
    // }
    // function ClosingMobNav() {
    //     mobileNav.css("visibility", "hidden"); 
    //     mainContent.css("visibility", "visible");
    // }

});