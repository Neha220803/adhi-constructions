// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  // Create a timeline for the header animation
  const headerTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".header-container",
      start: "top top", // when the top of the header hits the top of the viewport
      end: "+=100%", // animation lasts for the height of the viewport
      pin: true, // pin the header in place during the animation
      scrub: true, // smooth animation that ties to the scrollbar position
      pinSpacing: true, // creates space in the document for the pinned element
      markers: false, // set to true during development to see trigger points
    },
  });

  // Add the zoom animation to the timeline
  headerTimeline.to("header", {
    backgroundSize: "150%", // Zoom level (adjust as needed)
    duration: 1,
    ease: "none",
  });

  // Select the elements for the image animations
  const imageSection = document.querySelector("section");
  const firstImage = imageSection.querySelector(".col-lg-7 img:first-child");
  const secondImage = imageSection.querySelector(".col-lg-7 img:last-child");
  const rightImage = imageSection.querySelector(".col-lg-5 img");

  // Set initial states
  gsap.set(firstImage, {
    opacity: 0,
    scale: 0.5,
    transformOrigin: "left top",
  });

  gsap.set(secondImage, {
    opacity: 0,
    scale: 0.5,
    transformOrigin: "left bottom",
  });

  gsap.set(rightImage, {
    opacity: 0,
    scale: 0,
    transformOrigin: "center center",
  });

  // Create animations that trigger when the section enters the viewport
  ScrollTrigger.create({
    trigger: imageSection,
    start: "top 80%", // Trigger when top of section reaches 80% from top of viewport
    once: true, // Only run once
    onEnter: () => {
      // Animate first image from right corner
      gsap.to(firstImage, {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
      });

      // Animate second image from bottom left with slight delay
      gsap.to(secondImage, {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        delay: 0.3,
        ease: "power2.out",
      });

      // Animate right image from center
      gsap.to(rightImage, {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        delay: 0.6,
        ease: "power2.out",
      });
    },
  });
});
