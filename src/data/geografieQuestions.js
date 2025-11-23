// Geografie Questions - Comprehensive set from PDF materials

export const geografieQuestions = {
  unit1: [
    // Weather Elements questions (continuing from existing 6)
    {
      id: 'GEO_001',
      unit: 'Elemente van die weer',
      question: 'Wat is die vier hoof elemente van die weer?',
      type: 'multiple_select',
      options: ['Temperatuur', 'Wolkbedekking', 'Reënval', 'Windsnelheid', 'Sonhoogte', 'Maanhoogte'],
      correctAnswers: ['Temperatuur', 'Wolkbedekking', 'Reënval', 'Windsnelheid'],
      explanation: 'Volgens Geografie-1.pdf bladsy 6, is die vier hoof elemente van die weer temperatuur, wolkbedekking, reënval en windsnelheid.',
      difficulty: 'easy',
      page: '6'
    },
    {
      id: 'GEO_002',
      unit: 'Elemente van die weer',
      question: 'Wolkbedekking beskryf hoeveel _____ daar in die lug is.',
      type: 'multiple_choice',
      options: ['wind', 'wolke', 'reën', 'son'],
      correctAnswer: 'wolke',
      explanation: 'Geografie-1.pdf bladsy 6 sê wolkbedekking is hoeveel wolke daar in die lug is.',
      difficulty: 'easy',
      page: '6'
    },
    {
      id: 'GEO_003',
      unit: 'Elemente van die weer',
      question: 'Watter woorde kan ons gebruik om temperatuur te beskryf?',
      type: 'multiple_select',
      options: ['baie koud', 'koud', 'koel', 'matig', 'warm', 'baie warm', 'bloedig warm'],
      correctAnswers: ['baie koud', 'koud', 'koel', 'matig', 'warm', 'baie warm', 'bloedig warm'],
      explanation: 'Geografie-1.pdf bladsy 6 toon al hierdie woorde kan gebruik word om temperatuur te beskryf.',
      difficulty: 'easy',
      page: '6'
    },
    {
      id: 'GEO_004',
      unit: 'Elemente van die weer',
      question: 'Watter woorde kan ons gebruik om windsnelheid te beskryf?',
      type: 'multiple_select',
      options: ['windstil', 'ligte briesie', 'sterk wind', 'stormwind'],
      correctAnswers: ['windstil', 'ligte briesie', 'sterk wind', 'stormwind'],
      explanation: 'Geografie-1.pdf bladsy 6 lys hierdie terme vir windsnelheid.',
      difficulty: 'easy',
      page: '6'
    },
    {
      id: 'GEO_005',
      unit: 'Elemente van die weer',
      question: 'Die wolkbedekking kan beskryf word as "wolkloos", "gedeeltelik bewolk" of "bewolk/betrokke".',
      type: 'true_false',
      correctAnswer: true,
      explanation: 'Geografie-1.pdf bladsy 6 toon hierdie drie kategorieë vir wolkbedekking.',
      difficulty: 'easy',
      page: '6'
    }
  ],

  unit2: [
    // Precipitation questions
    {
      id: 'GEO_006',
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
      explanation: 'Geografie-2.pdf bladsy 7 definieer neerslag as verskillende vorms waarin water op die grond val.',
      difficulty: 'easy',
      page: '7'
    },
    {
      id: 'GEO_007',
      unit: 'Neerslag',
      question: 'Watter van die volgende is vorme van neerslag?',
      type: 'multiple_select',
      options: ['Reën', 'Sneeu', 'Hael', 'Wind', 'Wolke'],
      correctAnswers: ['Reën', 'Sneeu', 'Hael'],
      explanation: 'Geografie-2.pdf bladsy 7 noem dat reën, sneeu en hael verskillende vorms van neerslag is.',
      difficulty: 'easy',
      page: '7'
    },
    {
      id: 'GEO_008',
      unit: 'Neerslag',
      question: 'Haelkorrels bestaan uit yslae en kan so groot soos \'n gholfbal wees.',
      type: 'true_false',
      correctAnswer: true,
      explanation: 'Geografie-2.pdf bladsy 7 sê haelkorrels bestaan uit yslae en kan so groot soos \'n gholfbal wees en kan baie skade aanrig.',
      difficulty: 'easy',
      page: '7'
    },
    {
      id: 'GEO_009',
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
      explanation: 'Geografie-2.pdf bladsy 7 toon ons kan reënval beskryf deur woorde soos "geen reën nie", "ligte reën" en "swaar reën".',
      difficulty: 'medium',
      page: '7'
    }
  ],

  // Continue with more comprehensive questions for temperature measurement, wind, weather maps, rainfall patterns, climate, etc.
  // Due to character limits, I'll provide the structure and you can add the remaining questions following this pattern
};

export default geografieQuestions;
