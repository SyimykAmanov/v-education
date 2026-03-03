export const subjects = [
  { id: "math", 
    title: "Mathematik", 
    subtitle: "Zahlen, Formeln, logisches Denken – entdecke die Schönheit der Mathematik." 
  },
  { id: "cs", 
    title: "Informatik", 
    subtitle: "Programmieren, Algorithmen, digitale Welten – gestalte die Zukunft." 
  },
  { id: "сhemistry", 
    title: "Chemie", 
    subtitle: "Von Atomen bis zu Reaktionen – verstehe die Bausteine unserer Welt." 
  },
  { id: "biology", 
    title: "Biologie", 
    subtitle: "Leben, Zellen, Ökosysteme – erforsche die Wunder der Natur." 
  },
];

export const lessons = [
  { id: 1, 
    subjectId: "math", 
    title: "Ableitungsregeln (Differentialrechnung)", 
    description: "Lerne die wichtigsten Ableitungsregeln: Potenzregel, Produktregel, Quotientenregel und Kettenregel. Wir zeigen dir Schritt für Schritt, wie du Funktionen ableitest und die Regeln richtig anwendest.",
    videoUrl: 'https://www.youtube.com/embed/1n2Z2YeKj7M?si=5dLpfE1n47ukWdXS',
    homework: [{task: "1. Bilde die Ableitung von f(x) = 3x⁴ + 2x³ - 5x + 7"}, {task: "2. Wende die Produktregel an: f(x) = (2x + 3) · (x² - 1)"}],
    order: 1 
  },
  { id: 2, 
    subjectId: "math", 
    title: "Lineare Gleichungssysteme", 
    description: "Zwei Gleichungen, zwei Unbekannte – wir zeigen dir, wie du lineare Gleichungssysteme löst. Du lernst das Einsetzungsverfahren, Gleichsetzungsverfahren und Additionsverfahren kennen. Perfekt für deine Abiturvorbereitung!", 
    videoUrl: 'https://www.youtube.com/embed/1n2Z2YeKj7M?si=5dLpfE1n47ukWdXS',
    homework: [{task: "Ein Ticket kostet für Erwachsene 8€, für Kinder 5€. Insgesamt wurden 120 Tickets verkauft und 840€ eingenommen. Wie viele Erwachsenen- und Kindertickets wurden verkauft?"}],
    order: 2 
  },
  { id: 6, 
    subjectId: "math", 
    title: "Trigonometrie", 
    description: "Von rechtwinkligen Dreiecken bis zu den trigonometrischen Funktionen – wir erklären dir Sinus, Cosinus und Tangens einfach und verständlich. Du lernst, wie du Seiten und Winkel berechnest und die Einheitskreis-Darstellung verstehst.", 
    videoUrl: 'https://www.youtube.com/embed/1n2Z2YeKj7M?si=5dLpfE1n47ukWdXS',
    homework: [
      {task: "1. In einem rechtwinkligen Dreieck ist die Gegenkathete 5 cm und die Hypotenuse 13 cm. Berechne den Winkel α (sin α = Gegenkathete/Hypotenuse)."},
      {task: "2. Berechne die fehlende Seite: Dreieck mit Winkel β = 35°, Ankathete = 8 cm (cos β = Ankathete/Hypotenuse)"},
      {task: "3. Ein Turm wirft einen Schatten von 20 m. Der Sonnenwinkel beträgt 40°. Wie hoch ist der Turm? (tan α = Gegenkathete/Ankathete)"}
    ],
    order: 3
  },
  { id: 3, 
    subjectId: "cs", 
    title: "Webentwicklung – HTML & CSS Grundlagen", 
    description: "Von der Struktur einer Webseite bis zum perfekten Design – wir zeigen dir, wie du mit HTML die Grundstruktur erstellst und mit CSS deine Seite stylst. Lerne Selektoren, Box-Modell und responsive Design kennen.", 
    videoUrl: 'https://www.youtube.com/embed/1n2Z2YeKj7M?si=5dLpfE1n47ukWdXS',
    homework: [
      {task: "1. Erstelle eine einfache HTML-Seite mit Überschrift, Absatz und einem Bild"},
      {task: "2. Füge eine ungeordnete Liste mit deinen Lieblingsfächern hinzu"},
      {task: "3. Style die Überschrift mit CSS: Farbe deiner Wahl, Schriftgröße 24px, zentriert"}
    ],  
    order: 1 
  },
  { id: 4, 
    subjectId: "chemistry", 
    title: "Atombau und Periodensystem", 
    description: "Was ist ein Atom und wie ist es aufgebaut? Wir erklären dir Protonen, Neutronen, Elektronen und wie das Periodensystem der Elemente funktioniert. Lerne, wie du Atombau, Isotope und die Anordnung der Elemente verstehst – die Basis für alles Weitere in der Chemie!", 
    videoUrl: 'https://www.youtube.com/embed/1n2Z2YeKj7M?si=5dLpfE1n47ukWdXS',
    homework: [{task: "Zeichne ein Atom mit den Bezeichnungen: Atomkern, Protonen, Neutronen, Elektronenhülle, Elektronen"}],   
    order: 1 
  },
  { id: 5, 
    subjectId: "chemistry", 
    title: "Chemische Bindungen", 
    description: "Warum verbinden sich Atome miteinander? Wir zeigen dir die drei wichtigen Bindungsarten: Ionenbindung, Atombindung (Elektronenpaarbindung) und Metallbindung. Mit vielen Beispielen und einfachen Erklärungen verstehst du, wie Moleküle und Salze entstehen.", 
    videoUrl: 'https://www.youtube.com/embed/1n2Z2YeKj7M?si=5dLpfE1n47ukWdXS',
    homework: [
      {task: "1. Erkläre die Ionenbindung am Beispiel von Kochsalz (NaCl). Wie entstehen Na⁺ und Cl⁻?"},
      {task: "2. Zeichne die Elektronenpaarbindung von Wasser (H₂O) mit allen Elektronen"}
    ],   
    order: 2
  },
  { id: 6, 
    subjectId: "biology", 
    title: "Zellbiologie – Aufbau und Funktion der Zelle", 
    description: "Die Zelle ist die kleinste lebende Einheit – wir zeigen dir, wie sie aufgebaut ist! Lerne Zellorganellen wie Zellkern, Mitochondrien und Ribosomen kennen und verstehe den Unterschied zwischen pflanzlichen und tierischen Zellen. Die Basis für alles Leben", 
    videoUrl: 'https://www.youtube.com/embed/1n2Z2YeKj7M?si=5dLpfE1n47ukWdXS',
    homework: [
      {task: "1. Zeichne eine tierische Zelle und beschrifte: Zellkern, Mitochondrium, Endoplasmatisches Retikulum, Golgi-Apparat, Zellmembran"},
      {task: "2. Was passiert in den Ribosomen?"}
    ],  
    order: 1 
  },
  { id: 7, 
    subjectId: "biologie", 
    title: "Photosynthese und Zellatmung", 
    description: "Wie entsteht aus Sonnenlicht Energie? Wir erklären dir die Photosynthese der Pflanzen und die Zellatmung – zwei der wichtigsten Stoffwechselprozesse überhaupt. Verstehe, wie Pflanzen Nahrung produzieren und wie alle Lebewesen daraus Energie gewinnen.", 
    videoUrl: 'https://www.youtube.com/embed/1n2Z2YeKj7M?si=5dLpfE1n47ukWdXS',
    homework: [],  
    order: 2 
  },
];

export const faqData = [
  {
    question: "Wie viele Videolektionen?",
    answer: "Zwischen 250 und 300"
  },
  {
    question: "Gibt es praktische Übungen?",
    answer: "Ja, sie sind direkt in den Videos integriert"
  }
];