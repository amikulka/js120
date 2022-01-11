function objectsEqual(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

  for (let prop in obj1) {
    if (!obj2.hasOwnProperty(prop)) return false;
    
    if(typeof obj1[prop] === 'object') {
      return objectsEqual(obj1[prop], obj2[prop]);
    } else if (obj2[prop] !== obj1[prop]) {
      return false;
    }
  }

  return true;
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false