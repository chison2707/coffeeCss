const topMenu = document.getElementById('top-menu');
const tongleTopMenu = document.getElementById('tongle-top-menu-icon');

tongleTopMenu.addEventListener('click', (e) => {
    if (tongleTopMenu.contains(e.target)) {
        topMenu.classList.toggle('hidden');
        topMenu.classList.toggle('topmenu-expanded');
    } else {
        if (!topMenu.classList.contains('topmenu-expanded')) {
            topMenu.classList.remove('topmenu-expanded');
            topMenu.classList.add('hidden');
        }
    }
});
