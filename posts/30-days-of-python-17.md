---
title: '30 Days of Python 👨‍💻 - Day 17 - External Modules'
description: "A JavaScript developer's quest to learn python in a month."
date: '2020-07-07T06:39:16.196Z'
tags: ['python', 'challenge']
draft: false
---
Python is no doubt an amazing programming language. It has a lot of highly useful set of built-in modules or standard libraries. However, one of the things that made Python such a loved language among the developer community is the amazing ecosystem of packages made available by millions of contributors. Today, I spent time exploring all about using external Python packages and how to use them in our projects.

## Python Package Index

The Python Package Index (PyPI) is a collection or a repository which stores all the Python packages contributed by the huge community of Python developers. Anyone ranging from a single developer to a big organization can create software written in Python and then share it with the community using the Python Package Index. It is very similar to **npm** or the Node Package Manager in the JavaScript world that also contains a huge collection of JavaScript libraries built by the good folks of the community. 

PyPI allows us to install the packages built and shared by the Python community are available [here](https://pypi.org/).

Any Python package that is not a part of the built-in Python modules can be installed using the package installer `pip`.This tool is installed along with Python. It provides a Command Line Interface (CLI) to find, install, download and remove packages from PyPI and other Python Package indexes. The command to install any external Python package is `pip install`. 

Note: The `pip` version can be checked using `pip --version` or `pip -V`. If the path shows Python 2.7, then make sure you have python version 3 installed and then run `pip` as `pip3`

[A good resource on pip](https://www.w3schools.com/python/python_pip.asp)

## Virtual Environments

When we install a package using the command `pip install package-name` in the terminal, it installs the package globally. Which means if we import the package in two different Python projects, the same version of the package would be installed. However, this is not what we want as we might need to install different versions of a package in different projects. To make this possible, there is a tool which now comes with Python 3.3+ versions called `venv`. It basically creates a sandbox wrapper to make the installed dependencies only accessible in that project. 

IDEs like PyCharm, creates a virtual environment each time when a new project is created. The list of all dependencies along with their versions is maintained in a file named `requirements.txt` in the root folder of the project. I will be discussing more on this when we build some Python projects in the upcoming days.

If we compare this with the JavaScript universe, each project in JavaScript has its own version of dependencies in a sort of virtual environment where they are installed called the `node_modules`. The dependencies and their versions are managed by a file `package.json` in the root directory of the project. 

If you are interested in how packages are created and shared with the community, [here](https://packaging.python.org/tutorials/packaging-projects/) is an official document about it 

[A great article on Python virtual environments](https://realpython.com/python-virtual-environments-a-primer/)

## Popular Python Packages

I explored some of the trending and popular Python packages that are available in the Python Package Index. We will use a few of them in creating projects in the upcoming challenges. Here is a list of some of the cool external Python packages

- [Requests](http://www.python-requests.org/) - The most famous Python library for doing network requests
- [Tensorflow](https://github.com/tensorflow/tensorflow) - Popular Machine Learning library
- [Scrapy](https://scrapy.org/) - One of the most popular library for web scraping
- [Twisted](https://twistedmatrix.com/trac/) - Popular networking library
- [Numpy](https://numpy.org/) - Very popular package for scientific computing
- [Pygame](http://www.pygame.org/news.html) - For 2D game development

These are just a few of the many popular Python libraries. Will be using them very soon!

## Using an external package

To test using an external package, I chose a random jokes generator package. Let's download the package using `pip`

`pip install joke-generator`

Let's try using this package in our code

```python
import joke_generator

random_joke = joke_generator.generate()

print(random_joke) # A random joke will appear
```

Let's try another external package. This time we will try to fetch some data from Wikipedia. I found a package called Wikipedia-API. 

`pip install Wikipedia-API`

and then use it in code

```python
import wikipediaapi

wiki_wiki = wikipediaapi.Wikipedia('en')
page_py = wiki_wiki.page('Python_(programming_language)')

print("Page - Title: %s" % page_py.title)
# Page - Title: Python_(programming_language)
print("Page - Summary: %s" % page_py.summary[0:60])
# Page - Summary: Python is an interpreted, high-level, general-purpose program
```

This is a brief introduction to how we can use external packages in our Python applications. Will explore more on this while building some interesting projects in the coming days.

That's all for today! Tomorrow will explore an important concept - handling file I/O operations in Python.

Have a great one!