// myEach function: Iterates over a collection and invokes a callback for each element
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          callback(collection[key], key, collection);
        }
      }
    }
    return collection;
  }
  
  // myMap function: Maps each element of a collection through a transformation function
  function myMap(collection, callback) {
    let result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result.push(callback(collection[i], i, collection));
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          result.push(callback(collection[key], key, collection));
        }
      }
    }
    return result;
  }
  
  // myReduce function: Reduces a collection into a single value based on a callback and accumulator
  function myReduce(collection, callback, acc) {
    let isArray = Array.isArray(collection);
  
    // If no initial accumulator is provided and it's an array
    if (acc === undefined) {
      if (isArray) {
        acc = collection[0];
        collection = collection.slice(1); // Exclude the first element from iteration
      } else {
        const keys = Object.keys(collection);
        acc = collection[keys[0]];
        collection = keys.slice(1).reduce((obj, key) => {
          obj[key] = collection[key];
          return obj;
        }, {});
      }
    }
  
    if (isArray) {
      for (let i = 0; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection);
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          acc = callback(acc, collection[key], collection);
        }
      }
    }
  
    return acc;
  }
  
  // myFind function: Finds the first element in the collection that satisfies the predicate
  function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i], i, collection)) {
          return collection[i];
        }
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          if (predicate(collection[key], key, collection)) {
            return collection[key];
          }
        }
      }
    }
    return undefined;
  }
  
  // myFilter function: Filters a collection by a predicate function, returning an array of matching elements
  function myFilter(collection, predicate) {
    let result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i], i, collection)) {
          result.push(collection[i]);
        }
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          if (predicate(collection[key], key, collection)) {
            result.push(collection[key]);
          }
        }
      }
    }
    return result;
  }
  
  // mySize function: Returns the number of elements in a collection
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  
  // myFirst function: Returns the first element or first n elements of an array
  function myFirst(array, n) {
    if (n === undefined) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }
  
  // myLast function: Returns the last element or last n elements of an array
  function myLast(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    } else {
      return array.slice(array.length - n);
    }
  }
  
  // myKeys function: Returns an array of the object's keys
  function myKeys(object) {
    let keys = [];
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
    return keys;
  }
  
  // myValues function: Returns an array of the object's values
  function myValues(object) {
    let values = [];
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        values.push(object[key]);
      }
    }
    return values;
  }
  
  // BONUS: mySortBy function: Sorts an array based on the callback function
  function mySortBy(array, callback) {
    return array.slice().sort((a, b) => {
      return callback(a) - callback(b);
    });
  }
  
  // BONUS: myFlatten function: Flattens a nested array
  function myFlatten(array, shallow = false, newArr = []) {
    if (shallow) {
      return array.reduce((acc, val) => acc.concat(val), []);
    } else {
      array.forEach(val => {
        if (Array.isArray(val)) {
          myFlatten(val, shallow, newArr);
        } else {
          newArr.push(val);
        }
      });
    }
    return newArr;
  }
  