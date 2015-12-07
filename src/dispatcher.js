import { Dispatcher } from 'flux';
var dispatcher = new Dispatcher();

dispatcher.register((e) => console.log(e) );

export default dispatcher;
