const body = document.querySelector('body')
const darkBtn = document.getElementById('dark-btn')
const lightBtn = document.getElementById('light-btn')

const localBg = localStorage.getItem('mode');

if (localBg) {
    darkBtn.classList.toggle('hidden');
    lightBtn.classList.toggle('hidden');
    body.classList.add('dark-mode');
}


const chanBg = () => {
    darkBtn.classList.toggle('hidden');
    lightBtn.classList.toggle('hidden');
}

darkBtn.addEventListener('click', () => {
    chanBg();
    body.classList.add('dark-mode');
    localStorage.setItem('mode', 'hidden');
});
lightBtn.addEventListener('click', () => {
    chanBg();
    body.classList.remove('dark-mode');
    localStorage.setItem('mode', '');
});