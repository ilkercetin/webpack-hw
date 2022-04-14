import _ from 'lodash';

function component() {
    const element = document.createElement('div');
  
    element.innerHTML = 'İlker Çetin Webpack HW'
  
    return element;
  }
  
  document.body.appendChild(component());

  setTimeout(() => {
    console.log('Settimeout example');
  }, 2000);