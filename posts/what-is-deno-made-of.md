---
title: 'What is Deno 🦕 made of?'
description: 'The primary concepts behind Deno and how it works under the hood'
date: '2020-06-17T16:24:17.340Z'
tags: ['deno', 'javascript']
draft: false
---

You have probably heard of the latest and greatest thing to be born in the javascript universe. Yes it's Deno 🦕
Apart from the cute logo and a scrambled version of its big brother NODE, it is something that is being loved
by the community and has attracted lot of attention which it deserves. The official [Deno website](https://deno.land/)
already explains the concept in a nice an simple way which I would like to quote

> Deno is a simple, modern and secure runtime for JavaScript and TypeScript that uses V8 and is built in Rust.

While many of the community folks have share some interesting articles and examples on getting started with Deno, I
would like to share about the 'how things work inside of Deno' in simple terms. Just like understanding the basics
of how JavaScript work under the hood or how Node works, it helps us grasp the concepts better, so knowing about the
basic internal working concepts of Deno can help us understand it better and develop better programs with it. I would
like to elaborate the concepts using some Q & As.

## What are the basic building blocks of Deno?

Deno is mainly made up of

- **V8 Engine** (A javascript engine engineered by Google that powers the chrome browser. Node uses the same javascript
  engine as well). The role of the javascript engine in simple terms is to accept javascript files which it understands
  and interprets and converts to machine code that a computer understands. You can read more about V8 [here](https://v8.dev/)
- **Typescript** (A superset of javascript developed by the good folks at Microsoft). Deno has a built-in TypeScript
  compiler which compiles typescript files to javascript before feeding it to the javascript engine. So Deno provides
  first-class support for typescript without the need of adding any package which is awesome. You can checkout more about
  typescript [here](typescriptlang.org/).
- **RUST** (A language pioneered by Mozilla which is blazing fast and a very safe and memory efficient language). The core
  of Deno is written in Rust. As a comparision, the core of Node Js is writen in C and C++. The developers opted for rust
  because of its safety and memory efficiency.
  [It is also the most loved language since 2016](https://stackoverflow.blog/2020/01/20/what-is-rust-and-why-is-it-so-popular/)!
  Check out more about Rust [here](https://www.rust-lang.org/)
- **Tokio** (An asynchronous runtime for the Rust language). As you know, javascript is a single-threaded application,
  which means it can only run one operation at a time, any kind of asynchronous operation that is written in the code
  such _setTimeout_ or accessing the file system is managed by Tokio. NodeJs similarly has something called LIBUV which
  handles all asynchronous tasks using an event loop. In browsers for example, any kind of asynchronous operations are
  handled by the web workers that are a part of the Web APIs provided by the browser. Checkout more on Tokio
  [here](https://tokio.rs/).
- **RustyV8** - Think of this as a bridge that helps the V8 engine communicate with the Rust code. In NodeJs, there is
  similarly something called _node-bindings_ that communicates between the v8 engine and LIBUV. Checkout more about
  rusy v8 [here](https://github.com/denoland/rusty_v8)

You can think of javascript/typescript as the frontend(unpriviledged side) of Deno and Rust being the backend(priviledged side). 
The Deno core API provides bindings to interact and communicate between the javascript and Rust world. JavaScript alone can't access file system
or set a timer for example. Whenever you write any code that does any such task in Deno, then javascript/typescript
talks to Rust via the Deno core API to accomplish it.

## What happens when we write some simple javascript code in Deno?

```javascript
function printToConsole() {
  console.log(
    'This is my first Deno program, and I am pretty excited! Hello 🦕'
  );
}
printToConsole(); // This is my first Deno program, and I am pretty excited! Hello 🦕
```

Since it is simple javascript code, the code is fed to the V8 engine and prints the message to the console.
Yeah nothing fancy, it's just like writing the same code in the browser console.

## What happens when we write some typescript code in Deno?

```typescript
function printNameToConsole(name: string) {
  console.log(`Welcome ${name} to Deno World 🦕`);
}
printToConsole('Allen'); // Welcome Allen to Deno World 🦕
```

This time Deno hands it over to the typescript compiler to convert the typescript code into javascript code and then
it it transferred to the V8 engine. Deno uses [V8 snapshots](https://v8.dev/blog/custom-startup-snapshots)
to speed up the typescript compilation process.

## What happens when we write some **Async** code in Deno?

```typescript
function printNameToConsole(name: string) {
  console.log(`Welcome ${name} to Deno World 🦕`);
}
printToConsole('Rob');
setTimeout(() => {
  printToConsole('John');
}, 1000);
printToConsole('Allen');

//Welcome Rob to Deno World 🦕
//Welcome Allen to Deno World 🦕
//Welcome John to Deno World 🦕
```
When V8 sees the first printNameToConsole() statement, it prints the name, then it sees setTimeout which it identifies
as a something which is outside of the javascript world. So it talks to Tokio via the rusty_v8 channel. It then goes to
the next line and prints the third function to the console.
Tokio in the meanwhile spins up something known as a *thread pool* to set a timer and executes the function in the
background. Once the delay is completed, it communicates back the message to the V8 engine via the rusty_v8 channel 
which then prints the message to the console.

Deno also provides a neat API that can be called using Deno.metrics(). It provides stats from the Rust side of Deno
about the information of the operations that took place. Something like this:
 > console.table(Deno.metrics())

|   (index)     |       Values       |
|---------------|--------------------|
|   opsDispatched           |    3   |
|   opsDispatchedSync       |    2   |
|   opsDispatchedAsync      |    1   |
|  opsDispatchedAsyncUnref  |    0   |
|  opsCompleted             |    3   |
|  opsCompletedSync         |    2   |
|  opsCompletedAsync        |    1   |
|  opsCompletedAsyncUnref   |    0   |
|  bytesSentControl         |    73  |
|  bytesSentData            |    0   |
|  bytesReceived            |    375 |


This is a very simplified version of the data communication happens in Deno. There are lots of other things to talk
about Deno regarding its great features which I can probably share in another post with some more real-life examples. 

Hope you enjoyed this post.
Have a great one!