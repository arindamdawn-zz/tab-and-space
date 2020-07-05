---
title: '30 Days of Python 👨‍💻 - Day 15 - Generators'
description: "A JavaScript developer's quest to learn python in a month."
date: '2020-07-05T05:39:16.196Z'
tags: ['python', 'challenge']
draft: false
---

Today I explored all about the concept of **generators** in Python. The concept of generators exists in the JavaScript world as well. It was introduced in the ES6 version of JavaScript however I haven't used them in practical JavaScript projects much. While reading about them today, I realized they can be of great use and is used in several Python libraries and frameworks. 

So what are generators?

A generator is a special kind of function that returns an iterable set of values, one at a time which means it can be looped over to get the values one by one. It is also sometimes referred to as functions that can be 'paused'. In theory, generators sound quite complicated and confusing. It is best to explain using code examples. We hare already used a built-in Python generator `range` to generate a range of values.

```python
range_of_numbers = range(100) # a generator
for num in range_of_numbers: 
	print(num)
# Since range is a generator, it can be iterated or looped
```

```python
def my_infinite_generator():
  num = 0
  while True:
    yield num
    num +=1

result = my_infinite_generator()
for i in result:
  print(i) # Kepps on printing values infinitely!
```

So what exactly is this generator function and how is it different from a normal function?

Functions can return only one value using the return statement. Once a function reaches a return statement, it returns the value and exits out. Whereas generator functions can return any number of values using a special keyword `yield`. Whenever the `yield` statement is reached, the function execution is *paused* and the control is passed to the whoever is calling the function. 

The values of the generator can be extracted either by iteration or by using another built-in function called `next` on the generator. In the above block of code, the values of the generator are printed using iteration (for loop). The same can be done manually by using the `next` function.

```python
def my_infinite_generator():
  num = 0
  while True:
    yield num
    num +=1

result = my_infinite_generator()
print(next(result)) # 0
print(next(result)) # 1
print(next(result)) # 2
print(next(result)) # 3
print(next(result)) # 4
```

Note how the generator function is able to **remember** the value of *num* and is able to increment it. Whenever `yield` statement is reached, it saves the local variables and their state and then the control is transferred to the caller.

```python
def my_generator(max):
  num = 0
  while num < 3:
    yield num
    num +=1

result = my_generator(3)
print(next(result)) # 0
print(next(result)) # 1
print(next(result)) # 2
print(next(result)) # Stop Iteration Error
```

When an iteration is completed (in the above case once num = 3), the generator function automatically raises a StopIteration exception on further `next` calls to it. If the same generator is iterated using a for loop, the loop will automatically stop once the StopIteration is raised by the generator. The for loop internally handles this and terminates.

## Performance benefits of using generators

Generator functions are memory efficient. Generators really come in handy when dealing with large sets of data that requires lot of processing to compute results. Memory is a finite resource and our systems can only hold a limited amount of data in memory. 

For instance, if we have to create a function that accepts a number and prints the Fibonacci sequence till that number, the conventional approach would be something like this

```python
def fibonacci(num):
  sequence = []
  a,b = 0,1
  for item in range(num):
    sequence.append(a)
    temp = a
    a = b
    b = temp + b
  return sequence

result = fibonacci(20)
print(result) # prints the fibonacci sequence
```

In the above function, the entire sequence is stored in memory as a list. The result is only printed once the entire sequence is stored in memory. This is usually fine when the number is small. However, if the number is large, the memory usage increases drastically and the process may even be killed if the memory overflows. 

Using a generator the above function can be made more memory efficient

```python
def fibonacci_generator(num):
  a,b = 0,1
  for item in range(num):
    yield a
    temp = a
    a = b
    b = temp + b

for num in fibonacci_generator(20):
  print(num)
```

In this case, only one value is stored in memory at a time, thus it is able to print values even if the provided number is very large. 

## Composition

Generators can be composed together or in other words, they can be piped together to combine results from different generators.

For instance, if we have to create a Fibonacci sequence with each value squared, they can be composed using two generator functions.

```python
def fibonacci_generator(num):
  a,b = 0,1
  for item in range(num):
    yield a
    temp = a
    a = b
    b = temp + b

def square(nums):
  for num in nums:
    yield num**2

result = square(fibonacci_generator(5))

for num in result:
  print(num) # 0 1 1 4 9
```

This kind of composition can be very useful while computing large data sets and applying different operations on them in layers.

That's all about generators in Python in brief. Exploring generators today helped me solidify the mental model around the concept and I can now probably think of ways to implement them in JavaScript as well.

Tomorrow marks the start of the third week of this current Python challenge and as per my planned roadmap, I will be exploring another essential topic in Python - Modules. I am sure that will be quite interesting.

Have a great one!