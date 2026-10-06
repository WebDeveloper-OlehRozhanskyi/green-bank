export function burger() {
 const menuBtn = document.querySelector('.burger-btn')
 const menuWrap = document.querySelector('.menu')
 const menuLink = document.querySelectorAll('.menu__link')
 const headerSite = document.querySelector('.header')
 const body = document.querySelector('.body')
 const toggleMenu = () => {
  menuWrap.classList.toggle('menu-active')
  menuBtn.classList.toggle('menu-active')
  headerSite.classList.toggle('menu-active')

  if (menuWrap.classList.contains('menu-active')) {
   menuBtn.setAttribute('aria-label', 'close menu')
   menuBtn.setAttribute('aria-expanded', 'true')
  } else {
   menuBtn.setAttribute('aria-label', 'open menu')
   menuBtn.setAttribute('aria-expanded', 'false')
  }
 }
 menuBtn.addEventListener('click', () => {
  toggleMenu(body.classList.toggle('menu-active'))
 })
 menuLink.forEach(link => {
  link.addEventListener('click', () => {
   toggleMenu(body.classList.remove('menu-active'))
  })
 })

 for (let i = 0; i < menuLink.length; i++) {
  menuLink[i].addEventListener('click', function () {
   for (let u = 0; u < menuLink.length; u++) {
    menuLink[u].classList.remove('menu-active')
   }
   this.classList.add('menu-active')
  })
 }
}
burger()
