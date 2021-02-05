let allButtons = document.querySelectorAll('.btn');

allButtons.forEach(button => {
  button.addEventListener('click', toggleAnimationClass);
})

function toggleAnimationClass({target}) {
  target.classList.toggle('btn--active');
  
  // if(target.classList.contains('btn--active')) {
  //   target.classList.add('setInactive');
  //   target.classList.remove('btn--active');
  // } else {
  //   target.classList.remove('setInactive');
  //   target.classList.add('btn--active');
  // }
    
}

// feather.replace();