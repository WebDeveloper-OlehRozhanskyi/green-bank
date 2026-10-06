export function linkMessage() {
 document.addEventListener('click', addMessage)

 function addMessage(event) {
  const targetItem = event.target

  if (targetItem.closest('.message')) {
   const perrentElement = targetItem.closest('.message')

   const newElement = document.createElement('span')

   newElement.textContent = 'the link is not connected'

   perrentElement.appendChild(newElement)

   newElement.classList.add('message-active')

   const rect = newElement.getBoundingClientRect()

   if (rect.right > window.innerWidth) {
    newElement.style.left = 'auto'
    newElement.style.right = 0
   }

   setTimeout(() => {
    newElement.remove()
   }, 2000)

   event.preventDefault()
  }
 }
}

linkMessage()
