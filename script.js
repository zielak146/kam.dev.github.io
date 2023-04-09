const toggleButton = document.getElementsByClassName('toggle-btn')[0]
const navbar = document.getElementsByClassName('nav-menu')[0]

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active')
})