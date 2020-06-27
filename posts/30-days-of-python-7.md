---
title: '30 Days of Python 👨‍💻 - Day 7 - Developer Environment'
description: "A JavaScript developer's quest to learn python in a month."
date: '2020-06-27T16:56:50.516Z'
tags: ['python', 'challenge']
draft: false
---
Throughout the first week, I spent time getting familiar with the basic terminologies, syntax and concepts of Python and tried building a mental model around it using my experience with JavaScript. As per the rough roadmap I created, I dedicated Day 7 towards setting up my Python developer environment and exploring more on various IDEs available and more related to developer environment which I will be sharing in this post.

## Installing Python

Installation is pretty self-explanatory and very well described in the official Python download page which I have linked [here](https://www.python.org/downloads/)

Make sure you download the latest version of Python (3.8.3 as of now) to take advantage of the latest features. 

## Python Developer Tools

a) Code Editors ( Light-weighted applications. )

- VS Code ( Free and The one I use )  [download link](https://code.visualstudio.com/)
- [Sublime Text](https://www.sublimetext.com/) (Free)

b) IDEs ( Comes integrated with all tools required for development, testing, debugging )

- [Pycharm](https://www.jetbrains.com/pycharm/) (Professional and Community edition)
- [Spyder](https://www.spyder-ide.org/) (Free)

c) Notebooks

- Jupyter Notebooks (Used for Machine Learning and Data Science)

**Python Extensions for VS Code**

If using VS Code as the code editor, these extensions might come handy for more Python friendly development experience

- [VS Code Python by Microsoft](https://github.com/Microsoft/vscode-python)
- [Python Docstring by Nils Werner](https://github.com/NilsJPWerner/autoDocstring)
- [Better Comments](https://github.com/formulahendry/vscode-code-runner)[https://github.com/aaron-bond/better-comments](https://github.com/aaron-bond/better-comments)

I personally liked PyCharm and the community-edition provides all features that are required for profession development with Python. It gives a great professional environment with all tools baked in. However, I will be using VS Code as I often need to switch to other JavaScript projects and using a single editor would be less cumbersome. 

## Pep8

[https://www.python.org/dev/peps/pep-0008/](https://www.python.org/dev/peps/pep-0008/) is a style guide for Python Code. VS Code will prompt installation of **autopep8** formatter when trying to format Python code. It will format Python code as per the specifications. An IDE like PyCharm comes with a Pep8 formatter baked in.

## Anaconda

[Anaconda](https://www.anaconda.com/products/individual) is a package manager, an environment manager, and Python distribution that contains a collection of many open source packages (numpy, scikit-learn, scipy, pandas to name a few). Additional packages after installing Anaconda, can be installed by using Anaconda’s package manager, conda or pip to install those packages.  Conda even makes it easy to switch between Python 2 and 3 (you can learn more about it here). In fact, installation of Anaconda is also a common way to install Jupyter Notebooks.

There is another distribution package available called [Minoconda](https://docs.conda.io/en/latest/miniconda.html), a stripped-down version of Anaconda for computers with memory constraints.

Developer Environment is something which can be a reason for procrastination figuring out the latest and greatest tool for development. So sticking to an IDE or code editor is better. It's way better to feel very comfortable with a single editor rather than knowing tons of applications in bits and pieces. It's good to know the tools and technologies that are available but frequent switching of tools just due to their popularity is not essential always. 

That's it, folks. I covered the topics which were part of the week 1 roadmap. It's time to enter the more advanced territory of Python exploring programming paradigms such as Object-Oriented style and Functional Style. Will start with OOP concepts with Python tomorrow.

Have a great one!