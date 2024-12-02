// Function to toggle hidden content
function toggleContent(id) {
    const element = document.getElementById(id);
    if (element.style.display === "none" || element.classList.contains("hidden")) {
        element.style.display = "block";
        element.classList.remove("hidden");
    } else {
        element.style.display = "none";
        element.classList.add("hidden");
    }
}

// Function to open project links
function openProject(url) {
    window.open(url, '_blank');
}

// Function to download CV
function downloadCV() {
    const link = document.createElement('a');
    link.href = 'Resume_SedthananH.pdf'; // Replace with your file name
    link.download = 'SedthananHankhompong_CV.pdf';
    link.click();
}
