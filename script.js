function toggleContent(id) {
    const element = document.getElementById(id);
    element.classList.toggle('hidden');
}

function openProject(url) {
    window.open(url, '_blank');
}

function downloadCV() {
    const link = document.createElement('a');
    link.href = 'Resume_SedthananH.pdf';
    link.download = 'SedthananHankhompong_CV.pdf';
    link.click();
}

function changeLanguage() {
    const selectedLang = document.getElementById("language").value;
    const allElements = document.querySelectorAll("[data-lang]");

    allElements.forEach((element) => {
        if (element.getAttribute("data-lang") === selectedLang) {
            element.classList.remove("hidden");
        } else {
            element.classList.add("hidden");
        }
    });
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}
