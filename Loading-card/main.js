window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const allSkeletons = document.querySelectorAll('.skeleton');
        allSkeletons.forEach(skel => {
            skel.style.display = 'none';
        });
        const allContents = document.querySelectorAll('.content');
        allContents.forEach(content => {
            content.style.display = 'block';
        })
    }, 3000)
});