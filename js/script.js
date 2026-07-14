const preguntes = [
  {
    id: 1,
    categoria: 'Vocals',
    enunciat: 'Com es pronuncia la <u>o</u> tònica de la paraula «soci»?',
    opcions: [
      { text: 'Oberta', valor: 'oberta' },
      { text: 'Tancada', valor: 'tancada' }
    ],
    correcta: 'oberta',
    explicacio: 'En «soci», la o tònica és oberta perquè la síl·laba següent conté una i.'
  },
  {
    id: 2,
    categoria: 'Consonants',
    enunciat: 'En l’expressió «dos amics», com es pronuncia la s final de «dos»?',
    opcions: [
      { text: 'Sorda [s]', valor: 'sorda' },
      { text: 'Sonora [z]', valor: 'sonora' }
    ],
    correcta: 'sonora',
    explicacio: 'La s final es pronuncia sonora [z] quan la paraula següent comença per vocal.'
  },
  {
    id: 3,
    categoria: 'Elisions',
    enunciat: 'Quin fenomen es produeix en «mitja hora»?',
    opcions: [
      { text: 'Elisió', valor: 'elisio' },
      { text: 'No elisió', valor: 'no-elisio' }
    ],
    correcta: 'elisio',
    explicacio: 'Quan una vocal és tònica i l’altra és àtona, s’elimina la vocal àtona: «mitja hora» es pronuncia «mitj·ora».'
  },
  {
    id: 4,
    categoria: 'Diftongs/hiats',
    enunciat: 'En «lectors i espectadors», quin fenomen de contacte vocàlic es produeix entre i i e?',
    opcions: [
      { text: 'Diftongació o sinalefa', valor: 'diftong' },
      { text: 'Hiat', valor: 'hiat' }
    ],
    correcta: 'diftong',
    explicacio: 'Les dues vocals es pronuncien en una única síl·laba; per tant, es produeix diftongació o sinalefa.'
  },
  {
    id: 5,
    categoria: 'Textos',
    enunciat: 'En el fragment «creix a poc a poc», quin canvi experimenta el so final de «creix»?',
    opcions: [
      { text: 'Se sonoritza', valor: 'sonoritza' },
      { text: 'Es manté sord', valor: 'sord' }
    ],
    correcta: 'sonoritza',
    explicacio: 'El so [ʃ] es sonoritza i es pronuncia [ʒ] quan va seguit d’una paraula que comença per vocal.'
  }
];

let preguntaActual = preguntes[0];
const test = document.querySelector('#test');
const contenidorPregunta = document.querySelector('#contenidor-pregunta');
const missatge = document.querySelector('#missatge');
const pestanyes = document.querySelectorAll('.pestanya');

function mostrarPregunta(pregunta) {
  const opcionsHTML = pregunta.opcions.map((opcio) => `
    <label>
      <input type="radio" name="resposta" value="${opcio.valor}">
      ${opcio.text}
    </label>
  `).join('');

  contenidorPregunta.innerHTML = `
    <fieldset>
      <legend>${pregunta.enunciat}</legend>
      ${opcionsHTML}
    </fieldset>
    <button type="submit">Corregir</button>
  `;
}

function seleccionarCategoria(categoria) {
  const preguntesFiltrades = preguntes.filter((pregunta) => pregunta.categoria === categoria);

  preguntaActual = preguntesFiltrades[0];
  mostrarPregunta(preguntaActual);
  missatge.textContent = '';
  missatge.className = '';

  pestanyes.forEach((pestanya) => {
    const esActiva = pestanya.dataset.categoria === categoria;
    pestanya.classList.toggle('activa', esActiva);
    pestanya.setAttribute('aria-selected', esActiva);
  });
}

pestanyes.forEach((pestanya) => {
  pestanya.addEventListener('click', () => {
    seleccionarCategoria(pestanya.dataset.categoria);
  });
});

seleccionarCategoria('Vocals');

test.addEventListener('submit', (event) => {
  event.preventDefault();
  const resposta = document.querySelector('input[name="resposta"]:checked');
  const opcions = document.querySelectorAll('input[name="resposta"]');

  opcions.forEach((opcio) => {
    opcio.closest('label').classList.remove('opcio-correcta', 'opcio-incorrecta');
  });

  if (!resposta) {
    missatge.textContent = 'Selecciona una opció abans de corregir.';
    missatge.className = 'incorrecte';
  } else if (resposta.value === preguntaActual.correcta) {
    resposta.closest('label').classList.add('opcio-correcta');
    missatge.textContent = `Correcte ✓ ${preguntaActual.explicacio}`;
    missatge.className = 'correcte';
  } else {
    const opcioCorrecta = preguntaActual.opcions.find((opcio) => opcio.valor === preguntaActual.correcta);

    resposta.closest('label').classList.add('opcio-incorrecta');
    missatge.textContent = `Incorrecte ✗ La resposta correcta és «${opcioCorrecta.text}». ${preguntaActual.explicacio}`;
    missatge.className = 'incorrecte';
  }
});
