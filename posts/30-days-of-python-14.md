---
title: '30 Days of Python 👨‍💻 - Day 14 - Handling Errors'
description: "A JavaScript developer's quest to learn python in a month."
date: '2020-07-04T05:39:16.196Z'
tags: ['python', 'challenge']
draft: false
---

No program is perfect. Unless it is a hello world program written with great care 😃

Today I explored all about handling errors in Python. which I will try to explain in plain and simple words. Handling errors is probably the most important concepts of programming.

All applications are prone to errors a.k.a bugs or exceptions. Errors are not evil. Errors most of the time convey useful messages when a program fails to run or execute for whatever reason. It can be an accidental tying mistake, maybe the application is offline while it is trying to access the internet. Maybe there is an error while calculating, or maybe the program runs out of memory. There are a lot of possible errors that might happen when we write a program. When an error is detected, the program just terminates. This may or may not something we want. Rather than **expecting** code to run without errors, the better and more pragmatic approach is to handle errors and accordingly take some actions. 

In Python, errors can be broadly segmented into two - Syntax Errors and Exceptions.

Syntax Errors occur when we write some Python code which the Python interpreter is unable to validate as correct Python code. 

 

```python
print('A grave mistake) # Missing end quote. Will result in a syntax error
```

```python
def hello # Missing :, will result in syntax error
	print('hello')
```

Whenever we run into syntax errors, the Python interpreter does a very good job by providing in details which line caused the error so it can be corrected.

The interesting part is about the other kind of error that might occur apart from a syntax error.

Our programs often connect to the outside world to receive certain values and perform computations based on those values. There is always a probability that those values are not correct. In that case, an error would occur. Thus they need to be handled.

```python
age = input('Enter your age')
if age > 18:
  print('You are an adult')
else:
  print('You are a minor')
```

Running this simple code will result in an exception. 

```python
Traceback (most recent call last):
  File "main.py", line 2, in <module>
    if age > 18:
TypeError: '>' not supported between instances of 'str' and 'int'
```

The exception is a TypeError because the value of age is a string. So to prevent it, age needs to be type-casted or converted to an integer.

```python
age = int(input('Enter your age'))
if age > 18:
  print('You are an adult')
else:
  print('You are a minor')
```

Now, if the user provides a string value instead of a number, there will be another exception.

```python
Enter your age asdf
Traceback (most recent call last):
  File "main.py", line 1, in <module>
    age = int(input('Enter your age'))
ValueError: invalid literal for int() with base 10: 'asdf'
```

## Try except block

To prevent such error, Python provides a `try` `except` block, where the action is placed inside the `try` block and if there is an exception, the `except` block will be executed.

As a comparison, in the JavaScript universe, there is a `try` `catch` block. Python just has a different name for `catch`. The functionality is exactly the same.

```python
try:
  age = int(input('Enter your age'))
  if age > 18:
    print('You are an adult')
  else:
    print('You are a minor')
except:
  print('Invalid value provided')
```

## Else block

Besides the `try` `except` block, Python also provides an `else` block which gets executed if there is no exception in a `try` `except` block of code. It is an extension to the `try` `except` statement.

```python
try:
  age = int(input('Enter your age'))
  if age > 18:
    print('You are an adult')
  else:
    print('You are a minor')
except:
  print('Invalid value provided')
else:
  print('Thank You!')
```

## Finally block

Often while writing a program, we would want to perform an action irrespective of whether there was an exception or not. An example can be sending log messages to a server. Python provides a `finally` block as a part of the `try` `except` block which gets executed whether or not there is an exception.

```python
try:
  age = int(input('Enter your age'))
  if age > 18:
    print('You are an adult')
  else:
    print('You are a minor')
except:
  print('Invalid value provided')
finally:
  print('Sendiing dummy log to server') # always gets printed
```

## Built-in Exceptions

Python provides a lot of built-in exceptions which are basically instances of the BaseException class. 

[Python built-in exceptions](https://docs.python.org/3/library/exceptions.html)

These exception classes can be used to handle specific exceptions such as **TypeError**, **ValueError, SystemError** etc. 

```python
from functools import reduce

def calc_average(number_list):
  '''
  accepts a list of numbers and returns average
  '''
  sum = reduce(lambda acc, curr: acc + curr, number_list)
  average = sum/len(number_list)
  return average

print(calc_average([1,2,3,4,5])) # 3.0

# Passing invalid arguments would result in errors
print(calc_average(['1','2','3','4','5'])) # TypeError
print(calc_average(None)) # TypeError
print(calc_average(3/0)) # ZeroDivisionError

```

To make the function more defensive, we can catch (handle) those specific exceptions.

```python
from functools import reduce

def calc_average(number_list):
  '''
  accepts a list of numbers and returns average
  '''
  try:
    sum = reduce(lambda acc, curr: acc + curr, number_list)
    average = sum/len(number_list)
    return average
  except TypeError:
    print('Only a list of numbers is valid')
  

print(calc_average('hello world')) # Only a list of numbers is valid

```

The above code handles invalid arguments. However, there can be defects in the logic itself. It can also be handled using separate `except` blocks

```python
from functools import reduce

def calc_average(number_list):
  '''
  accepts a list of numbers and returns average
  '''
  try:
    sum = reduce(lambda acc, curr: acc + curr, number_list)
    average = sum/len(number_list)
    1.0/0 # Bug
    return average
  except TypeError:
    print('Only a list of numbers is valid')
  except ZeroDivisionError:
    print('cannot divide by zero')
  

print(calc_average([1,2,3,4,5])) # cannot divide by zero'
```

Multiple exceptions can be handled together in a single except block as well

```python
from functools import reduce

def calc_average(number_list):
  '''
  accepts a list of numbers and returns average
  '''
  try:
    sum = reduce(lambda acc, curr: acc + curr, number_list)
    average = sum/len(number_list)
    return average
  except (TypeError, ZeroDivisionError): # handles both cases
    print('Only a list of numbers is valid')

print(calc_average(['asdfasdf'])) # Only a list of numbers is valid
```

The code written above handles possible exceptions but it is hiding the useful stack trace errors provided by the interpreter which tells precise which line is responsible for the code. 

The actual error message as well a custom error message can be combined together.

```python
from functools import reduce

def calc_average(number_list):
  '''
  accepts a list of numbers and returns average
  '''
  try:
    sum = reduce(lambda acc, curr: acc + curr, number_list)
    average = sum/len(number_list)
    return average
  except TypeError as type_error:
    print(f'Only a list of numbers is valid {type_error}')
  except ZeroDivisionError as zero_div_error:
    print(f'cannot divide by zero {zero_div_error}')  

print(calc_average('hello world')) 
# Only a list of numbers is valid unsupported operand type(s) for /: 'str' and 'int'
```

This makes the error messages more useful. It is also possible to raise custom error based on some condition using the `raise` keyword in Python

```python
name = input('Enter your name')
if name.lower() == 'god':
  raise('Name cannot be GOD!')
else:
  print(name)
```

It is not possible to memorize all the Python built-in exception classes unless you are a Savant!

The python built-in exceptions doc can be used as a reference to handle desired exceptions.

References

1. [https://realpython.com/python-exceptions/](https://realpython.com/python-exceptions/)
2. [https://www.programiz.com/python-programming/exception-handling](https://www.programiz.com/python-programming/exception-handling)
3. [https://docs.python.org/3/tutorial/errors.html](https://docs.python.org/3/tutorial/errors.html)

That's all for today! An important topic explored that really help in writing more resilient Python code. Tomorrow I shall explore another advanced Python topic - Generators.

Have a great one!