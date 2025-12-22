
// detect scroll from top of webpage
const resumeBtn = document.getElementById("resume-link");
const navResumeBtn = document.getElementById("nav-button");
// if page is scrolled more than 100, include class to move button to nav, otherwise remove it.
window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        resumeBtn.style.display = "none";
        navResumeBtn.style.display = "block";

    } else {
        resumeBtn.style.display = "block";
        navResumeBtn.style.display = "none";
    }
})