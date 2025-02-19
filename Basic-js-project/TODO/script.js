const button = document.getElementById('button');

const changeColor = (BackgroundColor) => {
    document.body.style.background = BackgroundColor;

}
button.addEventListener('click', () => {
    const CurrentColor = document.body.style.backgroundColor;
    const icon = document.getElementById('icon');
    const ThemeButton = document.getElementById('button')

    if (!CurrentColor || CurrentColor == 'white') {
        changeColor('black', 'white');
        icon.className = 'ri-sun-fill'
        icon.style.color = 'orange'
        ThemeButton.style.backgroundColor = 'white'

    } else {
        changeColor('white', 'red');
        icon.className = 'ri-moon-line'
        icon.style.color = 'rgb(142, 183, 224)'
        ThemeButton.style.backgroundColor = 'black'
        NavText.style.backgroundColor = '#FF00FF'
    }

})

// ToDo
const AddButton = document.getElementById('AddButton')
const inputData = document.getElementById('textarea');
AddButton.addEventListener('click', () => {
    const data = inputData.value;
    const TodoContainer = document.getElementById('todo-container')
    const ul = document.createElement('ul')
    const li = document.createElement('li')
    const DelButton = document.createElement('button')
    DelButton.innerText = 'X'
    Object.assign(DelButton.style, {
        fontSize: '20px',
        padding: '10px',
        backgroundColor: 'red',
        borderRadius: '13px',
        border: 'none',
        margin: '15px',
    });

    Object.assign(li.style, {
        listStyleType: 'none',
        margin: '10px 0',
        padding: '10px',
        fontSize: '20px'

    })

    Object.assign(ul.style, {
        margin: '10px 0',
        padding: '10px',
        borderRadius: '10px',
        backgroundColor: 'white',
        boxShadow: '0 0 5px rgba(0,0,0,0.2)',
        

    })

    li.innerText = data;
    ul.appendChild(li);
    inputData.value = ''
    li.appendChild(DelButton)

    TodoContainer.appendChild(ul)
    DelButton.addEventListener('click', () => {
        // li.remove();
        ul.remove();
    })

})