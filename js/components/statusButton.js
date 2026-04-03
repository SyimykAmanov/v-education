export const StatusButton = ({isCompleted, dataId}) => {
    const text = isCompleted ? "Erldeigt": "als abgeschlossen markieren";
    const className = `button completed-button ${isCompleted ? "active": ""}`;

    return `
    <button class="${className}" data-id="${dataId}" id="completed-btn"> 
        ${text}
    </button>
    `
};
