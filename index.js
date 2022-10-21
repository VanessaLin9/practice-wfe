const input = document.querySelector('#action_input_1')
const darkModeToggle = document.querySelector('#dark_mode_toggle')

function toggleMenu (){
  const menu = document.querySelector('#action_menu_1')
  menu.classList.toggle('hidden')
}

function darkModeToggleHandle(e){
  console.log(document.documentElement)
  if(e.target.checked === true){
    console.log('checked')
    document.documentElement.setAttribute("data-theme", "dark")
  } else {
    console.log('unchecked')
    document.documentElement.setAttribute("data-theme", "light")
  }
}

input.addEventListener('click', toggleMenu)
darkModeToggle.addEventListener('change', darkModeToggleHandle)
// check & uncheck 都要觸發