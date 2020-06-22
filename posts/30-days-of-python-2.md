---
title: '30 Days of Python 👨‍💻 - Day 2'
description: "A JavaScript developer's quest to learn python in a month."
date: '2020-06-22T16:56:50.516Z'
tags: ['python', 'challenge']
draft: false
---

Before diving deep into the Knitty-gritty details of a programming language or perhaps even a human language, we need
to understand its terminologies and basic principles and start building a basic mental model which we can come back and
refer whenever needed.

The building block of any programming language can be divided mainly into the following:

- Terminologies
- Data Types
- Actions (functions)
- Best Practices

Today I spent understanding some basic Python terms, syntax, its data types and some of its actions or better known
as _functions_ in programming terms.

## Data Types

Data Types in simple words are a way to represent values. In our physical world, we have letters, numbers, symbols as
different type of commonly used values. Similarly, Python comprises of these fundamental data types:

- int (to represent numbers)
- float (to represent decimal numbers)
- str (to represent strings)
- bool (to represent boolean)
- list
- tuple
- set
- dict
- complex (not used very often)
- None (to represent an absence of value)

These are the standard data types available in Python. To create our own custom type, classes are used. Specialized data
types can also be used via importing external libraries or modules.

In contrast, in JavaScript, these are the following primitive types available:

- number (for both whole and decimal numbers)
- string
- boolean
- symbol
- bigInt
- null
- undefined
  Also **object** as a non-primitive type.

Today I just spent time in understanding the number and string types of Python.

## Numbers

There are 3 types of numeric data types:

- int (stores whole numbers of unlimited size)
- float (stores floating-point real number values)
- complex (I just skipped it as of now as I learnt it is not used commonly, similarly to bigInt in JavaScript).

In contrast, JavaScript has two kinds of numeric data types, _Number_ and _BigInt_.
The `type` function is used to determine the type of a value or an expression. (Similar to the `typeof` operator in
JavaScript)

```python
    num = 100 # variable assignement
    print(type(num)) # <class 'int'>

    num2 = 99.99
    print(type(num2)) # <class 'float>

    expression1 = num * 10
    print(type(expression1)) # <class 'int'>

    expression2 = num + num2
    print(type(expression2)) # <class 'float'>
```

> In Python, variable assignment happens by just writing a name and assigning a value using the `=` operator.
> In JavaScript, a variable name needs to be preceded with `var`, `const` or `let` keyword.

## Math functions

There are some built-in mathematical functions that allow us to calculate various mathematical operations with ease.
[Math Functions and Constants](https://docs.python.org/3/library/math.html) - this document contains all the built-in
math functions and constants

```python
    print(round(2.1)) # 2
    print(round(5.9)) # 6
    print(abs(-34)) # 34
```

Will explore the math module in detail some other day.

## Variables

Variables store values. In python, these are the variable naming conventions:

- Variables must start with a lowercase letter or underscore and can be followed by numbers or underscore
- Snake case is the conventional way of writing variable with multiple words such as `user_name` (Javascript 
  recommends cameCasing like `userName`)
- They are case sensitive
- Keywords should not overwrite keywords ([Python keywords](https://www.w3schools.com/python/python_ref_keywords.asp))

## Strings

Strings in Python are an ordered sequence of characters (similar to Javascript). 

```python
    name = 'Python' # string assignment within single quotes
    name2 = "Python" # string assingment within double quotes
    name3 = '''This is a a very long string and supports 
            multiline statements as well''' # string assingment within 3 single quotes
    name4 = 'Hello! \"Rockstar Programmer\"' # string with escaped character sequence
    print(type(name)) # <class 'str'>
    print(type(name2)) # <class 'str'>
    print(type(name3)) # <class 'str'>
    print(type(name4)) # <class 'str'>
```
**String Concatenation**

Similar to Javascript, strings can be concatenated using the `+` operator. It simply joins or 'concatenates' strings.

```python
    first_name = 'Mike'
    last_name = 'Tyson'
    print(first_name + ' ' + last_name) # Mike Tyson
```
**Type Conversion**

Unlike Javascript, where there is implicit type conversion (a.k.a Type Coercion), Python will throw an error if
operations are performed with different types

```python
    user_name = 'John'
    age = 40
    print(user_name + age) # TypeError: can only concatenate str (not "int") to str
    # This would work in Javscript where it would convert the result to string type
```
In Python, types need to be converted explicitly to perform operations with different types

```python
    user_name = 'John'
    age = 40
    print(user_name + str(age)) # John40
    print(type str(age)) # <class 'str'>
```
Similarly, strings can be converted into numbers

```python
    lucky_number = 7
    lucky_number_stringified = str(7)
    lucky_number_extracted = int(lucky_number_stringified)
    print(lucky_number_extracted) # 7
```

That's all for today! Still taking it simple and easy. Will continue understanding the other string operations and built-in methods and functions along
with Boolean and List types. Pretty excited for Day 3! 

Have a great one!