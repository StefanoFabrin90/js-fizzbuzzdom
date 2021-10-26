// costruzione da 1 a 100
const boxes = document.querySelector ('.boxes');


for (let i = 1; i <= 100; i++) {
     
    
    let element = '';

    if ( (i % 3 === 0) && (i % 5 ===0) ) {
        element = `<div class="box box-fizzbuzz">fizzbuzz</div`
    } else if (i % 3 ===0) {
        element = `<div class="box box-fizz">fizz</div`
    } else if (i % 5 ===0) {
        element = `<div class="box box-buzz">buzz</div`
    } else {
        element = `<div class="box">${i}</div`
    }
    
    boxes.innerHTML += element;

}





