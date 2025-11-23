// Comprehensive Natuurwetenskappe Question Bank
// Extracted from Natuurwetenskappe PDF materials (Pages 1-27)
// Total: 90+ questions covering all units

const natuurwetenskappeQuestions = {
  // Unit 1: Die aarde beweeg (Pages 1-2)
  unit1: [
    {
      id: 'NW_U1_001',
      unit: 'Die aarde beweeg',
      question: 'Hoe lank het die aarde gelede gevorm?',
      type: 'multiple_choice',
      options: ['2 600 miljoen jaar', '4 600 miljoen jaar', '6 600 miljoen jaar', '8 600 miljoen jaar'],
      correctAnswer: '4 600 miljoen jaar',
      explanation: 'Volgens bladsy 74-75 is die aarde sowat 4 600 miljoen jaar gelede gevorm.',
      difficulty: 'easy',
      page: '74-75'
    },
    {
      id: 'NW_U1_002',
      unit: 'Die aarde beweeg',
      question: 'Wat is die aarde se posisie vanaf die son?',
      type: 'multiple_choice',
      options: ['Tweede planeet', 'Derde planeet', 'Vierde planeet', 'Vyfde planeet'],
      correctAnswer: 'Derde planeet',
      explanation: 'Die aarde is die derde planeet van die son. Bladsy 74-75',
      difficulty: 'easy',
      page: '74-75'
    },
    {
      id: 'NW_U1_003',
      unit: 'Die aarde beweeg',
      question: 'Hoeveel van die aarde se oppervlak word deur water bedek?',
      type: 'multiple_choice',
      options: ['Ongeveer een kwart', 'Ongeveer die helfte', 'Ongeveer driekwart', 'Die hele oppervlak'],
      correctAnswer: 'Ongeveer driekwart',
      explanation: 'Ongeveer driekwart van die aarde se oppervlak word deur water bedek. Bladsy 74-75',
      difficulty: 'medium',
      page: '74-75'
    },
    {
      id: 'NW_U1_004',
      unit: 'Die aarde beweeg',
      question: 'Hoeveel dae lank is een jaar op aarde?',
      type: 'multiple_choice',
      options: ['360 dae', '364 dae', '365 dae', '366 dae'],
      correctAnswer: '365 dae',
      explanation: 'Een jaar op aarde is 365 dae lank. Bladsy 74-75',
      difficulty: 'easy',
      page: '74-75'
    },
    {
      id: 'NW_U1_005',
      unit: 'Die aarde beweeg',
      question: 'Watter deel van Suid-Afrika is warmer?',
      type: 'multiple_choice',
      options: [
        'Die noordelike deel, nader aan die ewenaar',
        'Die suidelike deel',
        'Die oostelike deel',
        'Die westelike deel'
      ],
      correctAnswer: 'Die noordelike deel, nader aan die ewenaar',
      explanation: 'Die noordelike deel van Suid-Afrika, wat nader aan die ewenaar is, is warmer as die suidelike deel. Bladsy 74-75',
      difficulty: 'medium',
      page: '74-75'
    },
    {
      id: 'u1_q1',
      unit: 'Die aarde beweeg',
      question: 'Hoe lank neem dit die aarde om rondom sy eie as te roteer?',
      type: 'multiple_choice',
      options: ['12 uur', '24 uur', '48 uur', '365 dae'],
      correctAnswer: '24 uur',
      explanation: 'Die aarde neem 24 uur (een dag) om rondom sy eie as te roteer. Bladsy 74-75',
      difficulty: 'easy',
      page: '74-75'
    },
    {
      id: 'u1_q2',
      unit: 'Die aarde beweeg',
      question: 'Hoe lank neem dit die aarde om om die son te wentel?',
      type: 'multiple_choice',
      options: ['24 uur', '30 dae', '365 dae', '100 dae'],
      correctAnswer: '365 dae',
      explanation: 'Die aarde neem 365 dae (een jaar) om in sy wentelbaan om die son te beweeg. Bladsy 74-75',
      difficulty: 'easy',
      page: '74-75'
    },
    {
      id: 'u1_q3',
      unit: 'Die aarde beweeg',
      question: 'Wat veroorsaak dag en nag op aarde?',
      type: 'multiple_choice',
      options: ['Die son se beweging', 'Die aarde se rotasie', 'Die maan se beweging', 'Wolke'],
      correctAnswer: 'Die aarde se rotasie',
      explanation: 'Dag en nag word veroorsaak deur die aarde se rotasie om sy as. Die deel wat na die son wys is dag, die ander kant is nag. Bladsy 74-75',
      difficulty: 'medium',
      page: '74-75'
    },
    {
      id: 'u1_q4',
      unit: 'Die aarde beweeg',
      question: 'Wat is die ewenaar?',
      type: 'multiple_choice',
      options: [
        '\'n Denkbeeldige lyn in die middel van die aarde',
        '\'n Rivier',
        '\'n Berg',
        'Die Noordpool'
      ],
      correctAnswer: '\'n Denkbeeldige lyn in die middel van die aarde',
      explanation: 'Die ewenaar is \'n denkbeeldige lyn wat die aarde in twee helftes verdeel. Bladsy 74-75',
      difficulty: 'easy',
      page: '74-75'
    },
    {
      id: 'u1_q5',
      unit: 'Die aarde beweeg',
      question: 'Die aarde is die _____ grootste planeet in die sonnestelsel.',
      type: 'multiple_choice',
      options: ['derde', 'vyfde', 'sewende', 'eerste'],
      correctAnswer: 'vyfde',
      explanation: 'Die aarde is die vyfde grootste planeet in die sonnestelsel. Bladsy 74-75',
      difficulty: 'medium',
      page: '74-75'
    },
    {
      id: 'u1_q6',
      unit: 'Die aarde beweeg',
      question: 'Die aarde se as is effens gekantel.',
      type: 'true_false',
      correctAnswer: true,
      explanation: 'Waar! Die aarde se as is effens gekantel, wat help om seisoene te veroorsaak. Bladsy 74-75',
      difficulty: 'easy',
      page: '74-75'
    },
    {
      id: 'NW_U1_007',
      unit: 'Die aarde beweeg',
      question: 'Wat gebeur wanneer die aarde om sy as draai?',
      type: 'multiple_choice',
      options: ['Dit word altyd dag', 'Dit word altyd nag', 'Dag en nag wissel af', 'Daar is geen verandering nie'],
      correctAnswer: 'Dag en nag wissel af',
      explanation: 'Wanneer die aarde om sy as draai, wissel dag en nag af. Bladsy 74-75',
      difficulty: 'medium',
      page: '74-75'
    },
    {
      id: 'NW_U1_008',
      unit: 'Die aarde beweeg',
      question: 'Die aarde beweeg op twee maniere. Wat is die tweede manier behalwe rotasie?',
      type: 'multiple_choice',
      options: ['Dit beweeg op en af', 'Dit wentel om die son', 'Dit bly stil', 'Dit beweeg van links na regs'],
      correctAnswer: 'Dit wentel om die son',
      explanation: 'Die aarde draai eerstens om sy eie as en tweedens wentel dit om die son. Bladsy 74-75',
      difficulty: 'medium',
      page: '74-75'
    }
  ],

  // Unit 2: Grond (Pages 3-6)
  unit2: [
    {
      id: 'NW_U2_001',
      unit: 'Grond',
      question: 'Waaruit bestaan die oppervlak van die aarde?',
      type: 'multiple_choice',
      options: ['Slegs water', 'Slegs gesteentes', 'Gesteentes en grond', 'Slegs lug'],
      correctAnswer: 'Gesteentes en grond',
      explanation: 'Die oppervlak van die aarde word die kors genoem en bestaan uit gesteentes en grond. Bladsy 76-77',
      difficulty: 'easy',
      page: '76-77'
    },
    {
      id: 'NW_U2_002',
      unit: 'Grond',
      question: 'Waaruit bestaan die grondoppervlak?',
      type: 'multiple_choice',
      options: ['Slegs gesteentes', 'Gesteentes, ondergrond en bogrond', 'Slegs bogrond', 'Slegs water'],
      correctAnswer: 'Gesteentes, ondergrond en bogrond',
      explanation: 'Die grondoppervlak bestaan uit gesteentes, ondergrond en bogrond. Bladsy 76-77',
      difficulty: 'medium',
      page: '76-77'
    },
    {
      id: 'NW_U2_003',
      unit: 'Grond',
      question: 'Wat is bogrond?',
      type: 'multiple_choice',
      options: [
        'Die laag grond wat onder die ondergrond is',
        'Die boonste laag grond wat baie ryk is aan organiese materie en mikroörganismes',
        'Die laag waar slegs gesteentes voorkom',
        'Die laag waar geen plantlewe is nie'
      ],
      correctAnswer: 'Die boonste laag grond wat baie ryk is aan organiese materie en mikroörganismes',
      explanation: 'Bogrond is die boonste laag grond wat baie ryk is aan organiese materie en mikroörganismes. Bladsy 76-77',
      difficulty: 'medium',
      page: '76-77'
    },
    {
      id: 'NW_U2_004',
      unit: 'Grond',
      question: 'Wat is humus?',
      type: 'multiple_choice',
      options: [
        '\'n Soort klip',
        'Iets wat tot nut van die mens is',
        'Die deel van grond wat uit organismes bestaan wat voorheen gelewe het',
        '\'n Soort water'
      ],
      correctAnswer: 'Die deel van grond wat uit organismes bestaan wat voorheen gelewe het',
      explanation: 'Humus is die deel van grond wat uit organismes bestaan wat voorheen gelewe het. Bladsy 78',
      difficulty: 'medium',
      page: '78'
    },
    {
      id: 'NW_U2_005',
      unit: 'Grond',
      question: 'Wat is bakterieë?',
      type: 'multiple_choice',
      options: [
        'Groot diere',
        'Baie klein lewende organismes wat help om mis en dooie materiaal af te breek',
        '\'n Soort plant',
        '\'n Soort klip'
      ],
      correctAnswer: 'Baie klein lewende organismes wat help om mis en dooie materiaal af te breek',
      explanation: 'Bakterieë is baie klein lewende organismes wat help om mis van diere en dooie plant- en dieremateriaal af te breek. Bladsy 76-77',
      difficulty: 'medium',
      page: '76-77'
    },
    {
      id: 'u2_q1',
      unit: 'Grond - Soorte grond',
      question: 'Hoeveel hoofgrondtipes is daar?',
      type: 'multiple_choice',
      options: ['Twee', 'Drie', 'Vier', 'Vyf'],
      correctAnswer: 'Drie',
      explanation: 'Daar is drie hoofgrondtipes: sand, leem, en klei. Bladsy 76-79',
      difficulty: 'easy',
      page: '76-79'
    },
    {
      id: 'u2_q2',
      unit: 'Grond - Soorte grond',
      question: 'Watter grondtipe hou die meeste water vas?',
      type: 'multiple_choice',
      options: ['Sand', 'Leem', 'Klei', 'Almal ewe veel'],
      correctAnswer: 'Klei',
      explanation: 'Klei hou die meeste water vas omdat dit baie klein deeltjies het. Bladsy 76-79',
      difficulty: 'medium',
      page: '76-79'
    },
    {
      id: 'u2_q3',
      unit: 'Grond - Soorte grond',
      question: 'Watter grondtipe is die beste vir die meeste plante?',
      type: 'multiple_choice',
      options: ['Sand', 'Leem', 'Klei', 'Klippe'],
      correctAnswer: 'Leem',
      explanation: 'Leem is die beste vir die meeste plante omdat dit \'n mengsel van sand, klei en humus is. Bladsy 76-79',
      difficulty: 'medium',
      page: '76-79'
    },
    {
      id: 'u2_q4',
      unit: 'Grond - Soorte grond',
      question: 'Wat is humus?',
      type: 'multiple_choice',
      options: [
        'Die deel van grond wat uit organismes bestaan wat voorheen gelewe het',
        'Sanddeeltjies',
        'Water',
        'Klippe'
      ],
      correctAnswer: 'Die deel van grond wat uit organismes bestaan wat voorheen gelewe het',
      explanation: 'Humus is die deel van grond wat uit organismes bestaan wat voorheen gelewe het. Dit is baie voedingryk. Bladsy 78',
      difficulty: 'medium',
      page: '78'
    },
    {
      id: 'u2_q5',
      unit: 'Grond - Soorte grond',
      question: 'Watter van die volgende is waar oor bogrond? (Kies al wat van toepassing is)',
      type: 'multiple_select',
      options: ['Dit is boaan', 'Dit bevat humus', 'Dit is donkerder', 'Dit is heel onder'],
      correctAnswers: ['Dit is boaan', 'Dit bevat humus', 'Dit is donkerder'],
      explanation: 'Bogrond is die boonste laag van grond. Dit is donker en bevat humus. Bladsy 76-79',
      difficulty: 'hard',
      page: '76-79'
    },
    {
      id: 'u2_q6',
      unit: 'Grond - Soorte grond',
      question: 'Sandgrond laat water vinnig deurloop.',
      type: 'true_false',
      correctAnswer: true,
      explanation: 'Waar! Sand het groot deeltjies met groot spasies, so water loop vinnig deur. Bladsy 76-79',
      difficulty: 'easy',
      page: '76-79'
    },
    {
      id: 'NW_U2_007',
      unit: 'Grond',
      question: 'Hoeveel soorte grond word onderskei?',
      type: 'multiple_choice',
      options: ['Een', 'Twee', 'Drie', 'Vier'],
      correctAnswer: 'Drie',
      explanation: 'Daar kan tussen drie soorte grond onderskei word: sandgrond, leemgrond en kleigrond. Bladsy 78-79',
      difficulty: 'easy',
      page: '78-79'
    },
    {
      id: 'NW_U2_008',
      unit: 'Grond',
      question: 'Watter eienskap het kleigrond?',
      type: 'multiple_choice',
      options: [
        'Die deeltjies is los en grof',
        'Dit is nat en klewerig; die deeltjies kleef aan mekaar',
        'Dit loop baie maklik deur jou vingers',
        'Dit hou nie water vir \'n lang tyd nie'
      ],
      correctAnswer: 'Dit is nat en klewerig; die deeltjies kleef aan mekaar',
      explanation: 'Kleigrond is nat en klewerig, die deeltjies kleef aan mekaar wanneer hulle klam is. Bladsy 78-79',
      difficulty: 'medium',
      page: '78-79'
    },
    {
      id: 'NW_U2_009',
      unit: 'Grond',
      question: 'Wat is \'n eienskap van sandgrond?',
      type: 'multiple_choice',
      options: [
        'Dit is klewerig',
        'Die deeltjies is los en grof; dis maklik om die deeltjies te sien',
        'Dit hou baie water',
        'Die son kan nie die sand warm bak nie'
      ],
      correctAnswer: 'Die deeltjies is los en grof; dis maklik om die deeltjies te sien',
      explanation: 'Sandgrond se deeltjies is los en grof, dis maklik om die deeltjies te sien. Bladsy 78-79',
      difficulty: 'easy',
      page: '78-79'
    },
    {
      id: 'NW_U2_010',
      unit: 'Grond',
      question: 'Waar word sandgrond aangetref?',
      type: 'multiple_select',
      options: ['Woestyne', 'Droë rivierbeddings', 'Strande langs die see', 'Berge'],
      correctAnswers: ['Woestyne', 'Droë rivierbeddings', 'Strande langs die see'],
      explanation: 'Sandgrond word op woestyne, droë rivierbeddings en strande langs die see aangetref. Bladsy 78-79',
      difficulty: 'medium',
      page: '78-79'
    },
    {
      id: 'NW_U2_011',
      unit: 'Grond',
      question: 'Watter soort grond het humus en \'n ryk, donker kleur?',
      type: 'multiple_choice',
      options: ['Sandgrond', 'Kleigrond', 'Leemgrond', 'Gruisgrond'],
      correctAnswer: 'Leemgrond',
      explanation: 'Leemgrond bevat baie humus en het \'n ryk, donker kleur. Bladsy 78-79',
      difficulty: 'medium',
      page: '78-79'
    },
    {
      id: 'NW_U2_012',
      unit: 'Grond',
      question: 'Watter soort grond is goeie grond vir koring en mielies om in te groei?',
      type: 'multiple_choice',
      options: ['Sandgrond', 'Kleigrond', 'Leemgrond', 'Gruisgrond'],
      correctAnswer: 'Leemgrond',
      explanation: 'Leemgrond is goeie grond vir koring en mielies om in te groei. Bladsy 78-79',
      difficulty: 'easy',
      page: '78-79'
    },
    {
      id: 'NW_U2_013',
      unit: 'Grond',
      question: 'Waar word kleigrond aangetref?',
      type: 'multiple_choice',
      options: ['In die woestyn', 'Langs riviere, damme, mere en poeletjies', 'Op berge', 'In die see'],
      correctAnswer: 'Langs riviere, damme, mere en poeletjies',
      explanation: 'Kleigrond word langs riviere, damme, mere en poeletjies aangetref. Bladsy 78-79',
      difficulty: 'easy',
      page: '78-79'
    },
    {
      id: 'NW_U2_014',
      unit: 'Grond',
      question: 'Wat maak mense in Afrika met klei?',
      type: 'multiple_choice',
      options: [
        'Hulle eet dit',
        'Hulle maak tradisionele potte van klei om graan, water en tradisionele bier in te stoor',
        'Hulle gebruik dit as medisyne',
        'Hulle plant gewasse daarin'
      ],
      correctAnswer: 'Hulle maak tradisionele potte van klei om graan, water en tradisionele bier in te stoor',
      explanation: 'Mense in Afrika maak tradisionele potte van klei wat in vure gebak word. Bladsy 78-79',
      difficulty: 'medium',
      page: '78-79'
    },
    {
      id: 'NW_U2_015',
      unit: 'Grond',
      question: 'Slik is \'n mengsel van sand en klei.',
      type: 'true_false',
      correctAnswer: true,
      explanation: 'Waar! Slik is \'n mengsel van sand en klei. Bladsy 78-79',
      difficulty: 'easy',
      page: '78-79'
    },
    {
      id: 'NW_U2_016',
      unit: 'Grond',
      question: 'Leemgrond bestaan uit gelyke hoeveelhede slik, sand en klei.',
      type: 'true_false',
      correctAnswer: true,
      explanation: 'Waar! Leemgrond bestaan uit gelyke hoeveelhede slik, sand en klei. Bladsy 78-79',
      difficulty: 'medium',
      page: '78-79'
    },
    {
      id: 'NW_U2_017',
      unit: 'Grond',
      question: 'Waarom is grond so belangrik vir ons?',
      type: 'multiple_choice',
      options: [
        'Dit is slegs mooi om na te kyk',
        'As goeie grond verlore gaan, is dit moeilik om hierdie belangrike hulpbron te vervang',
        'Dit het geen waarde nie',
        'Dit word slegs gebruik om mee te speel'
      ],
      correctAnswer: 'As goeie grond verlore gaan, is dit moeilik om hierdie belangrike hulpbron te vervang',
      explanation: 'Grond neem baie lank om te vorm. Dit is \'n belangrike hulpbron vir plant- en dierelewe. Bladsy 76-79',
      difficulty: 'medium',
      page: '76-79'
    }
  ],

  // Unit 3: Sedimentêre gesteentes (Pages 9-15)
  unit3: [
    {
      id: 'NW_U3_001',
      unit: 'Sedimentêre gesteentes',
      question: 'Hoeveel van die aarde se oppervlak word deur sedimentêre gesteentes bedek?',
      type: 'multiple_choice',
      options: ['Ongeveer een kwart', 'Ongeveer een derde', 'Ongeveer driekwart', 'Die hele oppervlak'],
      correctAnswer: 'Ongeveer driekwart',
      explanation: 'Sedimentêre gesteentes bedek ongeveer \'n driekwart van die aarde se oppervlak. Bladsy 82-83',
      difficulty: 'medium',
      page: '82-83'
    },
    {
      id: 'NW_U3_002',
      unit: 'Sedimentêre gesteentes',
      question: 'Hoe lank gelede is sedimentêre gesteentes al op aarde gevorm?',
      type: 'multiple_choice',
      options: ['Een miljard jaar', 'Twee miljard jaar', 'Drie en \'n half miljard jaar', 'Vyf miljard jaar'],
      correctAnswer: 'Drie en \'n half miljard jaar',
      explanation: 'Geoloë vermoed dat sedimentêre gesteentes al drie en \'n half miljard jaar op aarde gevorm word. Bladsy 82-83',
      difficulty: 'medium',
      page: '82-83'
    },
    {
      id: 'u3_q1',
      unit: 'Sedimentêre gesteentes',
      question: 'Hoe lank neem dit vir sedimentêre gesteentes om te vorm?',
      type: 'multiple_choice',
      options: ['Een jaar', 'Tien jaar', 'Miljoene jare', 'Een maand'],
      correctAnswer: 'Miljoene jare',
      explanation: 'Sedimentêre gesteentes neem miljoene jare om te vorm deur lae sediment. Bladsy 82-88',
      difficulty: 'easy',
      page: '82-88'
    },
    {
      id: 'u3_q2',
      unit: 'Sedimentêre gesteentes',
      question: 'Watter van die volgende is sedimentêre gesteentes? (Kies al wat van toepassing is)',
      type: 'multiple_select',
      options: ['Sandsteen', 'Kalksteen', 'Skalie', 'Steenkool', 'Graniet'],
      correctAnswers: ['Sandsteen', 'Kalksteen', 'Skalie', 'Steenkool'],
      explanation: 'Sandsteen, kalksteen, skalie en steenkool is almal sedimentêre gesteentes. Graniet is \'n stollingsgesteente. Bladsy 82-88',
      difficulty: 'hard',
      page: '82-88'
    },
    {
      id: 'u3_q3',
      unit: 'Sedimentêre gesteentes',
      question: 'Wat is \'n kenmerk van sedimentêre gesteentes?',
      type: 'multiple_choice',
      options: ['Hulle is altyd swart', 'Hulle het lae', 'Hulle is altyd hard', 'Hulle brand maklik'],
      correctAnswer: 'Hulle het lae',
      explanation: 'Sedimentêre gesteentes het lae wat oor miljoene jare gevorm het. Bladsy 82-88',
      difficulty: 'medium',
      page: '82-88'
    },
    {
      id: 'u3_q4',
      unit: 'Sedimentêre gesteentes',
      question: 'Hoe word kalksteen gevorm?',
      type: 'multiple_choice',
      options: [
        'Uit sand',
        'Uit skulpe en skeletreste van seediere',
        'Uit vulkane',
        'Uit ys'
      ],
      correctAnswer: 'Uit skulpe en skeletreste van seediere',
      explanation: 'Kalksteen vorm uit skulpe en skeletreste van seediere wat oor miljoene jare saampers. Bladsy 82-88',
      difficulty: 'medium',
      page: '82-88'
    },
    {
      id: 'u3_q5',
      unit: 'Sedimentêre gesteentes',
      question: 'Steenkool is \'n sedimentêre gesteente.',
      type: 'true_false',
      correctAnswer: true,
      explanation: 'Waar! Steenkool is \'n sedimentêre gesteente wat uit oeroue plantmateriaal gevorm het. Bladsy 82-88',
      difficulty: 'easy',
      page: '82-88'
    },
    {
      id: 'u3_q6',
      unit: 'Sedimentêre gesteentes',
      question: 'Waarvoor word kalksteen gebruik? (Kies al wat van toepassing is)',
      type: 'multiple_select',
      options: ['Sement maak', 'Geboue bou', 'Eet', 'Paaie bou'],
      correctAnswers: ['Sement maak', 'Geboue bou', 'Paaie bou'],
      explanation: 'Kalksteen word gebruik vir sement, geboue en paaie. Bladsy 82-88',
      difficulty: 'medium',
      page: '82-88'
    },
    {
      id: 'NW_U3_005',
      unit: 'Sedimentêre gesteentes',
      question: 'Hoe vorm sedimentêre gesteentes?',
      type: 'multiple_choice',
      options: [
        'Hulle word uit die lug gevorm',
        'Hulle word oor \'n baie lang tydperk gevorm deur natuurlike verweringsprosesse',
        'Hulle word deur mense gemaak',
        'Hulle kom van ander planete'
      ],
      correctAnswer: 'Hulle word oor \'n baie lang tydperk gevorm deur natuurlike verweringsprosesse',
      explanation: 'Sedimentêre gesteentes word oor \'n baie lang tydperk gevorm. Bladsy 82-83',
      difficulty: 'medium',
      page: '82-83'
    },
    {
      id: 'NW_U3_006',
      unit: 'Sedimentêre gesteentes',
      question: 'Wat is \'n fossiel?',
      type: 'multiple_choice',
      options: [
        '\'n Lewende dier',
        'Die oorblyfsels van \'n plant of dier wat lank gelede gelewe het',
        '\'n Soort rots',
        '\'n Soort water'
      ],
      correctAnswer: 'Die oorblyfsels van \'n plant of dier wat lank gelede gelewe het',
      explanation: 'Fossiele is die oorblyfsels van \'n plant of dier wat lank gelede gelewe het. Bladsy 82-83',
      difficulty: 'easy',
      page: '82-83'
    },
    {
      id: 'NW_U3_007',
      unit: 'Sedimentêre gesteentes',
      question: 'Waar word die meeste sedimentêre gesteentes gevorm?',
      type: 'multiple_choice',
      options: [
        'Op berge',
        'In die lug',
        'In water waar die gewig van die water op die lae sand en klei afdruk',
        'In vulkane'
      ],
      correctAnswer: 'In water waar die gewig van die water op die lae sand en klei afdruk',
      explanation: 'Die meeste sedimentêre gesteentes word in water gevorm. Bladsy 82-83',
      difficulty: 'medium',
      page: '82-83'
    },
    {
      id: 'NW_U3_008',
      unit: 'Sedimentêre gesteentes',
      question: 'Sedimentêre gesteentes het sigbare lae.',
      type: 'true_false',
      correctAnswer: true,
      explanation: 'Waar! Sedimentêre gesteentes het sigbare lae. Bladsy 82-88',
      difficulty: 'easy',
      page: '82-88'
    },
    {
      id: 'NW_U3_009',
      unit: 'Sedimentêre gesteentes',
      question: 'Waaruit word skalie gevorm?',
      type: 'multiple_choice',
      options: ['Uit sand', 'Uit verharde klei', 'Uit water', 'Uit metaal'],
      correctAnswer: 'Uit verharde klei',
      explanation: 'Skalie word gevorm uit verharde klei. Bladsy 86',
      difficulty: 'easy',
      page: '86'
    },
    {
      id: 'NW_U3_010',
      unit: 'Sedimentêre gesteentes',
      question: 'Hoe breek skalie?',
      type: 'multiple_choice',
      options: ['In ronde stukkies', 'In lang, plat stukke rots', 'Dit breek nie', 'In klein stukkies'],
      correctAnswer: 'In lang, plat stukke rots',
      explanation: 'Skalie breek af in lang, plat stukke rots. Bladsy 86',
      difficulty: 'medium',
      page: '86'
    }
  ],

  // Unit 4: Fossiele (Pages 16-24)
  unit4: [
    {
      id: 'u4_q1',
      unit: 'Fossiele',
      question: 'Wat is \'n fossiel?',
      type: 'multiple_choice',
      options: [
        'Oorblyfsels of spore van organismes wat lank gelede gelewe het',
        '\'n Nuwe dier',
        '\'n Plant',
        '\'n Klip'
      ],
      correctAnswer: 'Oorblyfsels of spore van organismes wat lank gelede gelewe het',
      explanation: 'Fossiele is oorblyfsels of spore van organismes wat lank gelede gelewe het. Bladsy 89-97',
      difficulty: 'easy',
      page: '89-97'
    },
    {
      id: 'u4_q2',
      unit: 'Fossiele',
      question: 'Wat is die verskil tussen liggaamsfossiele en spoorfossiele?',
      type: 'multiple_choice',
      options: [
        'Liggaamsfossiele is dele van organismes, spoorfossiele is tekens van aktiwiteite',
        'Daar is geen verskil nie',
        'Spoorfossiele is groter',
        'Liggaamsfossiele is jonger'
      ],
      correctAnswer: 'Liggaamsfossiele is dele van organismes, spoorfossiele is tekens van aktiwiteite',
      explanation: 'Liggaamsfossiele is werklike dele van organismes (bv. bene), terwyl spoorfossiele tekens van aktiwiteite is (bv. voetspore). Bladsy 89-97',
      difficulty: 'medium',
      page: '89-97'
    },
    {
      id: 'u4_q3',
      unit: 'Fossiele',
      question: 'Waar in Suid-Afrika is belangrike fossiele gevind? (Kies al wat van toepassing is)',
      type: 'multiple_select',
      options: ['Sterkfontein', 'Karoo', 'Tafelberg', 'Durban strand'],
      correctAnswers: ['Sterkfontein', 'Karoo'],
      explanation: 'Sterkfontein en die Karoo is beroemde Suid-Afrikaanse fossielgebiede. Bladsy 89-97',
      difficulty: 'medium',
      page: '89-97'
    },
    {
      id: 'u4_q4',
      unit: 'Fossiele',
      question: 'Wat is die selakant?',
      type: 'multiple_choice',
      options: [
        '\'n "Lewende fossiel" vis wat veronderstel was om uitgesterf het',
        '\'n Nuwe vis',
        '\'n Fossielrotse',
        '\'n Dinosourusfossiel'
      ],
      correctAnswer: '\'n "Lewende fossiel" vis wat veronderstel was om uitgesterf het',
      explanation: 'Die selakant is \'n "lewende fossiel" - \'n vis wat ons gedink het uitgesterf is, maar in 1938 lewend gevind is. Bladsy 89-97',
      difficulty: 'hard',
      page: '89-97'
    },
    {
      id: 'u4_q5',
      unit: 'Fossiele',
      question: 'Fossiele word meestal in sedimentêre gesteentes gevind.',
      type: 'true_false',
      correctAnswer: true,
      explanation: 'Waar! Fossiele word meestal in sedimentêre gesteentes gevind omdat hulle in lae gevorm het. Bladsy 89-97',
      difficulty: 'easy',
      page: '89-97'
    },
    {
      id: 'u4_q6',
      unit: 'Fossiele',
      question: 'Hoe word fossiele gevorm?',
      type: 'multiple_choice',
      options: [
        'Organismes sterf en word deur sediment bedek oor miljoene jare',
        'Organismes word dadelik fossiele',
        'Mense maak fossiele',
        'Fossiele groei uit klippe'
      ],
      correctAnswer: 'Organismes sterf en word deur sediment bedek oor miljoene jare',
      explanation: 'Fossiele vorm wanneer organismes sterf en deur sediment bedek word. Oor miljoene jare word hulle verstene. Bladsy 89-97',
      difficulty: 'medium',
      page: '89-97'
    },
    {
      id: 'NW_U4_001',
      unit: 'Fossiele',
      question: 'Hoe oud is die oudste fossiele van eenvoudige organismes?',
      type: 'multiple_choice',
      options: ['1 biljoen jaar', '2 biljoen jaar', '3 biljoen jaar', '4 biljoen jaar'],
      correctAnswer: '3 biljoen jaar',
      explanation: 'Die oudste fossiele van eenvoudige organismes (bakterieë en alge) is biljoene jare oud. Bladsy 89-90',
      difficulty: 'hard',
      page: '89-90'
    },
    {
      id: 'NW_U4_002',
      unit: 'Fossiele',
      question: 'Hoe oud is fossiele van skulpe en harde bene?',
      type: 'multiple_choice',
      options: ['300 miljoen jaar', '400 miljoen jaar', '500 miljoen jaar', '600 miljoen jaar'],
      correctAnswer: '600 miljoen jaar',
      explanation: 'Fossiele van 600 miljoen jaar oud is gevind. Bladsy 89-90',
      difficulty: 'medium',
      page: '89-90'
    },
    {
      id: 'NW_U4_003',
      unit: 'Fossiele',
      question: 'Hoe oud is gesteentes wat verskillende soorte plant- en dierfossiele bevat?',
      type: 'multiple_choice',
      options: ['100 miljoen jaar', '200 miljoen jaar', '300 miljoen jaar', '400 miljoen jaar'],
      correctAnswer: '300 miljoen jaar',
      explanation: 'Gesteentes wat ongeveer 300 miljoen jaar oud is, bevat verskillende soorte plant- en dierfossiele. Bladsy 89-90',
      difficulty: 'medium',
      page: '89-90'
    },
    {
      id: 'NW_U4_004',
      unit: 'Fossiele',
      question: 'Waar word fossiele dikwels aangetref?',
      type: 'multiple_choice',
      options: ['In vulkaniese gesteentes', 'In sedimentêre gesteentes', 'In metamorfe gesteentes', 'In die lug'],
      correctAnswer: 'In sedimentêre gesteentes',
      explanation: 'Fossiele word dikwels in sedimentêre gesteentes aangetref. Bladsy 89-90',
      difficulty: 'easy',
      page: '89-90'
    },
    {
      id: 'NW_U4_005',
      unit: 'Fossiele',
      question: 'Wanneer vorm fossiele meestal nie?',
      type: 'multiple_choice',
      options: [
        'Wanneer plante en diere in droë gebiede voorkom',
        'Wanneer plante en diere in vogtige plekke of in water bly',
        'Wanneer plante en diere in die see leef',
        'Wanneer plante en diere in damme leef'
      ],
      correctAnswer: 'Wanneer plante en diere in droë gebiede voorkom',
      explanation: 'Plante en diere wat in droë gebiede voorkom, vorm nie so dikwels fossiele nie. Bladsy 89-90',
      difficulty: 'medium',
      page: '89-90'
    },
    {
      id: 'NW_U4_006',
      unit: 'Fossiele',
      question: 'Wat is die twee hoofgroepe fossiele?',
      type: 'multiple_choice',
      options: ['Groot en klein fossiele', 'Liggaamsfossiele en spoorfossiele', 'Ou en nuwe fossiele', 'Plant en dier fossiele'],
      correctAnswer: 'Liggaamsfossiele en spoorfossiele',
      explanation: 'Daar is twee hoofgroepe fossiele: liggaamsfossiele en spoorfossiele. Bladsy 91-93',
      difficulty: 'medium',
      page: '91-93'
    },
    {
      id: 'NW_U4_007',
      unit: 'Fossiele',
      question: 'Wat is die algemeenste liggaamsfossiele wat opgespoor word?',
      type: 'multiple_choice',
      options: ['Tande', 'Bene', 'Skulpe', 'Blare'],
      correctAnswer: 'Bene',
      explanation: 'Bene is die algemeenste liggaamsfossiele wat opgespoor word. Bladsy 91-93',
      difficulty: 'easy',
      page: '91-93'
    },
    {
      id: 'NW_U4_008',
      unit: 'Fossiele',
      question: 'Wat is spoorfossiele?',
      type: 'multiple_choice',
      options: [
        'Fossiele van hele diere',
        'Fossiele gevorm van spore wat deur diere-aktiwiteit agtergelaat word',
        'Fossiele van plante',
        'Fossiele van water'
      ],
      correctAnswer: 'Fossiele gevorm van spore wat deur diere-aktiwiteit agtergelaat word',
      explanation: 'Spoorfossiele word gevorm van spore wat deur diere-aktiwiteit agtergelaat word (voetspore, tandmerke, neste). Bladsy 91-93',
      difficulty: 'medium',
      page: '91-93'
    },
    {
      id: 'NW_U4_009',
      unit: 'Fossiele',
      question: 'Wat is die algemeenste soort spoorfossiel?',
      type: 'multiple_choice',
      options: ['Eiers', 'Neste', 'Voetspore', 'Uitskeidings'],
      correctAnswer: 'Voetspore',
      explanation: 'Die algemeenste soort spoorfossiel is voetspore. Bladsy 91-93',
      difficulty: 'easy',
      page: '91-93'
    },
    {
      id: 'NW_U4_010',
      unit: 'Fossiele',
      question: 'Hoe vorm \'n goeie fossiel?',
      type: 'multiple_choice',
      options: [
        'Die organisme moet vinnig sterf',
        'Die organisme moet gou na sy dood met sand of modder bedek word',
        'Die organisme moet in die son lê',
        'Die organisme moet verbrand word'
      ],
      correctAnswer: 'Die organisme moet gou na sy dood met sand of modder bedek word',
      explanation: 'Om \'n goeie fossiel te vorm, moet die organisme gou na sy dood met sand of modder bedek word. Bladsy 89-90',
      difficulty: 'medium',
      page: '89-90'
    },
    {
      id: 'NW_U4_011',
      unit: 'Fossiele',
      question: 'Waar is die Sterkfonteingrotte geleë?',
      type: 'multiple_choice',
      options: ['In die Wes-Kaap', 'In die Vrystaat', 'In \'n vallei aan die westekant van Johannesburg', 'In KwaZulu-Natal'],
      correctAnswer: 'In \'n vallei aan die westekant van Johannesburg',
      explanation: 'Die Sterkfonteingrotte is geleë in \'n vallei aan die westekant van Johannesburg. Bladsy 94-95',
      difficulty: 'medium',
      page: '94-95'
    },
    {
      id: 'NW_U4_012',
      unit: 'Fossiele',
      question: 'Hoeveel jaar gelede het mense in die omgewing van die Sterkfonteingrotte gewoon?',
      type: 'multiple_choice',
      options: ['100 miljoen jaar', '200 miljoen jaar', '300 miljoen jaar', '3 miljoen jaar'],
      correctAnswer: '300 miljoen jaar',
      explanation: 'Die fossiele bewys dat daar al 300 miljoen jaar gelede mense in die omgewing gewoon het. Bladsy 94-95',
      difficulty: 'medium',
      page: '94-95'
    },
    {
      id: 'NW_U4_013',
      unit: 'Fossiele',
      question: 'Wat is die grootste dinosaurus in suidelike Afrika?',
      type: 'multiple_choice',
      options: ['Tyrannosaurus Rex', 'Brontosaurus (ook bekend as Apatosaurus)', 'Diplodocus', 'Stegosaurus'],
      correctAnswer: 'Brontosaurus (ook bekend as Apatosaurus)',
      explanation: 'Die grootste dinosaurus in suidelike Afrika was die plantetende Brontosaurus. Bladsy 96-97',
      difficulty: 'medium',
      page: '96-97'
    },
    {
      id: 'NW_U4_014',
      unit: 'Fossiele',
      question: 'Hoe lank was die Brontosaurus?',
      type: 'multiple_choice',
      options: ['6 meter', '8 meter', '10 meter', '12 meter'],
      correctAnswer: '12 meter',
      explanation: 'Daar word gesê dat die Brontosaurus 12 meter lank was. Bladsy 96-97',
      difficulty: 'medium',
      page: '96-97'
    },
    {
      id: 'NW_U4_015',
      unit: 'Fossiele',
      question: 'Wanneer het die eerste lewende selakant waargeneem is?',
      type: 'multiple_choice',
      options: ['In 1900', 'In 1920', 'In 1938', 'In 1950'],
      correctAnswer: 'In 1938',
      explanation: 'Vissermanne het in 1938 \'n lewende selakant gevang. Bladsy 96-97',
      difficulty: 'medium',
      page: '96-97'
    },
    {
      id: 'NW_U4_016',
      unit: 'Fossiele',
      question: 'Hoeveel selakante is in Suid-Afrika ontdek?',
      type: 'multiple_choice',
      options: ['8', '12', '18', '24'],
      correctAnswer: '18',
      explanation: 'Slegs 18 selakante is sover in Suid-Afrika ontdek – almal in die Sodwana-gebied. Bladsy 96-97',
      difficulty: 'hard',
      page: '96-97'
    },
    {
      id: 'NW_U4_017',
      unit: 'Fossiele',
      question: 'Mense spreek selakant uit as "see-le-kant".',
      type: 'true_false',
      correctAnswer: true,
      explanation: 'Waar! \'n Mens spreek selakant só uit: "see-le-kant". Bladsy 96-97',
      difficulty: 'easy',
      page: '96-97'
    }
  ],

  // Unit 5: Sedimentêre gesteentes - Hoofeienskappe (Main properties)
  unit5: [
    {
      id: 'NW_U5_001',
      unit: 'Sedimentêre gesteentes: Hoofeienskappe',
      question: 'Hoe verdeel geoloë sedimentêre gesteentes?',
      type: 'multiple_choice',
      options: ['In groepe', 'In kleure', 'In groottes', 'In vorms'],
      correctAnswer: 'In groepe',
      explanation: 'Geoloë verdeel sedimentêre gesteentes in groepe. Bladsy 86',
      difficulty: 'easy',
      page: '86'
    },
    {
      id: 'NW_U5_002',
      unit: 'Sedimentêre gesteentes: Hoofeienskappe',
      question: 'Waaruit word sandsteen gevorm?',
      type: 'multiple_choice',
      options: ['Wanneer sanderige sediment saamgepers word', 'Uit klei', 'Uit plantmateriaal', 'Uit kristalle'],
      correctAnswer: 'Wanneer sanderige sediment saamgepers word',
      explanation: 'Sandsteen word gevorm wanneer sanderige sediment saamgepers word en soliede rots vorm. Bladsy 86',
      difficulty: 'easy',
      page: '86'
    },
    {
      id: 'NW_U5_003',
      unit: 'Sedimentêre gesteentes: Hoofeienskappe',
      question: 'Waaruit bestaan kalksteen?',
      type: 'multiple_choice',
      options: ['Mariene organismes, koraal en skulpe', 'Sand', 'Klei', 'Plantmateriaal'],
      correctAnswer: 'Mariene organismes, koraal en skulpe',
      explanation: 'Kalksteen bestaan uit mariene organismes, koraal en skulpe. Bladsy 86',
      difficulty: 'medium',
      page: '86'
    },
    {
      id: 'NW_U5_004',
      unit: 'Sedimentêre gesteentes: Hoofeienskappe',
      question: 'Waaruit bestaan steenkool?',
      type: 'multiple_choice',
      options: ['Plantmateriaal', 'Dieremateriaal', 'Sand', 'Klei'],
      correctAnswer: 'Plantmateriaal',
      explanation: 'Steenkool bestaan uit saamgeperste plantmateriaal en sediment. Bladsy 86',
      difficulty: 'easy',
      page: '86'
    },
    {
      id: 'NW_U5_005',
      unit: 'Sedimentêre gesteentes: Hoofeienskappe',
      question: 'Hoe breek skalie af?',
      type: 'multiple_choice',
      options: ['In lang, plat stukke rots', 'In ronde stukkies', 'Dit breek nie', 'In baie klein stukkies'],
      correctAnswer: 'In lang, plat stukke rots',
      explanation: 'Skalie breek af in lang, plat stukke rots. Bladsy 86',
      difficulty: 'medium',
      page: '86'
    },
    {
      id: 'NW_U5_006',
      unit: 'Sedimentêre gesteentes: Hoofeienskappe',
      question: 'Sommige sedimentêre gesteentes bestaan uit korrels.',
      type: 'true_false',
      correctAnswer: true,
      explanation: 'Waar! Sommige sedimentêre gesteentes bestaan uit korrels - stukkies rots, minerale en fossiele wat in lae saamgepers is. Bladsy 86',
      difficulty: 'easy',
      page: '86'
    },
    {
      id: 'NW_U5_007',
      unit: 'Sedimentêre gesteentes: Hoofeienskappe',
      question: 'Hoe word kristalle in sedimentêre gesteentes gevorm?',
      type: 'multiple_choice',
      options: [
        'Deur \'n chemiese reaksie tussen minerale in die sediment en water',
        'Deur hitte',
        'Deur druk',
        'Deur wind'
      ],
      correctAnswer: 'Deur \'n chemiese reaksie tussen minerale in die sediment en water',
      explanation: 'Die kristalle word deur \'n chemiese reaksie tussen die minerale in die sediment en water gevorm. Bladsy 86',
      difficulty: 'medium',
      page: '86'
    },
    {
      id: 'NW_U5_008',
      unit: 'Sedimentêre gesteentes: Hoofeienskappe',
      question: 'Skalie word uit verharde klei gevorm.',
      type: 'true_false',
      correctAnswer: true,
      explanation: 'Waar! Skalie word uit verharde klei gevorm. Bladsy 86',
      difficulty: 'easy',
      page: '86'
    }
  ],

  // Unit 6: Uses of sedimentary rocks
  unit6: [
    {
      id: 'NW_U6_001',
      unit: '\'n Paar gebruike van sedimentêre gesteentes',
      question: 'Waarvoor word sandsteen gebruik? (Kies al wat van toepassing is)',
      type: 'multiple_select',
      options: ['Glasware maak', 'Kaggels en mure bou', 'Vloerstene', 'Eet'],
      correctAnswers: ['Glasware maak', 'Kaggels en mure bou', 'Vloerstene'],
      explanation: 'Sandsteen word gebruik vir glasware, kaggels, mure, vloerstene en plaveisel. Bladsy 88',
      difficulty: 'medium',
      page: '88'
    },
    {
      id: 'NW_U6_002',
      unit: '\'n Paar gebruike van sedimentêre gesteentes',
      question: 'Watter nasionale park is bekend vir lieflike sandsteenberge?',
      type: 'multiple_choice',
      options: ['Golden Gate Hoogland Nasionale Park', 'Kruger Nasionale Park', 'Tafelberg Nasionale Park', 'Addo Olifant Park'],
      correctAnswer: 'Golden Gate Hoogland Nasionale Park',
      explanation: 'Die Golden Gate Hoogland Nasionale Park in die Vrystaat is bekend vir lieflike sandsteenberge. Bladsy 88',
      difficulty: 'medium',
      page: '88'
    },
    {
      id: 'NW_U6_003',
      unit: '\'n Paar gebruike van sedimentêre gesteentes',
      question: 'Waarvoor word skalie gebruik? (Kies al wat van toepassing is)',
      type: 'multiple_select',
      options: ['Vulstof in verf', 'Dakstene', 'Bron van natuurlike gas', 'Kos'],
      correctAnswers: ['Vulstof in verf', 'Dakstene', 'Bron van natuurlike gas'],
      explanation: 'Skalie word gebruik as vulstof in verf, dakstene, grondstof vir stene en as bron van natuurlike gas. Bladsy 88',
      difficulty: 'medium',
      page: '88'
    },
    {
      id: 'NW_U6_004',
      unit: '\'n Paar gebruike van sedimentêre gesteentes',
      question: 'Suid-Afrika het die vyfde grootste skaliegasreserwes ter wêreld.',
      type: 'true_false',
      correctAnswer: true,
      explanation: 'Waar! Daar word gesê dat Suid-Afrika die vyfde grootste skaliegasreserwes ter wêreld het. Bladsy 88',
      difficulty: 'medium',
      page: '88'
    },
    {
      id: 'NW_U6_005',
      unit: '\'n Paar gebruike van sedimentêre gesteentes',
      question: 'Waar lê Suid-Afrika se skaliegasreserwes?',
      type: 'multiple_choice',
      options: ['Onder die droë oppervlak van die Karoo', 'In Johannesburg', 'In Kaapstad', 'In Durban'],
      correctAnswer: 'Onder die droë oppervlak van die Karoo',
      explanation: 'Onder die droë oppervlak van die Karoo lê rotslae wat skaliegas bevat. Bladsy 88',
      difficulty: 'medium',
      page: '88'
    },
    {
      id: 'NW_U6_006',
      unit: '\'n Paar gebruike van sedimentêre gesteentes',
      question: 'Waarvoor word kalksteen gebruik? (Kies al wat van toepassing is)',
      type: 'multiple_select',
      options: ['Bou van paaie en geboue', 'Portland-sement (PPC)', 'Tandepasta', 'Verf', 'Kos'],
      correctAnswers: ['Bou van paaie en geboue', 'Portland-sement (PPC)', 'Tandepasta', 'Verf'],
      explanation: 'Kalksteen word gebruik vir paaie, geboue, sement, tandepasta, medikasie en verf. Bladsy 88',
      difficulty: 'hard',
      page: '88'
    },
    {
      id: 'NW_U6_007',
      unit: '\'n Paar gebruike van sedimentêre gesteentes',
      question: 'Die Sterkfonteingrotte is kalksteen grotte van spesiale belang in Gauteng.',
      type: 'true_false',
      correctAnswer: true,
      explanation: 'Waar! Die Sterkfonteingrotte is kalksteen grotte van spesiale belang in Gauteng. Bladsy 88',
      difficulty: 'easy',
      page: '88'
    },
    {
      id: 'NW_U6_008',
      unit: '\'n Paar gebruike van sedimentêre gesteentes',
      question: 'Waarom is kalksteen die beste materiaal vir die preservering van bene?',
      type: 'multiple_choice',
      options: ['Dit is hard en beskerm bene goed', 'Dit is sag', 'Dit is warm', 'Dit is nat'],
      correctAnswer: 'Dit is hard en beskerm bene goed',
      explanation: 'Kalksteen is die beste materiaal vir die preservering van bene. Bladsy 88',
      difficulty: 'medium',
      page: '88'
    }
  ],

  // Unit 7: Fossiele in rotse
  unit7: [
    {
      id: 'NW_U7_001',
      unit: 'Fossiele in rotse',
      question: 'Wat is fossiele?',
      type: 'multiple_choice',
      options: [
        'Oorblyfsels van plante en diere wat lank gelede dood is',
        'Nuwe diere',
        'Lewende plante',
        'Moderne klippe'
      ],
      correctAnswer: 'Oorblyfsels van plante en diere wat lank gelede dood is',
      explanation: 'Fossiele is oorblyfsels van plante en diere wat lank gelede dood is, wat dikwels in gesteentes gevind word. Bladsy 89-90',
      difficulty: 'easy',
      page: '89-90'
    },
    {
      id: 'NW_U7_002',
      unit: 'Fossiele in rotse',
      question: 'Hoe oud is die oudste fossiele van eenvoudige organismes soos bakterieë en alge?',
      type: 'multiple_choice',
      options: ['600 miljoen jaar', 'Biljoene jare', '300 miljoen jaar', '100 miljoen jaar'],
      correctAnswer: 'Biljoene jare',
      explanation: 'Die oudste fossiele van eenvoudige organismes soos bakterieë en alge het biljoene jare gelede gelewe. Bladsy 89-90',
      difficulty: 'medium',
      page: '89-90'
    },
    {
      id: 'NW_U7_003',
      unit: 'Fossiele in rotse',
      question: 'Wanneer het diere met skelette en harde skulpe verskyn?',
      type: 'multiple_choice',
      options: ['Ongeveer 600 miljoen jaar gelede', 'Ongeveer 100 miljoen jaar gelede', 'Ongeveer 1 biljoen jaar gelede', 'Ongeveer 50 miljoen jaar gelede'],
      correctAnswer: 'Ongeveer 600 miljoen jaar gelede',
      explanation: 'Daar is fossiele gevind wat 600 miljoen jaar oud is. In hierdie tyd het diere met skelette en harde skulpe verskyn. Bladsy 89-90',
      difficulty: 'medium',
      page: '89-90'
    },
    {
      id: 'NW_U7_004',
      unit: 'Fossiele in rotse',
      question: 'Gesteentes wat ongeveer 300 miljoen jaar oud is, bevat watter soorte fossiele? (Kies al wat van toepassing is)',
      type: 'multiple_select',
      options: ['Seeperdjies', 'Tiere', 'Voëls', 'Dinosaurusse', 'Naaldekokers', 'Blomme'],
      correctAnswers: ['Seeperdjies', 'Tiere', 'Voëls', 'Dinosaurusse', 'Naaldekokers', 'Blomme'],
      explanation: 'Gesteentes wat ongeveer 300 miljoen jaar oud is, bevat verskillende soorte plant- en dierfossiele. Bladsy 89-90',
      difficulty: 'hard',
      page: '89-90'
    },
    {
      id: 'NW_U7_005',
      unit: 'Fossiele in rotse',
      question: 'Plante en diere in droë gebiede vorm nie so dikwels fossiele soos dié in vogtige plekke of water nie.',
      type: 'true_false',
      correctAnswer: true,
      explanation: 'Waar! Plante en diere in droë gebiede vorm nie so dikwels fossiele nie. Bladsy 89-90',
      difficulty: 'easy',
      page: '89-90'
    },
    {
      id: 'NW_U7_006',
      unit: 'Fossiele in rotse',
      question: 'Die onderste sedimentêre gesteentes is die _____.',
      type: 'multiple_choice',
      options: ['oudste', 'jongste', 'grootste', 'kleinste'],
      correctAnswer: 'oudste',
      explanation: 'Die onderste sedimentêre gesteentes is die oudste. Bladsy 89-90',
      difficulty: 'medium',
      page: '89-90'
    },
    {
      id: 'NW_U7_007',
      unit: 'Fossiele in rotse',
      question: 'Wat kan wetenskaplikes, geoloë en argeoloë uitvind deur gesteentes te bestudeer? (Kies al wat van toepassing is)',
      type: 'multiple_select',
      options: [
        'Hoe oud die gesteentes is',
        'Hoe oud die fossiele is',
        'Watter diere en plante gedurende \'n sekere tydperk geleef het',
        'Hoe groot hulle was',
        'Of hulle uitgestert het'
      ],
      correctAnswers: [
        'Hoe oud die gesteentes is',
        'Hoe oud die fossiele is',
        'Watter diere en plante gedurende \'n sekere tydperk geleef het',
        'Hoe groot hulle was',
        'Of hulle uitgestert het'
      ],
      explanation: 'Deur gesteentes te bestudeer kan wetenskaplikes al hierdie dinge uitvind. Bladsy 89-90',
      difficulty: 'hard',
      page: '89-90'
    },
    {
      id: 'NW_U7_008',
      unit: 'Fossiele in rotse',
      question: 'Om \'n goeie fossiel te vorm, moet die organisme gou na sy dood met sand of modder bedek word.',
      type: 'true_false',
      correctAnswer: true,
      explanation: 'Waar! Anders sal die oorskot verrot of deur ander diere geëet word. Bladsy 89-90',
      difficulty: 'easy',
      page: '89-90'
    },
    {
      id: 'NW_U7_009',
      unit: 'Fossiele in rotse',
      question: 'Watter dele van \'n plant of dier bly gewoonlik oor as fossiele?',
      type: 'multiple_choice',
      options: [
        'Die sagte dele',
        'Slegs die tande, skulpe, bene en hout',
        'Die vel',
        'Die spiere'
      ],
      correctAnswer: 'Slegs die tande, skulpe, bene en hout',
      explanation: 'Die sagte dele verdwyn. Slegs die tande, skulpe en bene van diere en die hout van plante bly gewoonlik oor. Bladsy 89-90',
      difficulty: 'medium',
      page: '89-90'
    },
    {
      id: 'NW_U7_010',
      unit: 'Fossiele in rotse',
      question: 'Wat is \'n gietvorm?',
      type: 'multiple_choice',
      options: [
        'Wanneer die skulp of bene oplos en slegs \'n holte oorbly',
        '\'n Volledige fossiel',
        '\'n Soort rots',
        '\'n Dier'
      ],
      correctAnswer: 'Wanneer die skulp of bene oplos en slegs \'n holte oorbly',
      explanation: 'By sekere soorte fossiele los die skulp of bene op en dan kan slegs \'n holte, wat ons \'n gietvorm noem, gesien word. Bladsy 89-90',
      difficulty: 'hard',
      page: '89-90'
    }
  ],

  // Unit 8: Liggaams- en spoorfossiele (Body and Trace Fossils) - THIS IS THE MISSING UNIT!
  unit8: [
    {
      id: 'NW_U8_001',
      unit: 'Liggaams- en spoorfossiele',
      question: 'Wat is liggaamsfossiele?',
      type: 'multiple_choice',
      options: [
        'Fossiele uit die harde dele van dier- of plantliggame gevorm',
        'Spore wat deur diere-aktiwiteit agtergelaat word',
        'Fossiele van voetspore',
        'Fossiele van eiers'
      ],
      correctAnswer: 'Fossiele uit die harde dele van dier- of plantliggame gevorm',
      explanation: 'Liggaamsfossiele is uit die harde dele van dier- of plantliggame gevorm. Bladsy 91-93',
      difficulty: 'easy',
      page: '91-93'
    },
    {
      id: 'NW_U8_002',
      unit: 'Liggaams- en spoorfossiele',
      question: 'Watter van die volgende is voorbeelde van liggaamsfossiele? (Kies al wat van toepassing is)',
      type: 'multiple_select',
      options: ['Bene', 'Tande', 'Kloue', 'Blare', 'Stamme', 'Voetspore', 'Eiers'],
      correctAnswers: ['Bene', 'Tande', 'Kloue', 'Blare', 'Stamme'],
      explanation: 'Liggaamsfossiele sluit bene, tande, kloue, blare, stamme, vel, embrio\'s en sade in. Voetspore en eiers is spoorfossiele. Bladsy 91-93',
      difficulty: 'medium',
      page: '91-93'
    },
    {
      id: 'NW_U8_003',
      unit: 'Liggaams- en spoorfossiele',
      question: 'Wat is spoorfossiele?',
      type: 'multiple_choice',
      options: [
        'Fossiele gevorm van spore wat deur diere-aktiwiteit agtergelaat word',
        'Fossiele van hele diere',
        'Fossiele van plante',
        'Fossiele van bene'
      ],
      correctAnswer: 'Fossiele gevorm van spore wat deur diere-aktiwiteit agtergelaat word',
      explanation: 'Spoorfossiele word gevorm van spore wat deur diere-aktiwiteit agtergelaat word (voetspore, tandmerke, neste, eiers). Bladsy 91-93',
      difficulty: 'easy',
      page: '91-93'
    },
    {
      id: 'NW_U8_004',
      unit: 'Liggaams- en spoorfossiele',
      question: 'Watter van die volgende is voorbeelde van spoorfossiele? (Kies al wat van toepassing is)',
      type: 'multiple_select',
      options: ['Voetspore', 'Tandmerke', 'Neste', 'Eiers', 'Uitskeidings', 'Bene', 'Tande'],
      correctAnswers: ['Voetspore', 'Tandmerke', 'Neste', 'Eiers', 'Uitskeidings'],
      explanation: 'Spoorfossiele sluit voetspore, tandmerke, neste, eiers en uitskeidings in. Bladsy 91-93',
      difficulty: 'medium',
      page: '91-93'
    },
    {
      id: 'NW_U8_005',
      unit: 'Liggaams- en spoorfossiele',
      question: 'Watter liggaamsdele vorm die beste fossiele?',
      type: 'multiple_choice',
      options: ['Die sagte dele', 'Die hardste dele soos bene en tande', 'Die vel', 'Die hare'],
      correctAnswer: 'Die hardste dele soos bene en tande',
      explanation: 'Die liggaamsfossiele wat die beste behoue bly, is fossiele van die hardste liggaamsdele. Bladsy 91-93',
      difficulty: 'easy',
      page: '91-93'
    },
    {
      id: 'NW_U8_006',
      unit: 'Liggaams- en spoorfossiele',
      question: 'Wat is die algemeenste liggaamsfossiele wat opgespoor word?',
      type: 'multiple_choice',
      options: ['Tande', 'Bene', 'Skulpe', 'Blare'],
      correctAnswer: 'Bene',
      explanation: 'Bene is die algemeenste liggaamsfossiele wat opgespoor word. Bladsy 91-93',
      difficulty: 'easy',
      page: '91-93'
    },
    {
      id: 'NW_U8_007',
      unit: 'Liggaams- en spoorfossiele',
      question: 'Wat is die algemeenste soort spoorfossiel?',
      type: 'multiple_choice',
      options: ['Eiers', 'Neste', 'Voetspore', 'Uitskeidings'],
      correctAnswer: 'Voetspore',
      explanation: 'Die algemeenste soort spoorfossiel is voetspore. Bladsy 91-93',
      difficulty: 'easy',
      page: '91-93'
    },
    {
      id: 'NW_U8_008',
      unit: 'Liggaams- en spoorfossiele',
      question: 'Spoorfossiele is baie nuttig omdat dit leidrade oor dierelewe van baie jare gelede verskaf.',
      type: 'true_false',
      correctAnswer: true,
      explanation: 'Waar! Spoorfossiele is baie nuttig omdat dit leidrade oor dierelewe van baie jare gelede verskaf. Bladsy 91-93',
      difficulty: 'easy',
      page: '91-93'
    },
    {
      id: 'NW_U8_009',
      unit: 'Liggaams- en spoorfossiele',
      question: 'Liggaamsfossiele wys ons hoe \'n plant of dier baie jare gelede gelyk het.',
      type: 'true_false',
      correctAnswer: true,
      explanation: 'Waar! Liggaamsfossiele wys ons hoe \'n plant of dier baie jare gelede gelyk het. Bladsy 91-93',
      difficulty: 'easy',
      page: '91-93'
    },
    {
      id: 'NW_U8_010',
      unit: 'Liggaams- en spoorfossiele',
      question: 'Klassifiseer die volgende as liggaamsfossiel (L) of spoorfossiel (S): voetspoor',
      type: 'multiple_choice',
      options: ['Liggaamsfossiel', 'Spoorfossiel'],
      correctAnswer: 'Spoorfossiel',
      explanation: 'Voetspore is spoorfossiele omdat dit spore is wat deur diere-aktiwiteit agtergelaat word. Bladsy 91-93',
      difficulty: 'easy',
      page: '91-93'
    }
  ],

  // Unit 9: Die belangrikheid van Suid-Afrikaanse fossiele
  unit9: [
    {
      id: 'NW_U9_001',
      unit: 'Die belangrikheid van Suid-Afrikaanse fossiele',
      question: 'Suid-Afrika het een van die grootste fossielversamelings ter wêreld.',
      type: 'true_false',
      correctAnswer: true,
      explanation: 'Waar! Suid-Afrika het een van die grootste fossielversamelings ter wêreld. Bladsy 94-95',
      difficulty: 'easy',
      page: '94-95'
    },
    {
      id: 'NW_U9_002',
      unit: 'Die belangrikheid van Suid-Afrikaanse fossiele',
      question: 'Waarom word Afrika die "Wieg van die Mensdom" genoem?',
      type: 'multiple_choice',
      options: [
        'Omdat dit ryk aan fossielskatte is',
        'Omdat dit die grootste kontinent is',
        'Omdat dit warm is',
        'Omdat dit baie mense het'
      ],
      correctAnswer: 'Omdat dit ryk aan fossielskatte is',
      explanation: 'Suid-Afrika en ander dele van Afrika is ryk aan fossielskatte, daarom word ons kontinent die "Wieg van die Mensdom" genoem. Bladsy 94-95',
      difficulty: 'medium',
      page: '94-95'
    },
    {
      id: 'NW_U9_003',
      unit: 'Die belangrikheid van Suid-Afrikaanse fossiele',
      question: 'Waar word Suid-Afrika se oudste rotse meestal aangetref?',
      type: 'multiple_choice',
      options: ['Barberton-omgewing', 'Kaapstad', 'Durban', 'Johannesburg'],
      correctAnswer: 'Barberton-omgewing',
      explanation: 'In Suid-Afrika se oudste rotse, wat meestal in die Barberton-omgewing aangetref word, is klein fossiele gevind. Bladsy 94-95',
      difficulty: 'medium',
      page: '94-95'
    },
    {
      id: 'NW_U9_004',
      unit: 'Die belangrikheid van Suid-Afrikaanse fossiele',
      question: 'Hoe oud is die fossiele van alge en bakterieë wat in die Barberton-omgewing gevind is?',
      type: 'multiple_choice',
      options: ['Ongeveer 500 miljoen jaar', 'Ongeveer 1 biljoen jaar', 'Ongeveer 3 500 miljoen jaar', 'Ongeveer 100 miljoen jaar'],
      correctAnswer: 'Ongeveer 3 500 miljoen jaar',
      explanation: 'Hierdie fossiele bewys dat eenvoudige plante ongeveer 3 500 miljoen jaar gelede in Suid-Afrika gegroei het. Bladsy 94-95',
      difficulty: 'hard',
      page: '94-95'
    },
    {
      id: 'NW_U9_005',
      unit: 'Die belangrikheid van Suid-Afrikaanse fossiele',
      question: 'Waar is die Sterkfonteingrotte geleë?',
      type: 'multiple_choice',
      options: [
        'In \'n vallei aan die westekant van Johannesburg',
        'In Kaapstad',
        'In Durban',
        'In die Karoo'
      ],
      correctAnswer: 'In \'n vallei aan die westekant van Johannesburg',
      explanation: 'Die Sterkfonteingrotte is geleë in \'n vallei aan die westekant van Johannesburg. Bladsy 94-95',
      difficulty: 'medium',
      page: '94-95'
    },
    {
      id: 'NW_U9_006',
      unit: 'Die belangrikheid van Suid-Afrikaanse fossiele',
      question: 'Hoe lank gelede het daar al mense in die omgewing van Sterkfontein gewoon?',
      type: 'multiple_choice',
      options: ['100 miljoen jaar', '200 miljoen jaar', '300 miljoen jaar', '50 miljoen jaar'],
      correctAnswer: '300 miljoen jaar',
      explanation: 'Die fossiele bewys dat daar al 300 miljoen jaar gelede mense in die omgewing gewoon het. Bladsy 94-95',
      difficulty: 'hard',
      page: '94-95'
    },
    {
      id: 'NW_U9_007',
      unit: 'Die belangrikheid van Suid-Afrikaanse fossiele',
      question: 'Wat is \'n Mesosaurus?',
      type: 'multiple_choice',
      options: ['\'n Waterreptiel', '\'n Voël', '\'n Plant', '\'n Insek'],
      correctAnswer: '\'n Waterreptiel',
      explanation: 'Wetenskaplikes het fossiele gevind van \'n waterreptiel wat \'n Mesosaurus genoem is. Bladsy 94-95',
      difficulty: 'medium',
      page: '94-95'
    },
    {
      id: 'NW_U9_008',
      unit: 'Die belangrikheid van Suid-Afrikaanse fossiele',
      question: 'Waar het die vroegste menslike voorouer se versteende voetspore agtergebly?',
      type: 'multiple_choice',
      options: ['Langebaan', 'Johannesburg', 'Durban', 'Kaapstad sentrum'],
      correctAnswer: 'Langebaan',
      explanation: 'Ongeveer 117 000 jaar gelede het ons eerste menslike voorouer langs \'n strand in Langebaan geloop. Bladsy 94-95',
      difficulty: 'medium',
      page: '94-95'
    },
    {
      id: 'NW_U9_009',
      unit: 'Die belangrikheid van Suid-Afrikaanse fossiele',
      question: 'Waar kan die oudste versteende voetspore van \'n moderne mens gesien word?',
      type: 'multiple_choice',
      options: [
        'Suid-Afrikaanse Museum in Kaapstad',
        'Johannesburg Museum',
        'Durban Museum',
        'Pretoria Museum'
      ],
      correctAnswer: 'Suid-Afrikaanse Museum in Kaapstad',
      explanation: 'Die versteende voetspore kan vandag in die Suid-Afrikaanse Museum in Kaapstad gesien word. Bladsy 94-95',
      difficulty: 'medium',
      page: '94-95'
    },
    {
      id: 'NW_U9_010',
      unit: 'Die belangrikheid van Suid-Afrikaanse fossiele',
      question: 'Watter fossiele is in die Weskus Fossielpark gevind? (Kies al wat van toepassing is)',
      type: 'multiple_select',
      options: ['Kameelperde', 'Olifante', 'Seekoeie', 'Walvisse', 'Wilde bere'],
      correctAnswers: ['Kameelperde', 'Olifante', 'Seekoeie', 'Walvisse', 'Wilde bere'],
      explanation: 'Die Weskus Fossielpark bevat fossiele van kameelperde, olifante, seekoeie, walvisse en uitgestorwe wilde bere. Bladsy 94-95',
      difficulty: 'hard',
      page: '94-95'
    },
    {
      id: 'NW_U9_011',
      unit: 'Die belangrikheid van Suid-Afrikaanse fossiele',
      question: 'Hoeveel jaar gelede was die Ystydperk?',
      type: 'multiple_choice',
      options: ['180 miljoen jaar', '280 miljoen jaar', '380 miljoen jaar', '480 miljoen jaar'],
      correctAnswer: '280 miljoen jaar',
      explanation: 'Na die Ystydperk, 280 miljoen jaar gelede, is die grootste deel van Suid-Afrika deur \'n groot binnelandse see bedek. Bladsy 94-95',
      difficulty: 'hard',
      page: '94-95'
    }
  ],

  // Unit 10: Belangrike Suid-Afrikaanse fossiele
  unit10: [
    {
      id: 'NW_U10_001',
      unit: 'Belangrike Suid-Afrikaanse fossiele',
      question: 'Wat was die grootste dinosaurus in suidelike Afrika?',
      type: 'multiple_choice',
      options: ['Brontosaurus', 'Tyrannosaurus Rex', 'Triceratops', 'Velociraptor'],
      correctAnswer: 'Brontosaurus',
      explanation: 'Die grootste dinosaurus in suidelike Afrika was die plantetende Brontosaurus (ook bekend as Apatosaurus). Bladsy 96-97',
      difficulty: 'easy',
      page: '96-97'
    },
    {
      id: 'NW_U10_002',
      unit: 'Belangrike Suid-Afrikaanse fossiele',
      question: 'Waar is fossiele van die Brontosaurus gevind?',
      type: 'multiple_choice',
      options: ['Oos-Kaap', 'Wes-Kaap', 'Gauteng', 'KwaZulu-Natal'],
      correctAnswer: 'Oos-Kaap',
      explanation: 'Fossiele van die Brontosaurus is in die Oos-Kaap gevind. Bladsy 96-97',
      difficulty: 'medium',
      page: '96-97'
    },
    {
      id: 'NW_U10_003',
      unit: 'Belangrike Suid-Afrikaanse fossiele',
      question: 'Hoe lank was die Brontosaurus?',
      type: 'multiple_choice',
      options: ['8 meter', '10 meter', '12 meter', '15 meter'],
      correctAnswer: '12 meter',
      explanation: 'Daar word gesê dat die Brontosaurus 12 meter lank was. Bladsy 96-97',
      difficulty: 'medium',
      page: '96-97'
    },
    {
      id: 'NW_U10_004',
      unit: 'Belangrike Suid-Afrikaanse fossiele',
      question: 'Wat beteken die naam Suchomimus?',
      type: 'multiple_choice',
      options: ['Krokodil-namaaksel', 'Groot jagter', 'Vinnige renner', 'Sterk dier'],
      correctAnswer: 'Krokodil-namaaksel',
      explanation: 'Suchomimus se naam beteken "krokodil-namaaksel". Bladsy 96-97',
      difficulty: 'hard',
      page: '96-97'
    },
    {
      id: 'NW_U10_005',
      unit: 'Belangrike Suid-Afrikaanse fossiele',
      question: 'Wat staan Afrovenator bekend as?',
      type: 'multiple_choice',
      options: ['Die Afrika-jagter', 'Die groot dier', 'Die vinnige renner', 'Die sterk een'],
      correctAnswer: 'Die Afrika-jagter',
      explanation: 'Afrovenator staan bekend as die Afrika-jagter. Bladsy 96-97',
      difficulty: 'medium',
      page: '96-97'
    },
    {
      id: 'NW_U10_006',
      unit: 'Belangrike Suid-Afrikaanse fossiele',
      question: 'Heterodontosaurus het \'n eienaardige stel tande gehad wat dit \'n omnivoor gemaak het.',
      type: 'true_false',
      correctAnswer: true,
      explanation: 'Waar! Van die tande was aangepas om deur vleis te sny en ander om plante te maal. Dit sê vir ons dat die Heterodontosaurus \'n omnivoor was (het vleis en plante geëet). Bladsy 96-97',
      difficulty: 'hard',
      page: '96-97'
    },
    {
      id: 'NW_U10_007',
      unit: 'Belangrike Suid-Afrikaanse fossiele',
      question: 'Wie het Australopithecus sediba ontdek?',
      type: 'multiple_choice',
      options: ['Dr Lee Berger', 'Dr Robert Broom', 'Dr Raymond Dart', 'Dr Phillip Tobias'],
      correctAnswer: 'Dr Lee Berger',
      explanation: 'Dr Lee Berger het die mees onlangse ontdekking gemaak toe hy Australopithecus sediba ontdek het. Bladsy 96-97',
      difficulty: 'medium',
      page: '96-97'
    },
    {
      id: 'NW_U10_008',
      unit: 'Belangrike Suid-Afrikaanse fossiele',
      question: 'Die selakant staan bekend as \'n "lewende fossiel".',
      type: 'true_false',
      correctAnswer: true,
      explanation: 'Waar! Die selakant is \'n unieke vis en staan as \'n "lewende fossiel" bekend. Bladsy 96-97',
      difficulty: 'easy',
      page: '96-97'
    },
    {
      id: 'NW_U10_009',
      unit: 'Belangrike Suid-Afrikaanse fossiele',
      question: 'Wanneer is die eerste lewende selakant ontdek?',
      type: 'multiple_choice',
      options: ['1928', '1938', '1948', '1958'],
      correctAnswer: '1938',
      explanation: 'Vissermanne het in 1938 \'n lewende selakant gevang. Bladsy 96-97',
      difficulty: 'medium',
      page: '96-97'
    },
    {
      id: 'NW_U10_010',
      unit: 'Belangrike Suid-Afrikaanse fossiele',
      question: 'Waar is die lewende selakant in 1938 gevang?',
      type: 'multiple_choice',
      options: ['Langs die kus van Oos-Londen', 'In Durban', 'In Kaapstad', 'In Port Elizabeth'],
      correctAnswer: 'Langs die kus van Oos-Londen',
      explanation: 'Vissermanne langs die kus van Oos-Londen het in 1938 \'n vis gevang wat as \'n selakant geïdentifiseer is. Bladsy 96-97',
      difficulty: 'medium',
      page: '96-97'
    },
    {
      id: 'NW_U10_011',
      unit: 'Belangrike Suid-Afrikaanse fossiele',
      question: 'Hoeveel selakante is in Suid-Afrika ontdek?',
      type: 'multiple_choice',
      options: ['8', '12', '18', '25'],
      correctAnswer: '18',
      explanation: 'Hoewel slegs 18 selakante sover in Suid-Afrika ontdek is - almal in die Sodwana-gebied. Bladsy 96-97',
      difficulty: 'hard',
      page: '96-97'
    },
    {
      id: 'NW_U10_012',
      unit: 'Belangrike Suid-Afrikaanse fossiele',
      question: 'Op watter diepte is die selakant by Sodwana opgespoor?',
      type: 'multiple_choice',
      options: ['34 meter', '54 meter', '74 meter', '94 meter'],
      correctAnswer: '54 meter',
      explanation: 'Die vis is op die ongewone diepte van 54 meter gevind - wat vlak is vir selakante. Bladsy 96-97',
      difficulty: 'hard',
      page: '96-97'
    }
  ]
};

export default natuurwetenskappeQuestions;
