const test = document.querySelector('#test');
const missatge = document.querySelector('#missatge');

test.addEventListener('submit', (event) => {
  event.preventDefault();
  const resposta = document.querySelector('input[name="resposta"]:checked');

  if (!resposta) {
    alert('Selecciona una opció abans de corregir.');
    missatge.textContent = 'Selecciona una opció abans de corregir.';
    missatge.className = 'incorrecte';
  } else if (resposta.value === 'oberta') {
    alert('Correcta');
    missatge.textContent = 'Correcte! En «soci», la o tònica és oberta perquè la síl·laba següent conté una i.';
    missatge.className = 'correcte';
  } else {
    alert('Incorrecta');
    missatge.textContent = 'No és correcte. En «soci», la o tònica és oberta perquè la síl·laba següent conté una i.';
    missatge.className = 'incorrecte';
  }
});
