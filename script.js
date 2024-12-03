
const overlay = document.getElementById('overlay');
const content = document.getElementById('content');


overlay.addEventListener('click', function() {
   
    overlay.style.display = 'none';
    content.style.display = 'block';
});

