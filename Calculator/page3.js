const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('button');

let screenValue = '';
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerText;

        if (buttonText === 'AC') {
            screenValue = '';
            screen.innerText = '';
        } else if (buttonText === '=') {
            try {
                screen.innerText = eval(screenValue);
                screenValue = screen.innerText;
            } catch (error) {
                screen.innerText = 'Error';
            }
        }
        else if(buttonText === 'C'){
            screenValue = screenValue.substring(0, screenValue.length-1);
            screen.innerText = screenValue;
        }
         else {
            screenValue += buttonText;
            screen.innerText = screenValue;
        }
    });
});
