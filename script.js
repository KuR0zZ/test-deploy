// Show the form for creating article
function showForm() {
    document.getElementById('article-form').style.display = 'block'
}

// Add an article
document.querySelector('#article-form').addEventListener('submit', (event) => {
    // Remove the default behavior of submit
    // If not removed the article will only appear for a second then it will disappear
    event.preventDefault();

    const title = document.getElementById('article-title')
    const imageUrl = document.getElementById('image-url')
    const content = document.getElementById('article-content')

    // Get the current date and time
    const dateTime = new Date()
    const formattedDate = dateTime.toLocaleDateString('en-GB')
    const formattedTime = dateTime.toLocaleTimeString('en-GB', {timeStyle: 'short'})

    // Adding new article to the list of article
    const articleSection = document.getElementById('article-section')

    articleSection.insertAdjacentHTML(
        'beforeend',
        `
        <div class="card mb-3" id="card-1">
        <div class="row g-0">
            <div class="col-md-2">
            <img src=${imageUrl.value} class="img-fluid rounded-start article-img">
            </div>
            <div class="col-md-10">
            <div class="card-body">
                <h5 class="card-title">${title.value}</h5>
                <p class="card-text"><small class="text-body-secondary">published at: ${formattedDate + ' ' + formattedTime}</small></p>
                <p class="card-text">${content.value}</p>
                <button class="btn btn-danger">Delete</button>
            </div>
            </div>
        </div>
        </div>
        `
    )

    // Remove user input from the form
    title.value = ''
    imageUrl.value = ''
    content.value = ''

    // Hide the form from page
    event.target.style.display = 'none'
})

// Delete an article
document.querySelector('#article-section').addEventListener('click', (event) => {
    // Check if target element has 'btn-danger' class
    if(event.target.classList.contains('btn-danger')) {
        // Remove element with 'card' class that is closest the target element
        event.target.closest('.card').remove()
    }
})