import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, CheckCircle, XCircle, RotateCcw, Award, History, User, Calendar, TrendingUp } from 'lucide-react';
import curriculumData from './data/curriculum.json';

const NatuurwetenskappeQuiz = () => {
  const [gameState, setGameState] = useState('setup'); // setup, playing, results, history, historyReview
  const [selectedSubject, setSelectedSubject] = useState('natuurwetenskappe');
  const [selectedUnits, setSelectedUnits] = useState([]);
  const [difficulty, setDifficulty] = useState('mixed');
  const [questionCount, setQuestionCount] = useState(10);
  const [webQuestionCount, setWebQuestionCount] = useState(0);
  const [studentName, setStudentName] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [reviewMode, setReviewMode] = useState(false);
  const [testHistory, setTestHistory] = useState([]);
  const [reviewingTest, setReviewingTest] = useState(null);
  const resultSavedRef = useRef(false);

  // Available subjects configuration
  const subjects = {
    natuurwetenskappe: {
      name: 'Natuurwetenskappe',
      grade: 'Graad 5',
      quarter: 'Kwartaal 4',
      data: curriculumData
    }
    // Add more subjects here in the future
  };

  // Load history from localStorage on mount
  useEffect(() => {
    // Try new key first, then fallback to old key for backward compatibility
    let savedHistory = localStorage.getItem('quiz_history');
    if (!savedHistory) {
      savedHistory = localStorage.getItem('natuurwetenskappe_history');
      if (savedHistory) {
        // Migrate old data to new format
        const oldHistory = JSON.parse(savedHistory);
        const migratedHistory = oldHistory.map(test => ({
          ...test,
          subject: 'natuurwetenskappe',
          subjectName: 'Natuurwetenskappe',
          questions: test.questions || [],
          userAnswers: test.userAnswers || {}
        }));
        localStorage.setItem('quiz_history', JSON.stringify(migratedHistory));
        localStorage.removeItem('natuurwetenskappe_history');
        setTestHistory(migratedHistory);
        return;
      }
    }
    if (savedHistory) {
      setTestHistory(JSON.parse(savedHistory));
    }
  }, []);

  // Save test result when entering results state
  useEffect(() => {
    if (gameState === 'results' && !reviewMode && !resultSavedRef.current && quizQuestions.length > 0) {
      const percentage = (score / quizQuestions.length) * 100;
      const gradeInfo = getGrade(percentage);
      const currentSubjectData = subjects[selectedSubject];

      const testResult = {
        id: Date.now(),
        studentName: studentName,
        date: new Date().toISOString(),
        subject: selectedSubject,
        subjectName: currentSubjectData.name,
        score: score,
        totalQuestions: quizQuestions.length,
        percentage: percentage,
        grade: gradeInfo.grade,
        difficulty: difficulty,
        selectedUnits: selectedUnits.map(unitId => {
          const unit = currentSubjectData.data.units.find(u => u.unit_id === unitId);
          return unit ? unit.title : unitId;
        }),
        webQuestionsIncluded: quizQuestions.filter(q => q.source === 'web').length,
        // Store full test data for review
        questions: quizQuestions,
        userAnswers: selectedAnswers
      };

      // Save to state and localStorage
      setTestHistory(prevHistory => {
        const newHistory = [testResult, ...prevHistory];
        localStorage.setItem('quiz_history', JSON.stringify(newHistory));
        return newHistory;
      });

      resultSavedRef.current = true;
    }

    // Reset the saved flag when leaving results screen
    if (gameState !== 'results') {
      resultSavedRef.current = false;
    }
  }, [gameState, reviewMode, score, quizQuestions, studentName, difficulty, selectedUnits, selectedSubject, selectedAnswers, subjects]);

  // Clear history
  const clearHistory = () => {
    if (window.confirm('Is jy seker jy wil alle geskiedenis uitvee?')) {
      setTestHistory([]);
      localStorage.removeItem('quiz_history');
    }
  };

  // Generate quiz questions from curriculum
  const generateQuestions = () => {
    const allQuestions = [];

    // Unit 1: Earth Movement Questions
    const unit1Questions = [
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
      }
    ];

    // Unit 2: Soil Types Questions
    const unit2Questions = [
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
      }
    ];

    // Unit 3: Sedimentary Rocks Questions
    const unit3Questions = [
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
      }
    ];

    // Unit 4: Fossils Questions
    const unit4Questions = [
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
      }
    ];

    // Web-sourced questions (10 additional internet-researched questions)
    const webQuestions = [
      {
        id: 'web_q1',
        unit: 'Die aarde beweeg',
        question: 'Watter planeet is die naaste aan die son?',
        type: 'multiple_choice',
        options: ['Venus', 'Mercurius', 'Mars', 'Aarde'],
        correctAnswer: 'Mercurius',
        explanation: 'Mercurius is die naaste planeet aan die son. (Internet bron)',
        difficulty: 'medium',
        page: 'Internet',
        source: 'web'
      },
      {
        id: 'web_q2',
        unit: 'Grond - Soorte grond',
        question: 'Watter laag grond is onder die bogrond?',
        type: 'multiple_choice',
        options: ['Ondergrond', 'Rotslag', 'Lug', 'Water'],
        correctAnswer: 'Ondergrond',
        explanation: 'Die ondergrond is die laag onder die bogrond. (Internet bron)',
        difficulty: 'easy',
        page: 'Internet',
        source: 'web'
      },
      {
        id: 'web_q3',
        unit: 'Grond - Soorte grond',
        question: 'Erdwurms is goed vir grond.',
        type: 'true_false',
        correctAnswer: true,
        explanation: 'Waar! Erdwurms help om grond te lug en voedingstowwe te meng. (Internet bron)',
        difficulty: 'easy',
        page: 'Internet',
        source: 'web'
      },
      {
        id: 'web_q4',
        unit: 'Sedimentêre gesteentes',
        question: 'Watter proses verander een tipe gesteente in \'n ander?',
        type: 'multiple_choice',
        options: ['Die rotssiklus', 'Erosie', 'Weersverbrokkeling', 'Fotosintese'],
        correctAnswer: 'Die rotssiklus',
        explanation: 'Die rotssiklus is die proses waardeur gesteentes verander. (Internet bron)',
        difficulty: 'hard',
        page: 'Internet',
        source: 'web'
      },
      {
        id: 'web_q5',
        unit: 'Sedimentêre gesteentes',
        question: 'Sandsteen word uit sandkorrels gevorm.',
        type: 'true_false',
        correctAnswer: true,
        explanation: 'Waar! Sandsteen vorm wanneer sandkorrels saampers en sement. (Internet bron)',
        difficulty: 'easy',
        page: 'Internet',
        source: 'web'
      },
      {
        id: 'web_q6',
        unit: 'Fossiele',
        question: 'Wat bestudeer \'n paleontoloog?',
        type: 'multiple_choice',
        options: ['Fossiele', 'Sterre', 'Plante', 'Water'],
        correctAnswer: 'Fossiele',
        explanation: 'Paleontologie is die studie van fossiele en oeroue lewe. (Internet bron)',
        difficulty: 'medium',
        page: 'Internet',
        source: 'web'
      },
      {
        id: 'web_q7',
        unit: 'Fossiele',
        question: 'Dinosourusfossiele is al in Suid-Afrika gevind.',
        type: 'true_false',
        correctAnswer: true,
        explanation: 'Waar! Suid-Afrika het baie dinosourusfossiele, veral in die Karoo. (Internet bron)',
        difficulty: 'easy',
        page: 'Internet',
        source: 'web'
      },
      {
        id: 'web_q8',
        unit: 'Die aarde beweeg',
        question: 'Hoeveel planete is daar in ons sonnestelsel?',
        type: 'multiple_choice',
        options: ['7', '8', '9', '10'],
        correctAnswer: '8',
        explanation: 'Daar is 8 planete in ons sonnestelsel (Pluto is nie meer \'n planeet nie). (Internet bron)',
        difficulty: 'easy',
        page: 'Internet',
        source: 'web'
      },
      {
        id: 'web_q9',
        unit: 'Grond - Soorte grond',
        question: 'Watter van die volgende help om grond vrugbaar te hou? (Kies al wat van toepassing is)',
        type: 'multiple_select',
        options: ['Kompos', 'Mis', 'Wisselbou', 'Besoedeling'],
        correctAnswers: ['Kompos', 'Mis', 'Wisselbou'],
        explanation: 'Kompos, mis en wisselbou help om grond vrugbaar te hou. (Internet bron)',
        difficulty: 'medium',
        page: 'Internet',
        source: 'web'
      },
      {
        id: 'web_q10',
        unit: 'Fossiele',
        question: 'Die oudste fossiele op aarde is ongeveer hoeveel jaar oud?',
        type: 'multiple_choice',
        options: ['1 miljoen jaar', '100 miljoen jaar', '1 biljoen jaar', '3.5 biljoen jaar'],
        correctAnswer: '3.5 biljoen jaar',
        explanation: 'Die oudste fossiele is ongeveer 3.5 biljoen jaar oud! (Internet bron)',
        difficulty: 'hard',
        page: 'Internet',
        source: 'web'
      }
    ];

    // Combine questions based on selected units
    const unitMap = {
      'eenheid_1': unit1Questions,
      'eenheid_2': unit2Questions,
      'eenheid_3': unit3Questions,
      'eenheid_4': unit4Questions
    };

    selectedUnits.forEach(unitId => {
      if (unitMap[unitId]) {
        allQuestions.push(...unitMap[unitId]);
      }
    });

    // Add web questions if count is set
    const currentSubjectData = subjects[selectedSubject].data;
    if (webQuestionCount > 0) {
      const relevantWebQuestions = webQuestions.filter(q => {
        // Only include web questions for selected units
        return selectedUnits.some(unitId => {
          const unit = currentSubjectData.units.find(u => u.unit_id === unitId);
          return unit && q.unit.includes(unit.title);
        });
      });
      // Shuffle and take the requested number of web questions
      const shuffledWebQuestions = [...relevantWebQuestions];
      for (let i = shuffledWebQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledWebQuestions[i], shuffledWebQuestions[j]] = [shuffledWebQuestions[j], shuffledWebQuestions[i]];
      }
      allQuestions.push(...shuffledWebQuestions.slice(0, Math.min(webQuestionCount, shuffledWebQuestions.length)));
    }

    // Filter by difficulty
    let filteredQuestions = difficulty === 'mixed'
      ? allQuestions
      : allQuestions.filter(q => q.difficulty === difficulty);

    // Shuffle questions (Fisher-Yates algorithm)
    const shuffled = [...filteredQuestions];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // Return requested number of questions
    return shuffled.slice(0, Math.min(questionCount, shuffled.length));
  };

  const startQuiz = () => {
    if (!studentName.trim()) {
      alert('Voer asseblief jou naam in!');
      return;
    }
    if (selectedUnits.length === 0) {
      alert('Kies asseblief ten minste een eenheid!');
      return;
    }
    const questions = generateQuestions();
    if (questions.length === 0) {
      alert('Geen vrae beskikbaar vir jou keuses!');
      return;
    }
    setQuizQuestions(questions);
    setGameState('playing');
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setScore(0);
    setShowExplanation(false);
  };

  const handleAnswer = (answer) => {
    const currentQuestion = quizQuestions[currentQuestionIndex];

    if (currentQuestion.type === 'multiple_select') {
      const current = selectedAnswers[currentQuestionIndex] || [];
      const newAnswers = current.includes(answer)
        ? current.filter(a => a !== answer)
        : [...current, answer];
      setSelectedAnswers({ ...selectedAnswers, [currentQuestionIndex]: newAnswers });
    } else {
      setSelectedAnswers({ ...selectedAnswers, [currentQuestionIndex]: answer });
    }
  };

  const submitAnswer = () => {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const userAnswer = selectedAnswers[currentQuestionIndex];

    let isCorrect = false;
    if (currentQuestion.type === 'multiple_select') {
      const correct = currentQuestion.correctAnswers.sort();
      const user = (userAnswer || []).sort();
      isCorrect = JSON.stringify(correct) === JSON.stringify(user);
    } else if (currentQuestion.type === 'true_false') {
      isCorrect = userAnswer === currentQuestion.correctAnswer;
    } else {
      isCorrect = userAnswer === currentQuestion.correctAnswer;
    }

    if (isCorrect) {
      setScore(score + 1);
    }

    setShowExplanation(true);
  };

  const nextQuestion = () => {
    setShowExplanation(false);
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setGameState('results');
    }
  };

  const getGrade = (percentage) => {
    if (percentage >= 90) return { grade: 'A', message: 'Uitstekend! 🌟', color: 'text-green-600' };
    if (percentage >= 80) return { grade: 'B', message: 'Goed gedoen! 👏', color: 'text-blue-600' };
    if (percentage >= 70) return { grade: 'C', message: 'Redelik goed 📚', color: 'text-yellow-600' };
    if (percentage >= 60) return { grade: 'D', message: 'Moet meer oefen 💪', color: 'text-orange-600' };
    return { grade: 'E', message: 'Vra hulp en bestudeer weer 🎓', color: 'text-red-600' };
  };

  const resetQuiz = () => {
    setGameState('setup');
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setQuizQuestions([]);
    setScore(0);
    setReviewMode(false);
  };

  const toggleUnitSelection = (unitId) => {
    setSelectedUnits(prev =>
      prev.includes(unitId)
        ? prev.filter(id => id !== unitId)
        : [...prev, unitId]
    );
  };

  // Setup Screen
  if (gameState === 'setup') {
    const currentSubject = subjects[selectedSubject];
    const currentSubjectData = currentSubject.data;

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <BookOpen className="w-16 h-16 mx-auto text-blue-600 mb-4" />
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                Toets Stelsel
              </h1>
              <p className="text-gray-600">Kies jou vak en begin</p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-3 mb-6">
              <button
                onClick={() => setGameState('history')}
                className="flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition font-medium"
              >
                <History className="w-5 h-5" />
                Bekyk Geskiedenis
              </button>
            </div>

            <div className="space-y-6">
              {/* Subject Selection */}
              <div>
                <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                  Kies Vak:
                </h2>
                <select
                  value={selectedSubject}
                  onChange={(e) => {
                    setSelectedSubject(e.target.value);
                    setSelectedUnits([]); // Reset unit selection when changing subject
                  }}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none text-lg bg-white"
                >
                  {Object.entries(subjects).map(([key, subject]) => (
                    <option key={key} value={key}>
                      {subject.name} - {subject.grade} {subject.quarter}
                    </option>
                  ))}
                </select>
              </div>

              {/* Student Name */}
              <div>
                <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <User className="w-6 h-6 text-blue-600" />
                  Jou Naam:
                </h2>
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="Voer jou naam in..."
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none text-lg"
                  maxLength={50}
                />
              </div>

              {/* Unit Selection */}
              <div>
                <h2 className="text-xl font-semibold mb-3">Kies Eenhede:</h2>
                <div className="space-y-2">
                  {currentSubjectData.units.map(unit => (
                    <label key={unit.unit_id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-blue-50">
                      <input
                        type="checkbox"
                        checked={selectedUnits.includes(unit.unit_id)}
                        onChange={() => toggleUnitSelection(unit.unit_id)}
                        className="w-5 h-5 text-blue-600"
                      />
                      <span className="font-medium">{unit.title} (Bladsy {unit.pages})</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Difficulty */}
              <div>
                <h2 className="text-xl font-semibold mb-3">Moeilikheidsgraad:</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['easy', 'medium', 'hard', 'mixed'].map(diff => (
                    <button
                      key={diff}
                      onClick={() => setDifficulty(diff)}
                      className={`p-3 rounded-lg font-medium transition ${
                        difficulty === diff
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      {diff === 'easy' ? 'Maklik' : diff === 'medium' ? 'Gemiddeld' : diff === 'hard' ? 'Moeilik' : 'Gemeng'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question Count */}
              <div>
                <h2 className="text-xl font-semibold mb-3">Aantal Vrae: {questionCount}</h2>
                <input
                  type="range"
                  min="5"
                  max="100"
                  value={questionCount}
                  onChange={(e) => setQuestionCount(parseInt(e.target.value))}
                  className="w-full"
                />
              </div>

              {/* Web Questions Count */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h2 className="text-xl font-semibold mb-3">
                  Internet Vrae: {webQuestionCount}
                  {webQuestionCount > 0 && <span className="text-sm font-normal text-gray-600 ml-2">(van die internet)</span>}
                </h2>
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={webQuestionCount}
                  onChange={(e) => setWebQuestionCount(parseInt(e.target.value))}
                  className="w-full"
                />
                <p className="text-sm text-gray-600 mt-2">
                  Stel op 0 vir slegs handboek vrae, of kies hoeveel internet vrae jy wil byvoeg
                </p>
              </div>

              {/* Start Button */}
              <button
                onClick={startQuiz}
                className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transition"
              >
                Begin Toets
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Playing Screen
  if (gameState === 'playing') {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const userAnswer = selectedAnswers[currentQuestionIndex];

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            {/* Progress */}
            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Vraag {currentQuestionIndex + 1} van {quizQuestions.length}</span>
                <span>{currentQuestion.unit}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all"
                  style={{ width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <div className="mb-6">
              <div className="flex items-start gap-3 mb-4">
                <h2 className="text-2xl font-bold flex-1">{currentQuestion.question}</h2>
                {currentQuestion.source === 'web' && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-800 border border-purple-300 whitespace-nowrap">
                    🌐 Internet
                  </span>
                )}
              </div>
              {currentQuestion.type === 'multiple_select' && (
                <p className="text-sm text-gray-600 italic">Kies al wat van toepassing is</p>
              )}
              {currentQuestion.source === 'web' && (
                <p className="text-xs text-purple-600 italic mt-2">
                  Hierdie vraag kom van die internet, nie uit die handboek nie
                </p>
              )}
            </div>

            {/* Options */}
            <div className="space-y-3 mb-6">
              {currentQuestion.type === 'true_false' ? (
                <>
                  {[true, false].map(option => (
                    <button
                      key={option.toString()}
                      onClick={() => handleAnswer(option)}
                      disabled={showExplanation}
                      className={`w-full p-4 rounded-xl text-left font-medium transition ${
                        userAnswer === option
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 hover:bg-gray-200'
                      } ${showExplanation ? 'cursor-not-allowed' : ''}`}
                    >
                      {option ? 'Waar' : 'Onwaar'}
                    </button>
                  ))}
                </>
              ) : (
                currentQuestion.options.map((option, idx) => {
                  const isSelected = currentQuestion.type === 'multiple_select'
                    ? (userAnswer || []).includes(option)
                    : userAnswer === option;

                  return (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(option)}
                      disabled={showExplanation}
                      className={`w-full p-4 rounded-xl text-left font-medium transition ${
                        isSelected
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 hover:bg-gray-200'
                      } ${showExplanation ? 'cursor-not-allowed' : ''}`}
                    >
                      {option}
                    </button>
                  );
                })
              )}
            </div>

            {/* Explanation */}
            {showExplanation && (
              <div className="mb-6 p-4 bg-blue-50 rounded-xl">
                <div className="flex items-start space-x-3">
                  {(() => {
                    let isCorrect;
                    if (currentQuestion.type === 'multiple_select') {
                      const correct = currentQuestion.correctAnswers.sort();
                      const user = (userAnswer || []).sort();
                      isCorrect = JSON.stringify(correct) === JSON.stringify(user);
                    } else {
                      isCorrect = userAnswer === currentQuestion.correctAnswer;
                    }
                    return isCorrect ? (
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                    );
                  })()}
                  <div>
                    <p className="font-semibold mb-1">
                      {(() => {
                        let isCorrect;
                        if (currentQuestion.type === 'multiple_select') {
                          const correct = currentQuestion.correctAnswers.sort();
                          const user = (userAnswer || []).sort();
                          isCorrect = JSON.stringify(correct) === JSON.stringify(user);
                        } else {
                          isCorrect = userAnswer === currentQuestion.correctAnswer;
                        }
                        return isCorrect ? 'Korrek!' : 'Verkeerd';
                      })()}
                    </p>
                    <p className="text-sm text-gray-700">{currentQuestion.explanation}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex space-x-3">
              {!showExplanation ? (
                <button
                  onClick={submitAnswer}
                  disabled={!userAnswer || (currentQuestion.type === 'multiple_select' && (!userAnswer || userAnswer.length === 0))}
                  className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  Dien In
                </button>
              ) : (
                <button
                  onClick={nextQuestion}
                  className="flex-1 bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700 transition"
                >
                  {currentQuestionIndex < quizQuestions.length - 1 ? 'Volgende Vraag' : 'Sien Resultate'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Results Screen
  if (gameState === 'results') {
    const percentage = (score / quizQuestions.length) * 100;
    const gradeInfo = getGrade(percentage);

    if (reviewMode) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h1 className="text-3xl font-bold mb-6">Antwoord Hersiening</h1>
              <div className="space-y-6">
                {quizQuestions.map((q, idx) => {
                  const userAnswer = selectedAnswers[idx];
                  let isCorrect;
                  if (q.type === 'multiple_select') {
                    const correct = q.correctAnswers.sort();
                    const user = (userAnswer || []).sort();
                    isCorrect = JSON.stringify(correct) === JSON.stringify(user);
                  } else {
                    isCorrect = userAnswer === q.correctAnswer;
                  }

                  return (
                    <div key={q.id} className={`p-4 rounded-xl ${isCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
                      <div className="flex items-start space-x-3">
                        {isCorrect ? (
                          <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                        ) : (
                          <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                        )}
                        <div className="flex-1">
                          <div className="flex items-start gap-2 mb-2">
                            <p className="font-bold flex-1">Vraag {idx + 1}: {q.question}</p>
                            {q.source === 'web' && (
                              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-purple-100 text-purple-800 border border-purple-300 whitespace-nowrap">
                                🌐 Internet
                              </span>
                            )}
                          </div>
                          <p className="text-sm mb-1">
                            <span className="font-semibold">Jou antwoord: </span>
                            {q.type === 'multiple_select'
                              ? (userAnswer || []).join(', ') || 'Geen'
                              : q.type === 'true_false'
                                ? (userAnswer ? 'Waar' : userAnswer === false ? 'Onwaar' : 'Geen')
                                : userAnswer || 'Geen'}
                          </p>
                          {!isCorrect && (
                            <p className="text-sm mb-1">
                              <span className="font-semibold">Korrekte antwoord: </span>
                              {q.type === 'multiple_select'
                                ? q.correctAnswers.join(', ')
                                : q.type === 'true_false'
                                  ? (q.correctAnswer ? 'Waar' : 'Onwaar')
                                  : q.correctAnswer}
                            </p>
                          )}
                          <p className="text-sm text-gray-700 italic">{q.explanation}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <button
                onClick={resetQuiz}
                className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition"
              >
                Begin Nuwe Toets
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
            <Award className="w-20 h-20 mx-auto text-yellow-500 mb-4" />
            <h1 className="text-4xl font-bold mb-2">Toets Voltooi!</h1>

            <div className="my-8">
              <div className={`text-6xl font-bold ${gradeInfo.color} mb-2`}>
                {gradeInfo.grade}
              </div>
              <p className="text-2xl font-semibold text-gray-700 mb-1">
                {score} / {quizQuestions.length}
              </p>
              <p className="text-xl text-gray-600">{percentage.toFixed(0)}%</p>
              <p className="text-lg mt-4 text-gray-700">{gradeInfo.message}</p>
            </div>

            {webQuestionCount > 0 && (
              <div className="bg-purple-50 p-4 rounded-lg mb-6 border border-purple-200">
                <p className="text-sm text-gray-700">
                  🌐 Hierdie toets het <span className="font-semibold">{quizQuestions.filter(q => q.source === 'web').length}</span> internet vra{quizQuestions.filter(q => q.source === 'web').length === 1 ? 'ag' : 'e'} ingesluit
                </p>
              </div>
            )}

            <div className="space-y-3">
              <button
                onClick={() => setReviewMode(true)}
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition"
              >
                Hersien Antwoorde
              </button>
              <button
                onClick={resetQuiz}
                className="w-full bg-gray-600 text-white py-3 rounded-xl font-bold hover:bg-gray-700 transition flex items-center justify-center space-x-2"
              >
                <RotateCcw className="w-5 h-5" />
                <span>Begin Nuwe Toets</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // History Screen
  if (gameState === 'history') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center gap-3">
                  <History className="w-10 h-10 text-purple-600" />
                  Toets Geskiedenis
                </h1>
                <p className="text-gray-600">Alle vorige toetse</p>
              </div>
              <button
                onClick={() => setGameState('setup')}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
              >
                Terug na Toets
              </button>
            </div>

            {/* Clear History Button */}
            {testHistory.length > 0 && (
              <div className="mb-6 flex justify-end">
                <button
                  onClick={clearHistory}
                  className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition font-medium text-sm"
                >
                  Vee Alle Geskiedenis Uit
                </button>
              </div>
            )}

            {/* Statistics Summary */}
            {testHistory.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                  <div className="text-sm text-gray-600 mb-1">Totale Toetse</div>
                  <div className="text-3xl font-bold text-blue-600">{testHistory.length}</div>
                </div>
                <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                  <div className="text-sm text-gray-600 mb-1">Gemiddelde Punt</div>
                  <div className="text-3xl font-bold text-green-600">
                    {(testHistory.reduce((acc, test) => acc + test.percentage, 0) / testHistory.length).toFixed(0)}%
                  </div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                  <div className="text-sm text-gray-600 mb-1">Beste Graad</div>
                  <div className="text-3xl font-bold text-yellow-600">
                    {testHistory.reduce((best, test) => {
                      const grades = ['A', 'B', 'C', 'D', 'E'];
                      return grades.indexOf(test.grade) < grades.indexOf(best) ? test.grade : best;
                    }, 'E')}
                  </div>
                </div>
                <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
                  <div className="text-sm text-gray-600 mb-1">Hoogste Telling</div>
                  <div className="text-3xl font-bold text-purple-600">
                    {Math.max(...testHistory.map(t => t.percentage)).toFixed(0)}%
                  </div>
                </div>
              </div>
            )}

            {/* History List */}
            {testHistory.length === 0 ? (
              <div className="text-center py-16">
                <History className="w-20 h-20 mx-auto text-gray-300 mb-4" />
                <p className="text-xl text-gray-500">Geen toets geskiedenis nog nie</p>
                <p className="text-gray-400 mt-2">Voltooi jou eerste toets om dit hier te sien</p>
              </div>
            ) : (
              <div className="space-y-4">
                {testHistory.map((test) => (
                  <div
                    key={test.id}
                    className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200 hover:border-purple-300 transition"
                  >
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        {/* Left: Student Info */}
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <User className="w-5 h-5 text-purple-600" />
                            <h3 className="text-xl font-bold text-gray-800">{test.studentName}</h3>
                            <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                              test.grade === 'A' ? 'bg-green-100 text-green-700' :
                              test.grade === 'B' ? 'bg-blue-100 text-blue-700' :
                              test.grade === 'C' ? 'bg-yellow-100 text-yellow-700' :
                              test.grade === 'D' ? 'bg-orange-100 text-orange-700' :
                              'bg-red-100 text-red-700'
                            }`}>
                              Graad {test.grade}
                            </span>
                          </div>
                          {/* Subject Name */}
                          <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 mb-2">
                            <BookOpen className="w-4 h-4" />
                            {test.subjectName || 'Natuurwetenskappe'}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                            <Calendar className="w-4 h-4" />
                            {new Date(test.date).toLocaleString('af-ZA', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </div>
                          <div className="flex flex-wrap gap-2 mt-3">
                            {test.selectedUnits.map((unit, idx) => (
                              <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                                {unit}
                              </span>
                            ))}
                            <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs font-medium">
                              {test.difficulty === 'easy' ? 'Maklik' : test.difficulty === 'medium' ? 'Gemiddeld' : test.difficulty === 'hard' ? 'Moeilik' : 'Gemeng'}
                            </span>
                            {test.webQuestionsIncluded > 0 && (
                              <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">
                                🌐 {test.webQuestionsIncluded} Internet
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Right: Score */}
                        <div className="text-center md:text-right">
                          <div className="text-4xl font-bold text-purple-600 mb-1">
                            {test.percentage.toFixed(0)}%
                          </div>
                          <div className="text-sm text-gray-600 mb-3">
                            {test.score} / {test.totalQuestions} korrek
                          </div>
                          {test.questions && test.questions.length > 0 && (
                            <button
                              onClick={() => {
                                setReviewingTest(test);
                                setGameState('historyReview');
                              }}
                              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium text-sm"
                            >
                              Hersien Antwoorde
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // History Review Screen
  if (gameState === 'historyReview' && reviewingTest) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">Antwoord Hersiening</h1>
                <p className="text-gray-600">
                  {reviewingTest.studentName} - {reviewingTest.subjectName || 'Natuurwetenskappe'}
                </p>
                <p className="text-sm text-gray-500">
                  {new Date(reviewingTest.date).toLocaleString('af-ZA', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
              <button
                onClick={() => setGameState('history')}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition font-medium"
              >
                Terug
              </button>
            </div>

            {/* Score Summary */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 mb-6 border border-purple-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Finale Punt</div>
                  <div className="flex items-center gap-4">
                    <span className="text-4xl font-bold text-purple-600">
                      {reviewingTest.percentage.toFixed(0)}%
                    </span>
                    <span className={`px-4 py-2 rounded-full text-lg font-bold ${
                      reviewingTest.grade === 'A' ? 'bg-green-100 text-green-700' :
                      reviewingTest.grade === 'B' ? 'bg-blue-100 text-blue-700' :
                      reviewingTest.grade === 'C' ? 'bg-yellow-100 text-yellow-700' :
                      reviewingTest.grade === 'D' ? 'bg-orange-100 text-orange-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      Graad {reviewingTest.grade}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-semibold text-gray-700">
                    {reviewingTest.score} / {reviewingTest.totalQuestions}
                  </div>
                  <div className="text-sm text-gray-600">Korrek</div>
                </div>
              </div>
            </div>

            {/* Questions Review */}
            <div className="space-y-6">
              {reviewingTest.questions.map((q, idx) => {
                const userAnswer = reviewingTest.userAnswers[idx];
                let isCorrect;
                if (q.type === 'multiple_select') {
                  const correct = q.correctAnswers.sort();
                  const user = (userAnswer || []).sort();
                  isCorrect = JSON.stringify(correct) === JSON.stringify(user);
                } else {
                  isCorrect = userAnswer === q.correctAnswer;
                }

                return (
                  <div key={q.id} className={`p-4 rounded-xl ${isCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
                    <div className="flex items-start space-x-3">
                      {isCorrect ? (
                        <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      ) : (
                        <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                      )}
                      <div className="flex-1">
                        <div className="flex items-start gap-2 mb-2">
                          <p className="font-bold flex-1">Vraag {idx + 1}: {q.question}</p>
                          {q.source === 'web' && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-purple-100 text-purple-800 border border-purple-300 whitespace-nowrap">
                              🌐 Internet
                            </span>
                          )}
                        </div>
                        <p className="text-sm mb-1">
                          <span className="font-semibold">Jou antwoord: </span>
                          {q.type === 'multiple_select'
                            ? (userAnswer || []).join(', ') || 'Geen'
                            : q.type === 'true_false'
                              ? (userAnswer ? 'Waar' : userAnswer === false ? 'Onwaar' : 'Geen')
                              : userAnswer || 'Geen'}
                        </p>
                        {!isCorrect && (
                          <p className="text-sm mb-1">
                            <span className="font-semibold">Korrekte antwoord: </span>
                            {q.type === 'multiple_select'
                              ? q.correctAnswers.join(', ')
                              : q.type === 'true_false'
                                ? (q.correctAnswer ? 'Waar' : 'Onwaar')
                                : q.correctAnswer}
                          </p>
                        )}
                        <p className="text-sm text-gray-700 italic">{q.explanation}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => setGameState('history')}
              className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition"
            >
              Terug na Geskiedenis
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default NatuurwetenskappeQuiz;
