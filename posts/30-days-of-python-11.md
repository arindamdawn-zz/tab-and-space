---
title: '30 Days of Python 👨‍💻 - Day 11 - Functional Programming'
description: "A JavaScript developer's quest to learn python in a month."
date: '2020-07-01T05:39:16.196Z'
tags: ['python', 'challenge']
draft: false
---
Both Object-Oriented Programming and Functional paradigms of programming operate on the same principle - **Separation of Concerns**. While Object-Oriented Programming does this by combining properties and their actions in a `class`, functional programming keeps properties and their actions separate and use functions to perform actions on objects. 

Today, I explored the functional programming concepts as applied to Python and looked at how we can implement functional programming techniques to organize Python code.

In the developer universe, there is often a debate between which style of programming paradigm is better. While many have strong opinions about either writing pure Object Oriented code or pure functional code. The more pragmatic approach is to understand the benefits of both paradigms along with their caveats and embrace the best of both worlds whenever necessary. 

Here are some of the important concepts of functional programming and their implementation in Python.

## Pure Functions

Pure functions are the heart and soul of functional programming just like classes and objects are of Object-Oriented programming. 

A pure function is a function that follows these two rules:

- If provided the same input, it will return the same output always.
- It does not result in any side-effects.

Side-Effects generally mean changing data outside the scope of the function such as printing to console, doing a network request, making a database change, accessing a global variable etc. 

```python
def doubler(num):
  '''
  Accepts a number and multiplies it by 2
  '''
  return num * 2

print(doubler(5))
```

```python
def emoji_appender(list, emoji):
  '''
  Accepts a list and a emoji and 
  appends to every item of list
  '''
  new_list = []
  for item in list:
    new_list.append(str(item) + emoji)
  return new_list

print(emoji_appender([1,2,3], '😀')) # ['1😀', '2😀', '3😀']
print(emoji_appender(['alpha','beta','gamma'], '😀')) 
# ['alpha😀', 'beta😀', 'gamma😀']
```

**What are the benefits of Pure Functions?**

A pure function should ideally perform only a single, specific action. Since pure functions always return the same output, provided the same input, they are very easy to test as they are predictable. This predictability feature always allows several pure functions to be run in parallel as they don't have in side-effects. It makes code easier to read and understand.

## Some important built-in functions

Python comes with some built-in set of functions that allows code to be written in a functional style or in a more declarative way. These functions being pure, do not modify the input data either create any side-effects.

- **map()**

`map` function takes a function as the first argument that does some kind of action and an iterable as the second argument. It basically loops over each item of the iterable and applies the passed function. 

```python
numbers = [1,2,3,4,5]
def multiply_by5(num):
  return num * 5

result = map(multiply_by5, numbers)

print(result) # <map object at 0x7f572dcb7730> (Memory location of the map object)
print(list(result)) # [5, 10, 15, 20, 25] (to get the updated list)
print(numbers) # [1,2,3,4,5] (Unmodified)`
```

`map` function returns a reference to the memory location of the `map` object. To get the resultant data, it needs to be passed as an argument to the list function. An important thing to note about the `map` function is the input and output of the function has the same length. `map` does not modify the input iterable.

- **filter()**

`filter`, as the name suggests filters an input iterable data based on the passed function

```python
color_to_remove = 'red'

colors = ['blue', 'green', 'black', 'red']

def remove_color(color):
  return color != color_to_remove

result = filter(remove_color, colors)

print(list(result)) # ['blue', 'green', 'black']
print(colors) # ['blue', 'green', 'black', 'red'] (Unmodified)
```

just like `map`, `filter` function returns the reference to the address in the memory where the filter object is stored and to get the actual result it needs to be passed to the list function. The length of the output can be equal or less than that of the input depending on the condition. `filter` also does not change or mutate the input data

- **zip()**

The `zip` built-in function accepts multiple iterables and groups or zips them as tuples. This kind of feature can be very helpful in scenarios when different user data are stored in different columns in a database and they need to combined together based on their relationship.

```python
emails = ['alan@gmail.com', 'ross@gmail.com']
usernames = ['alan', 'ross']

users = list(zip(emails,usernames))
print(users) # [('alan@gmail.com', 'alan'), ('ross@gmail.com', 'ross')]
print(emails) # ['alan@gmail.com', 'ross@gmail.com'] (Unmodified)
print(usernames) # ['alan', 'ross']
```

- **reduce()**

`reduce` is a bit different from the other functions mentioned above. `reduce` is not a part of the built-in python functions. It is a part of a package or a toolbelt that gets downloaded along with the python interpreter and packages. So it needs to be imported from the `functools` module. Will explore more about modules later. 

`reduce` is a bit tricky to understand. However, borrowing from the JavaScript universe, where the `array` method `reduce` also does the same thing. It keeps a track of the resultant value in the accumulator. 

`reduce` accepts a function and an iterable as required parameters and an optional initializer which is set to 0 by default. 

`reduce` can be thought of as a way to reduce or merge iterable values into a single value. 

[A great article to understand the reduce function in depth.](https://realpython.com/python-reduce-function/) 

```python
from functools import reduce

numbers = [1,2,3,4]
def accumulator(acc, curr):
  return acc + curr

sum = reduce(accumulator, numbers, 0)
print(sum) # 10
```

That's all for today. The core concepts have been explored mostly, I believe the concepts of functional programming will re-appear in the further advanced sections of Python. I would like to go through few other remaining functional programming terminologies tomorrow and share the same in a lucid way.  I am getting more and more excited as I am unlocking new concepts and exploring new territories in Python. Hope you are equally excited and curios to follow along.

Have a great one!