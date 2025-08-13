// Enhanced JavaScript with new functionality

// Check if the device is a desktop
function isDesktop() {
    return window.matchMedia("(min-width: 768px)").matches;
}

// Redirect to a desktop-only message if not on a desktop
function redirectIfNotDesktop() {
    if (!isDesktop()) {
        window.location.href = "desktop-only.html";
    }
}

// Initialize Locomotive Scroll
const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    multiplier: 0.8,
    smartphone: {
        smooth: true
    },
    tablet: {
        smooth: true
    }
});

// Update Locomotive Scroll on window resize
window.addEventListener("load", () => {
    setTimeout(() => {
        locoScroll.update();
    }, 1000);
});

// Initialize Shery.js effects
Shery.mouseFollower();
Shery.makeMagnet(".magnet");

// Initialize Typed.js
var typed = new Typed('#element', {
    strings: ['Web Developer', 'Software Architect', 'Full Stack Engineer', 'Problem Solver'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
    showCursor: true,
    cursorChar: '|',
    smartBackspace: true
});

// Loading animation
function loadingAnimation() {
    var tl = gsap.timeline();
    tl.from(".line h1", {
        y: 160,
        stagger: 0.25,
        duration: 0.6,
        delay: 0.5,
    });
    tl.from("#line1-part1", {
        opacity: 0,
        onStart: function () {
            var h5timer = document.querySelector("#line1-part1 h5");
            var grow = 0;
            var interval = setInterval(function () {
                if (grow < 100) {
                    h5timer.innerHTML = grow++;
                } else {
                    clearInterval(interval);
                }
            }, 27);
        },
    });
    tl.to(".line h2", {
        animationName: "loaderAnime",
        opacity: 1,
    });
    tl.to("#loader", {
        opacity: 0,
        duration: 0.2,
        delay: 2.6,
    });
    tl.from("#page1", {
        delay: 0.1,
        y: 1600,
        duration: 0.5,
        ease: "power4.out",
    });
    tl.to("#loader", {
        display: "none",
    });
    tl.from(".nav", {
        opacity: 1,
    });
    tl.from(".scroll-down", {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power2.out"
    });
}

// Page 1 animation
gsap.to("#page1 h1", {
    transform: "translateX(-100%)",
    fontWeight: "100",
    scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -10%",
        scrub: 3,
        pin: false
    }
});

// Info section animation
gsap.to(".info", {
    x: 0,
    duration: 2,
    opacity: 1,
    scrollTrigger: {
        trigger: ".info",
        scroller: "#main",
        start: "top 80%",
        end: "top 50%",
        scrub: 1
    }
});

// // Nav animation
// gsap.from(".nav h1", {
//     y: -80,
//     delay: 5,
//     duration: 2,
//     stagger: 0.5
// });

// Certificate hover effect
document.querySelectorAll(".certificate-card").forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        gsap.to(elem.querySelector("img"), {
            scale: 1.05,
            duration: 0.5,
            ease: "power2.out"
        });
    });
    elem.addEventListener("mouseleave", function () {
        gsap.to(elem.querySelector("img"), {
            scale: 1,
            duration: 0.5,
            ease: "power2.out"
        });
    });
});

// Skill progress bars animation
document.querySelectorAll(".progress-bar").forEach(bar => {
    const level = bar.getAttribute("data-level");
    gsap.to(bar, {
        width: `${level}%`,
        scrollTrigger: {
            trigger: bar,
            scroller: "#main",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        duration: 1.5,
        ease: "power2.out"
    });
});

// Timeline animation
gsap.utils.toArray(".timeline-item").forEach(item => {
    gsap.from(item, {
        opacity: 0,
        y: 50,
        scrollTrigger: {
            trigger: item,
            scroller: "#main",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        duration: 0.8,
        ease: "power2.out"
    });
});

// Testimonial animation
gsap.utils.toArray(".testimonial-card").forEach(card => {
    gsap.from(card, {
        opacity: 0,
        y: 50,
        scrollTrigger: {
            trigger: card,
            scroller: "#main",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        duration: 0.8,
        ease: "power2.out"
    });
});

// Contact form animation
gsap.from(".contact-form", {
    opacity: 0,
    x: 50,
    scrollTrigger: {
        trigger: ".contact-form",
        scroller: "#main",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    duration: 1,
    ease: "power2.out"
});

// Nav scroll effect
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        document.querySelector(".nav").classList.add("scrolled");
    } else {
        document.querySelector(".nav").classList.remove("scrolled");
    }
});

// Smooth scroll for navigation
document.querySelectorAll('.nav1 h1').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            locoScroll.scrollTo(targetSection);
        }
    });
});

// Back to top button
document.querySelector('.back-to-top').addEventListener('click', () => {
    locoScroll.scrollTo('#page1');
});

// Certificate slider functionality
const slider = document.querySelector('.certificate-slider');
const prevBtn = document.querySelector('.slider-prev');
const nextBtn = document.querySelector('.slider-next');

nextBtn.addEventListener('click', () => {
    slider.scrollBy({
        left: 300,
        behavior: 'smooth'
    });
});

prevBtn.addEventListener('click', () => {
    slider.scrollBy({
        left: -300,
        behavior: 'smooth'
    });
});

// Initialize particles.js
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#1bd6cf"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    },
                    polygon: {
                        nb_sides: 5
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#1bd6cf",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }
});

// Mobile menu toggle
document.querySelector('.menu-toggle').addEventListener('click', function() {
    const nav = document.querySelector('.nav1');
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.top = '10vh';
        nav.style.right = '0';
        nav.style.width = '100%';
        nav.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        nav.style.padding = '20px';
        nav.style.gap = '15px';
    }
});

// Run loading animation
loadingAnimation();

// Check on page load
window.onload = function() {
    redirectIfNotDesktop();
};