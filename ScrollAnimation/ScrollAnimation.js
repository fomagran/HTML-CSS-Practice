const boxes = document.querySelectorAll('.box')
window.addEventListener('scroll',checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight/5*4
    boxes.forEach(box => {
        //box의 사이즈와 포지션을 반환함
        const boxTop = box.getBoundingClientRect().top
        if (boxTop < triggerBottom) {
            box.classList.add('show')
        }else {
            box.classList.remove('show')
        }
    })
}