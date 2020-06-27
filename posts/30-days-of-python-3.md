---
title: '30 Days of Python 👨‍💻 - Day 3 - Data Types II'
description: "A JavaScript developer's quest to learn python in a month."
date: '2020-06-23T16:56:50.516Z'
tags: ['python', 'challenge']
draft: false
---

Continuing from the string data type that I learned yesterday, today I explored some of the other features.

**Formatted String**

String formatting is a neat feature which allows us to dynamically update string content. Suppose we have user information fetched from a server and want to display a custom message based on that. The first idea would be to apply string concatenation something like

```python
first_name = 'Tom'
last_name = 'Cruise'
welcome_message = "Welcome" + " " + first_name + " " + last_name
print(welcome_message) # Welcome Tom Cruise
```

If we have more variables, then the dynamic string can be a bit difficult to read. If we have other types of data, then we also need to convert them to string. There is a cleaner approach to this using formatted strings.

```python
first_name = 'Tom'
last_name = 'Cruise'
welcome_message = f'Welcome {first_name} {last_name}'
print(welcome_message) # Welcome Tom Cruise
```

The `f` before the string denotes formatted string. The dynamic values are placed within  `{}`

This is a much cleaner syntax. The JavaScript equivalent is the string interpolation or template strings that were introduced in ES6. It looks like this

```jsx
firstName = 'Tom';
lastName = 'Cruise';
welcomeMessage = `Welcome ${firstName} ${lastName}`;
console.log(welcomeMessage) // Welcome Tom Cruise
```

**String Indexes**

Strings in Python are simply ordered collection of characters. So we can do a lot of cool tricks with it. We can access characters of a string, select a substring, reverse a string and much more very easily. It is also called slicing of string.

```python
language = 'python'
first_character = language[0] # indexing starts from 0
second_character = language[1]
print(first_character) # p
print(second_character) # y
# Strings can be manipulated easily with this syntax [start:stop:step-over]
range_1 = language[0:2] # here it starts from index 0 and ends at index 2
range_2 = language[0::1] # starts at 0, stops at end with step over 1 
range_3 = language[::2] # starts at 0, till end with step 2
range_4 = language[1:] # starts at index 1 till end of string
range_5 = language[-1] # selects last character
range_6 = language[-2] # second last character
reverse_string = language[::-1] # starts from end and reverses the string
reverse_string_2 = language[::-2] # reverses string and skips 1 character

print(range_1) # py
print(range_2) # python
print(range_3) # pto
print(range_4) # ython
print(range_5) # n
print(range_6) # o
print(reverse_string) # nohtyp
print(reverse_string_2) # nhy
```

[https://www.digitalocean.com/community/tutorials/how-to-index-and-slice-strings-in-python-3](https://www.digitalocean.com/community/tutorials/how-to-index-and-slice-strings-in-python-3)

**Immutability**

Strings are immutable in nature. It means the value of a string cannot be tampered or changed.

```python
favorite_website = 'dev.to'
favorite_website[0] = 'w'
print(favorite_website) # TypeError: 'str' object does not support item assignment
```

**Built-in string functions and methods**

Python has some built-in functions and methods to do operations on string data types. A function is generally an action that can be *called* independently like `print()` `round()` whereas methods are simply functions which are a part of an object and are called with a `.` operator.

```python
quote = 'javascript is awesome'
print(len(quote)) # 21 (len calculates total no of characters)
new_quote = quote.replace('javascript', 'python')
print(new_quote) # python is awesome
capitalize = new_quote.capitalize()
print(capitalize) # Python is awesome
upper_case = new_quote.upper()
print(upper_case) # PYTHON IS AWESOME

print(quote) # javascript is awesome (Note: Strings are immutable!) 
```

[https://www.w3schools.com/python/python_ref_functions.asp](https://www.w3schools.com/python/python_ref_functions.asp)

[https://www.w3schools.com/python/python_ref_string.asp](https://www.w3schools.com/python/python_ref_string.asp)

## Boolean

Booleans as represented as `bool` in python and store either `True` or `False`. 

```python
is_cool = True
is_dirty = False
print(10 > 9) # True 
```

## Comments

Comments are statements written in code to enhance its readability. In Python, they are written with the `#` symbol followed by the comment. Comments are ignored by the interpreter and are just meant for code readability purposes. I have already used them in the code examples to print the output or add some note.  As per good programming practices, we should try to make our code as readable as possible just like reading English and add comments to them only when needed as bloating code with too many comments can be counter-productive.

```python
# This is not a very useful comment but written just for the sake of demonstration
```

## Lists

Lists are an important data type. They are an organized collection of objects. It is also a *data structure* which means a container that organizes data in some specific format for different purposes. They are like *arrays* from the JavaScript or other programming language universe. They are denoted by `[ ]`. They can be used to store same or different data types together.

```python
favorite_languages = ['javascript', 'python', 'typescript']
shopping_cart_items = ['pen','toothbrush', 'sanitizer','eraser']
random_things = ['football', 123, True, 'developer', 777]

first_item = shopping_cart_items[0]
print(first_item) # 'pen'
```

**List Slicing**

Similar to strings, lists can be sliced. However, lists, unlike strings, are mutable which means their data can be altered.

```python
soccer_stars = ['ronaldo', 'messi','ibrahimovic','zidane','beckham']
soccer_stars[0] = 'suarez'
print(soccer_stars) # ['suarez', 'messi','ibrahimovic','zidane','beckham']
range = soccer_stars[0:3]
print(range) # ['suarez', 'messi', 'ibrahimovic']
print(soccer_stars) # ['suarez', 'messi','ibrahimovic','zidane','beckham']
# Note : Slicing lists does not mutate them

clone = soccer_stars[:] # copies the list. Commonly used in Python
print(clone) # ['suarez', 'messi','ibrahimovic','zidane','beckham']
reverse_order = soccer_stars[::-1] # reverses the order of data
print(reverse_order) # ['beckham', 'zidane', 'ibrahimovic', 'messi', 'suarez']
```

**Matrix**

Lists can be multi-dimensional. The lists examples that I mentioned above are all 1-D or single-dimensional. However, we can contain lists inside lists. So a 2-D list would look like this

```python
matrix_2 = [[1,3,2], [1,3,2], [2,3,4], [2,3,5]]
first_item = matrix_2[0]
print(first_item) # [1,3,2]
first_item_first_element = matrix_2[0][0] # or first_item[0]
print(first_item_first_element) # 1
```

We can similarly nest any number of lists inside lists to create different dimensional matrices similar to the matrices in mathematics we learnt in primary school. This kind of matrix data is helpful in storing complex data like images and used in machine learning models. It would be quite interesting to explore them and see their practical applications in details later.

I will take a break for today and resume learning the remaining concepts of Lists such as its functions and methods and other patterns, then learn the remaining data types dictionaries, tuples, sets and none. I am finding a great deal of interest in exploring these data structures gradually. Hope you are finding them cool while following along as well. Let's meet tomorrow again!

Have a great one!