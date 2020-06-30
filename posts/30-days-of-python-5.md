---
title: '30 Days of Python 👨‍💻 - Day 5 - Conditions & Loops I'
description: "A JavaScript developer's quest to learn python in a month."
date: '2020-06-25T16:56:50.516Z'
tags: ['python', 'challenge']
draft: false
---
It has been an exciting 4 days of experience learning Python. Until now I have been able to cover some of the basic syntaxes of Python along with the data types and how to perform actions on them using built-in functions and methods along with some best practices. This was probably the dull parts and scratching the surface of Python. Today my short goal was to understand logical and conditional programming along with repeating tasks using loops in Python. Very interesting indeed!

## Conditional Logic

```python
age = input('Please enter your age')
if(int(age) >= 18):
  print('You are allowed to enter the club')
else:
  print('Sorry! you are not allowed!')
```

The above is an example of an if-else conditional statement in Python. It is used to execute logic based on some condition. If the condition is not fulfilled, then the code in the else block is executed. Coming from the JavaScript universe, the differences I noted is there are no curly braces surrounding the if-else blocks and instead of a `:` is used after the conditional statement. The block inside a conditional statement is also **indented**. I wired these two things to my Python mental model.

```python
exam_score = input('Enter your exam score')
if(int(exam_score) > 90):
  print('You have got grade A+')
elif(int(exam_score) > 80):
  print('You have got grade A')
else:
  print('You have got grade B')
```

If there are multiple conditions that need to be executed, then an `elif` block is used. In many other programming languages including JavaScript, it is called `else if` block. There can be any number of `else if` blocks to check different conditions. Python makes it more compact.

```python
is_adult = True
is_licensed = True

if(is_adult and is_licensed): ## In JavaScript && is used instead of 'and'
  print('You are allowed to drive')
else:
  print('You are not allowed to drive')
```

The above code checks for two conditions in a single expression to execute the block. The `and` keyword is used to check if both conditions evaluates to `True` then only the block is executed. This syntax is so easy to read! Python definitely is more readable.

## Indentation

Indentation is the way to separate lines of code using spaces/tabs so that the interpreter can distinguish code blocks and execute the code accordingly. Python does not use any braces unlike JavaScript and instead uses indentation to chunk blocks of code. The code editors make our life easy by automatically doing the indentation. The online editor [Repl](https://repl.it/) that I am using as a playground also does that.

```python
if(10 > 8):
  print('Such a silly logic. I will get printed')
else:
  print('I will never get printed')
  print('I am not get printed coz I am indented')

# Now without indentation
if(10 > 8):
  print('Such a silly logic. I will get printed')
else:
  print('I will never get printed')
print('I will be printed anyways coz I am not indented')
# The above line gets printed always as interpreter treats it as a new line
```

## Truthy and Falsy

- Values that evaluate to true are called **Truthy**
- Values that evaluate to false are called **Falsy**

When checking for a condition, the expression inside a condition is evaluated to a boolean value using type conversion. Now all values are considered "truthy" except for the following, which are "falsy":

- `None`
- `False`
- `0`
- `0.0`
- `0j`
- `Decimal(0)`
- `Fraction(0, 1)`
- `[]` - an empty `list`
- `{}` - an empty `dict`
- `()` - an empty `tuple`
- `''` - an empty `str`
- `b''` - an empty `bytes`
- `set()` - an empty `set`
- an empty `range`, like `range(0)`
- objects for which
    - `obj.__bool__()` returns `False`
    - `obj.__len__()` returns `0`

```python
username = 'santa' # bool('santa') => True
password = 'superSecretPassword' # bool('superSecretPassword') => True
if username and password:
  print('Details found')
else:
  print('Not found')
```

## Ternary Operator

While going through the syntax of the ternary operator in Python, I found it a bit confusing initially but then found it quite easy to read compared to the one I am familiar with in my JavaScript world

```python
is_single = True
message = 'You can date' if is_single else 'you cannot date'
# result = (value 1) if (condition is truthy) else (value 2)
print(message) # You can date
```

Ternary operator is also sometimes called a **conditional expression**. It is a very handy way to checking a condition in a single statement. I compared it with the `?` operator syntax of JavaScript to solidify my mental model.

## Short-Circuiting

While checking for multiple logical conditions in a single statement, the interpreter is smart enough to to ignore the rest of the condition check if the first condition fails. This is known as short-circuiting. It can be better explained using an example

```python
knows_javascript = True
knows_python = True

if(knows_javascript or knows_python): # doesn't depend on value of knows_python
  print('Javscript or python developer')
else:
  print('Some other developer')
```

```python
knows_javascript = False
knows_python = True

if(knows_javascript and knows_python): # doesn't depend on value of knows_python
  print('Javscript or python developer')
else:
  print('Some other developer')
```

The `or` is another conditional operator in python. [Check this article on short circuit techniques](https://www.geeksforgeeks.org/short-circuiting-techniques-python/)

## Logical Operators

Apart from  `and`, `or`, there are few are logical operators in Python such as `not`, `>`,  `<`, `==`, `>=`, `<=`, `!=`

```python
print(10 > 100) # False
print(10 < 100) # True
print(10 == 10) # True
print(10 != 50) # True
print(2 > 1 and 2 > 0) # True
print(not(True)) # False
print(not False) # True
```

[Python operators](https://www.w3schools.com/python/python_operators.asp)

**Some quirky operations**

```python
print(True == True) #True
print('' == 1) # False
print([] == 1) # False
print(10 == 10.0) # True
print([] == []) # True
```

`==` checks for the values on both sides. It converts the type if they are not similar.

Python has a strict checking operator `is` which checks for the value as well as their memory locations. It is almost similar to the `===` operator in JavaScript.

```python
print(True is True) # True
print('' is 1) # False
print([] is 1) # False
print(10 is 10.0) # False
print([] is []) # False
```

## For Loops

Loops allow to run a block of code multiple number of times. In Python, the basic form of loop is a `for` loop which can loop over an **iterable.**

```python
for item in 'Python': # String is iterable
  print(item) # prints all characters of the string

for item in [1,2,3,4,5]: # List is iterable
	print(item) # prints all numbers one at a time

for item in {1,2,3,4,5}: # Set is iterable
	print(item)

for item in (1,2,3,4,5): # Tuple is iterable
	print(item)

```

## Iterable

An **iterable** is a collection of data that can be iterated. It means the items of the collection can be processed one by one. Lists, strings, tuples, sets and dictionaries are all iterables. The action that is performed on an iterable is **iteration** and the current item that is being processed is called **iterator**.

```python
player = {
  'firstname': 'Virat',
  'lastname': 'Kohli',
  'role': 'captain'
}

for item in player: # iterates over the keys of player
  print(item) # prints all keys

for item in player.keys(): 
  print(item) # prints all keys

for item in player.values():
  print(item) # prints all values

for item in player.items():
  print(item) # prints key and value as tuple

for key, value in player.items():
  print(key, value) # prints key and value using unpacking
```

## range

`range` is an iterable object in Python used to generate a range of numbers. It is commonly used in loops and to generate a list. Range accepts 3 input parameters start, stop and step over with 2nd and 3rd optional

```python
for item in range(10):
  print('python') # prints python 10 times

for item in range(0,10,1):
	print('hello') # prints hello 10 times

for item in range(0, 10, 2):
	print('hii') # prints hii 5 times 

for item in range(10, 0, -1):
	print(item) # prints in reverse order

print(list(range(10))) # generates a list of 10 items
```

## enumerate

`enumerate` is useful when we need the index of the iterator while looping. 

```python
for key, value in enumerate(range(10)): # using unpacking techique 
  print(f'key is {key} and value is {value}') # prints key and value at the same time
```

That's all for today. Will cover up the remaining parts of loops and functions to finish off with the Python fundamentals.

Another day spent well 😄 Another small step taken towards my goal of learning Python. 

Hope you are enjoying this series and extracting some value out of it. I have already received lots of love from the community. Thank for the support. It means a lot.

Have a good one!