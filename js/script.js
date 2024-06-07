document.getElementById('quem-sou-eu').addEventListener('click', function() {
    document.getElementById('conteudo').classList.toggle('hidden');
    document.querySelector('.content-line').classList.toggle('hidden');
});

document.getElementById('triangle-bottom').addEventListener('click', function() {
    document.getElementById('conteudo').classList.add('hidden');
    document.querySelector('.content-line').classList.add('hidden');
});
