const preguntes = [
  {
    id: 1,
    categoria: 'Vocals',
    enunciat: 'Com es pronuncia la o tònica de la paraula «soci»?',
    opcions: ['Oberta', 'Tancada'],
    correcta: 'oberta',
    explicacio: 'En «soci», la o tònica és oberta perquè la síl·laba següent conté una i.'
  },
  {
    id: 2,
    categoria: 'Consonants',
    enunciat: 'En l’expressió «dos amics», com es pronuncia la s final de «dos»?',
    opcions: ['Sorda [s]', 'Sonora [z]'],
    correcta: 'sonora',
    explicacio: 'La s final es pronuncia sonora [z] quan la paraula següent comença per vocal.'
  },
  {
    id: 3,
    categoria: 'Elisions',
    enunciat: 'Quin fenomen es produeix en «mitja hora»?',
    opcions: ['Elisió', 'No elisió'],
    correcta: 'elisio',
    explicacio: 'Quan una vocal és tònica i l’altra és àtona, s’elimina la vocal àtona: «mitja hora» es pronuncia «mitj·ora».'
  },
  {
    id: 4,
    categoria: 'Diftongs/hiats',
    enunciat: 'En «lectors i espectadors», quin fenomen de contacte vocàlic es produeix entre i i e?',
    opcions: ['Diftongació o sinalefa', 'Hiat'],
    correcta: 'diftong',
    explicacio: 'Les dues vocals es pronuncien en una única síl·laba; per tant, es produeix diftongació o sinalefa.'
  },
  {
    id: 5,
    categoria: 'Textos',
    enunciat: 'En el fragment «creix a poc a poc», quin canvi experimenta el so final de «creix»?',
    opcions: ['Se sonoritza', 'Es manté sord'],
    correcta: 'sonoritza',
    explicacio: 'El so [ʃ] es sonoritza i es pronuncia [ʒ] quan va seguit d’una paraula que comença per vocal.'
  }
];

const preguntaActual = preguntes[0];
const test = document.querySelector('#test');
const missatge = document.querySelector('#missatge');

test.addEventListener('submit', (event) => {
  event.preventDefault();
  const resposta = document.querySelector('input[name="resposta"]:checked');

  if (!resposta) {
    alert('Selecciona una opció abans de corregir.');
    missatge.textContent = 'Selecciona una opció abans de corregir.';
    missatge.className = 'incorrecte';
  } else if (resposta.value === preguntaActual.correcta) {
    alert('Correcta');
    missatge.textContent = `Correcte! ${preguntaActual.explicacio}`;
    missatge.className = 'correcte';
  } else {
    alert('Incorrecta');
    missatge.textContent = `No és correcte. ${preguntaActual.explicacio}`;
    missatge.className = 'incorrecte';
  }
});
