function getCurrentDate() {
    let dateObj = new Date();

    // The string to pad the current str with. If padString is too long to stay within the targetLength, it will be truncated from the end.
    
    let month = String(dateObj.getMonth() + 1).padStart(2, '0');
    let day = String(dateObj.getDate()).padStart(2, '0');
    let year = dateObj.getFullYear();
    let output = day + '/' + month + '/' + year;
    document.querySelector('.output').textContent = output;
}