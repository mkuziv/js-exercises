//task 1 
function compareObject(obj1, obj2) {
  console.log(JSON.stringify(obj1) === JSON.stringify(obj2));
}
compareObject({ hair: 'long', beard: true }, { hair: 'long', beard: true });