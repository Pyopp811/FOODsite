const openSet = document.getElementById('openSet');
const panSet = document.getElementById('panSet');
const body = document.body;

openSet.addEventListener('click', function(event){
    event.stopPropagation();
    body.classList.toggle('active');
})

document.addEventListener('click', function(event){
    if (!panSet.contains(event.target)&& event.target !== openSet){
        body.classList.remove('active');
    }
})