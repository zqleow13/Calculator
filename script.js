const buttonKeys = document.querySelectorAll('button');
let keys = 1;

// making the buttons click when pressed
buttonKeys.forEach((element) => {
    element.addEventListener('click', function() {
        keypress(element.attributes["data-key"].value)
    });
});


function keypress(key) {
    if (key === '=') {
        //enterKey();
        } else if (key === 'AC') {
            //deleteKey();
        } else {
            //populateKey(key);
        }
}