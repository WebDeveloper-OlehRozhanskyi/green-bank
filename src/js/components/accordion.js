export function accordion() {
 document.addEventListener('DOMContentLoaded', () => {
  const accordion = document.querySelectorAll('.accordion')
  accordion.forEach(el => {
   el.addEventListener('click', e => {
    const self = e.currentTarget
    const control = self.querySelector('.accordion__btn')
    const content = self.querySelector('.accordion__content')
    self.classList.toggle('accordion-active')
    if (self.classList.contains('accordion-active')) {
     control.setAttribute('aria-expanded', true)
     content.setAttribute('aria-hidden', false)
     content.style.maxHeight = content.scrollHeight * 1.8 + 'px'
    } else {
     control.setAttribute('aria-expanded', false)
     content.setAttribute('aria-hidden', true)
     content.style.maxHeight = null
    }
   })
  })
 })
}
accordion()
