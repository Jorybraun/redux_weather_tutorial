// the first arugmet is always our state
// the second argument is always the action

export default function(state = null, action){
  console.log('Action received', action);
  return state;
}