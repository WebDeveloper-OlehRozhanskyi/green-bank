export function scrollEffect() {
 document.addEventListener('scroll', function () {
  const targetElement = document.querySelector('.design__block-card')

  const elementPosition = targetElement.getBoundingClientRect().bottom

  const windowHeight = window.innerHeight

  const viewportMiddle = windowHeight * 0.9

  if (
   Math.abs(elementPosition - viewportMiddle) < 10 ||
   elementPosition < viewportMiddle
  ) {
   targetElement.classList.add('active')
  }
 })
}

scrollEffect()

export function scrollEffect2() {
 document.addEventListener('scroll', function () {
  const targetElement = document.querySelector('.find__block-card')

  const elementPosition = targetElement.getBoundingClientRect().bottom

  const windowHeight = window.innerHeight

  const viewportMiddle = windowHeight * 0.9

  if (
   Math.abs(elementPosition - viewportMiddle) < 10 ||
   elementPosition < viewportMiddle
  ) {
   targetElement.classList.add('active')
  }
 })
}

scrollEffect2()
