const entryForm = document.getElementById('entryForm')
const entryInput = document.querySelector('#journalEntry')
const entriesContainer = document.querySelector('.entry-list')
const entryList = Array.from(document.querySelectorAll('.single-entry'))
const entryDisplay = document.querySelector('.entry-display')

entryForm.addEventListener('submit', e => {
  e.preventDefault()
  if (entryInput.value) {
    const entryButton = document.createElement('button')
    const entryContent = document.createElement('div')
    const entryLi = document.createElement('li')

    entryLi.classList.add('single-entry')
    entryButton.textContent = entryList.length + 1
    entryContent.classList.add('content')

    entryContent.textContent = entryInput.value
    entryInput.value = ''

    entryLi.append(entryButton)
    entryLi.append(entryContent)

    entryButton.addEventListener('click', e => {
      if (entryDisplay.textContent !== entryContent.textContent) {
        entryDisplay.textContent = entryContent.textContent
      } else {
        entryDisplay.textContent = ''
      }
    })

    entriesContainer.append(entryLi)
    entryList.push(entryLi)
  }
})
