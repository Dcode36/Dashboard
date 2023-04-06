

const mediaQuery = window.matchMedia('(max-width: 900px)');

function handleWidthChange(e) {
  if (e.matches) {
    window.alert('Please Shift to Desktop For Better Experience 😃');
  }
}

mediaQuery.addEventListener('change', handleWidthChange);


