document.addEventListener('DOMContentLoaded', function() {
    
    const display = document.getElementById('display');

    function appendToDisplay(value) {
        display.value += value;
    }

    function clearDisplay() {
        display.value = '';
    }

    function calculate() {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = 'Error';
        }
    }

    // Event listeners for the buttons
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function() {
            const action = this.getAttribute('data-action');

            if(action === 'clear') {
                clearDisplay();
            } else if(action === 'calculate') {
                calculate();
            } else {
                appendToDisplay(this.getAttribute('data-value'));
            }
        });
    });
    
});

