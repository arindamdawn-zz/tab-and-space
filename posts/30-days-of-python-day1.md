---
title: '30 Days of Python 👨‍💻 - Day 1'
description: "A javascript developer's quest to learn python in a month."
date: '2020-06-21T16:56:50.516Z'
tags: ['python']
draft: false
---

As a web developer fiddling around with javascript most of the time, I wanted to explore the territories of a different
language and document the learning journey in the process. I decided to learn Python, one of the most loved and popular languages, something which had been in my wishlist for a while. It would be really nice I believe to explore the new possibilities that Python is so widely recognized for such as Data Science, Machine Learning etc.

I decided to split the learning roadmap in 4 weeks with each week dedicated to learning some specific areas of the language. As a developer, I know it is quite impossible to master a language in such a short span but a daily deliberate practice routine for the same duration is sufficient to start building interesting projects and build the foundations.

## The Roadmap

- Week 1 - Python fundamentals, basic syntax, setting up the developer environment, basic working principle, 
practice some basic coding and document the process.

- Week 2 - Programming Paradigms → Object-Oriented and Functional Programming Patterns.

- Week 3 - Python Decorators, Error Handling, Modules, Generators, Debugging.

- Week 4 - File I/O, Regular Expressions, Testing, Scripting using Python.

- Extras(Based on time availability): Data Scraping, Server Setup, Machine Learning Basics.

Documenting my daily progress would help me build a reference journal for future reference as well. I hope can act  
as a helpful resource to anyone looking to learn the language as well 🙂


# Day 1

I found this great video where the founder himself shares a brief story about the language.

[![The Story of Python, by Its Creator, Guido van Rossum](http://img.youtube.com/vi/J0Aq44Pze-w/0.jpg)](http://www.youtube.com/watch?v=J0Aq44Pze-w "The Story of Python, by Its Creator, Guido van Rossum")

## Understanding about how Python works in simple words

Python is a high-level programming interpreted programming language.
What it means is that the python code needs to translate (interpreted) by another software program which is called the interpreter that executes the code line by line and converts it into bytecode (very close to machine-readable code). 
This bytecode is run by the Python virtual machine (gets installed when we install python) and then converted into 
machine-readable binary code which computers can process and perform the necessary action.

While installing Python, what we install is the python interpreter along with the virtual machine. 
There are different variations of python interpreters:

- [cpython]([https://github.com/python/cpython](https://github.com/python/cpython)) - comes with the official installation and is written in C language
- [Jython]([https://www.jython.org/](https://www.jython.org/))
- [pypy]([https://www.pypy.org/](https://www.pypy.org/))
- [IronPython]([https://ironpython.net/](https://ironpython.net/))

Each of the implementations of their own features and trade-offs.

## Versions
There are two major versions v2 and v3. In 2008, several major improvements were introduced in the language that 
introduced some breaking changes without considering backwards compatibility. The official docs now recommend using 
v3 and support for v2 would be ceased after 2020.

## First beginner's program 😄

To keep things extremely simple at first, I wanted to play around with some basic **hello world** type code, to begin with.
I used the amazing online playground [REPL](https://repl.it) to kickstart writing some python code and do a syntax
comparison with javascript as well.

```python
name = input('What is your name?') #promts user input in console and store in a variable
print('Welcome to the world of Python ' + name) # prints to console 

```
comparing it with javascript

```javascript
const name = prompt('What is your name?');
console.log('Welcome to the world of Javascript ' + name);
```

Well, that's pretty much for Day-1! I know I have barely written any code. I just wanted to spend my first day in building the roadmap. Now that I have the language split into chunks, the goal would be to focus on the weekly goals
and share daily progress about the same.

Have a great one!