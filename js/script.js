const preguntes = [
  {
    id: 1,
    categoria: 'Vocals',
    enunciat: 'Com es pronuncia la <u><span style="color:red;font-weight:bold">o</span></u> tònica de la paraula «soci»?',
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
    enunciat: 'En l\'expressió «dos amics», com es pronuncia la <span style="color:red;font-weight:bold">s</span> final de «dos»?',
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
    enunciat: 'Quin fenomen es produeix en «mitj<span style="color:red;font-weight:bold">a</span> hora»?',
    opcions: [
      { text: 'Elisió', valor: 'elisio' },
      { text: 'No elisió', valor: 'no-elisio' }
    ],
    correcta: 'elisio',
    explicacio: 'Quan una vocal és tònica i l\'altra és àtona, s\'elimina la vocal àtona: «mitja hora» es pronuncia «mitj·ora».'
  },
  {
    id: 4,
    categoria: 'Diftongs/hiats',
    enunciat: 'En «lectors <span style="color:red;font-weight:bold">i</span> espectadors», quin fenomen de contacte vocàlic es produeix entre <span style="color:red;font-weight:bold">i</span> i <span style="color:red;font-weight:bold">e</span>?',
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
    enunciat: 'En el fragment «crei<span style="color:red;font-weight:bold">x</span> a poc a poc», quin canvi experimenta el so final de «creix»?',
    opcions: [
      { text: 'Se sonoritza', valor: 'sonoritza' },
      { text: 'Es manté sord', valor: 'sord' }
    ],
    correcta: 'sonoritza',
    explicacio: 'El so [ʃ] es sonoritza i es pronuncia [ʒ] quan va seguit d\'una paraula que comença per vocal.'
  },
  {
    pregunta: 'La vocal tònica de la paraula «hiv<span style="color:red;font-weight:bold">e</span>rn» és:',
    opcions: ['oberta', 'tancada'],
    resposta_correcta: 'oberta',
    categoria: 'Vocals',
    explicacio: 'La e és oberta perquè va seguida de r + consonant (hivern), context que obri la e segons les regles de la fonètica valenciana.'
  },
  {
    pregunta: 'La vocal tònica de la paraula «v<span style="color:red;font-weight:bold">e</span>rd» és:',
    opcions: ['oberta', 'tancada'],
    resposta_correcta: 'oberta',
    categoria: 'Vocals',
    explicacio: 'La e és oberta perquè va seguida de r + consonant (verd), context que obri la e segons les regles de la fonètica valenciana.'
  },
  {
    pregunta: 'La vocal tònica de la paraula «g<span style="color:red;font-weight:bold">e</span>rro» és:',
    opcions: ['oberta', 'tancada'],
    resposta_correcta: 'oberta',
    categoria: 'Vocals',
    explicacio: 'La e és oberta perquè va davant de rr (gerro), tal com indica la regla de e oberta davant de rr.'
  },
  {
    pregunta: 'La vocal tònica de la paraula «esc<span style="color:red;font-weight:bold">o</span>la» és:',
    opcions: ['oberta', 'tancada'],
    resposta_correcta: 'oberta',
    categoria: 'Vocals',
    explicacio: 'La o és oberta perquè la paraula acaba en -ola (escola), tal com indica la regla de o oberta en mots acabats en -ol/-ola.'
  },
  {
    pregunta: 'La vocal tònica de la paraula «p<span style="color:red;font-weight:bold">o</span>rta» és:',
    opcions: ['oberta', 'tancada'],
    resposta_correcta: 'oberta',
    categoria: 'Vocals',
    explicacio: 'La o és oberta perquè la paraula acaba en -orta (porta), tal com indica la regla de o oberta en mots acabats en -ort/-orta.'
  },
  {
    pregunta: 'La vocal tònica de la paraula «carx<span style="color:red;font-weight:bold">o</span>fa» és:',
    opcions: ['oberta', 'tancada'],
    resposta_correcta: 'oberta',
    categoria: 'Vocals',
    explicacio: 'La o és oberta perquè la paraula acaba en -ofa (carxofa), tal com indica la regla de o oberta en mots acabats en -ofa.'
  },
  {
    pregunta: 'La vocal tònica de la paraula «h<span style="color:red;font-weight:bold">e</span>rba» és:',
    opcions: ['oberta', 'tancada'],
    resposta_correcta: 'tancada',
    categoria: 'Vocals',
    explicacio: 'La e és tancada perquè va seguida de r + consonant labial (-rb-), i davant de consonant labial la e sol ser tancada.'
  },
  {
    pregunta: 'La vocal tònica de la paraula «c<span style="color:red;font-weight:bold">e</span>rcle» és:',
    opcions: ['oberta', 'tancada'],
    resposta_correcta: 'tancada',
    categoria: 'Vocals',
    explicacio: 'La e és tancada perquè va seguida de r + consonant velar (-rc-), i davant de consonant velar la e sol ser tancada.'
  },
  {
    pregunta: 'La vocal tònica de la paraula «b<span style="color:red;font-weight:bold">o</span>ca» és:',
    opcions: ['oberta', 'tancada'],
    resposta_correcta: 'tancada',
    categoria: 'Vocals',
    explicacio: 'La o és tancada perquè boca és una excepció a la regla general de o oberta en mots acabats en -oca.'
  },
  {
    pregunta: 'La vocal tònica de la paraula «b<span style="color:red;font-weight:bold">o</span>ssa» és:',
    opcions: ['oberta', 'tancada'],
    resposta_correcta: 'tancada',
    categoria: 'Vocals',
    explicacio: 'La o és tancada perquè bossa és una excepció a la regla general de o oberta en mots acabats en -ossa.'
  },
  {
    pregunta: 'La vocal tònica de la paraula «p<span style="color:red;font-weight:bold">e</span>rla» és:',
    opcions: ['oberta', 'tancada'],
    resposta_correcta: 'oberta',
    categoria: 'Vocals',
    explicacio: 'La e és oberta perquè va seguida de r + consonant (-rl-), context que obri la e segons les regles de la fonètica valenciana.'
  },
  {
    pregunta: 'La vocal tònica de la paraula «f<span style="color:red;font-weight:bold">e</span>rro» és:',
    opcions: ['oberta', 'tancada'],
    resposta_correcta: 'oberta',
    categoria: 'Vocals',
    explicacio: 'La e és oberta perquè va davant de rr (ferro), tal com indica la regla de e oberta davant de rr.'
  },
  {
    pregunta: 'La vocal tònica de la paraula «t<span style="color:red;font-weight:bold">e</span>rra» és:',
    opcions: ['oberta', 'tancada'],
    resposta_correcta: 'oberta',
    categoria: 'Vocals',
    explicacio: 'La e és oberta perquè va davant de rr (terra), tal com indica la regla de e oberta davant de rr.'
  },
  {
    pregunta: 'La vocal tònica de la paraula «s<span style="color:red;font-weight:bold">e</span>lva» és:',
    opcions: ['oberta', 'tancada'],
    resposta_correcta: 'tancada',
    categoria: 'Vocals',
    explicacio: 'La e és tancada perquè selva és una excepció: davant de l, mots com selva o belga presenten e tancada.'
  },
  {
    pregunta: 'La vocal tònica de la paraula «d<span style="color:red;font-weight:bold">e</span>nt» és:',
    opcions: ['oberta', 'tancada'],
    resposta_correcta: 'tancada',
    categoria: 'Vocals',
    explicacio: 'La e és tancada perquè va seguida de nasal + consonant (-nt-), context on la e sol ser tancada en valencià.'
  },
  {
    pregunta: 'La vocal tònica de la paraula «v<span style="color:red;font-weight:bold">e</span>nt» és:',
    opcions: ['oberta', 'tancada'],
    resposta_correcta: 'tancada',
    categoria: 'Vocals',
    explicacio: 'La e és tancada perquè va seguida de nasal + consonant (-nt-), context on la e sol ser tancada en valencià.'
  },
  {
    pregunta: 'La vocal tònica de la paraula «g<span style="color:red;font-weight:bold">o</span>s» és:',
    opcions: ['oberta', 'tancada'],
    resposta_correcta: 'tancada',
    categoria: 'Vocals',
    explicacio: 'La o és tancada perquè no es troba en cap dels contexts d\'obertura (terminacions -oc, -ol, -ort, -ost, -ot, etc.).'
  },
  {
    pregunta: 'La vocal tònica de la paraula «m<span style="color:red;font-weight:bold">o</span>ssa» és:',
    opcions: ['oberta', 'tancada'],
    resposta_correcta: 'tancada',
    categoria: 'Vocals',
    explicacio: 'La o és tancada perquè mossa és una excepció: mots com bossa o mossa presenten o tancada, a diferència d\'altres acabats en -ossa.'
  },
  {
    pregunta: 'La vocal tònica de la paraula «h<span style="color:red;font-weight:bold">o</span>ra» és:',
    opcions: ['oberta', 'tancada'],
    resposta_correcta: 'oberta',
    categoria: 'Vocals',
    explicacio: 'La o és oberta perquè prové d\'una ō llarga llatina (HŌRA) i no es troba en cap context de tancament.'
  },
  {
    pregunta: 'La vocal tònica de la paraula «gr<span style="color:red;font-weight:bold">o</span>ssa» és:',
    opcions: ['oberta', 'tancada'],
    resposta_correcta: 'oberta',
    categoria: 'Vocals',
    explicacio: 'La o és oberta perquè la paraula acaba en -ossa (grossa), tal com indica la regla general de o oberta en mots acabats en -ossa.'
  },
  {
    pregunta: 'Com es pronuncia la lletra destacada de la paraula «<span style="color:red;font-weight:bold">c</span>endra»?',
    opcions: ['sorda', 'sonora'],
    resposta_correcta: 'sorda',
    categoria: 'Consonants',
    explicacio: 'La lletra c davant de e (cendra) es pronuncia com a essa sorda [s], segons la regla que indica que la c davant de e o i sona com a [s] sorda.'
  },
  {
    pregunta: 'Com es pronuncia la essa de la paraula «pa<span style="color:red;font-weight:bold">ss</span>ar»?',
    opcions: ['sorda', 'sonora'],
    resposta_correcta: 'sorda',
    categoria: 'Consonants',
    explicacio: 'El dígraf -ss- (passar) es pronuncia sempre com a essa sorda [s], tal com s\'indica en les regles de les consonants fricatives.'
  },
  {
    pregunta: 'Com es pronuncia la <span style="color:red;font-weight:bold">z</span> de la paraula «<span style="color:red;font-weight:bold">z</span>ero»?',
    opcions: ['sorda', 'sonora'],
    resposta_correcta: 'sonora',
    categoria: 'Consonants',
    explicacio: 'La lletra z (zero) es pronuncia sempre com a essa sonora [z], tal com recullen les regles de les consonants fricatives.'
  },
  {
    pregunta: 'Com es pronuncia la <span style="color:red;font-weight:bold">s</span> de la paraula «ca<span style="color:red;font-weight:bold">s</span>a»?',
    opcions: ['sorda', 'sonora'],
    resposta_correcta: 'sonora',
    categoria: 'Consonants',
    explicacio: 'Una essa situada entre vocals (casa) es pronuncia sonora [z], segons la regla de l\'essa sonora a l\'interior de paraula entre vocals.'
  },
  {
    pregunta: 'Com es pronuncia la essa final de la paraula «cabé<span style="color:red;font-weight:bold">s</span>»?',
    opcions: ['sorda', 'sonora'],
    resposta_correcta: 'sorda',
    categoria: 'Consonants',
    explicacio: 'Una essa a final de paraula (cabés) es pronuncia sorda [s], segons la regla que indica que la s a final de paraula absoluta és sorda.'
  },
  {
    pregunta: 'Com es pronuncia la essa de la paraula «pol<span style="color:red;font-weight:bold">s</span>»?',
    opcions: ['sorda', 'sonora'],
    resposta_correcta: 'sorda',
    categoria: 'Consonants',
    explicacio: 'La essa a final de paraula absoluta (pols) es pronuncia sorda [s], segons la regla de la s final absoluta.'
  },
  {
    pregunta: 'En l\'expressió «le<span style="color:red;font-weight:bold">s</span> dones», com es pronuncia la essa final de «les»?',
    opcions: ['sorda', 'sonora'],
    resposta_correcta: 'sonora',
    categoria: 'Consonants',
    explicacio: 'La s final de paraula (les) seguida d\'una consonant sonora (d) es sonoritza i es pronuncia [z], segons la regla de sonorització de la s/ç final davant de consonant sonora.'
  },
  {
    pregunta: 'Com es pronuncia la essa de la paraula «cerve<span style="color:red;font-weight:bold">s</span>a»?',
    opcions: ['sorda', 'sonora'],
    resposta_correcta: 'sonora',
    categoria: 'Consonants',
    explicacio: 'Una essa situada entre vocals (cervesa) es pronuncia sonora [z], segons la regla de l\'essa sonora a l\'interior de paraula entre vocals.'
  },
  {
    pregunta: 'En l\'expressió «ma<span style="color:red;font-weight:bold">ig</span> i juny», com es pronuncia el so final de «maig»?',
    opcions: ['sorda', 'sonora'],
    resposta_correcta: 'sonora',
    categoria: 'Consonants',
    explicacio: 'El so africat palatal sord [tʃ] del digraf -ig (maig) es sonoritza [dʒ] quan apareix en posició final de paraula seguit d\'una vocal (i), segons la regla de sonorització de les consonants palatals.'
  },
  {
    pregunta: 'En l\'expressió «se<span style="color:red;font-weight:bold">t</span> mesos», com es pronuncia la t final de «set»?',
    opcions: ['sorda', 'sonora'],
    resposta_correcta: 'sonora',
    categoria: 'Consonants',
    explicacio: 'La consonant oclusiva dental sorda [t] (set) es sonoritza [d] quan va seguida d\'una consonant sonora (m), segons la regla de sonorització de les oclusives en contacte amb consonant sonora.'
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