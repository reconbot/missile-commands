

function render(state){
  switch(state){
    case 'rest':
      LaunchLight.off(); break;
    case 'armed':
      LaunchLight.on(); break;
    case 'launched':
      launch(); break;
  }
}
