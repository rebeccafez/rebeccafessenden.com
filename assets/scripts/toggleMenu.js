const toggleButton = document.getElementById('menu-toggle')
const menu = document.getElementById('menu')

toggleButton.addEventListener('click', () => {
    menu.style.display === "flex" ? menu.style.display = "none" : menu.style.display = "flex";
    console.log("test")
});