window.addEventListener('DOMContentLoaded', ()=>{
    let span = document.querySelector('.span')
    let num = document.querySelector('.img-number')
    let number = 0 
    span.addEventListener('click', ()=>{
        if(span.textContent== "▶️") {
            span.textContent = "⏹️"
        }
        else{
            span.textContent = "▶️"
            number ++ 
            num.textContent = number
        }
    })

    
})
