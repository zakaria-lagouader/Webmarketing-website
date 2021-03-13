const nav = document.getElementById('sidebar');
const open = document.getElementById('navBtn');
const close = document.getElementById('close');

open.addEventListener('click', (e) => {
    e.preventDefault()
    nav.style.display = 'flex';
})

close.addEventListener('click', (e) => {
    e.preventDefault()
    nav.style.display = 'none';
})
