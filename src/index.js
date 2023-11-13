
const scriptURL = 'https://script.google.com/macros/s/AKfycbxgTPinvYK_9uY_RlbTj2Wu1_U-9ZLald0s2-2qrn9NQTtub7xCPclvW3ZVc0wQzIU/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = 'Thank You For Subscribing!'
            setTimeout(function () {
                msg.innerHTML = ''
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})