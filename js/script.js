const preguntes = [
  {
    id: 1,
    categoria: 'Vocals',
    enunciat: 'Com es pronuncia la o tònica de la paraula «s<u><span style="color:red;font-weight:bold">o</span></u>ci»?',
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
    enunciat: 'Quin fenomen es produeix en «quinz<span style="color:red;font-weight:bold">e</span> anys»?',
    opcions: [
      { text: 'Elisió', valor: 'elisio' },
      { text: 'No elisió', valor: 'no-elisio' }
    ],
    correcta: 'elisio',
    explicacio: 'Quan una vocal és tònica i l\'altra és àtona, s\'elimina la vocal àtona: «quinze anys» es pronuncia «quinz·anys».'
  },
  {
    id: 4,
    categoria: 'Diftongs/hiats',
    enunciat: 'En la paraula «d<span style="color:red;font-weight:bold">ia</span>», el grup de vocals destacat forma un:',
    opcions: [
      { text: 'diftong', valor: 'diftong' },
      { text: 'hiat', valor: 'hiat' }
    ],
    correcta: 'hiat',
    explicacio: 'En la paraula «dia», la «i» i la «a» formen un hiat perquè la «i» és una vocal feble que, en no portar accent, es comporta com a vocal forta en contacte amb una altra vocal forta, i se separen en síl·labes diferents.'
  },
  {
    id: 5,
    categoria: 'Consonants',
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
  },
  // === INICI: 10 preguntes noves sobre Elisions (fonètica sintàctica i contacte vocàlic) ===
  {
    pregunta: 'En l\'expressió «mitj<span style="color: red; font-weight: bold;">a</span> hora», la vocal destacada:',
    opcions: ["s\'elideix", "no s\'elideix"],
    resposta_correcta: "s\'elideix",
    categoria: 'Elisions',
    explicacio: 'S\'elideix la \'a\' de «mitja» perquè, en contacte de vocals on una és tònica (la \'o\' de «hora») i l\'altra és àtona (la \'a\' de «mitja»), s\'elimina la vocal àtona (regla: «Quan una és tònica i l\'altra àtona, s\'elimina l\'àtona»).'
  },
  {
    pregunta: 'En l\'expressió «diu qu<span style="color: red; font-weight: bold;">e</span> aniran», la vocal destacada:',
    opcions: ["s\'elideix", "no s\'elideix"],
    resposta_correcta: "s\'elideix",
    categoria: 'Elisions',
    explicacio: 'S\'elideix la \'e\' de «que» perquè, en contacte de dues vocals àtones on hi ha una \'e\', s\'elideix sempre la \'e\' (regla: «Si les dues són àtones i hi ha una e, s\'elideix la e»). Exemple del dossier: «Diu que aniran (diu q·aniran)».'
  },
  {
    pregunta: 'En l\'expressió «carro <span style="color: red; font-weight: bold;">a</span>ntic», la vocal destacada:',
    opcions: ["s\'elideix", "no s\'elideix"],
    resposta_correcta: "s\'elideix",
    categoria: 'Elisions',
    explicacio: 'S\'elideix la \'a\' de «antic» perquè, en contacte de dues vocals àtones on no hi ha cap \'e\', s\'elideix la \'a\' (regla: «Si les dues són àtones i no hi ha e, s\'elideix la a»). Exemple del dossier: «carro antic (carro·ntic)».'
  },
  {
    pregunta: 'En l\'expressió «Entr<span style="color: red; font-weight: bold;">a</span> ací», la vocal destacada:',
    opcions: ["s\'elideix", "no s\'elideix"],
    resposta_correcta: "s\'elideix",
    categoria: 'Elisions',
    explicacio: 'S\'elideix la primera \'a\' de «Entra» perquè, en contacte de dues vocals iguals (a + a), s\'elideix la primera vocal (regla: «Si són les mateixes, s\'elideix la primera vocal»). Exemple del dossier: «Entra ací (Entr·ací)».'
  },
  {
    pregunta: 'En l\'expressió «si <span style="color: red; font-weight: bold;">e</span>l compres», la vocal destacada:',
    opcions: ["s\'elideix", "no s\'elideix"],
    resposta_correcta: "s\'elideix",
    categoria: 'Elisions',
    explicacio: 'S\'elideix la \'e\' de «el» perquè, en contacte de \'i\' + \'e\' que no formen diftong, s\'elideix la \'e\' (regla: «Si la primera és i i la 2a és e, i no formen diftong, s\'elideix la e»). Exemple del dossier: «si el compres, te\'n penediràs (si·l compres)».'
  },
  {
    pregunta: 'En l\'expressió «arribà <span style="color: red; font-weight: bold;">À</span>ngel», la vocal destacada:',
    opcions: ["s\'elideix", "no s\'elideix"],
    resposta_correcta: "no s\'elideix",
    categoria: 'Elisions',
    explicacio: 'No s\'elideix la \'À\' d\'«Àngel» perquè tant la \'à\' d\'«arribà» com la \'À\' d\'«Àngel» són tòniques. Quan les dues vocals són tòniques, no s\'elideixen (regla: «Si les dues són tòniques no s\'elideixen»). Exemple del dossier: «Arribà Àngel (arribà Àngel)».'
  },
  {
    pregunta: 'En l\'expressió «h<span style="color: red; font-weight: bold;">i</span> ha gent», la vocal destacada:',
    opcions: ["s\'elideix", "no s\'elideix"],
    resposta_correcta: "no s\'elideix",
    categoria: 'Elisions',
    explicacio: 'No s\'elideix la \'i\' de «hi» perquè forma diftong amb la \'a\' següent. Quan una de les vocals és \'i\' o \'u\' i formen diftong, no s\'elideixen (regla: «Si una de les vocals és i o u, i formen diftong, no s\'elideixen»). Exemple del dossier: «Hi ha gent (iagent)».'
  },
  {
    pregunta: 'En l\'expressió «l<span style="color: red; font-weight: bold;">a</span> universitat», la vocal destacada:',
    opcions: ["s\'elideix", "no s\'elideix"],
    resposta_correcta: "no s\'elideix",
    categoria: 'Elisions',
    explicacio: 'No s\'elideix la \'a\' de l\'article «la» perquè davant de \'i\' o \'u\' àtones, l\'article o pronom «la» no s\'elideix mai (regla: «L\'article o el pronom la no s\'elideixen mai davant de i/u àtones»). Exemple del dossier: «Estudia en la universitat».'
  },
  {
    pregunta: 'En l\'expressió «V<span style="color: red; font-weight: bold;">e</span> amb mi», la vocal destacada:',
    opcions: ["s\'elideix", "no s\'elideix"],
    resposta_correcta: "s\'elideix",
    categoria: 'Elisions',
    explicacio: 'S\'elideix la \'e\' de «Ve» perquè, en contacte de dues vocals àtones on hi ha una \'e\' (la \'e\' de «Ve» i la \'a\' de «amb»), s\'elideix sempre la \'e\' (regla: «Si les dues són àtones i hi ha una e, s\'elideix la e»). Exemple del dossier: «Ve amb mi: elisió».'
  },
  {
    pregunta: 'En l\'expressió «Llengu<span style="color: red; font-weight: bold;">a</span> i literatura», la vocal destacada:',
    opcions: ["s\'elideix", "no s\'elideix"],
    resposta_correcta: "no s\'elideix",
    categoria: 'Elisions',
    explicacio: 'No s\'elideix la \'a\' de «Llengua» perquè la \'i\' de la conjunció forma diftong amb la \'a\' anterior. Quan una de les vocals és \'i\' o \'u\' i formen diftong, no s\'elideixen (regla: «Si una de les vocals és i o u, i formen diftong, no s\'elideixen»). Exemple del dossier: «Llengua i literatura: no elisió».'
  },
  // === FIN: 10 preguntes noves sobre Elisions ===
  {
    pregunta: 'En la paraula «c<span style="color: red; font-weight: bold;">ui</span>na», el grup de vocals destacat forma un:',
    opcions: ['diftong', 'hiat'],
    resposta_correcta: 'diftong',
    explicacio: 'Segons la normativa, el grup «ui» és especial però s\'ha de recordar que sempre forma un diftong, independentment de si es pronuncia de manera creixent o decreixent.',
    categoria: 'Diftongs/hiats'
  },
  {
    pregunta: 'En la paraula «p<span style="color: red; font-weight: bold;">oe</span>ta», el grup de vocals destacat forma un:',
    opcions: ['diftong', 'hiat'],
    resposta_correcta: 'hiat',
    explicacio: 'Quan dues vocals fortes es troben juntes («o» i «e»), no fan mai un diftong. Cadascuna vol el seu propi espai i formen un hiat.',
    categoria: 'Diftongs/hiats'
  },
  {
    pregunta: 'En la paraula «p<span style="color: red; font-weight: bold;">aí</span>s», el grup de vocals destacat forma un:',
    opcions: ['diftong', 'hiat'],
    resposta_correcta: 'hiat',
    explicacio: 'Si una vocal feble porta accent gràfic, es torna forta. L\'accent li dona poder per a formar una síl·laba ella sola, de manera que trenca el diftong i crea un hiat.',
    categoria: 'Diftongs/hiats'
  },
  {
    pregunta: 'En la paraula «q<span style="color: red; font-weight: bold;">üe</span>stió», el grup de vocals destacat forma un:',
    opcions: ['diftong', 'hiat'],
    resposta_correcta: 'diftong',
    explicacio: 'Forma un diftong creixent compost per una semiconsonant (la «u» amb dièresi) precedida per una «q» i seguida per la vocal nuclear «e».',
    categoria: 'Diftongs/hiats'
  },
  {
    pregunta: 'En la paraula «v<span style="color: red; font-weight: bold;">eï</span>nat», el grup de vocals destacat forma un:',
    opcions: ['diftong', 'hiat'],
    resposta_correcta: 'hiat',
    explicacio: 'La dièresi en la vocal feble és un senyal ortogràfic que avisa explícitament que s\'han de separar les vocals i que, per tant, no formen diftong.',
    categoria: 'Diftongs/hiats'
  },
  {
    pregunta: 'En la paraula «Màr<span style="color: red; font-weight: bold;">iu</span>s», el grup de vocals destacat forma un:',
    opcions: ['diftong', 'hiat'],
    resposta_correcta: 'hiat',
    explicacio: 'És una excepció molt important: la combinació de vocals «iu» no forma diftong en els mots d\'origen culte acabats en «-us» o «-um».',
    categoria: 'Diftongs/hiats'
  },
  {
    pregunta: 'En la paraula «her<span style="color: red; font-weight: bold;">eu</span>», el grup de vocals destacat forma un:',
    opcions: ['diftong', 'hiat'],
    resposta_correcta: 'diftong',
    explicacio: 'Forma un diftong decreixent, on hi ha una vocal nuclear (la vocal forta «e») seguida immediatament d\'una semivocal (la «u»).',
    categoria: 'Diftongs/hiats'
  },
  {
    pregunta: 'En la paraula «cam<span style="color: red; font-weight: bold;">ió</span>», el grup de vocals destacat forma un:',
    opcions: ['diftong', 'hiat'],
    resposta_correcta: 'hiat',
    explicacio: 'Ací es produeix la \'rebel·lió\' de les vocals febles: si una vocal feble precedeix una forta i al davant no hi ha cap «g» ni «q», es forma un hiat i se separen.',
    categoria: 'Diftongs/hiats'
  },
  {
    pregunta: 'En la paraula «<span style="color: red; font-weight: bold;">io</span>gurt», el grup de vocals destacat forma un:',
    opcions: ['diftong', 'hiat'],
    resposta_correcta: 'diftong',
    explicacio: 'És un diftong creixent, ja que la vocal «i» funciona de manera especial com a semiconsonant quan es troba al començament d\'un mot i va seguida d\'una altra vocal.',
    categoria: 'Diftongs/hiats'
  },
  {
    pregunta: 'En la paraula «b<span style="color: red; font-weight: bold;">oi</span>ra», el grup de vocals destacat forma un:',
    opcions: ['diftong', 'hiat'],
    resposta_correcta: 'diftong',
    explicacio: 'Forma un diftong decreixent, ja que està compost per una vocal nuclear forta (la «o») seguida d\'una semivocal (la «i»).',
    categoria: 'Diftongs/hiats'
  },
  // === INICI: 10 textos nous per a la categoria "Textos" ===
  {
    categoria: "Textos",
    text: "El músic tocava una melodia suau amb la seua dolçaina nova. \nLa gent de la plaça ballava sense parar sota el sol radiant. \nUna zebra del zoològic mirava curiosa per damunt del mur alt.",
    pregunta: "Localitza totes les paraules que continguen el so fricatiu alveolar sonor.",
    paraules_clau: ["músic", "zebra", "zoològic", "curiosa"],
    explicacio: "El so fricatiu alveolar sonor [z] es representa amb la lletra 's' entre vocals (com a «músic» i «curiosa») i amb la lletra 'z' a inici de paraula i darrere de consonant (com a «zebra» i «zoològic»)."
  },
  {
    categoria: "Textos",
    text: "El metge de guàrdia va atendre el xiquet amb molta rapidesa. \nAl carrer un cotxe roig havia frenat de colp prop del pas. \nEl viatge va acabar sent una autèntica aventura inoblidable.",
    pregunta: "Localitza totes les paraules que continguen el so africat palatal sord.",
    paraules_clau: ["xiquet", "cotxe", "roig"],
    explicacio: "El so africat palatal sord [tʃ] es pot representar amb 'x' a l'inici («xiquet»), amb el dígraf 'tx' entre vocals («cotxe») i amb 'ig' a final de paraula després de vocal («roig»)."
  },
  {
    categoria: "Textos",
    text: "La xiqueta collia fullaraca prop de la vella cabanya del bosc. \nEl seu germà portava un cabàs ple de pomes de la campanya. \nAl final del dia van fer una gran foguera amb tota la llenya.",
    pregunta: "Localitza totes les paraules que continguen el so lateral palatal.",
    paraules_clau: ["collia", "fullaraca", "vella", "llenya"],
    explicacio: "El so lateral palatal [ʎ] és sempre sonor i es representa gràficament amb el dígraf 'll', tal com s'observa a les paraules «collia», «fullaraca», «vella» i «llenya»."
  },
  {
    categoria: "Textos",
    text: "El gos de la meua veïna sempre bordava quan passava algú. \nAhir vaig comprar un paquet de formatge al mercat del barri. \nLa guerra havia deixat un gran forat a la paret de pedra.",
    pregunta: "Localitza totes les paraules que continguen el so oclusiu velar sonor.",
    paraules_clau: ["gos", "algú", "guerra", "gran"],
    explicacio: "L'oclusiu velar sonor [g] s'escriu amb 'g' davant de a, o, u o consonant («gos», «algú», «gran») i amb el dígraf 'gu' davant de les vocals e, i («guerra»)."
  },
  {
    categoria: "Textos",
    text: "A la ciutat de Xàtiva feia un dia radiant i molt calorós. \nLes famílies passejaven felices per la font vella de pedra. \nEl dibuix del llibre antic mostrava un paisatge ben bonic.",
    pregunta: "Localitza totes les paraules que continguen el so fricatiu labiodental sord.",
    paraules_clau: ["feia", "famílies", "felices", "font"],
    explicacio: "El so fricatiu labiodental sord [f] es representa en valencià exclusivament amb la lletra 'f', com ocorre als mots «feia», «famílies», «felices» i «font»."
  },
  {
    categoria: "Textos",
    text: "El grup de joves va decidir organitzar una festa sorpresa. \nHi havia dotze convidats esperant al saló de la gran casa. \nPotser l'atzar faria que arribaren més prompte de l'esperat.",
    pregunta: "Localitza totes les paraules que continguen el so africat alveolar sonor.",
    paraules_clau: ["organitzar", "dotze", "atzar"],
    explicacio: "El so africat alveolar sonor [dz] es representa gràficament de manera específica amb el dígraf 'tz', present en les paraules «organitzar», «dotze» i «atzar»."
  },
  {
    categoria: "Textos",
    text: "El corredor ràpid va passar la línia de meta molt esgotat. \nUna gran massa de gent aplaudia amb entusiasme des de la grada. \nLa carrera havia deixat un rastre d'emoció a tota la pista.",
    pregunta: "Localitza totes les paraules que continguen el so ròtic vibrant (la r forta).",
    paraules_clau: ["corredor", "ràpid", "carrera", "rastre"],
    explicacio: "El so ròtic vibrant [r] s'escriu amb el dígraf 'rr' entre vocals («corredor», «carrera») i amb una sola 'r' quan va a inici de paraula («ràpid», «rastre») o darrere d'algunes consonants."
  },
  {
    categoria: "Textos",
    text: "La meua cunyada va portar una safata de castanyes al forn. \nAquell any passat vam plantar un codonyer a la muntanya. \nAra trèiem profit d'aquell disseny tan bonic que vam fer.",
    pregunta: "Localitza totes les paraules que continguen el so nasal palatal.",
    paraules_clau: ["cunyada", "castanyes", "any", "codonyer", "muntanya", "disseny"],
    explicacio: "El so nasal palatal [ɲ] és sonor i es representa exclusivament amb el dígraf 'ny'. En aquest text apareix a «cunyada», «castanyes», «any», «codonyer», «muntanya» i «disseny»."
  },
  {
    categoria: "Textos",
    text: "El museu mostrava una col·lecció d'art antic impressionant. \nLa xicona visitava la sala principal amb moltíssima il·lusió. \nLa casa guardava una aquarel·la d'una cèl·lula ben amagada.",
    pregunta: "Localitza totes les paraules que continguen el so lateral alveolar geminat.",
    paraules_clau: ["col·lecció", "il·lusió", "aquarel·la", "cèl·lula"],
    explicacio: "El so lateral alveolar geminat [l·l] es pronuncia com una ela allargada i s'escriu sempre amb el grup gràfic de la ela geminada 'l·l', present en aquestes quatre paraules cultes."
  },
  {
    categoria: "Textos",
    text: "El mestre d'escacs va preparar el tauler dibuixant les caselles. \nUn xaval xicotet mirava la caixa de fusta amb molta atenció. \nAquell dia jugarien una partida important a la ciutat de Xàtiva.",
    pregunta: "Localitza totes les paraules que continguen el so fricatiu palatal sord.",
    paraules_clau: ["dibuixant", "caixa", "Xàtiva"],
    explicacio: "El so fricatiu palatal sord [ʃ] es pot representar amb 'x' a inici de paraula com a «Xàtiva» i amb el grup 'ix' darrere de vocal (com a «dibuixant» i «caixa»)."
  }
  // === FIN: 10 textos nous per a la categoria "Textos" ===
];

let preguntesActuals = [];
let encerts = 0;
let errors = 0;
const marcadorEncerts = document.querySelector('#encerts-comptador');
const marcadorErrors = document.querySelector('#errors-comptador');

function actualitzarMarcador() {
  marcadorEncerts.textContent = encerts;
  marcadorErrors.textContent = errors;
}

const test = document.querySelector('#test');
const contenidorPregunta = document.querySelector('#contenidor-pregunta');
const missatge = document.querySelector('#missatge');
const pestanyes = document.querySelectorAll('.pestanya');

function mostrarPreguntes(preguntesLlista) {
  if (preguntesLlista.length === 0) {
    contenidorPregunta.innerHTML = '<p>No hi ha preguntes per a esta categoria.</p>';
    return;
  }

  // Comprovar si és la categoria "Textos"
  const esTextos = preguntesLlista[0].categoria === 'Textos';

  if (esTextos) {
    // Renderitzar cada text amb paraules clicables
    const html = preguntesLlista.map((pregunta, index) => {
      // Separar el text en paraules i crear spans clicables
      const paraules = pregunta.text.split(/\s+/);
      const textHTML = paraules.map((paraula) => {
        // Netejar signes de puntuació per a la paraula clicable
        const paraulaNeta = paraula.replace(/[.,;:!?()"']/g, '');
        if (paraulaNeta.length === 0) return paraula;
        return `<span class="clickable-word" data-paraula="${paraulaNeta}" data-index="${index}">${paraula}</span>`;
      }).join(' ');

      return `
        <fieldset class="pregunta-grup pregunta-textos" data-index="${index}">
          <legend>${pregunta.pregunta}</legend>
          <div class="text-container">${textHTML}</div>
          <div class="seleccionades" id="seleccionades-${index}">
            <strong>Paraules seleccionades:</strong> <span class="llista-seleccionades">(cap)</span>
          </div>
          <button type="button" class="btn-comprovar" data-index="${index}">Comprovar</button>
          <div class="feedback" id="feedback-textos-${index}"></div>
        </fieldset>
      `;
    }).join('');

    contenidorPregunta.innerHTML = html;

    // Afegir event listeners per a les paraules clicables
    document.querySelectorAll('.clickable-word').forEach((span) => {
      span.addEventListener('click', function () {
        this.classList.toggle('selected');
        // Actualitzar la llista de paraules seleccionades per a este text
        const index = this.dataset.index;
        const seleccionades = document.querySelectorAll(`.clickable-word[data-index="${index}"].selected`);
        const llista = Array.from(seleccionades).map((el) => el.dataset.paraula);
        const llistaSpan = document.querySelector(`#seleccionades-${index} .llista-seleccionades`);
        if (llistaSpan) {
          llistaSpan.textContent = llista.length > 0 ? llista.join(', ') : '(cap)';
        }
      });
    });

    // Afegir event listeners per als botons "Comprovar"
    document.querySelectorAll('.btn-comprovar').forEach((btn) => {
      btn.addEventListener('click', function () {
        const index = parseInt(this.dataset.index);
        const pregunta = preguntesLlista[index];
        comprovarTextos(pregunta, index);
      });
    });
  } else {
    // Comportament original per a la resta de categories
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
}

function comprovarTextos(pregunta, index) {
  const seleccionades = document.querySelectorAll(`.clickable-word[data-index="${index}"].selected`);
  const paraulesSeleccionades = Array.from(seleccionades).map((el) => el.dataset.paraula);
  const paraulesClau = pregunta.paraules_clau;
  const feedback = document.querySelector(`#feedback-textos-${index}`);

  // Ordenar per a comparar independentment de l'ordre
  const seleccionadesOrdenades = [...paraulesSeleccionades].sort();
  const clauOrdenades = [...paraulesClau].sort();

  // Comprovar si les seleccionades coincideixen exactament amb les paraules clau
  const paraulesEncertades = paraulesSeleccionades.filter((p) => paraulesClau.includes(p));
  const sobrants = paraulesSeleccionades.filter((p) => !paraulesClau.includes(p));
  const faltants = paraulesClau.filter((p) => !paraulesSeleccionades.includes(p));

  // Marcar visualment les paraules
  document.querySelectorAll(`.clickable-word[data-index="${index}"]`).forEach((span) => {
    const paraula = span.dataset.paraula;
    span.classList.remove('correcta', 'incorrecta', 'mancant');
    if (paraulesClau.includes(paraula) && paraulesSeleccionades.includes(paraula)) {
      span.classList.add('correcta');
    } else if (!paraulesClau.includes(paraula) && paraulesSeleccionades.includes(paraula)) {
      span.classList.add('incorrecta');
    } else if (paraulesClau.includes(paraula) && !paraulesSeleccionades.includes(paraula)) {
      span.classList.add('mancant');
    }
  });

  // Generar missatge de feedback
  let missatgeFeedback = '';
  let esCorrecte = false;

  if (seleccionadesOrdenades.length === clauOrdenades.length &&
      seleccionadesOrdenades.every((val, i) => val === clauOrdenades[i])) {
    esCorrecte = true;
    encerts++;
    actualitzarMarcador();
    missatgeFeedback = `✅ Correcte! Has seleccionat exactament les paraules correctes.`;
  } else {
    errors++;
    actualitzarMarcador();
    missatgeFeedback = '❌ Incorrecte. ';
    if (faltants.length > 0) {
      missatgeFeedback += `T\'han faltat: «${faltants.join('», «')}». `;
    }
    if (sobrants.length > 0) {
      missatgeFeedback += `T\'han sobrat: «${sobrants.join('», «')}». `;
    }
  }

  // Mostrar l'explicació
  missatgeFeedback += `<br><br><strong>Explicació:</strong> ${pregunta.explicacio}`;

  feedback.innerHTML = missatgeFeedback;
  feedback.className = esCorrecte ? 'feedback correcte' : 'feedback incorrecte';
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
      encerts++;
      actualitzarMarcador();
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
      errors++;
      actualitzarMarcador();
    }
  });
});