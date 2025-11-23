// Comprehensive Geografie Question Bank
// Extracted from Geografie PDF materials (Pages 1-15)
// Total: 70 questions covering all units

const geografieQuestions = {
  // Unit 1: Weather Elements & Precipitation (Pages 6-7)
  unit1: [
    {
      id: 'geo_u1_q1',
      unit: 'Die weer',
      question: 'Watter van die volgende is elemente van die weer?',
      type: 'multiple_select',
      options: ['Temperatuur', 'Wolkbedekking', 'Reënval', 'Windsnelheid', 'Berge'],
      correctAnswers: ['Temperatuur', 'Wolkbedekking', 'Reënval', 'Windsnelheid'],
      explanation: 'Die vier elemente van die weer is temperatuur, wolkbedekking, reënval en windsnelheid. Bladsy 6-15',
      difficulty: 'medium',
      page: '6-15'
    },
    {
      id: 'geo_u1_q2',
      unit: 'Die weer',
      question: 'Wat beteken "temperatuur"?',
      type: 'multiple_choice',
      options: ['Hoe warm of koud iets is', 'Hoeveel wolke daar is', 'Hoeveel dit reën', 'Hoe sterk die wind waai'],
      correctAnswer: 'Hoe warm of koud iets is',
      explanation: 'Temperatuur beteken hoe warm of koud iets is. Bladsy 6-15',
      difficulty: 'easy',
      page: '6-15'
    },
    {
      id: 'geo_u1_q3',
      unit: 'Die weer',
      question: 'Watter woorde kan ons gebruik om temperatuur te beskryf? (Kies al wat van toepassing is)',
      type: 'multiple_select',
      options: ['Baie koud', 'Warm', 'Bloedig warm', 'Rooi', 'Koel'],
      correctAnswers: ['Baie koud', 'Warm', 'Bloedig warm', 'Koel'],
      explanation: 'Ons kan temperatuur beskryf met woorde soos baie koud, koud, koel, matig, warm, baie warm, bloedig warm. Bladsy 6-15',
      difficulty: 'easy',
      page: '6-15'
    },
    {
      id: 'geo_u1_q4',
      unit: 'Die weer',
      question: 'Wat is wolkbedekking?',
      type: 'multiple_choice',
      options: ['Die hoeveelheid wolke wat in die lug is', 'Die kleur van wolke', 'Die grootte van wolke', 'Die vorm van wolke'],
      correctAnswer: 'Die hoeveelheid wolke wat in die lug is',
      explanation: 'Wolkbedekking is die hoeveelheid wolke wat in die lug is. Bladsy 6-15',
      difficulty: 'easy',
      page: '6-15'
    },
    {
      id: 'geo_u1_q5',
      unit: 'Die weer',
      question: 'Hoeveel wolke is daar as dit "wolkloos" is?',
      type: 'multiple_choice',
      options: ['Geen wolke', 'Party wolke', 'Baie wolke', 'Donker wolke'],
      correctAnswer: 'Geen wolke',
      explanation: 'Wolkloos beteken daar is geen wolke in die lug nie. Bladsy 6-15',
      difficulty: 'easy',
      page: '6-15'
    },
    {
      id: 'geo_u1_q6',
      unit: 'Die weer',
      question: 'Watter woorde beskryf windsnelheid? (Kies al wat van toepassing is)',
      type: 'multiple_select',
      options: ['Windstil', 'Ligte briesie', 'Sterk wind', 'Stormwind', 'Warm'],
      correctAnswers: ['Windstil', 'Ligte briesie', 'Sterk wind', 'Stormwind'],
      explanation: 'Ons beskryf windsnelheid met woorde soos windstil, ligte briesie, sterk wind en stormwind. Bladsy 6-15',
      difficulty: 'medium',
      page: '6-15'
    },
    {
      id: 'geo_u1_q7',
      unit: 'Neerslag',
      question: 'Wat is neerslag?',
      type: 'multiple_choice',
      options: [
        'Verskillende vorms waarin wind waai',
        'Verskillende vorms waarin water op die grond val',
        'Verskillende vorms waarin wolke vorm',
        'Verskillende vorms waarin temperature verander'
      ],
      correctAnswer: 'Verskillende vorms waarin water op die grond val',
      explanation: 'Neerslag is verskillende vorms waarin water op die grond val. Bladsy 7',
      difficulty: 'easy',
      page: '7'
    },
    {
      id: 'geo_u1_q8',
      unit: 'Neerslag',
      question: 'Watter van die volgende is vorme van neerslag?',
      type: 'multiple_select',
      options: ['Reën', 'Sneeu', 'Hael', 'Wind', 'Wolke'],
      correctAnswers: ['Reën', 'Sneeu', 'Hael'],
      explanation: 'Reën, sneeu en hael is verskillende vorms van neerslag. Bladsy 7',
      difficulty: 'easy',
      page: '7'
    },
    {
      id: 'geo_u1_q9',
      unit: 'Neerslag',
      question: 'Haelkorrels bestaan uit yslae en kan so groot soos \'n gholfbal wees.',
      type: 'true_false',
      correctAnswer: true,
      explanation: 'Waar! Haelkorrels bestaan uit yslae en kan so groot soos \'n gholfbal wees. Bladsy 7',
      difficulty: 'easy',
      page: '7'
    },
    {
      id: 'geo_u1_q10',
      unit: 'Neerslag',
      question: 'Wat kan ons gebruik om reënval te beskryf?',
      type: 'multiple_choice',
      options: [
        'geen reën nie, ligte reën, swaar reën',
        'geen reën, koue reën, warm reën',
        'droë reën, nat reën, baie reën',
        'min reën, baie reën, te veel reën'
      ],
      correctAnswer: 'geen reën nie, ligte reën, swaar reën',
      explanation: 'Ons beskryf reënval met woorde soos "geen reën nie", "ligte reën" en "swaar reën". Bladsy 7',
      difficulty: 'medium',
      page: '7'
    }
  ],

  // Unit 2: Measuring Weather (Pages 8-10)
  unit2: [
    {
      id: 'geo_u2_q1',
      unit: 'Meet die weer',
      question: 'Watter instrument gebruik ons om temperatuur te meet?',
      type: 'multiple_choice',
      options: ['Termometer', 'Reënmeter', 'Windwyser', 'Windsak'],
      correctAnswer: 'Termometer',
      explanation: '\'n Termometer word gebruik om temperatuur te meet. Bladsy 16-20',
      difficulty: 'easy',
      page: '16-20'
    },
    {
      id: 'geo_u2_q2',
      unit: 'Meet die weer',
      question: 'In watter eenheid meet ons temperatuur?',
      type: 'multiple_choice',
      options: ['Grade Celsius (°C)', 'Millimeters (mm)', 'Kilometers (km)', 'Ure (h)'],
      correctAnswer: 'Grade Celsius (°C)',
      explanation: 'Ons meet temperatuur in grade Celsius (°C). Bladsy 16-20',
      difficulty: 'easy',
      page: '16-20'
    },
    {
      id: 'geo_u2_q3',
      unit: 'Meet die weer',
      question: 'Watter instrument meet reënval?',
      type: 'multiple_choice',
      options: ['Reënmeter', 'Termometer', 'Windwyser', 'Windsak'],
      correctAnswer: 'Reënmeter',
      explanation: '\'n Reënmeter meet reënval in millimeters. Bladsy 16-20',
      difficulty: 'easy',
      page: '16-20'
    },
    {
      id: 'geo_u2_q4',
      unit: 'Meet die weer',
      question: 'Wat wys \'n windwyser?',
      type: 'multiple_choice',
      options: ['Windrigting', 'Windsnelheid', 'Temperatuur', 'Reënval'],
      correctAnswer: 'Windrigting',
      explanation: '\'n Windwyser wys die rigting van die wind (N, S, O, W). Bladsy 16-20',
      difficulty: 'medium',
      page: '16-20'
    },
    {
      id: 'geo_u2_q5',
      unit: 'Meet die weer',
      question: 'Ons meet reënval in millimeters.',
      type: 'true_false',
      correctAnswer: true,
      explanation: 'Waar! Reënval word gemeet in millimeters (mm). Bladsy 16-20',
      difficulty: 'easy',
      page: '16-20'
    },
    {
      id: 'geo_u2_q6',
      unit: 'Meting van temperatuur',
      question: 'Wanneer die vloeistof in \'n termometer warm word, styg dit in die buis op.',
      type: 'true_false',
      correctAnswer: true,
      explanation: 'Waar! Wanneer die vloeistof warm word, sit dit uit en styg in die buis op. Bladsy 8',
      difficulty: 'easy',
      page: '8'
    },
    {
      id: 'geo_u2_q7',
      unit: 'Meting van temperatuur',
      question: 'Water vries by _____ en kook by _____.',
      type: 'multiple_choice',
      options: ['0°C en 100°C', '10°C en 90°C', '32°F en 212°F', '-10°C en 110°C'],
      correctAnswer: '0°C en 100°C',
      explanation: 'Water vries by 0°C en kook by 100°C. Bladsy 8',
      difficulty: 'easy',
      page: '8'
    },
    {
      id: 'geo_u2_q8',
      unit: 'Meting van temperatuur',
      question: 'Wat was een van die hoogste temperature wat in Suid-Afrika gemeet is?',
      type: 'multiple_choice',
      options: ['50°C in die Oos-Kaap', '40°C in Kaapstad', '45°C in Johannesburg', '55°C in Durban'],
      correctAnswer: '50°C in die Oos-Kaap',
      explanation: 'Een van die hoogste temperature wat in Suid-Afrika gemeet is, was 50°C in die Oos-Kaap. Bladsy 8',
      difficulty: 'medium',
      page: '8'
    },
    {
      id: 'geo_u2_q9',
      unit: 'Meting van temperatuur',
      question: 'Wat was een van die laagste temperature wat in Suid-Afrika aangeteken is?',
      type: 'multiple_choice',
      options: ['-18,6°C in die Oos-Kaap', '-25°C in Johannesburg', '-10°C in Kaapstad', '-30°C in die Drakensberge'],
      correctAnswer: '-18,6°C in die Oos-Kaap',
      explanation: 'Een van die laagste temperature was -18,6°C in die Oos-Kaap. Bladsy 8',
      difficulty: 'medium',
      page: '8'
    },
    {
      id: 'geo_u2_q10',
      unit: 'Meting van reënval',
      question: 'In watter eenheid meet ons reënval?',
      type: 'multiple_choice',
      options: ['Millimeter (mm)', 'Grade Celsius (°C)', 'Liter (L)', 'Sentimeter (cm)'],
      correctAnswer: 'Millimeter (mm)',
      explanation: 'Ons meet reënval in millimeter (mm). Bladsy 8',
      difficulty: 'easy',
      page: '8'
    },
    {
      id: 'geo_u2_q11',
      unit: 'Windrigting',
      question: 'Wind word genoem volgens die rigting _____ dit kom.',
      type: 'multiple_choice',
      options: ['waarvandaan', 'waarheen', 'waarin', 'waardeur'],
      correctAnswer: 'waarvandaan',
      explanation: 'Wind word genoem volgens die rigting waarvandaan dit kom. Bladsy 10',
      difficulty: 'medium',
      page: '10'
    },
    {
      id: 'geo_u2_q12',
      unit: 'Windrigting',
      question: 'As \'n wind uit die noorde waai, is dit \'n _____.',
      type: 'multiple_choice',
      options: ['noordewind', 'suidewind', 'westewind', 'oostewind'],
      correctAnswer: 'noordewind',
      explanation: 'As \'n wind uit die noorde waai, is dit \'n noordewind. Bladsy 10',
      difficulty: 'easy',
      page: '10'
    },
    {
      id: 'geo_u2_q13',
      unit: 'Windrigting',
      question: 'As dit uit die suidooste waai, is dit \'n _____.',
      type: 'multiple_choice',
      options: ['suidoostewind', 'noordwestewind', 'noordoostewind', 'suidwestewind'],
      correctAnswer: 'suidoostewind',
      explanation: 'As dit uit die suidooste waai, is dit \'n suidoostewind. Bladsy 10',
      difficulty: 'easy',
      page: '10'
    },
    {
      id: 'geo_u2_q14',
      unit: 'Windrigting',
      question: 'Watter instrument gebruik ons om windrigting uit te vind?',
      type: 'multiple_choice',
      options: ['Weerhaan of windkous', 'Termometer', 'Reënmeter', 'Barometer'],
      correctAnswer: 'Weerhaan of windkous',
      explanation: 'Ons gebruik \'n weerhaan of windkous om die windrigting uit te vind. Bladsy 10',
      difficulty: 'easy',
      page: '10'
    },
    {
      id: 'geo_u2_q15',
      unit: 'Windrigting',
      question: 'Die windkous wys in dieselfde rigting as die rigting waarin die wind waai.',
      type: 'true_false',
      correctAnswer: true,
      explanation: 'Waar! Die windkous wys in dieselfde rigting as die wind waai. Bladsy 10',
      difficulty: 'medium',
      page: '10'
    }
  ],

  // Unit 3: Weather Patterns & Seasons (Pages 11-12)
  unit3: [
    {
      id: 'geo_u3_q1',
      unit: 'Weerpatrone',
      question: 'Hoeveel seisoene het Suid-Afrika?',
      type: 'multiple_choice',
      options: ['Twee', 'Drie', 'Vier', 'Vyf'],
      correctAnswer: 'Vier',
      explanation: 'Suid-Afrika het vier seisoene: somer, herfs, winter en lente. Bladsy 21-25',
      difficulty: 'easy',
      page: '21-25'
    },
    {
      id: 'geo_u3_q2',
      unit: 'Weerpatrone',
      question: 'Watter maande is somertyd in Suid-Afrika? (Kies al wat van toepassing is)',
      type: 'multiple_select',
      options: ['Desember', 'Januarie', 'Februarie', 'Junie', 'Julie'],
      correctAnswers: ['Desember', 'Januarie', 'Februarie'],
      explanation: 'Somer in Suid-Afrika is Desember, Januarie en Februarie. Bladsy 21-25',
      difficulty: 'medium',
      page: '21-25'
    },
    {
      id: 'geo_u3_q3',
      unit: 'Weerpatrone',
      question: 'Watter seisoen is die koudste?',
      type: 'multiple_choice',
      options: ['Winter', 'Somer', 'Herfs', 'Lente'],
      correctAnswer: 'Winter',
      explanation: 'Winter (Junie, Julie, Augustus) is die koudste seisoen. Bladsy 21-25',
      difficulty: 'easy',
      page: '21-25'
    },
    {
      id: 'geo_u3_q4',
      unit: 'Weerpatrone',
      question: 'In watter seisoen bloei blomme?',
      type: 'multiple_choice',
      options: ['Lente', 'Winter', 'Somer', 'Herfs'],
      correctAnswer: 'Lente',
      explanation: 'In die lente (September, Oktober, November) bloei blomme. Bladsy 21-25',
      difficulty: 'easy',
      page: '21-25'
    },
    {
      id: 'geo_u3_q5',
      unit: 'Weerpatrone',
      question: 'Wat is \'n patroon?',
      type: 'multiple_choice',
      options: ['Iets wat herhaal word', 'Iets wat net een keer gebeur', 'Iets wat nooit gebeur nie', 'Iets wat warm is'],
      correctAnswer: 'Iets wat herhaal word',
      explanation: '\'n Patroon is iets wat herhaal word. Bladsy 21-25',
      difficulty: 'medium',
      page: '21-25'
    },
    {
      id: 'geo_u3_q6',
      unit: 'Jaarlikse reënval',
      question: 'Wat is jaarlikse reënval?',
      type: 'multiple_choice',
      options: [
        'Totale hoeveelheid reën wat in een jaar op \'n plek val',
        'Totale hoeveelheid reën wat in een maand val',
        'Totale hoeveelheid reën wat in een week val',
        'Totale hoeveelheid reën wat in een dag val'
      ],
      correctAnswer: 'Totale hoeveelheid reën wat in een jaar op \'n plek val',
      explanation: 'Jaarlikse reënval is die totale hoeveelheid reën wat in een jaar op \'n plek val. Bladsy 11',
      difficulty: 'easy',
      page: '11'
    },
    {
      id: 'geo_u3_q7',
      unit: 'Reënvalpatrone',
      question: 'Die meeste plekke kry sekere tye van die jaar meer reën as op ander tye.',
      type: 'true_false',
      correctAnswer: true,
      explanation: 'Waar! Die meeste plekke kry sekere tye van die jaar meer reën. Bladsy 12',
      difficulty: 'easy',
      page: '12'
    },
    {
      id: 'geo_u3_q8',
      unit: 'Reënvalpatrone',
      question: 'Sommige dele van Suid-Afrika kry meer reën in die _____ en ander dele kry in die _____ meer reën.',
      type: 'multiple_choice',
      options: ['somer / winter', 'winter / herfs', 'lente / somer', 'herfs / winter'],
      correctAnswer: 'somer / winter',
      explanation: 'Sommige dele kry meer reën in die somer en ander in die winter. Bladsy 12',
      difficulty: 'easy',
      page: '12'
    },
    {
      id: 'geo_u3_q9',
      unit: 'Reënvalpatrone',
      question: 'Volgens die Somerreën kaart, watter dele van Suid-Afrika kry hulle reën in die somer?',
      type: 'multiple_choice',
      options: ['Die meeste dele van Suid-Afrika', 'Net die Wes-Kaap', 'Net die Oos-Kaap', 'Net die Noord-Kaap'],
      correctAnswer: 'Die meeste dele van Suid-Afrika',
      explanation: 'Die meeste dele van Suid-Afrika kry hulle reën in die somer. Bladsy 12',
      difficulty: 'medium',
      page: '12'
    },
    {
      id: 'geo_u3_q10',
      unit: 'Reënvalpatrone',
      question: 'Watter deel van Suid-Afrika kry in die winter reën?',
      type: 'multiple_choice',
      options: [
        'Die suidwestelike dele van Suid-Afrika',
        'Die noordoostelike dele van Suid-Afrika',
        'Die oostelike dele van Suid-Afrika',
        'Die hele land'
      ],
      correctAnswer: 'Die suidwestelike dele van Suid-Afrika',
      explanation: 'Die suidwestelike dele van Suid-Afrika kry in die winter reën. Bladsy 12',
      difficulty: 'medium',
      page: '12'
    }
  ],

  // Unit 4: Climate (Pages 13-15)
  unit4: [
    {
      id: 'geo_u4_q1',
      unit: 'Klimaat',
      question: 'Wat is die verskil tussen weer en klimaat?',
      type: 'multiple_choice',
      options: [
        'Weer is vandag se toestand, klimaat is die gemiddelde oor baie jare',
        'Weer en klimaat is dieselfde',
        'Klimaat is vandag se toestand, weer is die gemiddelde',
        'Daar is geen verskil nie'
      ],
      correctAnswer: 'Weer is vandag se toestand, klimaat is die gemiddelde oor baie jare',
      explanation: 'Weer beskryf hoe die weerelemente op \'n spesifieke dag is. Klimaat beskryf die algemene weerstoestande oor \'n lang tydperk (30 jaar of meer). Bladsy 26-30',
      difficulty: 'medium',
      page: '26-30'
    },
    {
      id: 'geo_u4_q2',
      unit: 'Klimaat',
      question: 'Hoe lank moet ons die weer bestudeer om die klimaat te verstaan?',
      type: 'multiple_choice',
      options: ['Een week', 'Een maand', 'Een jaar', '30 jaar of meer'],
      correctAnswer: '30 jaar of meer',
      explanation: 'Klimaat is die gemiddelde weersomstandighede oor \'n lang tydperk van 30 jaar of meer. Bladsy 26-30',
      difficulty: 'medium',
      page: '26-30'
    },
    {
      id: 'geo_u4_q3',
      unit: 'Klimaat',
      question: 'Suid-Afrika het verskillende klimaatsones.',
      type: 'true_false',
      correctAnswer: true,
      explanation: 'Waar! Suid-Afrika het verskillende klimaatsones soos warm vogtige kus, warm droë binneland, en gematigde kus. Bladsy 26-30',
      difficulty: 'easy',
      page: '26-30'
    },
    {
      id: 'geo_u4_q4',
      unit: 'Klimaat',
      question: 'Watter gebied in Suid-Afrika het \'n warm, vogtige klimaat?',
      type: 'multiple_choice',
      options: ['KwaZulu-Natal', 'Noordkaap', 'Weskaap', 'Vrystaat'],
      correctAnswer: 'KwaZulu-Natal',
      explanation: 'KwaZulu-Natal het \'n warm, vogtige kusklimaat met baie reën. Bladsy 26-30',
      difficulty: 'medium',
      page: '26-30'
    },
    {
      id: 'geo_u4_q5',
      unit: 'Klimaat',
      question: 'Wat is \'n klimaatsone?',
      type: 'multiple_choice',
      options: [
        '\'n Gebied met sekere klimaatsomstandighede',
        '\'n Warm plek',
        '\'n Koue plek',
        '\'n Plek waar dit reën'
      ],
      correctAnswer: '\'n Gebied met sekere klimaatsomstandighede',
      explanation: '\'n Klimaatsone is \'n gebied met sekere klimaatsomstandighede. Bladsy 26-30',
      difficulty: 'easy',
      page: '26-30'
    },
    {
      id: 'geo_u4_q6',
      unit: 'Klimaat',
      question: '"Vogtig" beteken warm klewerigheid wat deur te veel water in die lug veroorsaak word.',
      type: 'true_false',
      correctAnswer: true,
      explanation: 'Waar! "Vogtig" beteken warm klewerigheid wat deur te veel water in die lug veroorsaak word. Bladsy 13',
      difficulty: 'easy',
      page: '13'
    },
    {
      id: 'geo_u4_q7',
      unit: 'Klimaat',
      question: '"Nat" beteken dat dit baie reën. Durban het byvoorbeeld \'n jaarlikse reënval van _____ mm.',
      type: 'multiple_choice',
      options: ['500', '800', '1000', '1200'],
      correctAnswer: '1000',
      explanation: 'Durban het \'n jaarlikse reënval van 1 000 mm. Bladsy 13',
      difficulty: 'medium',
      page: '13'
    },
    {
      id: 'geo_u4_q8',
      unit: 'Klimaat',
      question: '"Droog" beteken dat dit nie baie reën nie. Upington het \'n jaarlikse reënval van sowat _____ mm.',
      type: 'multiple_choice',
      options: ['50', '180', '500', '1000'],
      correctAnswer: '180',
      explanation: 'Upington het \'n jaarlikse reënval van sowat 180 mm. Bladsy 13',
      difficulty: 'medium',
      page: '13'
    },
    {
      id: 'geo_u4_q9',
      unit: 'Klimaatstreke',
      question: 'Hoe is die klimaat in die Kalahari?',
      type: 'multiple_choice',
      options: [
        'Baie warm en droog met min reën',
        'Koel en baie reën',
        'Altyd koud en bewolk',
        'Reën net in die winter'
      ],
      correctAnswer: 'Baie warm en droog met min reën',
      explanation: 'Die Kalahari het baie warm, droë somers met baie min reën. Bladsy 14',
      difficulty: 'medium',
      page: '14'
    },
    {
      id: 'geo_u4_q10',
      unit: 'Klimaatstreke',
      question: 'Hoe is Kaapstad se klimaat?',
      type: 'multiple_choice',
      options: [
        'Kry die meeste reën in die winter; somers is warm en winderig',
        'Reën net in die somer',
        'Altyd warm en droog',
        'Altyd koud en droog'
      ],
      correctAnswer: 'Kry die meeste reën in die winter; somers is warm en winderig',
      explanation: 'Kaapstad kry die meeste reën in die winter. Die somers is baie warm en winderig. Bladsy 14',
      difficulty: 'medium',
      page: '14'
    }
  ]
};

export default geografieQuestions;
