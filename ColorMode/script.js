const ThemeButton = document.getElementById('theme-button');
const icon = document.getElementById('icon')
const ChangeGer = (BackgroundColor,themeColor,iconColor) => {
    document.body.style.backgroundColor = BackgroundColor;
    ThemeButton.style.backgroundColor = themeColor
    icon.style.color=iconColor;

}

ThemeButton.addEventListener('click', () => {
    const BackgroundColor = document.body.style.backgroundColor;
    // console.log(BackgroundColor)
    if (!BackgroundColor || BackgroundColor == 'white') {
        ChangeGer('black','white','orange');
        // icon.className = 'fa-regular fa-sun-bright'
        icon.className = 'ri-sun-fill'
        // ThemeButton.style.backgroundColor = 'white'
        // ThemeButton.innerText = 'Light Mode'

    } else {
        ChangeGer('white','black','darkgray');
        icon.className = 'ri-moon-line'
        // icon.className = 'fa-regular fa-moon'
        // ThemeButton.innerText = 'Dark Mode'
        // ThemeButton.style.backgroundColor = 'black'


    }
})