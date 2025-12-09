const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const themeIcon = document.querySelector('.theme-icon'); 

    function updateIcon() {
        const isLight = body.classList.contains('light-mode');
        themeIcon.className = isLight
            ? 'bx bx-moon theme-icon'
            : 'bx bx-sun theme-icon';
    }

    function toggleTheme() {
        body.classList.toggle('light-mode');
        const theme = body.classList.contains('light-mode') ? 'light' : 'dark';
        localStorage.setItem('theme', theme);
        updateIcon();
    }

    function loadTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') body.classList.add('light-mode');
        updateIcon();
    }

    document.addEventListener('DOMContentLoaded', loadTheme);
    themeToggle.addEventListener('click', toggleTheme);