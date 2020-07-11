---
title: '30 Days of Python 👨‍💻 - Day 20 - Debugging and Testing'
description: "A JavaScript developer's quest to learn python in a month."
date: '2020-07-10T06:39:16.196Z'
tags: ['python', 'challenge']
draft: false
---

Developers don't write perfect code and so the applications we try to build are prone to various kind of errors or exceptions or bugs. More than just knowing the syntax and the concepts of a programming language, being able to detect bugs by debugging and writing tests to ensure our code works on different practical scenarios. So to be able to write good quality code with Python, I explored the concepts of debugging and testing, mainly writing unit tests today.

## Debugging

Debugging is the computer science term for finding potential exceptions or bugs in our code. It comes in extremely handy to know the concept of debugging code to understand the cause of bugs that cause unwanted behaviour in our applications.

Python comes with the tools necessary for debugging code out of the box with its in-built functions. The more naïve and simple way to debug code is often using a `print` statement which I tend to use frequently.

`main.py`

```python
def is_prime(num):
  if num > 1:
    for i in range(2,num):
        if (num % i) == 0:
            return False
    else:
        return True
        
  else:
    return False

result = is_prime('2')
print(result) # TypeError
```

The above block of code gives type error. Now the simple way to check what is wrong, we can place a `print` statement to know what is happening inside the function.

`main.py`

```python
def is_prime(num):
    print(num) # 2 (Here using a print might confuse us!)
    if num > 1:
        for i in range(2, num):
            if (num % i) == 0:
                return False
        else:
            return True

    else:
        return False

result = is_prime('2')
print(result)
```

Using a `print` statement to check the input value might be a bit confusing as it may look like a number. This function is a very simple example which may not use require such critical analysis but it is useful to understand the ways to debug issues in general.

To make good use of debugging, Python comes with the built-in module `pdb`. It provides a lot of helpful methods for debugging such as `set_trace()`

`main.py`

```python
import pdb

def is_prime(num):
    pdb.set_trace()
    if num > 1:
        for i in range(2, num):
            if (num % i) == 0:
                return False
        else:
            return True

    else:
        return False

result = is_prime('2')
print(result)
```

On running the program, the interpreter pauses the program at the place where `set_trace()` is called. Now in the debugging console, we can type in any variable whose value we want to check in that point of execution such as `num` in this case. It will immediately show the value as '2' which is a string. Hence we can troubleshoot that.

From Python 3.7 onwards, there is a better way to debug with a new method `breakpoint` which automatically calls the `set_trace` method under the hood and is the recommended way to debug.

`main.py`

```python
def is_prime(num):
    breakpoint() # places a breakpoint
    if num > 1:
        for i in range(2, num):
            if (num % i) == 0:
                return False
        else:
            return True

    else:
        return False

result = is_prime('2')
print(result)
```

Now there are a lot of debugging commands available in the pdb console. Just typing `help` provides a list of available commands. I would like to provide a list of them here for reference.


| Command     | Description                                                                                                                                                                                                |
|-------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| p           | Print the value of an expression.                                                                                                                                                                          |
| pp          | Pretty-print the value of an expression.                                                                                                                                                                   |
| n           | Continue execution until the next line in the current function is reached or it returns.                                                                                                                   |
| s           | Execute the current line and stop at the first possible occasion  (either in a function that is called or in the current function).                                                                        |
| c           | Continue execution and only stop when a breakpoint is encountered.                                                                                                                                         |
| unt         | Continue execution until the line with a number greater than the current one is reached. With a line number argument, continue execution until a line with a number greater or equal to that is reached. |
| l           | List source code for the current file. Without arguments, list 11  lines around the current line or continue the previous listing.                                                                         |
| ll          | List the whole source code for the current function or frame.                                                                                                                                              |
| b           | With no arguments, list all breaks. With a line number argument, set a breakpoint at this line in the current file.                                                                                        |
| w           | Print a stack trace, with the most recent frame at the bottom. An arrow indicates the current frame, which determines the context of most commands.                                                      |
| u           | Move the current frame count (default one) levels up in the stack trace (to an older frame).                                                                                                               |
| d           | Move the current frame count (default one) levels down in the stack trace (to a newer frame).                                                                                                              |
| h           | See a list of available commands.                                                                                                                                                                          |
| h <topic>   | Show help for a command or topic.                                                                                                                                                                          |
| h pdb       | Show the full pdb documentation.                                                                                                                                                                           |
| q           | Quit the debugger and exit.  


## Debugging Resources

- [https://realpython.com/python-debugging-pdb/](https://realpython.com/python-debugging-pdb/)
- [https://book.pythontips.com/en/latest/debugging.html](https://book.pythontips.com/en/latest/debugging.html)

## Unit Testing

Our IDEs and Editors come equipped with lot of tooling capabilities that assist us in writing better code with less mistakes using a linter such as *pylint* for example. We can also debug our code to check for possible causes of errors. However a more reliable and efficient programming principle is to write defensive code by writing unit tests which ensures our programs run under different practical scenarios and edge cases. 

Writing tests often sound boring and might appear intimidating at first. However they are extremely useful and saves a lot of time and effort in the long run by preventing lot of unprecedented bugs. It also actually improves our code as well serve as a great documentation. For programmers, it is far more easy and practical to read small simple unit tests to understand the functionalities rather than go through a long list of documentation. It is always great to know how to write good and simple tests for our programs. 

Python again provide out of the box support for unit testing using a built-in module `unittest` It is also called a test-runner which can multiple tests all at once for the entire project.

Let's try to test the above `is_prime` function by writing some simple tests. For that, we need to create a test file which in this case will be `test.py`

`test.py`

```python
import unittest
import main

class TestPrime(unittest.TestCase):
  def test_valid_type(self):
    test_input = 13
    test_result = main.is_prime(test_input)
    expected_result = True
    self.assertEqual(test_result, expected_result)

if(__name__ == '__main__'):
  unittest.main()
```

The unit tests are written as a Python class and each test case scenario is written as a separate method inside the class. The class needs to extend the `unittest.TestCase` class.  Also at the end there is a check to ensure the unit tests are initiated only if it run from the main module.

The test file can then be run using `python3 test.py` or `python3 test.py` based on your python setup. The above test should pass as the test scenario meets the function criteria.

Let's try to fail the test by adding a new scenario. We expect the function to return false if the provided input is not a valid input.

`test.py`

```python
import unittest
import main

class TestPrime(unittest.TestCase):
    def test_valid_type(self):
        test_input = 13
        test_result = main.is_prime(test_input)
        expected_result = True
        self.assertEqual(test_result, expected_result)

    def test_invalid_input(self):
        test_input = 'hello'
        test_result = main.is_prime(test_input)
        expected_result = False
        self.assertEqual(test_result, expected_result)

if (__name__ == '__main__'):
    unittest.main()
```

In this case the second test fails as we haven't handled the possibility of a TypeError in the function. So the function can be modified accordingly.

`main.py`

```python
def is_prime(num):
    if (not isinstance(num, int)):
        return False
    if num > 1:
        for i in range(2, num):
            if (num % i) == 0:
                return False
            else:
                return True

    else:
        return False
```

Now the function handles invalid inputs and will not break in that scenario. Let's add some more test cases. Another approach would be to put the block of code in a `try except` block and handle all possible exceptions there.

`test.py`

```python
import unittest
import main

class TestPrime(unittest.TestCase):
    def test_valid_type(self):
        test_input = 13
        test_result = main.is_prime(test_input)
        expected_result = True
        self.assertEqual(test_result, expected_result)

    def test_invalid_input(self):
        test_input = 'hello'
        test_result = main.is_prime(test_input)
        expected_result = False
        self.assertEqual(test_result, expected_result)
    
    def test_none_input(self):
        test_input= None
        test_result = main.is_prime(test_input)
        expected_result = False
        self.assertEqual(test_result, expected_result)

    def test_negative_input(self):
        test_input= -13
        test_result = main.is_prime(test_input)
        expected_result = False
        self.assertEqual(test_result, expected_result)

if (__name__ == '__main__'):
    unittest.main()
```

If we want to initialize some variables or set up some configuration before running the tests, it can be written in the `setup` method. Similarly any kind of clean up after each test can be done in the `teardown` method. The `setUp` method is mostly is used more often than the `tearDown` method.

```python
import unittest
import main

class TestPrime(unittest.TestCase):
    def setUp(self):
        print('This will run before each test')

    def test_valid_type(self):
        test_input = 13
        test_result = main.is_prime(test_input)
        expected_result = True
        self.assertEqual(test_result, expected_result)

    def test_invalid_input(self):
        test_input = 'hello'
        test_result = main.is_prime(test_input)
        expected_result = False
        self.assertEqual(test_result, expected_result)

    def test_none_input(self):
        test_input = None
        test_result = main.is_prime(test_input)
        expected_result = False
        self.assertEqual(test_result, expected_result)

    def test_negative_input(self):
        test_input = -13
        test_result = main.is_prime(test_input)
        expected_result = False
        self.assertEqual(test_result, expected_result)

    def tearDown(self):
        print('this will run after each test')

if (__name__ == '__main__'):
    unittest.main()
```

This is how unit tests can help us to improve our code and make sure our code doesn't break under different scenarios. Also it ensures that a newly introduced feature doesn't break existing features. 

Here are some great resources to understand and explore more on unit testing in Python.

- [https://www.freecodecamp.org/news/an-introduction-to-testing-in-python/](https://www.freecodecamp.org/news/an-introduction-to-testing-in-python/)
- [https://www.geeksforgeeks.org/unit-testing-python-unittest/](https://www.geeksforgeeks.org/unit-testing-python-unittest/)
- [https://www.datacamp.com/community/tutorials/unit-testing-python](https://www.datacamp.com/community/tutorials/unit-testing-python)
- [https://docs.python.org/3/library/unittest.html](https://docs.python.org/3/library/unittest.html) (Official Docs)

I hope I was able to explain in brief the benefits and use cases of debugging and testing Python code. The more we start testing and debugging, the more we start knowing about the language and write better code. 

That's all for today. Tomorrow I'll be exploring how to do automated testing with Python using Selenium.

Have a great one!