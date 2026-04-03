export const VideoPlayer = ({className, id, url}) => {
    return `
        <div class="${className}" id="${id}">
          <iframe class="lesson__iframe"
            src="${url}"
            frameborder="0"
            allowfullscreen></iframe>
        </div>
    `
};