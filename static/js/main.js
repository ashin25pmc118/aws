document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('darkModeToggle');
    const body = document.body;

    // Check local storage
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        if(toggleButton) toggleButton.innerHTML = '<i class="bi bi-sun-fill" style="font-size: 1.2rem;"></i>';
    }

    if (toggleButton) {
        toggleButton.addEventListener('click', (e) => {
            e.preventDefault();
            body.classList.toggle('dark-mode');
            
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
                toggleButton.innerHTML = '<i class="bi bi-sun-fill" style="font-size: 1.2rem;"></i>';
            } else {
                localStorage.setItem('darkMode', 'disabled');
                toggleButton.innerHTML = '<i class="bi bi-moon-fill" style="font-size: 1.2rem;"></i>';
            }
        });
    }
});
