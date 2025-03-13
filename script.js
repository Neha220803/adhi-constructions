// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  // Set the initial state of the header background before any animations
  const headerTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".header-container",
      start: "top top",
      end: "+=100%",
      pin: true,
      scrub: true,
      pinSpacing: true,
      markers: false,
    },
  });

  // Now we can easily target the background div
  headerTimeline.to(".header-bg", {
    scale: 1.5,
    duration: 1,
    ease: "none",
  });

  // Select the elements for the image animations - Fixed selectors
  const imageSection = document.querySelector("section");
  const firstImage = document.getElementById("sol-img1");
  const secondImage = document.getElementById("sol-img2");
  const rightImage = document.getElementById("sol-img3"); // Fixed selector

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

  // Fix the section heading animation
  const splitTypes = document.querySelectorAll(".section-heading");

  splitTypes.forEach((char) => {
    const text = new SplitType(char, { types: "chars" });

    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: char,
        start: "top 80%",
        end: "top 20%",
        // scrub: true,
        markers: false,
      },
      scaleY: 0,
      y: -20,
      transformOrigin: "top",
      duration: 0.4,
      // opacity: 0,
      stagger: 0.009,
    });
  });

  // About section images animation
  gsap.set(".who-are-we-bottom-container", {
    x: -100,
    opacity: 0,
  });

  // Create the animation with scroll trigger
  gsap.to(".who-are-we-bottom-container", {
    duration: 1.2,
    x: 0,
    opacity: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".who-are-we-bottom-container",
      start: "top bottom-=50", // Animation starts when the top of the element is 50px from the bottom of viewport
      end: "bottom center", // End of animation when bottom of element reaches center of viewport
      toggleActions: "play none none reverse", // Play on enter, reverse on exit
      once: false, // Animation will play every time element enters viewport
      markers: false, // Set to true during development to see trigger points
    },
  });
});
