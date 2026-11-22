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

const menuBtn = document.getElementById('menuBtn');
const mSet = document.getElementById('mSet');

menuBtn.addEventListener('click', function (event){
    event.stopPropagation();
    mSet.classList.toggle('active');
    menuBtn.classList/toggle('active');
})

document.addEventListener('click', function(event){
    if (!mSet.contains(event.target)&& event.target !== menuBtn){
        mSet.classList.remove('active');
        menuBtn.classList.remove('active');
    }
})