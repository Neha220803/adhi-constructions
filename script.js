// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function() {
    // Create a timeline for the header animation
    const headerTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".header-container",
            start: "top top", // when the top of the header hits the top of the viewport
            end: "+=100%", // animation lasts for the height of the viewport
            pin: true, // pin the header in place during the animation
            scrub: true, // smooth animation that ties to the scrollbar position
            pinSpacing: true, // creates space in the document for the pinned element
            markers: false // set to true during development to see trigger points
        }
    });

    // Add the zoom animation to the timeline
    headerTimeline.to("header", {
        backgroundSize: "150%", // Zoom level (adjust as needed)
        duration: 1,
        ease: "none"
    });
});