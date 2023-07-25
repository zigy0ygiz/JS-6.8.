const input = document.querySelector('input')
const button = document.querySelector('button')
const duplicateField = document.querySelector('#duplicateField')
const form = document.querySelector('form')

input.addEventListener('input', () => {
    duplicateField.textContent = input.value
})

button.addEventListener('click', (event) => {
    if(input.value){
        event.preventDefault();
        console.log(input.value);
        input.value = '';
        duplicateField.textContent = '';
    }
})
