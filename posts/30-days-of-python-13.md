---
title: '30 Days of Python 👨‍💻 - Day 13 - Decorators'
description: "A JavaScript developer's quest to learn python in a month."
date: '2020-07-03T05:39:16.196Z'
tags: ['python', 'challenge']
draft: false
---

Today I explored an interesting topic, Decorators. I did apply a couple of decorators while trying out Object-Oriented Programming in Python such as `@classmethod` and `@staticmethod`, however, I did not go through them in details back then.

Decorators are a programming pattern. Decorators are simply **functions in disguise**. 

Using decorators, it is possible to add more functionality to functions or super-charge them. 

I will try to explain in my own lucid terms how they work under the hood and why they can be useful. 

A lot of cool Python libraries makes extensive use of decorators and makes it feel as if they are magical. However, to understand decorators, some concepts need to be understood. 

## Functions as first-class citizens

Functions are first-class citizens in Python. What it basically means is that functions can be assigned to variables just like other data types and they can be passed as parameters to functions just like other values. In the JavaScript world too, functions have a similar behaviour so I already have this concept in my mental model.

```python
def multiplier(num1, num2):
  return num1 * num2

some_variable = multiplier # (a reference to the function is created)

del multiplier # (deletes the function)

print(some_variable(2,4)) # 8 (still able to call the function!)
```

This ability to pass functions as values is essential for the creation of decorators in Python.

## Higher-Order Functions

A function is called a **higher-order function** when :

- It accepts another function as arguments (parameters)
- It returns another function
- Both

```python
def logger(func): # higher order function
  print(f'The result of the passed function is {func}')

def sum(num1, num2):
  return num1 + num2

logger(sum(1,5))
```

```python
def random(): # Higher order function
  def special():
    print('I am something special')
  return special

random_value = random()
random_value() # I am something special
# One line way
random()() # I am something special
```

## Custom Decorators

Now using the above principles, here is how a custom decorator would look like

```python
def starmaker(func):
  '''
  A decorator function which accepts a function
  and then wraps some goodness into it and
  returns it back!
  '''
  def wrapper():
    func()
    print('You are a star now!')
    print('*********')
  return wrapper

@starmaker
def layman():
  print('I am just a layman')

layman()
```

The starmaker decorator function gave super-powers to the layman function. It basically added a wrapper over the function. Now, this decorator *@starmaker* can be added on top of any function and that function would become a star! Very cool indeed. 

Python interpreter recognizes the `@decoratorname` and converts it into a function in real-time and processes it. The above code is exactly similar to the following block without using the `@decorator` syntax

```python
def starmaker(func):
  '''
  A decorator function which accepts a function
  and then wraps some goodness into it and
  returns it back!
  '''
  def wrapper():
    func()
    print('You are a star now!')
    print('*********')
  return wrapper

def layman():
  print('I am just a layman')

starmaker(layman)() # This is the underlying decorator magic!
```

I was initially quite confused when I came across decorators. However after demystifying their underlying principle, it became second nature and I was able to add it to my mental model.

If we compare it with the JavaScript universe, then JavaScript does not have decorators as a part of the language. However, TypeScript, which is a superset of JavaScript, has this concept of decorators. Frameworks like Angular, NestJs relies heavily on decorators. 

A decorator function can also accept arguments and can be customized based on the passed arguments.

```python
def emojifier(func):
  def wrapper(emoji):
    # kwags are keyword arguments
    print(emoji)
    func()
  return wrapper

@emojifier
def random():
  pass

random('😀') # 😀
```

## Why decorators are useful?

Decorators are an important programming pattern and if used wisely, can provide a lot of benefits. It makes code very reusable and binds added functionality to functions, hence keeping code DRY.

```python
# Create an @authenticated decorator that only allows 
# the function to run is user1 has 'valid' set to True:
test_user = {
    'name': 'Jackson',
    'valid': True
}

another_user = {
  'name': 'Nathan',
  'valid': False
}

def authenticated(fn):
  def wrapper(*args, **kwargs):
    if args[0]['valid']:
      fn(args)
  return wrapper

@authenticated
def message_friends(user):
    print('message has been sent')

message_friends(test_user) # message has been sent
message_friends(another_user) # (Does nothing)
```

The above-authenticated decorator function only invokes the **message_friends** function based on the specified condition.  This gives a lot of flexibility and performs conditional operations based on the status of the user's authentication.

Reference articles to know more about decorators in Python:

- [https://www.programiz.com/python-programming/decorator](https://www.programiz.com/python-programming/decorator)
- [https://realpython.com/primer-on-python-decorators/](https://realpython.com/primer-on-python-decorators/)

That's all for today. Tomorrow I shall explore all about error handling techniques in Python. Another important topic ahead.

Till then,

Have a great one!