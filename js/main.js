// costruzione da 1 a 100
const boxes = document.querySelector ('.boxes');

for (let i = 1; i <= 100; i++) {
    boxes.innerHTML += `<div class="box">${i}</div`
    
    
    if (i % 3 ===0){
        boxes.classList.add ('box-3')
    }
}




