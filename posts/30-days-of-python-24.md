---
title: "30 Days of Python 👨‍💻 - Day 24 - Web Development Basics"
description: "A JavaScript developer's quest to learn python in a month."
date: "2020-07-14T06:39:16.196Z"
tags: ["python", "challenge"]
draft: false
---

Today I explored how to develop websites using Python. There are broadly two aspects of web development - The client-side (Frontend) and the server-side (Backend). Whenever we enter the URL of any website in the browser, the browser does a request to the server which acknowledges the request and provides the contents of the website (HTML, CSS, JS, images etc) which is then rendered in the browser to display the website. Using Python, we can create a server that can acknowledge the requests made to it and server appropriate content to the requester. The server can be written in any language such as Ruby, JavaScript, Java etc. However using our existing knowledge of Python, we can easily build full-fledged websites.

Python has an in-built module `http.server` [https://docs.python.org/3/library/http.server.html](https://docs.python.org/3/library/http.server.html) which enables us to create a simple server quite easily. However, as per the documentation of the module, it is recommended not to use it in production as it does not have a robust security check in-place.

There are many web frameworks available in Python that provides a comprehensive set of features required to develop web applications. Some of the highly popular ones are :

- [Django](https://www.djangoproject.com/) - Probably the most famous Python web development framework and provides the widest array of features necessary for building web apps. More can be found in their documentation [https://docs.djangoproject.com/en/3.0/](https://docs.djangoproject.com/en/3.0/)
- [Flask](https://flask.palletsprojects.com/en/1.1.x/) - It is listed as a micro-framework. It is comparatively lean and small but is highly extensible and provides a lot of functionalities necessary for building web apps.
- [Pyramid](https://trypyramid.com/) is another light-weight web framework for Python.

[Here is an interesting article to know more about web frameworks in Python.](https://www.fullstackpython.com/web-frameworks.html)

## Creating a Web Application using Flask

Flask is a simple, easy to use framework so I opted to use it to build my first web application project using Python. The documentation is quite easy to understand and provides all the information required to build our own web application project.

I decided to build a simple blog application. In today's post, we will just do the basic setup and build the rest of it tomorrow.

I named the project `python-blog`. The next step is to create a virtual environment inside the project. Python 3 comes with a built-in `venv` command to create a virtual environment.

```bash
$ python -m venv venv
```

This creates a venv folder in the project with all the virtual environment files. Next step is to activate the environment.

```bash
$ . venv/Scripts/activate
```

Based on the terminal being used, the command will differ. [https://docs.python.org/3/tutorial/venv.html](https://docs.python.org/3/tutorial/venv.html) This document a detailed guide to virtual environments and activating it.

After activating the virtual environment, the flask library can be installed. This will now install the package only within the project's virtual environment.

```bash
$ pip install flask
```

Now we can test flask by building a simple server. I created a Python `server.py` to contain the server code.

`server.py`

```python
# import Flask class from flask  package
from flask import Flask
# create an instance of the Flask class by providing the application module as a parameter
app = Flask(__name__)

@app.route('/')
def my_first_app():
    return 'This is my first Python Web Application!'
```

Flask uses decorator functions to handle different routes of the application. In this, we have handled the default home route of the application.

Flask provides some environment variables. To run the app, the FLASK_APP environment variable needs to be assigned the server file which is `server.py`. Then the app is run using `flask run`

```bash
$ export FLASK_APP=hello.py
$ flask run
 * Running on http://127.0.0.1:5000/
```

On opening the 'localhost' URL `http://127.0.0.1:5000` we should see the content of the app.

To ensure that the server watches for changes made in the code, the Flask debug mode needs to be enabled like this

```bash
$ export FLASK_ENV=development
$ flask run
```

Now the server does not need to be restarted after any changes made to the `server.py` file.

## Serving files using Flask

To build the actual startup website, we need to serve website files such as HTML, CSS and maybe some JS. Flask has some conventions for serving files.

All **template** files (HTML) need to kept inside a **templates** folder and all static files (CSS, JS, assets) need to be placed inside a **static** folder. Flask internally uses the Jinja [https://jinja.palletsprojects.com/en/2.11.x/](https://jinja.palletsprojects.com/en/2.11.x/) templating engine to render the template files. I will be providing the link to the project's Github repo to check the file structure.

I created two template files, `index.html`, `about.html` and a CSS file `styles.css` to manage the global styles. To serve template files, Flask provides a function `render_template`.

`server.py`

```python
# import Flask class from flask  package
from flask import Flask, render_template
# create an instance of Flask class by providing the application module as a parameter
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')
```

We can pass dynamic variables in the URL as `<variable>` and then render them in the template dynamically using Variable Rules. Since we will be building a simple blog, let's create a post route which can accept post id as parameters and dynamically render different content. Optionally a converter type can be passed to the variable as `<converter:variable>`. These are the following types for converter types available

| string | (default) accepts any text without a slash |
| int | accepts positive integers |
| float | accepts positive floating-point values |
| path | like string but also accepts slashes |
| uuid | accepts UUID strings |

`server.py`

```python
@app.route('/post/<int:post_id>')
def show_post(post_id):
    # show the post with the given id, the id is an integer
    return 'Post %d' % post_id
```

Now on entering any numeric value after the URL `/post`, it should dynamically show the entered post id. Since we have added an `int` converter, passing any value apart from a number, will result in a page not found.

## References

I just mentioned very briefly about the basics of Web Development with Python. Here are some great reference articles to know more and explore in deep.

- [https://djangostars.com/blog/python-web-development/](https://djangostars.com/blog/python-web-development/)
- [https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django)
- [https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction)
- [https://www.fullstackpython.com/web-development.html](https://www.fullstackpython.com/web-development.html)
- [https://www.digitalocean.com/community/tutorials/how-to-make-a-web-application-using-flask-in-python-3](https://www.digitalocean.com/community/tutorials/how-to-make-a-web-application-using-flask-in-python-3)

The project's code can be found in this repo [https://github.com/arindamdawn/python-blog/tree/master](https://github.com/arindamdawn/python-blog/tree/master)

That's all for today. Tomorrow, I will continue adding more features to this blog application while exploring more of Flask's concepts. I have used Flask to create a web app. Feel free to explore Django by consulting the documentation and try building simple apps with it as well.

Have a great one!
