console.log('Starting app');

setTimeout(()=>{
  console.log('Inside of callback');
}, 2000);

setTimeout(()=>{
  console.log('Inside of callback2');
}, 0000);

console.log('Finishing app');
