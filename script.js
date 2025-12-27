
// detect scroll from top of webpage
const resumeBtn = document.getElementById("resume-link");
const navResumeBtn = document.getElementById("nav-button");

// if page is scrolled more than 100, include class to move button to nav, otherwise remove it.
window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        resumeBtn.style.display = "none";
        navResumeBtn.style.display = "block";
        navResumeBtn.style.position = "absolute";
        navResumeBtn.style.top = "1rem";
        navResumeBtn.style.left = "2rem";

        navResumeBtn.addEventListener('mouseenter', () => {
            navResumeBtn.style.backgroundColor = "white";
        });

        navResumeBtn.addEventListener('mouseleave', () => {
            navResumeBtn.style.background = "none";
        });

    } else {
        resumeBtn.style.display = "block";
        navResumeBtn.style.display = "none";
    }
})