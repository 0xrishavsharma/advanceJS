// Debounce prevents functions to be called to soo.
// One example is that preventing a button to be clicked twice by mistake. Like adding two quantities of a product into the cart by mistake.

const thisFunction = () => {
    const button = document.querySelector('button');
    button.addEventListener('click', buttonClickHandler);
}

const buttonClickHandler = () => console.log('clicked!')

document.addEventListener('DOMContentLoaded', thisFunction)