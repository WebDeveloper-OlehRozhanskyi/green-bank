!function(){let e=document.querySelector(".burger-btn"),t=document.querySelector(".menu"),r=document.querySelectorAll(".menu__link"),l=document.querySelector(".header"),a=document.querySelector(".body"),s=()=>{t.classList.toggle("menu-active"),e.classList.toggle("menu-active"),l.classList.toggle("menu-active"),t.classList.contains("menu-active")?(e.setAttribute("aria-label","close menu"),e.setAttribute("aria-expanded","true")):(e.setAttribute("aria-label","open menu"),e.setAttribute("aria-expanded","false"))};e.addEventListener("click",()=>{s(a.classList.toggle("menu-active"))}),r.forEach(e=>{e.addEventListener("click",()=>{s(a.classList.remove("menu-active"))})});for(let e=0;e<r.length;e++)r[e].addEventListener("click",function(){for(let e=0;e<r.length;e++)r[e].classList.remove("menu-active");this.classList.add("menu-active")})}(),function(){let e=document.querySelector(".header"),t=document.querySelector(".header__container");window.addEventListener("scroll",()=>{let r=window.scrollY;r>55?(e.classList.add("header-scrolling"),t.classList.add("header-scrolling")):e.classList.remove("header-scrolling"),document.querySelectorAll(".section").forEach((e,t)=>{e.offsetTop-document.querySelector(".header").clientHeight<=r&&(document.querySelectorAll(".menu__link").forEach(e=>{e.classList.contains("menu-active")&&e.classList.remove("menu-active")}),document.querySelectorAll(".menu__item")[t].querySelector(".menu__link").classList.add("menu-active"))})})}(),function(){let e=document.querySelectorAll("*[data-modal-open-btn]"),t=document.querySelector(".modals__overlay"),r=document.querySelectorAll(".modals__item"),l=document.querySelector(".body"),a=document.querySelectorAll(".modals-btn-close"),s=document.querySelector(".menu"),c=document.querySelector(".burger-btn"),i=document.querySelector(".header"),o=document.querySelector(".wrapper"),n=["a[href]","input","button","select","textarea"];e.forEach(e=>{e.addEventListener("click",e=>{let u=e.currentTarget,d=e.currentTarget.getAttribute("data-modal-open-btn");r.forEach(e=>{e.classList.remove("modals__item--visible")});let m=document.querySelector(`[data-modal-window="${d}"]`);o.setAttribute("inert","true"),t.classList.add("modals__overlay--visible"),l.classList.add("menu-active"),m.classList.add("modals__item--visible");let v=m.querySelectorAll(n);m&&setTimeout(()=>{v[0].focus()},200),s.classList.remove("menu-active"),c.classList.remove("menu-active"),i.classList.remove("menu-active"),s.classList.contains("menu-active")?(c.setAttribute("aria-label","close menu"),c.setAttribute("aria-expanded","true")):(c.setAttribute("aria-label","open menu"),c.setAttribute("aria-expanded","false")),a.forEach(e=>{e.addEventListener("click",()=>{u.focus()})})})}),t.addEventListener("click",e=>{e.target==t&&(o.removeAttribute("inert","true"),t.classList.remove("modals__overlay--visible"),l.classList.remove("menu-active"),r.forEach(e=>{e.classList.remove("modals__item--visible")}))}),a.forEach(e=>{e.addEventListener("click",()=>{o.removeAttribute("inert","true"),t.classList.remove("modals__overlay--visible"),l.classList.remove("menu-active"),r.forEach(e=>{e.classList.remove("modals__item--visible")})})})}();