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
