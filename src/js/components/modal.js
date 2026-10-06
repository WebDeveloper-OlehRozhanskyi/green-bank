export function modal() {
 const btns = document.querySelectorAll('*[data-modal-open-btn]')
 const modalOverlay = document.querySelector('.modals__overlay')
 const modalsItem = document.querySelectorAll('.modals__item')
 const body = document.querySelector('.body')
 const modalButtonClose = document.querySelectorAll('.modals-btn-close')
 const menuWrap = document.querySelector('.menu')
 const menuBtn = document.querySelector('.burger-btn')
 const header = document.querySelector('.header')
 const wrapper = document.querySelector('.wrapper')
 const focusElement = ['a[href]', 'input', 'button', 'select', 'textarea']

 btns.forEach(el => {
  el.addEventListener('click', e => {
   let previousActiveElement = e.currentTarget

   let path = e.currentTarget.getAttribute('data-modal-open-btn')

   modalsItem.forEach(el => {
    el.classList.remove('modals__item--visible')
   })

   const targetModal = document.querySelector(`[data-modal-window="${path}"]`)
   wrapper.setAttribute('inert', 'true')

   modalOverlay.classList.add('modals__overlay--visible')

   body.classList.add('menu-active')

   targetModal.classList.add('modals__item--visible')

   targetModal.setAttribute('aria-hidden', 'false')

   const focusElementModal = targetModal.querySelectorAll(focusElement)

   if (targetModal) {
    setTimeout(() => {
     focusElementModal[0].focus()
    }, 200)
   }

   menuWrap.classList.remove('menu-active')
   menuBtn.classList.remove('menu-active')
   header.classList.remove('menu-active')

   if (menuWrap.classList.contains('menu-active')) {
    menuBtn.setAttribute('aria-label', 'close menu')
    menuBtn.setAttribute('aria-expanded', 'true')
   } else {
    menuBtn.setAttribute('aria-label', 'open menu')
    menuBtn.setAttribute('aria-expanded', 'false')
   }
   modalButtonClose.forEach(el => {
    el.addEventListener('click', () => {
     previousActiveElement.focus()
    })
   })
  })
 })

 modalOverlay.addEventListener('click', e => {
  if (e.target === modalOverlay) {
   wrapper.removeAttribute('inert', 'true')
   modalOverlay.classList.remove('modals__overlay--visible')
   body.classList.remove('menu-active')
   modalsItem.forEach(el => {
    el.classList.remove('modals__item--visible')
    el.setAttribute('aria-hidden', 'true')
   })
  }
 })

 modalButtonClose.forEach(el => {
  el.addEventListener('click', () => {
   wrapper.removeAttribute('inert', 'true')
   modalOverlay.classList.remove('modals__overlay--visible')
   body.classList.remove('menu-active')
   modalsItem.forEach(el => {
    el.classList.remove('modals__item--visible')
    el.setAttribute('aria-hidden', 'true')
   })
  })
 })
}

modal()
