// burger-nav
const navButton = document.getElementById('navbar__burgermenue');
const navBar = document.getElementById('burgermenue');

document.addEventListener('click', showMenu);

function showMenu(event) {
    if (event.target.closest('.navbar__burgermenue')) {
        navButton.classList.toggle('active');
        navBar.classList.toggle('hidden');
    }
    else if (event.target === navBar) {
        return;
    }
    else if (!event.target.closest('.navbar__burgermenue') || event.target.closest('.nav-link')) {
        navButton.classList.remove('active');
        navBar.classList.add('hidden');
    }
}