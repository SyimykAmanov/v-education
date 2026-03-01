export const subjects = [
  { id: "math", 
    title: "Математика", 
    subtitle: "Это раздел о математике" 
  },
  { id: "grammar", 
    title: "Грамматика", 
    subtitle: "Это раздел о грамматике" 
  },
  { id: "reading", 
    title: "Чтение и понимание", 
    subtitle: "Это раздел о чтении и понимании" 
  },
  { id: "analogies", 
    title: "Аналогия и дополнение предложений", 
    subtitle: "Это раздел об аналогии..." 
  },
];

export const lessons = [
  { id: 1, 
    subjectId: "math", 
    title: "Тригонометрия", 
    description: "Тригонометрия (от греч. trigonon — треугольник и metreo — измеряю) — это раздел математики, который изучает зависимости между сторонами и углами треугольников, а также свойства тригонометрических функций.",
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    homework: [{task: "1. выполни это задание"}, {task: "2. выполни то задание"}],
    order: 1 
  },
  { id: 2, 
    subjectId: "math", 
    title: "Производное", 
    description: "Производная в математике — это фундаментальное понятие дифференциального исчисленияопределяющее скорость изменения функции в данной точке.", 
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    homework: [],
    order: 2 
  },
  { id: 6, 
    subjectId: "math", 
    title: "Арифметика", 
    description: "Арифметика (от греч. «число») — это древнейший и базовый раздел математикиизучающий простейшие свойства чисел (натуральныхцелыхрациональных) и действия над ними", 
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    homework: [],
    order: 3
  },
  { id: 3, 
    subjectId: "grammar", 
    title: "Части речи", 
    description: "Части речи — это основные лексико-грамматические группы слов в русском языке, объединенные общим значением (предмет, признак, действие), морфологическими признаками (род, число, падеж) и синтаксической ролью в предложении", 
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    homework: [],  
    order: 1 
  },
  { id: 4, 
    subjectId: "reading", 
    title: "Быстро уловить смысл текста", 
    description: "Быстро уловить смысл текста — это навык активного чтения, который сочетает скорочтение и аналитические техники.", 
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    homework: [],   
    order: 1 
  },
  { id: 5, 
    subjectId: "analogies", 
    title: "Аналогии противоположностей", 
    description: "это тип словесной аналогии, где между словами в парах существует отношение противоположности (антонимы).", 
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    homework: [],  
    order: 1 
  },
];

export const faqData = [
  {
    question: "Сколько видео уроков?",
    answer: "От 250 до 300"
  },
  {
    question: "Имеются ли практические задания?",
    answer: "Да, они внедрены в видео"
  }
];