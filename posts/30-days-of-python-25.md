---
title: '30 Days of Python 👨‍💻 - Day 25 - Web Development Extras'
description: "A JavaScript developer's quest to learn python in a month."
date: '2020-07-15T06:39:16.196Z'
tags: ['python', 'challenge']
draft: false
---
Starting from the basic skeleton of the Flask app, today I implemented some basic features to complete our simple minimalist blog application. First using flask's template inheritance pattern, I worked on re-using common template code and then added two dummy posts to render them dynamically. Finally, generating a `requirements.txt` file to store all the package dependencies in a  single file which can then be used to download all the packages using a single command. 

## Template Inheritance

Currently, the `index.html`, `about.html` templates contain duplicate HTML code. Since Flask uses Jinja as the templating engine, we can use the powerful template inheritance concept to create a base template file which would contain all the common HTML code such as the HTML skeleton, navbar, footer etc. Other templates can then extend this base template hence making our template code more reusable.  I created a base template file `layout.html` to contain the common template structure as follows.

`layout.html`

```html
{% extends "layout.html" %}
{% block title %}Index{% endblock %}
{% block head %}
  {{ super() }}
  <style type="text/css">
    .important { color: #336699; }
  </style>
{% endblock %}
{% block content %}
  <h1>About</h1>
  <p class="important">
    Hi. I am Arindam. I love building User Interfaces. I am currently learning
    Python and created this simple blog using the Flask web development
    framework.
{% endblock %}
```

A template re-usable block can be created and the code for that block needs to be placed within `{% block block_name %}`  `{% endblock %}` The `{% block %}` informs the template engine that a child template may override these portions of the template.

The other files can then inherit this base template like this:

`about.html`

```html
{% extends "layout.html" %}
{% block title %}Index{% endblock %}
{% block head %}
  {{ super() }}
  <style type="text/css">
    .important { color: #336699; }
  </style>
{% endblock %}
{% block content %}
  <h1>About</h1>
  <p class="important">
    Hi. I am Arindam. I love building User Interfaces. I am currently learning
    Python and created this simple blog using the Flask web development
    framework.
{% endblock %}
```

Here the `super()` is used to render the contents of a block defined in the parent template.

More on templating using Flask can be found here [https://flask.palletsprojects.com/en/1.1.x/patterns/templateinheritance/](https://flask.palletsprojects.com/en/1.1.x/patterns/templateinheritance/) 

## Creating a page not found route

In Flask we can handle various exceptions that can happen while loading the contents from the server such showing a custom 404 page when a route is not found, showing a custom page when there is a 500 internal server error etc. I created a simple `not_found.html` file which would be rendered when a route is not found.

`not_found.html`

```html
{% extends 'layout.html' %} 
{% block title %}Page Not Found{% endblock %}
{% block content %}
  <h1>Page Not Found</h1>
  <p class="important">
    Sorry, this page does not exist!
{% endblock %}
```

`server.py`

```python
@app.errorhandler(404)
def page_not_found(error):
    return render_template('not_found.html'), 404
```

More on Flask error handling can be found here [https://flask.palletsprojects.com/en/1.1.x/patterns/errorpages/](https://flask.palletsprojects.com/en/1.1.x/patterns/errorpages/)

## Adding Sample Posts

For simplicity, I created a posts folder inside the templates directory and created two dummy post files `first-post.html` and `second-post.html`. Then I created a `[posts.py](http://posts.py)` file to read all the post files and store the names of the files in a list which can be rendered in the home page.

`posts.py`

```python
import os

def get_all_post_names():
    try:
        post_files = os.listdir('templates/posts')
        post_names = list(map(lambda x: x.split('.')[0], post_files))
        return post_names
    except:
        print('An error occurred while fetching posts')
        return []
```

```html
{% extends "layout.html" %} 
{% block title %}Index{% endblock %} 
{% block head%}
{{ super() }}
 {% endblock %} 
{% block content %}

<h1 class="title">
  Welcome to the Python Blog.
</h1>
<h2>Recent Posts</h2>
<ul class="post-list">
  {% for post in post_names %}
  <li><a href="posts/{{post}}.html">{{post}}</a></li>
  {% endfor %}
</ul>

{% endblock %}
```

 All Python statements such are written inside `{% %}` blocks as per the Jinja template syntax. Dynamic values are placed with `{{ }}`. We should now be able to see the two posts on the home page. Now on clicking on a post, it should open the respective post page. For that, we have to create a route which handles the post pages dynamically. 

```python
@app.route('/posts/<string:post_name>')
def show_post(post_name):
    return render_template(f'posts/{post_name}.html')
```

This route will handle page names and render the respective post pages dynamically.

## Generating a requirement.txt file

In our Python project, we can use several external packages. If we want to share this project with someone, we need to share all the project files and also mention all the packages that are required to run the project along with the correct version number. This is not quite a practical approach. 

All the installed dependencies used in the project can be listed in a single `requirements.txt` file (as per convention) along with their version using this command.

```bash
$ pip freeze > requirements.txt
```

This generates the `requirements.txt` file for the project. This file can be uploaded to any GIT repository. When someone downloads the project, they just need to run `pip install -r requirement.txt` and all the project related dependencies would be installed with the exact versions automatically. 

The complete project code can be found [here](https://github.com/arindamdawn/python-blog)

## References

The above project is a very minute use case of creating web apps using Python. I would like to list some useful references for further exploration:

- [A great Python web development course from edX](https://www.edx.org/course/cs50s-web-programming-with-python-and-javascript)
- [Building REST APIs using Flask](https://realpython.com/flask-connexion-rest-api/) 
- [REST api using Django](https://scotch.io/tutorials/build-a-rest-api-with-django-a-test-driven-approach-part-1)
- [https://programminghistorian.org/en/lessons/creating-apis-with-python-and-flask](https://programminghistorian.org/en/lessons/creating-apis-with-python-and-flask)
- [Using Flask with Angular](https://developer.okta.com/blog/2019/03/25/build-crud-app-with-python-flask-angular) 
- [Using Flask with React](https://developer.okta.com/blog/2018/12/20/crud-app-with-python-flask-react) 
- [Django and Angular app](https://devarea.com/building-a-web-app-with-angular-django-and-django-rest/#.XxArRzXhVPY)

That's all for today. For the remaining part of this series, I will be briefly exploring advanced topics such as the basics of Machine Learning and Data Science with Python.

Have a great one!
