const entryForm = document.getElementById('entryForm')
const entryInput = document.querySelector('#journalEntry')
const entriesContainer = document.querySelector('#entries')

entryForm.addEventListener('submit', e => {
  e.preventDefault()

  const entry = entryInput.value
  entryInput.value = ''

  const entryLi = document.createElement('li')
  entryLi.textContent = entry

  entriesContainer.querySelector('.entry-list').append(entryLi)
})
