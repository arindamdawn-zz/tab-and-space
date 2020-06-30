---
title: '30 Days of Python 👨‍💻 - Day 10 - OOP Missing Pieces'
description: "A JavaScript developer's quest to learn python in a month."
date: '2020-06-30T16:56:50.516Z'
tags: ['python', 'challenge']
draft: false
---

I almost explored all the key OOP concepts yesterday. Today I went through the remaining bits and pieces of Object Oriented Programming concepts and their implementation in Python. Along with that, I have tried to include some practical code exercises that involve the overall usage of OOP concepts in Python to recall all the concepts from the mental model that has been developed.

## super()

`super` is a reserved word in Python (was introduced in Python v 2.2) which comes into action during inheritance. When a subclass or child class which inherits from a parent class and needs to call a method of the parent class, it uses `super`. I know this sounds quite confusing. So here's an example

- Without using `super`

```python
class Employee:
  def __init__(self, name):
    self.name = name
    print(f'{self.name} is an employee')

class Manager(Employee):
  def __init__(self, department, name):
    self.department = department
    self.name = name
    Employee.__init__(self, name)
    print(f'Manager, {self.department} department')

staff_1 = Manager('HR', 'Andy')
# Andy is an employee
# Manager, HR department
```

Here, the `__init__`constructor method of the parent class is called by explicitly using the parent class name and then the `self` object is passed as the first parameter.

- Using `super` (Compact syntax - No need to pass `self`)

```python
class Employee:
  def __init__(self, name):
    self.name = name
    print(f'{self.name} is an employee')

class Manager(Employee):
  def __init__(self, department, name):
    self.department = department
    self.name = name
    super().__init__(name)
    print(f'Manager, {self.department} department')

staff_1 = Manager('HR', 'Andy')
# Andy is an employee
# Manager, HR department
```

Just like the constructor method shown in the above code, any method of the parent class can be called inside the child class using `super()` 

In JavaScript, the syntax is more compact where `super` is called like **super(parameter)**. But I like the Python syntax as well. It is more explicit about calling the `__init__` method using `super`.

## Introspection

Python is able to evaluate the type of an object (everything in Python is an object) at runtime. It means the interpreter is able to understand what are the properties and methods of the object and their accessibility at runtime dynamically. This is called **introspection**. 

Python provides a built-in function `dir` to introspect an object.

```python
class Developer:
  def __init__(self, name, language):
    self.name = name
    self.language = language
  
  def introduce(self):
    print(f'Hi! I am {self.name}. I code in {self.language}')

dev = Developer('Matt', 'Python')

print(dir(dev)) # Try this in any Python REPL
```

## Dunder Methods

In Python, classes can be made more powerful by defining some magical methods called **dunder methods**. Dunder is a short name for *double-under*. These methods are prefixed and suffixed by double underscores `__`. These special methods are predefined in Python for specific use cases. For example, we are able to access the built-in function because it is defined as a special dunder method `__len__`. 

When creating a class, these dunder methods can be used to simulate the behaviour of built-in types. 

```python
class Sentence:
  words = []
  
  def add_word(self, word):
    self.words.append(word)

  def __len__(self):
    return len(self.words)

new_sentence = Sentence()
new_sentence.add_word('Hello')
new_sentence.add_word('World')
print(len(new_sentence))
```

I modified the Sentence class so that we can use the built-in method `len` which is not available by default to implement custom logic. Dunder methods seem quite handy!

## Multiple Inheritance

It is possible for a class to inherit properties and methods from multiple classes via Multiple Inheritance. It is a powerful concept but has its caveats as well. In comparison with JavaScript universe, Multiple Inheritance is not supported there.

```python
class Batsman:
  def swing_bat(self):
    return 'What a shot!'

class Bowler:
  def bowl_bouncer(self):
    return 'What a bouncer!'

class AllRounder(Batsman, Bowler):
  pass

player = AllRounder()

print(player.bowl_bouncer()) # What a shot!
print(player.swing_bat()) # What a bouncer!
```

It can get a bit complicated when parent classes have constructor methods that require initialization. In the child class, all the inherited class constructor methods need to be initialized. 

```python
class Batsman:
  def __init__(self, hitting_power):
    self.hitting_power = hitting_power

  def swing_bat(self):
    return f'Shot with power {self.hitting_power}'

class Bowler:
  def __init__(self, delivery_speed):
    self.delivery_speed = delivery_speed

  def bowl_bouncer(self):
    return f'Bowled with speed of {self.delivery_speed} kmph'

class AllRounder(Batsman, Bowler):
  def __init__(self, hitting_power, delivery_speed):
    Batsman.__init__(self, hitting_power)
    Bowler.__init__(self, delivery_speed)

player = AllRounder(90, 80)
print(player.swing_bat())
print(player.bowl_bouncer())
```

## Method Resolution Order

Method Resolution Order or mro in short, is the order in which properties and methods are inherited in Python. 

When inheriting from multiple classes, the properties and methods are inherited by the child class in a specific hierarchy. The underlying algorithm that implements this in Python uses [https://en.wikipedia.org/wiki/Depth-first_search](https://en.wikipedia.org/wiki/Depth-first_search) Depth-first search algorithm. 

```python
class Employee:
  secret_code = 'secret'

class Manager(Employee):
  secret_code = 'm123'

class Accountant(Employee):
  secret_code = 'a123'

class Owner(Manager, Accountant):
  pass

person = Owner()
print(person.secret_code) # m123
```

To know the order of inheritance, Python provides a method `mro` that can be called on the object to view the hierarchy of inheritance

```python
print(Owner.mro()) # try in a python console with above code to see the result
```

Multiple inheritances can be difficult to understand so this pattern is not commonly used in practice. This is what I read in several articles.

That's all for today! 

Finally done with the Object-Oriented Programming concepts in Python. The goal is to implement these principles when I start building real Python projects once this challenge is over.

I hope I was able to cover all the key Object Oriented Programming concepts in Python and share it without sounding very complicated.

**Video I am currently watching**
[![Oral History of the Python Founder](https://img.youtube.com/vi/Pzkdci2HDpU/0.jpg)](http://www.youtube.com/watch?v=Pzkdci2HDpU "Oral History of the Python Founder") 

Tomorrow will plunge into the territory of **functional programming** in Python. It's gonna be quite exciting for sure. Although Python, in general, is a Procedural Language and is popular for its Object-Oriented concepts, will explore how can functional style programming concepts be implemented in Python for the rest of this week.

Have a great one!