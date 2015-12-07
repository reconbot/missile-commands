import dispatcher from '../dispatcher'
import EventEmitter from 'events';

var store = new EventEmitter();

var state = store.state =  {
  state: 'rest'
};

function armed() {
  state.state = 'armed';
}

function unarmed() {
  state.state = 'rest';
}

function launch() {
  if (state.state === 'armed') {
    state.state = 'launched';
  }
}

dispatcher.register( event => {
  switch(event.type){
    case 'armer:closed': armed(); break;
    case 'armer:open': unarmed(); break;
    case 'launcher:press': launch(); break;
    default: console.log('unhandled event', event);
  }
  store.emit('change', state);
});

export default store;
