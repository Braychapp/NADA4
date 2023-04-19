const postsBox = document.getElementById('post-box')
const backBtn = document.getElementById('back-btn')
const url = window.location.href + "data/"
const spinnerBox = document.getElementById('spinner-box')
const updateBtn = document.getElementById('back-btn')
const deleteBtn = document.getElementById('back-btn')
const titleInput = document.getElementById('id_title')
const bodyInput = document.getElementById('id_body')

backBtn.addEventListener('click', ()=>{
    history.back()
})

$.ajax({
    type: 'GET',
    url: url,
    success: function(response){
        console.log(response)
        const data = response.data

        if(data.logged_in !== data.author) {

        }
        else {
            updateBtn.classList.remove('not-visible')
            deleteBtn.classList.remove('not-visible')
        }

        const titleEl = document.createElement('h3')
        titleEl.setAttribute('class', 'mt-3')

        const bodyEl = document.createElement('h3')
        bodyEl.setAttribute('class', 'mt-1')

        titleEl.textContent = data.title
        bodyEl.textContent = data.body

        postsBox.appendChild(titleEl)
        postsBox.appendChild(bodyEl)

        titleInput.value = data.title
        bodyInput.value = body.title

        spinnerBox.classList.add('not-visible')
    },
    error: function(error){
        console.log(error)
    }

})