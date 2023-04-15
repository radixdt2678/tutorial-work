// Remove Class

const removeBtn = document.getElementById('remove');

removeBtn.addEventListener('click', () => {
        const elements = document.querySelectorAll('.text');
    
elements.forEach((element) => {
        element.classList.remove('big','col');
});

});

// Add Class 

const addBtn = document.getElementById('add');

addBtn.addEventListener('click', () => {
        const elements = document.querySelectorAll('.text');
    
elements.forEach((element) => {
        element.classList.add('col');
});

});