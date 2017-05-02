---
title: Map in JavaScript!
date: 2017-05-02
layout: Post
hero: https://c1.staticflickr.com/3/2863/34362718195_533c37be1e_h.jpg
disqus_id: '20170502'
---

# Map in JavaScript

A week ago, I need to use Hashmap in JavaScript because Hashmap is useful to modify an object without having time complexity issue. When I was in University, I learned Hashmap is a implementation of the map interface in Java. But how to use it JavaScript ?
JavaScript is high-level language. It's object included a hash table to keep properties. So I can just simply search object using a unique key value. The key of an object can not be number.


### The first part show how to use it without using ES6(ECMAScript 2015) Build-in Object Map

```js
// Create the Hashmap
var Students = {}

// Add keys to the Hashmap
Students['Jack'] = {gender: 'male', age: 10};
Students['Annie'] = {gender: 'Female', age: 11};
Students['Angle'] = {gender: 'Female', age: 9};
Students['Tom'] = {gender: 'male', age: 12};

// Print all objects
Students

// Output - Students
Object {Jack: Object, Annie: Object, Angle: Object, Tom: Object}

// output - Students.Jack
Object {gender: "male", age: 10}

// Check existence of a key and modify the value
// Check if Jack in Students list
if('Jack' in Students) {
  // modify age of Jack
  Students.Jack.age = 11
}

// Output - Students.Jack
Object {gender: "male", age: 11}

```

Now let's see another example how to use Hashmap in Algorithm question **firstNotRepeatingCharacter**

Question: Given a string, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

```js
function firstNotRepeatingCharacter(str) {
  var check = {}
    for(var i =0; i<str.length; i++){
      var char = str[i]
      if(check[char]){
        check[char]++
      }
      else
        check[char] = 1
    }
    for (var j in check){
      if (check[j]==1)
        return j
    }
  return '_'
}

```
### Using ES6 build-in Object Map

The Map object is a simple key/value map, it similar to **Objects** that both let you set/modify keys and values. The biggest difference is Map allow you use any value as key or value. Please read
[Map Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) if you not familiar with it.

Let's see how to use Map to solve **firstNotRepeatingCharacter** question

```js
function firstNotRepeatingCharacter(s) {
    var map = new Map()
    var len = s.length
    for(var i=0; i<len; i++) {
        var character = s[i];
        if (map.has(character)) {
            map.set(character, false);
        } else {  
            map.set(character, true);
        }
    }  
    var charactersInMap = map.keys();
    for(var character of charactersInMap) {
        var val = map.get(character)
        if (val == 1) {
            return character
        }
    }
    return '_'
}
```
