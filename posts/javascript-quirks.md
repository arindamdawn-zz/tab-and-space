---
title: 'Javascript Quirks 😕'
description: 'Javascript has some gotchas which looks quirky but are a part of the implementation.'
date: '2020-06-19T16:56:50.516Z'
tags: ['javascript']
draft: false
---

Javascript is amazing but it has some gotchas which can be a bit unusual to someone new to the language. I have often been confused while dealing with some of them so would like to share some of the many quirks that exist in javascript. 

Here are some examples. Enjoy!

- Pitfall: truthiness-based existence checks are imprecise

* Use case: was a parameter provided?

```javascript
function(x){
	if(!x) //falsy check
{
	//This block will be reached if x is either null, undefined, 0, false
	throw new Error('Please provide a value');
}
}

function(x) {
	if(x!== undefined || x!== null) 
    {
	//This block will be reached if x is either null or undefined
	throw new Error('Please provide a value');
    }
}

```

* Use case: does a property exist?

```javascript
function readFile(fileDesc) {
  if (!fileDesc.path) {
    throw new Error('Missing property: .path');
  }
  // ···
}
readFile({ path: 'foo.txt' }); // no error
readFile({ path: '' }); // Missing property: .path

function readFile(fileDesc) {
  if ('path' in fileDesc) {
    throw new Error('Missing property: .path');
  }
  // ···
}
readFile({ path: 'foo.txt' }); // no error
readFile({ path: '' }); // no error
```

-  Strict vs loose equality check

```javascript
'' == 0 // true
[1,2,3] == '1,2,3'//true
[1,2,3] == ['1','2','3'] //false

'' === 0 //false
[1,2,3] === '1,2,3' //false
[1,2,3] === ['1','2','3'] //false
```

- Searching for a NaN value

```javascript
const array = [1, 'text', NaN];
array.findIndex(el => el === NaN); // -1 (unable to find)
array.findIndex(el => Object.is(el,NaN)) //2 (Object.is is able to find NaN)
array.findIndex(el => Number.isNaN(el,NaN)) //3 (Preferred)
```

- Syntactic pitfall: properties of integer literals

```javascript
7.toString(); // syntax error
7.0.toString() // '7'
(7).toString() // '7'
7..toString() // '7'
7 .toString()  // space before dot
```

- % operator

- JavaScript‘s `%` operator is a remainder operator.
- Python’s `%` operator is a modulo operator.

[https://2ality.com/2019/08/remainder-vs-modulo.html](https://2ality.com/2019/08/remainder-vs-modulo.html)

- NaN (Not a number)

```javascript
typeof NaN // number 😜 
//(NaN is the only JavaScript value that is not strictly equal to itself)
```

- Safe computations

```javascript
9007199254740990 + 3 // 9007199254740992 (Since result is unsafe)
Number.isSafeInteger(9007199254740990 + 3) //false
//Both operands and result must be safe
```

- Number.parseFloat

```javascript
Number(' 123.4#') // NaN
Number.parseFloat(' 123.4#') // 123.4
```

These are some of the many other gotchas that are there in javascript. I would like to share some of the others in 
some other post. 
I often have this imposter's syndrome(in a good way) that makes me feel that I am very incompetent in JavaScript and
I start exploring the basics from scratch. It helps me unlearn and re-learn the features of this amazing language and be a better JavaScript craftsman and sharpen some programming skills. 
Hopefully, someday I will be able to know all the Knitty gritty details of this language 😄

# My favourite javascript resources

As a side note, I would like to share the places I like to visit again and again to attain some wisdom each time

- [2ality](https://2ality.com/) - I personally feel is one of the best blogs on JavaScript (ECMAScript).
- [ExploringJs](https://exploringjs.com/) - Maintained by Dr Axel Rauschmayer of 2ality. Phenomenal books
- [Javascript.info](https://javascript.info/) - Very well maintained and documented
- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) - Very robust and highly informative

Have a great one!