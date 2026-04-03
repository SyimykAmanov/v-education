export const Homework = ({tasks = ""}) => {
    tasks = tasks ?? [];
    const homeWorkList = tasks.length ? tasks.map(homework => `<li>${homework.task}</li>`).join("") : `<li>Keine Hausaufgaben</li>`; 

    return `
    <div class="lesson__homework">
      <h3 class="lesson__homework-title">Hausaufgaben:</h3>
      <ul class="lesson__homework-list" id="lessonHomework">${homeWorkList}</ul>
    </div>`
}