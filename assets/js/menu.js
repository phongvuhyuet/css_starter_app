// menu btn
const header = document.getElementById('header')
const menuBtn = document.getElementById('menu-button')

const menuHeight = header.clientHeight
menuBtn.onclick = () => {

  if (header.clientHeight === menuHeight) {
    console.log(1);
    header.style.height = 'auto'
  } else {
    header.style.height = null
  }
} 

// auto close menu
const menuItems = document.querySelectorAll('#header a[href*="#"]')
menuItems.forEach(element => {
 
  const isSubnavButton = element.nextElementSibling != null && element?.nextElementSibling?.id === 'subnav' 
  element.onclick = (e) =>  {
    if (!isSubnavButton) {
    header.style.height = null
    } else {
      e.preventDefault()
    }
  } 
});