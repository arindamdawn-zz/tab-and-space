---
title: '30 Days of Python 👨‍💻 - Day 18 - File I/O'
description: "A JavaScript developer's quest to learn python in a month."
date: '2020-07-08T06:39:16.196Z'
tags: ['python', 'challenge']
draft: false
---
Today I explored how to handle files and communicate with files using Python. All these days, I have been exploring and sharing about various Python concepts along with some best practices to program in Python. However, we haven't interacted with the outside world outside Python. Our programs often need to communicate with the external world for various reasons such as reading data from excel, CSV or pdf files, convert and compress images, extract data from text files, read data from a database and countless other things. This interaction with the external world is done using I/O or input-output operations.

Files help us store data permanently into systems. When we write any program to manage some data, the data is stored temporarily in the RAM of the machine and gets erased when the computer is turned off. To store data permanently, they need to be stored in some kind of a database or in some file systems so that can be accessed for later use. 

Files can be broadly classified based on their content into two types :

- Binary (Also called as Rich text)
- Text

If you are interested to know more about these two file types [here is a great article to checkout.](https://dev.to/sharkdp/what-is-a-binary-file-2cf5)

Python provides a built-in function `open` to open any file. Any file first needs to be opened first to read data from it or write some data onto it. Reading data from a file is simple in Python. 

I used [REPL](https://repl.it/) REPL as the playground to experiment with all the code-blocks provided in this article.

## Opening Files

I created a `test.txt` file with some dummy content for testing.

`test.txt`

```
# test.txt
I am learning python.
```

Now the contents of this file can be read using Python like this.

`main.py`

```python
content = open('test.txt')
output = content.read()
print(output) # I am learning python.
```

We can also specify the mode while opening the file in the `open` function. By default, the mode is 'r' or read mode. We can also specify if the file needs to be opened in a text or binary mode.

| Mode |                                                    Description                                                    |
|:----:|:-----------------------------------------------------------------------------------------------------------------:|
| r    | Opens a file for reading. (default)                                                                               |
| w    | Opens a file for writing. Creates a new file if it does not exist or truncates the file if it exists.             |
| x    | Opens a file for exclusive creation. If the file already exists, the operation fails.                             |
| a    | Opens a file for appending at the end of the file without truncating it. Creates a new file if it does not exist. |
| t    | Opens in text mode. (default)                                                                                     |
| b    | Opens in binary mode.                                                                                             |
| +    | Opens a file for updating (reading and writing)                                                                   |

We can also specify the encoding format while opening a file. The default format is utf-8

## Closing Files

It is important to close the file after performing operations on it as it will free up the memory space associated with the file. 

`main.py`

```python
content = open('test.txt', mode='r')
output = content.read()
print(output)
content.close()
```

The above block can be placed inside a try-except finally block. This ensures that if there is any error while performing the operation, the file will be closed.

`main.py`

```python
try:
    content = open('test.txt', mode='r')
    output = content.read()
    print(output)
except FileNotFoundError as error:
    print(f'file not found {error}')
finally:
    content.close()
```

Python provides a better syntax to open a perform operations on a file using the `with` statement. It automatically closes the file once the operation is performed.

`main.py`

```python
with open('test.txt', mode='r') as content:
    output = content.read()
    print(output) # I am learning python.
```

## Writing to Files

Python provides `write` method to write data to a file. The file needs to be opened using `w` mode to write to a file. It is to be noted that using the `w` mode overrides the content of the file. If the content needs to be appended, then the `a` mode can be used. If the file does not exist, the file is created before writing data to it.

`main.py`

```python
with open('test.txt', mode='w', encoding='utf-8') as my_file:
    my_file.write('This is the first line\n') # \n is for creating a newline
    my_file.write('This is the second line\n')
    my_file.write('This is the third line')
```

`main.py`

```python
with open('test.txt', mode='a', encoding='utf-8') as my_file:
    my_file.write('This text will be appended')
```

Another way to write is by using the `writelines` method. It can be provided with a list of items.

`main.py`

```python
with open('test.txt', mode='w', encoding='utf-8') as my_file:
    my_file.writelines(['First line', '\n', 'Second Line'])
```

## Reading from files

Python provides a lot of methods read from a file. The file needs to be opened using the 'r' mode. The is also an 'r+' mode if we have to do read and write operations together. The `read` method accepts a size parameter which is basically the character count till which it will read. If the size is not provided, then it reads the entire file.

`main.py`

```python
with open('test.txt', mode='r', encoding='utf-8') as my_file:
    content = my_file.read()
    print(content)
```

There is a `tell` method which provides where the cursor in the file that is being read is currently. 

The `seek` method is used to bring the cursor to a specific position in the file.

`main.py`

```python
with open('test.txt', mode='r', encoding='utf-8') as my_file:
    my_file.seek(0) # brings cursor to beginning of file
    print(my_file.tell()) # prints location of cursor
    content = my_file.read()
    print(content)
```

If there are many lines in the file, a more efficient and performant way is to read the lines using a loop.

`main.py`

```python
with open('test.txt', mode='r', encoding='utf-8') as my_file:
    for line in my_file:
        print(line)
```

Alternatively, Python provides two other methods, `readline` and `readlines.`

`readline` reads the file until a newline(\n) is reached.

`readlines` returns a list of lines

## Python file methods

Here is the complete list of file methods available in Python

|           Method           |                                             Description                                            |
|:--------------------------:|:--------------------------------------------------------------------------------------------------:|
| close()                    | Closes an opened file. It has no effect if the file is already closed.                             |
| detach()                   | Separates the underlying binary buffer from the TextIOBase and returns it.                         |
| fileno()                   | Returns an integer number (file descriptor) of the file.                                           |
| flush()                    | Flushes the write buffer of the file stream.                                                       |
| isatty()                   | Returns True if the file stream is interactive.                                                    |
| read(n)                    | Reads at most n characters from the file. Reads till end of file if it is negative or None.        |
| readable()                 | Returns True if the file stream can be read from.                                                  |
| readline(n=-1)             | Reads and returns one line from the file. Reads in at most n bytes if specified.                   |
| readlines(n=-1)            | Reads and returns a list of lines from the file. Reads in at most n bytes/characters if specified. |
| seek(offset,from=SEEK_SET) | Changes the file position to offset bytes, in reference to from (start, current, end).             |
| seekable()                 | Returns True if the file stream supports random access.                                            |
| tell()                     | Returns the current file location.                                                                 |
| truncate(size=None)        | Resizes the file stream to size bytes. If size is not specified, resizes to current location.      |
| writable()                 | Returns True if the file stream can be written to.                                                 |
| write(s)                   | Writes the string s to the file and returns the number of characters written.                      |
| writelines(lines)          | Writes a list of lines to the file.                                                                |

## A cool exercise

Let's try building a translator program that can read a file with English content and create a new translated version of the file in a different language.

For this exercise, we will use an external Python package from PyPI called [Translate](https://pypi.org/project/translate/). With the help of this package, we can do offline translations!

First, this package needs to be installed. Since I am using REPL, I will add it to the packages section in REPL. It can be installed using `pip` in the terminal if using a local project.

Will create a file named `quote.txt` and fill it with an inspiring quote:

`quote.txt`

```
If you can't make it good, at least make it look good. - Bill Gates
```

Now let's generate two translated versions of this quote. One in Spanish with filename `quote-es.txt` and another in French with filename `quote-fr.txt`

`main.py`

```python
from translate import Translator

spanish_translate = Translator(to_lang="es")
french_translate = Translator(to_lang="fr")

try:
    with open('quote.txt', mode='r') as quote_file:
        # read the file
        quote = quote_file.read()
        # do the translations
        quote_spanish = spanish_translate.translate(quote)
        quote_french = french_translate.translate(quote)
        # create the translated files
        try:
            with open('quote-es.txt', mode='w') as quote_de:
                quote_de.write(quote_spanish)
            with open('quote-fr.txt', mode='w') as quote_fr:
                quote_fr.write(quote_french)
        except IOError as error:
            print('An error ocurred')
            raise (error)
except FileNotFoundError as error:
    print('File not found')
    raise (error)
```

This will generate two translated files with the quote translated automatically. That was pretty cool!

## Built-in module to handle files

Python provides a built-in module as part of its standard libraries called `pathlib`. It provides various convenient classes representing file system paths with semantics appropriate for different operating systems. This module was introduced in v3.4. It is beneficial to use this package when dealing with a lot of directories. 

Here are some resources related to the `pathlib` module with great explanations.

- [https://realpython.com/python-pathlib/](https://realpython.com/python-pathlib/)
- [https://docs.python.org/3/library/pathlib.html](https://docs.python.org/3/library/pathlib.html)
- [https://www.geeksforgeeks.org/pathlib-module-in-python/](https://www.geeksforgeeks.org/pathlib-module-in-python/)

Will be using `pathlib` module explicitly in upcoming days while building projects.

That's all for today. Tomorrow I plan to explore working with regular expressions in Python and their use cases.

Have a great one!