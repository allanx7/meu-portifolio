const botaoTema = document.getElementById('botao-tema');
const iconeTema = document.getElementById('icone-tema');
const body = document.body;

function aplicarTema(escuro) {
  body.classList.toggle('escuro', escuro);
  iconeTema.src = escuro ? 'img/brightness.svg' : 'img/moon.svg';
  botaoTema.setAttribute('aria-pressed', String(escuro));
  botaoTema.setAttribute(
    'aria-label',
    escuro ? 'Ativar modo claro' : 'Ativar modo escuro',
  );
}

const temaSalvo = localStorage.getItem('tema');
aplicarTema(temaSalvo === 'escuro');

botaoTema.addEventListener('click', () => {
  const escuro = !body.classList.contains('escuro');
  aplicarTema(escuro);
  localStorage.setItem('tema', escuro ? 'escuro' : 'claro');
});

document.querySelectorAll('#menu a.link').forEach((link) => {
  link.addEventListener('click', (evento) => {
    const seletor = link.getAttribute('href');
    const destino = document.querySelector(seletor);

    if (!destino) return;

    evento.preventDefault();
    destino.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', seletor);
  });
});
