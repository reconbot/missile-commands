export function launch(){
  return {
    type: 'launcher:press'
  };
}

export function arm(){
  return {
    type: 'armer:closed'
  };
}

export function disarm(){
  return {
    type: 'armer:open'
  };
}
