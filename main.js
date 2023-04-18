const toogleBtn = document.getElementById('toggle-mode');
const body = document.body;

toogleBtn.addEventListener('click', function(){
    body.classList.toggle('dark-mode')
    
})

