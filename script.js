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
        scrub: true,
        markers: false,
      },
      scaleY: 0,
      y: -20,
      transformOrigin: "top",
      // opacity: 0,
      stagger: 0.02,
    });
  });

  // About section images animation
  const aboutImg1 = document.getElementById("about-img1");
  const aboutImg2 = document.getElementById("abour-img1"); // Note: there's a typo in the original ID

  if (aboutImg1 && aboutImg2) {
    gsap.set([aboutImg1, aboutImg2], {
      opacity: 0,
      y: 100,
    });

    ScrollTrigger.create({
      trigger: ".bg-primar",
      start: "top 70%",
      onEnter: () => {
        gsap.to([aboutImg1, aboutImg2], {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.3,
          ease: "power2.out",
        });
      },
    });
  }
});
