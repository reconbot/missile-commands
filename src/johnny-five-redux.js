import { Firmata as MockFirmata } from 'mock-firmata';
import five from 'johnny-five';
import promiseJohnny from './promise-johnny';

var board = new five.Board({
  io: new MockFirmata(),
  repl: false
});

// dispatchEvent = ()=>{};

board.on('ready', ()=>{
  var button = new five.Button(4);
  button.on('press', () => {
    dispatchEvent({
      type: 'button:press'
    });
  })

});


function actionify(device, name, event, callback) {
  device.on(event, (data) => {
    callback({
      type: `${name}:${event}`,
      payload: data
    });
  })
}

