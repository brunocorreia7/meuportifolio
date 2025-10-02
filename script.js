document.getElementById('sobre-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('sobre-modal').style.display = 'flex';
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('sobre-modal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('sobre-modal')) {
        document.getElementById('sobre-modal').style.display = 'none';
    }
});
