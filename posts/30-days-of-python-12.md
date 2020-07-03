---
title: '30 Days of Python 👨‍💻 - Day 12 - Lambda Expression & Comprehensions'
description: "A JavaScript developer's quest to learn python in a month."
date: '2020-07-02T05:39:16.196Z'
tags: ['python', 'challenge']
draft: false
---
Functional Programming in itself is a big topic and there are a lot of concepts in it to understand and master. However, I have a defined goal to learn Python in 30 days, so I rather prefer to understand the key concepts and learn the most commonly used techniques that would come in handy in building practical projects. 

I explored the fundamentals of functional programming and how it is implemented in Python yesterday. Today, I explored the missing pieces and I came across quite interesting findings while doing so which I will be sharing in this post.

## Lamba Expressions

**Lambda** is actually a term in computer science which means an anonymous function which is used only once while the expression is being executed. Lambda expressions are quite useful to simplify code and make functions more concise and compact. However, overusing them in complicated evaluations can make the code less readable. *Every cool thing has their trade-off as well!*

Upon exploring their syntax and use cases, it immediately made me think of **arrow functions** syntax from the JavaScript universe although they are not exactly similar.

```python
names = ['John', 'Peter', 'Elon', 'Joseph']

# make all names upper cased
uppercased = list(map(lambda name: str.upper(name), names))

print(uppercased)
```

`lambda` takes any number of arguments (here *name*) and expression involving the arguments (here *str.upper(name)*).

```python
users = [('Mary', 23), ('Emilie', 10), ('Katie', 30)]

sorted_by_name = sorted(users)
print(sorted_by_name) 
# [('Emilie', 10), ('Katie', 30), ('Mary', 23)]

sorted_by_age = sorted(users, key = lambda item: item[1]) 
# using age as key for sorting 

print(sorted_by_age)
# [('Emilie', 10), ('Mary', 23), ('Katie', 30)]
```

```python
scores = [23, 55, 20, 90, 34, 53]

scores_under50 = list(filter(lambda x: x < 50, scores))
print(scores_under50) # [23, 20, 34]
```

## Comprehensions

Comprehensions are another cool feature of Python which I found really useful. They are used to quickly build data structures such as `list`, `set`, `dict` in a compact syntax and is said to be faster as compared to creating the same data structures using loops. 

It can often be tempting to replace loops with comprehensions. However, a cleverly written code is not always good in terms of readability. So lengthy one-liner comprehensions should be avoided as it may look very compact but might hurt someone's brain 😃

Comprehensions are of the following kind in Python - List comprehension, Set Comprehension and Dict Comprehension.

**List Comprehension**

Suppose we have to create a list of characters from a string, the simple way would be something like this

```python
name = 'python'

new_list = []
for character in name:
  new_list.append(character)

print(new_list) 
# ['p', 'y', 't', 'h', 'o', 'n']
```

However, using list comprehension it can be more concise

```python
name = 'python'
new_list = [item for item in name] # here item can be any name

print(new_list)
```

[A good article on list comprehensions](https://www.programiz.com/python-programming/list-comprehension)

```python
# Quickly generates a list of 10 items with their values squared
new_list = [item**2 for item in range(10)]
print(new_list) # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

```

It is also possible to add a condition to the comprehension

```python
numbers = [2,34,23,53,34,12,22,89]

even_numbers = [num for num in numbers if num % 2 == 0]
print(even_numbers) # [2, 34, 34, 12, 22]
```

```python
brands = [
  {'name': 'Nike', 'category': 'shoes'},
  {'name': 'Reebok', 'category': 'shoes'},
  {'name': 'Tesla', 'category': 'cars'},
  {'name': 'Adidas', 'category': 'shoes'},
  ]

car_brands = [item for item in brands if item['category'] =='shoes']
print(car_brands) # filters out Tesla
```

**Set Comprehension**

```python
names = ['Rick', 'Alan', 'Rick', 'Mike']
new_set = {item for item in names}

print(new_set) # {'Mike', 'Alan', 'Rick'}
```

**Dictionary Comprehension**

```python
attendance = {
    'John': True,
    'David': False,
    'Nick': True,
    'Tom': False,
    'Marie': False,
    'Nancy': True
}

students_present = {key:value for key,value in attendance.items() if value}
print(students_present)
# {'John': True, 'Nick': True, 'Nancy': True}
```

## Quick Coding Exercise

From a list of names, filter out the duplicate names and store in a list.

I solved this before while exploring loops and functions. Today will try to recreate the solution using comprehensions

```python
names = [
    'Harry', 'Johnny', 'Lewis', 'Harry', 'Buck', 'Nick', 'David', 'Harry',
    'Lewis', 'Michael'
]

duplicate_names = list(set([name for name in names if names.count(name) > 1]))

print(duplicate_names) # ['Lewis', 'Harry']
```

The solution is a one-liner and looks very clever but one can argue against it being less readable. 

Anyways it good to know alternatives. I prefer to be more verbose while writing in practical projects so it's less clever code and more readable code.

That's all for today's exploration of functional programming. I think I have pretty much covered most of the essentials. 

Tomorrow, I plan to dig into **decorators in python**. I am sure that will be exciting and fun.

Have a great one!