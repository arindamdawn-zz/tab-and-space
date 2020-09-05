---
title: "Frontend Shots - Web Workers"
description: "A rookie's guide to understanding Web Workers"
date: "2020-09-05T06:39:16.196Z"
tags: ["javascript"]
draft: false
---

## Introduction

Frontend Shots is a series of posts where I shall try to explain various important concepts in frontend web development landscape. This post covers a topic which I understood very recently although it has been around for more than a decade!

**Web Workers**. What are they? Why do we need them? Let's get the answers.

## What are Web Workers?

Imagine you have been given a task to fill water in a container of capacity 2litres using a mug. You can do that easily within few seconds. 

Now suppose you are asked to next fill up a container of capacity 100litres using the same mug. The idea of it will make you sweat! Instead of doing the work all alone, you request your siblings to help you and you delegate it to them so that you can do some other important work in the meanwhile.

In the JavaScript universe, Web Workers can be thought of something like that. Web Workers can run scripts doing computation-heavy tasks in the background and can communicate with the main thread without freezing the user interface. Browsers first introduced Web Workers in around 2009 to allow programmers to run heavy CPU intensive tasks concurrently utilizing the multi cores of the processor. Web Workers are not a part of JavaScript. It is an API provided by the web browsers just like the browser's Web APIs. Web Workers can do lot of cool stuffs like doing network requests, accessing some window objects like Navigator, XMLHttpRequest, Array, Date, Math, String, window timers. However they cannot directly access the DOM.  Web Workers can be thought of as an independent JavaScript environment running in a parallel universe and can communicate with the main JavaScript universe.

Web Workers are also known as "Dedicated Workers".

## Why Web Workers?

Whenever any task is performed that requires heavy computation, it makes the UI irresponsive, making it non-interactive. This is not a great experience for end users as they no longer can interact with the UI until the task is executed. A lot of users still use low end feature phones that do not up top level hardware specs. Running heavy CPU intensive operations on such devices often result in an undesirable experience for users. Even a for loop operation can make the UI unresponsive until it has completed execution.

Web Workers come in extremely handy when it comes to optimizing performance and keeping the UI very responsive. The actual time taken for performing the task remains almost the same, however, the user experience is enhanced to a great extent since the user is not blocked from doing any task.

## How to use Web Workers?

Let's see how a simple code such as Calculating the Fibonacci number at a specific position can make the UI unresponsive and how we can enhance the user experience to a great extent using Web Workers.

`index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Web Workers Demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
  </head>
  <body>
    <main>
      <h1>Fibonacci Calculator</h1>
      <label for="position">Position</label>
      <input type="text" placeholder="Enter a position" id="position" />
      <button type="button" onclick="showResult(position)">
        Calculate Fibonacci
      </button>
      <p id="answer"></p>
    </main>

    <script>
      function calculateFibonacci(num) {
        if (num < 2) {
          return num;
        } else {
          return calculateFibonacci(num - 1) + calculateFibonacci(num - 2);
        }
      }
      function showResult(num) {
        const answerEl = document.getElementById('answer');
        const position = Number(document.getElementById('position').value);
        const button = document.querySelector('button');
        button.disabled = true;
        button.innerText = 'Loading...';
        const answer = calculateFibonacci(position);
        answerEl.innerText = `The Fibonacci number at position ${position} is ${answer}`;
        button.disabled = false;
        button.innerText = 'Calculate Fibonacci';
       }
    </script>
  </body>
</html>
```

`main.css`

```css
#position {
    border: 1px solid #c1c1c1;
    padding: 4px 16px;
    font-size: 18px;
    display: block;
}

button {
    border: none;
    display: block;
    margin-top: 8px;
    padding: 8px 16px;
    background-color: blueviolet;
    color: white;
    font-weight: bold;
    cursor: pointer;
}
button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}
```

The above code creates an input text box that accepts any number as position to calculate the Fibonacci number at that position. I have deliberately kept the **calculateFibonacci** code unoptimized as of now. 

Try running this code and enter a high value such as 45 and try to calculate the Fibonacci. The UI instantly becomes unresponsive and cannot be interacted unless the function execution is complete. 

Let's try improving the user experience by simply using Web Workers and not doing any kind of optimization to the Fibonacci function.

```jsx
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Web Workers Demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
  </head>
  <body>
    <main>
      <h1>Fibonacci Calculator</h1>
      <label for="position">Position</label>
      <input type="text" placeholder="Enter a position" id="position" />
      <button type="button" onclick="showResult(position)">
        Calculate Fibonacci
      </button>
      <p id="answer"></p>
    </main>

    <script>
      async function showResult(num) {
        const answerEl = document.getElementById('answer');
        const position = Number(document.getElementById('position').value);
        const button = document.querySelector('button');
        button.disabled = true;
        button.innerText = 'Loading...';
         if (window.Worker) {
          const worker = new Worker('fibonacci.js');
          worker.postMessage(position);
          worker.addEventListener('message', ({ data }) => {
            answerEl.innerText = `The Fibonacci number at position ${position} is ${data}`;
            button.disabled = false;
            button.innerText = 'Calculate Fibonacci';
            worker.terminate();
          });
        } 
      }
    </script>
  </body>
</html>
```

Let's see what is happening.

First we check if Web Workers are available or not (Although Web Workers are supported by almost all browsers, its better to check).

```jsx
window.Worker // checks if Worker is available
```

A worker is created using the `Worker` constructor function.

```jsx
const worker = new Worker('fibonacci.js') 
```

A worker is a script file that needs to be created and the path to the file needs to be provided while creating the worker instance.

The Web Worker API provides some events and methods to transfer data between the worker and the main script.

- `postMessage` is a method that can be called on the worker to transfer data from the main script to the worker.
- `message` is an event that can be attached to the worker. This provides the data from the worker. The data is stored in a 'data' object which I have destructured to get the data from the worker.

Now let's see the code in the worker

```jsx
function calculateFibonacci(num) {
  if (num < 2) {
    return num;
  } else {
     return calculateFibonacci(num - 1) + calculateFibonacci(num - 2);
  }
}

self.addEventListener('message', (e) => {
  const answer = calculateFibonacci(e.data)
  self.postMessage(answer);
});
```

The code is pretty self-explanatory. In the worker file, we use the `message` event to listen for data passed from the main thread and perform calculations here. 

The result of the operation is transferred back to the main thread via the `postMessage` method. 

We can also listen for any errors happening during this communication using the `error` event listener.

The above code for calculating Fibonacci can be optimized by using some dynamic programming concepts (in simple terms by storing results in a dictionary or a cache)

```jsx
const cache = {};
function calculateFibonacci(num) {
  if (num < 2) {
    return num;
  } else {
    if (!cache[num]) {
      cache[num] = calculateFibonacci(num - 1) + calculateFibonacci(num - 2);
      return cache[num];
    } else {
      return cache[num];
    }
  }
}

self.addEventListener('message', (e) => {
  const answer = calculateFibonacci(e.data);
  setTimeout(() => {
    self.postMessage(answer);
  }, 3000);
});
```

This will drastically reduce the recursion steps and almost instantly produce the results even for higher numbers. 

## Conclusion

This is the basic concept of Web Workers and how they can be used to built performant apps and offer better user experience.  The example I provided is very basic. However Web Workers can be used on various ocassions such as :

- Doing image processing inside canvas.
- Prefetching data from network to provide a faster and seamless user experience.
- Doing end-to-end data encryption etc,

My idea was to cover the basics of Web Workers in this post which should be a part of a frontend developer's roadmap. There are few concepts such as Shared Workers which are almost the same as that of dedicated workers, but can be shared among script belonging to the same origin (for eg different tabs of the same origin). 

[The MDN Docs]([https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)) is a great place to know more about Web Workers and understand the ways in which they can be used.

[Here]([https://medium.com/young-coder/a-simple-introduction-to-web-workers-in-javascript-b3504f9d9d1c](https://medium.com/young-coder/a-simple-introduction-to-web-workers-in-javascript-b3504f9d9d1c)) is another great post on the basics of Web Workers.

Have a great one!