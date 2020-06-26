---
title: '30 Days of Python 👨‍💻 - Day 6'
description: "A JavaScript developer's quest to learn python in a month."
date: '2020-06-26T16:56:50.516Z'
tags: ['python', 'challenge']
draft: false
---

Starting off from where I left, I continued exploring more loops while playing around with some code. Then I moved on to learning one of the most important things of programming, **functions**. I came across functions and methods in Python, docstrings, best practices along with scopes in detail. I will try my best to explain in lucid and simple terms.

**Loops Continued**

## While Loops

While loops are another way to run a block of code several times based on a specific condition. We need to be a bit careful when dealing with while loops to accidentally not create an infinite loop that would keep executing till they crash our systems! 

```python
hungry = True
while(hungry): # This is always true so it keeps printing until system crashes!
  print('Give me something to eat!!')
```

But while loops are cool. They are simple to write and easy to read. We just need to tell the interpreter when to stop the loop. It can be either done by using a `break` statement which stops the loop execution and **breaks** out of the loop. Another way is to make the condition falsy to stop the execution.

```python
hungry = True
while(hungry):
	print('Give me something to eat!!')
	break # prints only once and stops the loop execution
```

```python
hungry = True
satisfaction = 0
while(satisfaction < 10):
  satisfaction += 1
  print('Give me something to eat!!') # prints 10 times
```

Another feature of `while` loop is that it can be combined with an `else` block.

```python
hungry = True
satisfaction = 0
while satisfaction < 10:
  satisfaction += 1
  print('Give me something to eat!!')
else:
	print('I am super satisfied now') # gets printed once condition is falsy
```

It needs to be noted that if the `break` statement is used in the while block, then the `else` block is not executed.

**While vs For Loop**

For loops are usually useful when knowing the range of the iterable that needs to be looped. Whereas while loops can come in handy when we want to perform some task multiple times not knowing the range beforehand.

```python
while True:
  response_from_user = input('Enter some message. Enter bye to exit')
  if(response_from_user == 'bye'):
    break
```

Apart from the `break` statement, there are two other statements, `continue` which instead of breaking out of the loop continues to continue the iteration. `pass` is not often used but it is sometimes used as a placeholder to continue executing the statements after the loop. 
[This stack-overflow thread provides a great explanation](https://stackoverflow.com/questions/9483979/is-there-a-difference-between-continue-and-pass-in-a-for-loop-in-python/36952166)

## Quick Coding Exercise

Let's find the duplicate emails in a list of emails and print them. 

```python
email_list = ['roger@hey.com','michael@hey.com','roger@hey.com','prince@gmail.com']
duplicate_emails = []
for email in email_list:
  if email_list.count(email) > 1 and email not in duplicate_emails:
    duplicate_emails.append(email)
print(duplicate_emails)
```

That was my approach to solve the problem. Let me know how you would have solved it in the comments. Alright! Time to switch to an interesting topic, **function**.

## Functions

Functions are a very important concept and they are present in all programming languages. Functions allow us to define an action(block of code) and then execute the action any number of times without repeating ourselves following the principle of DRY.  Up until now, I have been using some of the in-built functions provided by Python such as `print`, `input`, `len` etc. It's time to create one.

```python
def blow_fire(): # This part is called function definition
  print('fire 🔥 🔥 🔥')

blow_fire() # This part is called function invocation
blow_fire() # It can be called any number to times to perform some action
```

## Arguments and Parameters

The above function was kind of cool but it has some limitations as well. It can perform only the same action. Let's make it more extensible and make it perform actions at will by passing some data to it

```python
def blower(name, emoji): # parameters
  print(f'{name} {emoji} {emoji} {emoji}')

blower('fire', '🔥') # arguments
blower('water', '🌊')
```

While defining a function, when we provide some data to it to perform some action based on the data, the provided data is called a parameter. A function can be provided with any number of parameters.

When the same function is called or **invoked** to perform the action, it accepts the data as **arguments**. It is just terminology but it often confusing and used interchangeably. 

The above is also called *positional parameters* or *positional arguments* because of the order or position of the parameters or arguments matter.

```python
def blower(name = 'fire', emoji = '🔥'): # default parameters
  print(f'{name} {emoji} {emoji} {emoji}')

blower('fire', '🔥') # arguments
blower('water', '🌊')
blower() # fire 🔥 # this works as the function has default parameters defined
```

## Return

`return` is a keyword in Python that is used to return a value from a function. To makes functions more useful, it needs to return some value based on evaluating an expression. If no return statement is specified or the expression of the return statement does not evaluate to a data type, then the function returns `None`. In JavaScript world, this `None` can be linked to `void`. 

The `return` statement terminates the function and exits out of it.

```python
def multiplier(num1, num2):
  return num1 * num2

result = multiplier(2,3)
print(result) # 6
```

Time to do something cool using the `return` statement.

```python
def sum(num1):
  def child(num2):
    return num1 + num2
  return child

add_10 = sum(10)
print(add_10(20)) # 30  (Closure!!!)
print(add_10(50)) # 60
print(add_10(100)) # 110
```

Yay! I just validated that there is the concept of **closure** in Python as well just like in JavaScript. It is so effective in creating factory functions. In the above block of code, I was able to create a generic function **add_10** and pass dynamic arguments to it to generate a different result. How cool is that!

Will explore more about this next week when learning about the functional programming concepts in Python.

> Methods are simply functions that are defined inside an object or in other terms, they are 'owned' by the objects. They are called using the object name followed by the `.` operator to execute or invoke them.

## Docstrings

When writing custom functions, it would be very helpful if the objective of the function is mentioned so that other co-workers or users of the code can easily understand what the function does while using them. The IDE would show the info of the function. Also, there are some helper functions and methods to view the information about a function if present.

> “Code tells you how; Comments tell you why.”
— Jeff Atwood (aka Coding Horror)

```python
def test_function():
  '''
  This function just prints test to the console.
  '''
  print('test')

test_function()
```

> “Code is more often read than written.”
— Guido van Rossum

[https://www.programiz.com/python-programming/docstrings](https://www.programiz.com/python-programming/docstrings)

## *args and **kwargs

*args is the short form of arguments and **kwargs stands for keyword arguments. These are used when a function needs to accepts any number of arguments or keyword arguments.

```python
def powerful_function(*args):
  print(args)

powerful_function(1,3,2) # (1, 3, 2) --> Returns a tuple

def super_function(**kwargs):
  print(kwargs)

super_function(name='John', age='45') # {'name': 'John', 'age': '45'} --> Returns a dict
```

[https://www.programiz.com/python-programming/args-and-kwargs](https://www.programiz.com/python-programming/args-and-kwargs)

In the JavaScript world, the ES6 rest parameters is used to extract all the arguments passed to the function. Another mental model created!

## Scope

Scope in simple terms means **"Which variables do I have access to ?"**. This is the kind of question the interpreter asks when reading the code to find the scope of variables. In Python, variables have **function** **scope**  which means variables defined inside a function cannot be accessed outside of the function.

```python
num = 1
def confusing_function():
	num = 10
	return num

print(num) # 1 => Global Scope
print(confusing_function()) # 10 => Local Scope
```

These are the scope rules that the Python interpreter follows:

- Start with local. Is the variable present? Then fetch the value. If not then proceed
- Is the variable defined in the parent function local scope? Fetch value if present else proceed
- Is the variable present in the global scope? Fetch value if present else proceed
- Is the variable a built-in function? Fetch value else exit

[Read more about Scope in Python](https://www.w3schools.com/python/python_scope.asp)

[This is also a great article on scope](https://realpython.com/python-scope-legb-rule/)

That's it for today. I have been able to cover most of the Python basics now. It's time to dig deeper into the advanced topics but before that, I would like to explore and set up the developer environment and all the different kinds of tooling and programs available tomorrow to complete the roadmap for the first week.

I hope I tried to explain my learning process about the language in easy to understand words. Please let me know in the comments if something felt confusing or if you have any other suggestions, thoughts.

Have a great one!