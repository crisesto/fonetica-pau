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
  },
  {
    pregunta: 'La vocal tònica de la paraula «hivern» és:',
    opcions: ['oberta', 'tancada'],
    resposta_correcta: 'oberta',
    categoria: 'Vocals',
    explicacio: 'La e és oberta perquè va seguida de r + consonant (hivern), context que obri la e segons les regles de la fonètica valenciana.'
  },
  {
    pregunta: 'La vocal tònica de la paraula «verd» és:',
    opcions: ['oberta', 'tancada'],
    resposta_correcta: 'oberta',
    categoria: 'Vocals',
    explicacio: 'La e és oberta perquè va seguida de r + consonant (verd), context que obri la e segons les regles de la fonètica valenciana.'
  },
  {
    pregunta: 'La vocal tònica de la paraula «gerro» és:',
    opcions: ['oberta', 'tancada'],
    resposta_correcta: 'oberta',
    categoria: 'Vocals',
    explicacio: 'La e és oberta perquè va davant de rr (gerro), tal com indica la regla de e oberta davant de rr.'
  },
  {
    pregunta: 'La vocal tònica de la paraula «escola» és:',
    opcions: ['oberta', 'tancada'],
    resposta_correcta: 'oberta',
    categoria: 'Vocals',
    explicacio: 'La o és oberta perquè la paraula acaba en -ola (escola), tal com indica la regla de o oberta en mots acabats en -ol/-ola.'
  },
  {
    pregunta: 'La vocal tònica de la paraula «porta» és:',
    opcions: ['oberta', 'tancada'],
    resposta_correcta: 'oberta',
    categoria: 'Vocals',
    explicacio: 'La o és oberta perquè la paraula acaba en -orta (porta), tal com indica la regla de o oberta en mots acabats en -ort/-orta.'
  },
  {
    pregunta: 'La vocal tònica de la paraula «carxofa» és:',
    opcions: ['oberta', 'tancada'],
    resposta_correcta: 'oberta',
    categoria: 'Vocals',
    explicacio: 'La o és oberta perquè la paraula acaba en -ofa (carxofa), tal com indica la regla de o oberta en mots acabats en -ofa.'
  },
  {
    pregunta: 'La vocal tònica de la paraula «herba» és:',
    opcions: ['oberta', 'tancada'],
    resposta_correcta: 'tancada',
    categoria: 'Vocals',
    explicacio: 'La e és tancada perquè va seguida de r + consonant labial (-rb-), i davant de consonant labial la e sol ser tancada.'
  },
  {
    pregunta: 'La vocal tònica de la paraula «cercle» és:',
    opcions: ['oberta', 'tancada'],
    resposta_correcta: 'tancada',
    categoria: 'Vocals',
    explicacio: 'La e és tancada perquè va seguida de r + consonant velar (-rc-), i davant de consonant velar la e sol ser tancada.'
  },
  {
    pregunta: 'La vocal tònica de la paraula «boca» és:',
    opcions: ['oberta', 'tancada'],
    resposta_correcta: 'tancada',
    categoria: 'Vocals',
    explicacio: 'La o és tancada perquè boca és una excepció a la regla general de o oberta en mots acabats en -oca.'
  },
  {
    pregunta: 'La vocal tònica de la paraula «bossa» és:',
    opcions: ['oberta', 'tancada'],
    resposta_correcta: 'tancada',
    categoria: 'Vocals',
    explicacio: 'La o és tancada perquè bossa és una excepció a la regla general de o oberta en mots acabats en -ossa.'
  },
  {
    pregunta: 'La vocal tònica de la paraula «perla» és:',
    opcions: ['oberta', 'tancada'],
    resposta_correcta: 'oberta',
    categoria: 'Vocals',
    explicacio: 'La e és oberta perquè va seguida de r + consonant (-rl-), context que obri la e segons les regles de la fonètica valenciana.'
  },
  {
    pregunta: 'La vocal tònica de la paraula «ferro» és:',
    opcions: ['oberta', 'tancada'],
    resposta_correcta: 'oberta',
    categoria: 'Vocals',
    explicacio: 'La e és oberta perquè va davant de rr (ferro), tal com indica la regla de e oberta davant de rr.'
  },
  {
    pregunta: 'La vocal tònica de la paraula «terra» és:',
    opcions: ['oberta', 'tancada'],
    resposta_correcta: 'oberta',
    categoria: 'Vocals',
    explicacio: 'La e és oberta perquè va davant de rr (terra), tal com indica la regla de e oberta davant de rr.'
  },
  {
    pregunta: 'La vocal tònica de la paraula «selva» és:',
    opcions: ['oberta', 'tancada'],
    resposta_correcta: 'tancada',
    categoria: 'Vocals',
    explicacio: 'La e és tancada perquè selva és una excepció: davant de l, mots com selva o belga presenten e tancada.'
  },
  {
    pregunta: 'La vocal tònica de la paraula «dent» és:',
    opcions: ['oberta', 'tancada'],
    resposta_correcta: 'tancada',
    categoria: 'Vocals',
    explicacio: 'La e és tancada perquè va seguida de nasal + consonant (-nt-), context on la e sol ser tancada en valencià.'
  },
  {
    pregunta: 'La vocal tònica de la paraula «vent» és:',
    opcions: ['oberta', 'tancada'],
    resposta_correcta: 'tancada',
    categoria: 'Vocals',
    explicacio: 'La e és tancada perquè va seguida de nasal + consonant (-nt-), context on la e sol ser tancada en valencià.'
  },
  {
    pregunta: 'La vocal tònica de la paraula «gos» és:',
    opcions: ['oberta', 'tancada'],
    resposta_correcta: 'tancada',
    categoria: 'Vocals',
    explicacio: 'La o és tancada perquè no es troba en cap dels contexts d\'obertura (terminacions -oc, -ol, -ort, -ost, -ot, etc.).'
  },
  {
    pregunta: 'La vocal tònica de la paraula «mossa» és:',
    opcions: ['oberta', 'tancada'],
    resposta_correcta: 'tancada',
    categoria: 'Vocals',
    explicacio: 'La o és tancada perquè mossa és una excepció: mots com bossa o mossa presenten o tancada, a diferència d\'altres acabats en -ossa.'
  },
  {
    pregunta: 'La vocal tònica de la paraula «hora» és:',
    opcions: ['oberta', 'tancada'],
    resposta_correcta: 'oberta',
    categoria: 'Vocals',
    explicacio: 'La o és oberta perquè prové d\'una ō llarga llatina (HŌRA) i no es troba en cap context de tancament.'
  },
  {
    pregunta: 'La vocal tònica de la paraula «grossa» és:',
    opcions: ['oberta', 'tancada'],
    resposta_correcta: 'oberta',
    categoria: 'Vocals',
    explicacio: 'La o és oberta perquè la paraula acaba en -ossa (grossa), tal com indica la regla general de o oberta en mots acabats en -ossa.'
  }
];

let preguntesActuals = [];
const test = document.querySelector('#test');
const contenidorPregunta = document.querySelector('#contenidor-pregunta');
const missatge = document.querySelector('#missatge');
const pestanyes = document.querySelectorAll('.pestanya');

function mostrarPreguntes(preguntesLlista) {
  const html = preguntesLlista.map((pregunta, index) => {
    const textPregunta = pregunta.enunciat || pregunta.pregunta;

    let opcions;
    if (typeof pregunta.opcions[0] === 'string') {
      opcions = pregunta.opcions.map((opcio) => ({
        text: opcio,
        valor: opcio.toLowerCase()
      }));
    } else {
      opcions = pregunta.opcions;
    }

    const opcionsHTML = opcions.map((opcio) => `
      <label>
        <input type="radio" name="resposta-${index}" value="${opcio.valor}">
        ${opcio.text}
      </label>
    `).join('');

    return `
      <fieldset class="pregunta-grup">
        <legend>${textPregunta}</legend>
        <div class="opcions">
          ${opcionsHTML}
        </div>
        <div class="feedback" id="feedback-${index}"></div>
      </fieldset>
    `;
  }).join('');

  contenidorPregunta.innerHTML = html + '<button type="submit">Corregir</button>';
}

function seleccionarCategoria(categoria) {
  preguntesActuals = preguntes.filter((pregunta) => pregunta.categoria === categoria);

  mostrarPreguntes(preguntesActuals);
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

  preguntesActuals.forEach((pregunta, index) => {
    const resposta = document.querySelector(`input[name="resposta-${index}"]:checked`);
    const feedback = document.querySelector(`#feedback-${index}`);
    const opcionsLabels = document.querySelectorAll(`input[name="resposta-${index}"]`);

    opcionsLabels.forEach((opcio) => {
      opcio.closest('label').classList.remove('opcio-correcta', 'opcio-incorrecta');
    });

    if (!resposta) {
      feedback.textContent = 'Selecciona una opció abans de corregir.';
      feedback.className = 'incorrecte';
      return;
    }

    const correcta = pregunta.correcta || pregunta.resposta_correcta?.toLowerCase();

    if (resposta.value === correcta) {
      resposta.closest('label').classList.add('opcio-correcta');
      feedback.textContent = `Correcte ✓ ${pregunta.explicacio || ''}`;
      feedback.className = 'correcte';
    } else {
      resposta.closest('label').classList.add('opcio-incorrecta');

      let textCorrecte;
      if (typeof pregunta.opcions[0] === 'string') {
        const idx = pregunta.opcions.findIndex((o) => o.toLowerCase() === correcta);
        textCorrecte = pregunta.opcions[idx];
      } else {
        const opcioCorrecta = pregunta.opcions.find((o) => o.valor === correcta);
        textCorrecte = opcioCorrecta ? opcioCorrecta.text : correcta;
      }

      feedback.textContent = `Incorrecte ✗ La resposta correcta és «${textCorrecte}». ${pregunta.explicacio || ''}`;
      feedback.className = 'incorrecte';
    }
  });
});
