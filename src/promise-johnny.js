import five from 'johnny-five';

export default function promiseJohnny(options){
  var board = new five.Board(options);

  board.ready =  Promise(function(accecpt, reject){
    board.on('ready', () => accecpt(board));
    board.on('fail', (event) => reject(event, board))
  });

  return board;
};
