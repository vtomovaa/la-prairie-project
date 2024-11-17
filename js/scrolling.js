document.addEventListener("DOMContentLoaded", function () {
    const controller = new ScrollMagic.Controller();

    const tl = gsap.timeline();
    tl.to(".organic-image", { y: -50 });

    const scene = new ScrollMagic.Scene({
        triggerElement: "#parallaxSection",
        duration: "100%", // Duration of the animation (you can adjust this)
        triggerHook: 0,
        offset: -100, // Adjust as needed
    })
        .setTween(tl)
        .addTo(controller);
});
