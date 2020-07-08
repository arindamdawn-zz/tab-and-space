---
title: '30 Days of Python 👨‍💻 - Day 16 - Module Basics'
description: "A JavaScript developer's quest to learn python in a month."
date: '2020-07-06T06:39:16.196Z'
tags: ['python', 'challenge']
draft: false
---

Today I spent some time exploring modules in Python. Structuring and organizing code is a very important aspect of development. As of now, we have structuring code in Python by using named functions and creating classes to organize functionality. However, when the size of the project increases, it is quite difficult to keep all code in a single file as it grows pretty big in size to read and understand the functionality. This problem is solved by using modules. A module in Python is a Python file (with .py extension) that contains some Python code. Using modules, a single file can be split into multiple files or modules based on functionality or features. Modules are a great way to organize and reuse code. Modules can then be used inside another module or the interactive Python interpreter using the `import` keyword

Suppose we have two files in our project. `main.py` and `utilities.py`. `main.py` is the file that will be run by the interpreter.

The `utilities.py` shall have a function. 

```python
def tagify(content, tag):
    return f'<{tag}>{content}</{tag}>'


def emojifier(content, emoji):
    return f'{emoji} {content} {emoji}'

```

This function can then be used in the `main.py` file like this

```python
import utilities

result = utilities.tagify('hello world', 'p')

emoji_result = utilities.emojifier('python', '😍')

print(result)  # <p>hello world</p>
print(emoji_result)  # 😍 python 😍
```

Thus these utility functions can be imported and reused in any file hence improving code organization.

## Ways of importing

There are different ways in which the `import` syntax can be used for importing modules

- Import with renaming

```python
import utilities as utils

result = utils.tagify('hello world', 'p')

emoji_result = utils.emojifier('python', '😍')

print(result)  # <p>hello world</p>
print(emoji_result)  # 😍 python 😍
```

- from.. import statement

To import specific names from a module without importing the entire module

```python
from utilities import tagify, emojifier

result = tagify('hello world', 'p')

emoji_result = emojifier('python', '😍')

print(result)  # <p>hello world</p>
print(emoji_result)  # 😍 python 😍
```

- Importing all names using *

```python
from utilities import *
result = tagify('hello world', 'p')

emoji_result = emojifier('python', '😍')

print(result)  # <p>hello world</p>
print(emoji_result)  # 😍 python 😍
```

The above way of importing is not considered as good programming practice as it impacts readability and can lead to duplicate definitions for an identifier.

## `__name__`

There is a special dunder attribute`__name__` in Python to check the name of the module.

```python
# utilities.py
print(__name__)  # utilities


def tagify(content, tag):
    return f'<{tag}>{content}</{tag}>'


def emojifier(content, emoji):
    return f'{emoji} {content} {emoji}'
```

```python
# main.py
from utilities import tagify, emojifier

print(__name__)  # __main__
result = tagify('hello world', 'p')

emoji_result = emojifier('python', '😍')

print(result)  # <p>hello world</p>
print(emoji_result)  # 😍 python 😍
```

Note: The `__name__` returns `__main__` for the file which is run by the interpreter. Here coincidentally the file name is also main. However, the filename can be anything. There is a common practice in Python to execute a block of code based on the condition of whether the module is the main module or not.

```python
# main.py
from utilities import tagify, emojifier

print(__name__)
result = tagify('hello world', 'p')

emoji_result = emojifier('python', '😍')

print(result)  # <p>hello world</p>
print(emoji_result)  # 😍 python 😍

if (__name__ == '__main__'):
    print('This is the main module'
          )  # This line gets printed as its the main module
```

## Packages

A package is simply a group of modules placed in a folder. Packages are used to group together modules with similar functionality just like how we keep all music files in a music folder, all videos in a videos folder to better organize files. Every Python module needs to contain a `__init.py__` file. This lets the Python interpreter know that the directory is a Python package. 

Let's place the utilities module inside a directory named **helper**. This helper directory needs to have a `__init.py__` file to make it a package. This package can then be imported in the main file as

```python
# main.py
import helper.utilities

result = helper.utilities.tagify('hello world', 'p')

emoji_result = helper.utilities.emojifier('python', '😍')

print(result)  # <p>hello world</p>
print(emoji_result)  # 😍 python 😍

if (__name__ == '__main__'):
    print('This is the main module')
```

The above import can be made more convenient like this

```python
from helper.utilities import tagify, emojifier

result = tagify('hello world', 'p')

emoji_result = emojifier('python', '😍')

print(result)  # <p>hello world</p>
print(emoji_result)  # 😍 python 😍

if (__name__ == '__main__'):
    print('This is the main module')
```

## Built-in modules

Python comes with a lot of **built-in** modules. These modules are downloaded along with the Python interpreter while installing Python. In some other programming languages, these are also known as standard libraries. These modules are developed and maintained by the Python core team and provide the out of the box functionality to do lot of cool things such as reading files, manipulate audio data, manipulating email and much more. [List of all Python standard modules](https://docs.python.org/3/py-modindex.html)

These modules can be imported just like any other user-created module. 

Let's use a built-in module `time` to create a higher-order function that estimates the time it takes to run a function.

```python
import time  # built-in Python module


def list_maker(max_items):
    result = []
    for item in range(max_items):
        result.append(item)
    return result


def higher_order(func):
    def wrapper(item):
        time_start = time.time()
        list_maker(item)
        time_end = time.time()
        time_diff = time_end - time_start
        print(f'took {time_diff} seconds')

    return wrapper


res = higher_order(list_maker)
print(res(100000))

```

Note: The result will vary based on the system configuration.

In the functional programming section, we earlier also used a built-in module **functools** to import `reduce` function.

That's all for today. Tomorrow will explore the remaining concepts related to modules in Python such as using external Python packages and more.

Have a great one!