Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr", {
  videos: ["./0.mp4", "./2.mp4", "./3.mp4"],
});

let sections = document.querySelectorAll(".fleftelm");
gsap.to(".fleftelm", {
  scrollTrigger: {
    trigger: "#fimages",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1,
  },
  y: "-300%",
  ease: Power1,
});

Shery.imageEffect(".images", {
  style: 3,
  config: { onMouse: { value: 1 } },
  slideStyle: (setScroll) => {
    sections.forEach(function (section, index) {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        onUpdate: function (prog) {
          setScroll(prog.progress + index);
        },
      });
    });
  },
});
// footer
// Footer animation with ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

gsap.to("#footer .footer-top h1", {
  scrollTrigger: {
    trigger: "#footer",
    start: "top 80%",
  },
  opacity: 1,
  y: 0,
  duration: 1,
  ease: "power3.out",
});

gsap.to("#footer .footer-cta", {
  scrollTrigger: {
    trigger: "#footer",
    start: "top 75%",
  },
  opacity: 1,
  y: 0,
  duration: 1,
  delay: 0.2,
  ease: "power3.out",
});

gsap.to("#footer .footer-middle", {
  scrollTrigger: {
    trigger: "#footer",
    start: "top 70%",
  },
  opacity: 1,
  y: 0,
  duration: 1,
  delay: 0.4,
  ease: "power3.out",
});
