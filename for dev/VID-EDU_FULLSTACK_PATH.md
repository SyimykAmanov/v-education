# VID-EDU — Full-Stack Learning Path

## 🎯 Главная цель

Стать Full-Stack разработчиком через построение реального учебного проекта.

Проект: **vid-edu** — онлайн платформа подготовки к экзамену.

Обучение строится:
- от сложного к простому
- через архитектурное мышление
- через практику
- через постепенное усложнение

---

# 🧠 Текущий уровень ученика

## Что уже освоено:

### 1. SPA (Single Page Application)
- History API
- pushState
- popstate
- перехват ссылок
- server fallback через Vite
- виртуальные маршруты

### 2. Router (собственная реализация)
- pattern matching
- динамические параметры (:subjectId, :lessonId)
- parsePath()
- match()
- render()
- navigate()
- 404 обработка

### 3. Архитектура проекта

Структура:
# VID-EDU — Full-Stack Learning Path

## 🎯 Главная цель

Стать Full-Stack разработчиком через построение реального учебного проекта.

Проект: **vid-edu** — онлайн платформа подготовки к экзамену.

Обучение строится:
- от сложного к простому
- через архитектурное мышление
- через практику
- через постепенное усложнение

---

# 🧠 Текущий уровень ученика

## Что уже освоено:

### 1. SPA (Single Page Application)
- History API
- pushState
- popstate
- перехват ссылок
- server fallback через Vite
- виртуальные маршруты

### 2. Router (собственная реализация)
- pattern matching
- динамические параметры (:subjectId, :lessonId)
- parsePath()
- match()
- render()
- navigate()
- 404 обработка

### 3. Архитектура проекта

Структура:
index.html
js/
main.js
core/
router.js
pages/
homePage.js
subjectPage.js
lessonPage.js
components/
data/
lessons.js
dataService.js
css/
assets/


### 4. Разделение ответственности (Separation of Concerns)

- main.js → точка входа
- router.js → маршрутизация
- pages → представление
- dataService → слой данных
- data → источник данных

### 5. Устойчивость к ошибкам
- 404 маршруты
- null проверки
- homework ?? []
- lesson not found
- subject not found

---

# 🏗 Текущая архитектура

## main.js

- конфигурирует routes
- создает router
- вызывает router.init()

## router.js

- parsePath(pattern, pathname)
- match()
- render()
- navigate()
- onLinkClick()
- init()

## routes

### 4. Разделение ответственности (Separation of Concerns)

- main.js → точка входа
- router.js → маршрутизация
- pages → представление
- dataService → слой данных
- data → источник данных

### 5. Устойчивость к ошибкам
- 404 маршруты
- null проверки
- homework ?? []
- lesson not found
- subject not found

---

# 🏗 Текущая архитектура

## main.js

- конфигурирует routes
- создает router
- вызывает router.init()

## router.js

- parsePath(pattern, pathname)
- match()
- render()
- navigate()
- onLinkClick()
- init()

## routes
[
{ pattern: "/", page: homePage },
{ pattern: "/subject/:subjectId", page: subjectPage },
{ pattern: "/subject/:subjectId/lesson/:lessonId", page: lessonPage }
]


---

# 📦 Слой данных

## data/lessons.js

### subjects

```js
[
  { id: "math", title: "Математика", subtitle: "..." },
  { id: "grammar", title: "Грамматика", subtitle: "..." },
  { id: "reading", title: "Чтение и понимание", subtitle: "..." },
  { id: "analogies", title: "Аналогия...", subtitle: "..." }
]

[
  {
    id: 1,
    subjectId: "math",
    title: "Тригонометрия",
    description: "...",
    videoUrl: "...",
    homework: [{ task: "..." }],
    order: 1
  },
  ...
]

dataService.js

Предоставляет:

getSubjectById()

getLessonsBySubjectId()

getLesson()

Страницы НЕ импортируют данные напрямую.


🧩 Страницы
homePage

hero

список разделов

FAQ

subjectPage

получает subjectId

получает subject через dataService

получает список уроков

сортирует по order

рендерит список карточек

lessonPage

получает subjectId + lessonId

получает урок через dataService

обрабатывает отсутствие урока

безопасно обрабатывает homework

вставляет iframe


Текущий этап обучения

Мы перешли от:

верстки

query параметров

множественных HTML файлов

К:

SPA архитектуре

собственному роутеру

слою данных

архитектурному разделению

🚀 Следующий этап

Ввести компонентную систему.


📍 Долгосрочный маршрут
Уровень 1 — Frontend Architecture

компоненты

layout abstraction

состояние приложения

кеширование

оптимизация

тестирование

Уровень 2 — Backend

Node.js

Express

REST API

PostgreSQL

JWT

middleware

validation

Уровень 3 — Full Production

Docker

деплой

CI/CD

безопасность

логирование

Уровень 4 — React Migration

перенос SPA на React

hooks

router

server state

🧠 Метод обучения

одно задание за раз

проверка кода

исправление ошибок

объяснение смысла архитектуры

контроль когнитивной нагрузки

📌 Принцип

Страницы знают ЧТО получить.
DataService знает ОТКУДА получить.
Router знает КОГДА показать.
main.js знает КАК всё соединить.

Конец текущей точки

Проект стабилен.
Архитектура чистая.
Ученик готов к компонентному уровню.