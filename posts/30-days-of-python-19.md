---
title: '30 Days of Python 👨‍💻 - Day 19 - Regular Expressions'
description: "A JavaScript developer's quest to learn python in a month."
date: '2020-07-09T06:39:16.196Z'
tags: ['python', 'challenge']
draft: false
---

Regular Expressions (Regex/RegExp) is a powerful programming concept and is universal across all programming languages. but is often found to be confusing and hard to interpret mainly by beginners. Regular Expressions are a sequence of character patterns used for efficiently searching searching strings. They offer a wide array of use cases when dealing with texts such as searching, validation or replacing texts.

Today I explored how to use regex in Python. 

> A regular expression (shortened as regex or regexp also referred to as rational expression) is a sequence of characters that define a search pattern. Usually such patterns are used by string searching algorithms for "find" or "find and replace" operations on strings, or for input validation. It is a technique developed in theoretical computer science and formal language theory. (Wikipedia).

From my prior experience in writing JavaScript programs, I am already familiar with regular expressions. Also, there are tons of amazing resources available out there on the web about regular expressions. My intention today was to check out the syntax and method of using them in Python as knowing how to use regular expressions in Python will come in very handy when building projects in the upcoming days. So I compiled together some great resources related to regex in this post along with some practical coding exercises which I can use as a reference in future. It might help any enthusiast as well. There is no need to memorize each and every regex rule as they can always be Googled based on the requirement and most common regex patterns are readily available so we most of the time don't need to create complex regex patterns ourselves. 

However, having knowledge of how to read regex patterns is a great skill to have and it helps in understanding what a pattern is doing basically. 

Here are some cool regex resources specific to Python

- [This is a Python RegEx cheatsheet with examples](https://www.activestate.com/wp-content/uploads/2020/03/Python-RegEx-Cheatsheet.pdf)
- [A web cheat-sheet](https://www.shortcutfoo.com/app/dojos/python-regex/cheatsheet)
- [Another compact web-based cheat-sheet](https://www.debuggex.com/cheatsheet/regex/python)

> To practice and test regular expressions [Regex101](https://regex101.com/) is a great learning playground. It also helps in generating the equivalent Python regexp pattern as well

## Regex methods in Python

To use regular expressions in Python, a built-in module `re` needs to be imported. This module comes with several methods for using regex.

```
|       Function       |                           Description                          |
|:--------------------:|:--------------------------------------------------------------:|
| re.search            | Check if given pattern is present anywhere in input string     |
|                      | Output is a re.Match object, usable in conditional expressions |
|                      | r-strings preferred to define RE                               |
|                      | Use byte pattern for byte input                                |
|                      | Python also maintains a small cache of recent RE               |
| re.fullmatch         | ensures pattern matches the entire input string                |
| re.compile           | Compile a pattern for reuse, outputs re.Pattern object         |
| re.sub               | search and replace                                             |
| re.sub(r'pat', f, s) | function f with re.Match object as argument                    |
| re.escape            | automatically escape all metacharacters                        |
| re.split             | split a string based on RE                                     |
|                      | text matched by the groups will be part of the output          |
|                      | portion matched by pattern outside group won’t be in output    |
| re.findall           | returns all the matches as a list                              |
|                      | if 1 capture group is used, only its matches are returned      |
|                      | 1+, each element will be tuple of capture groups               |
|                      | portion matched by pattern outside group won’t be in output    |
| re.finditer          | iterator with re.Match object for each match                   |
| re.subn              | gives tuple of modified string and number of substitutions     |
```

## Code Exercises

Let's try out building some code to test out various practical use cases of regex in building Python applications.

- Password Validator

```python
# Prompts user to enter a password and validates it
# Criteria:
# Min 8 characters
# Only alphabets, numbers and @$!%*?& allowed
# should have atleast 1 uppercase character
# should have atleat 1 lowercase character
# should have atleast 1 special character
# should have atleast 1 number
import re

def password_checker():
    password = input('Please enter a password')
    password_pattern = re.compile(
        r"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
    )
    result = re.fullmatch(password_pattern, password)
    if result:
        print('Valid password')
    else:
        print('Invalid password')

password_checker()
```

Note: The above code can be made more interactive using a switch statement to check for conditions separately and displaying individual errors if any condition fails. If the above regex looks confusing, try copying it to  [regex101](https://regex101.com). It will breakdown the regex into chunks with explanations.

I prefer using the `compile` method to store the regex pattern as a reference which can be used later on. It returns a regex object.

The `r` before the regex string tells the Python interpreter that it is a *raw string*. With raw strings, there is no need for escaping characters.

- Extract numbers from a string

```python
# Program to extract numbers from a string

import re

string = 'Python was introduced in 1992. This is year 2020.'
pattern = '\d+'

result = re.findall(pattern, string)
print(result) # ['1992', '2020']
```

These are some basic examples of how regex can be used in Python.

Here are some good articles for more in-depth information on regex in Python

- [https://www.programiz.com/python-programming/regex](https://www.programiz.com/python-programming/regex)
- [https://realpython.com/regex-python/](https://realpython.com/regex-python/)
- [https://github.com/ziishaned/learn-regex](https://github.com/ziishaned/learn-regex) (**My personal favorite**)

That's all for today. Tomorrow I will be digging into testing techniques in Python. I am pretty excited about that.

Have a great one!