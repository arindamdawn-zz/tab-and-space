---
title: '30 Days of Python 👨‍💻 - Day 8 - OOP Basics'
description: "A JavaScript developer's quest to learn python in a month."
date: '2020-06-28T16:56:50.516Z'
tags: ['python', 'challenge']
draft: false
---

Python is a **multi-paradigm** language. Coming from the JavaScript universe, I am aware of this as JavaScript is a multi-paradigm language as well.

What it means is there is more than one explicit way of thinking about how we write our code in Python, structure our code. Now, why is this important? In real-world, while working on real-life projects, the problems we try to solve with programming are complex and involves a lot of brainstorming even before writing a single line of code. Good programmers not only think about how to solve the problem with code but how to write code that is **easier to maintain**, **easier to extend when necessary**, and also **easier to read and write**. This way of structuring and organizing code is known as a programming paradigm. It's like a pattern with some predefined set of rules which the developers can follow to avoid chaos. Imagine if every developer tried to be shrewd and wrote code in their unique way. Without a definite pattern, the project would be doomed! 

Back to Python!

In Python, everything is an **Object**. The data types that I explored are all objects which have their own associated attributes and methods to do some action. These objects come from their classes as an **instance**. It means that all the data types in Python have a defined structure or *prototype* where all the details of their properties and functionalities have been defined. 

```python
print(type(2)) # <class 'int'>
print(type(2.5)) # <class 'float'>
print(type('Python')) # <class 'str'>
print(type(True)) # <class 'bool'>
print(type({})) # <class 'dict'>
print(type([])) # <class 'list'>
print(type(())) # <class 'tuple'>
print(type(None)) # <class 'NoneType'>
```

Just like the built-in classes, custom classes can be created to represent real-world things like Cars, Machines, Human Being, Animal or anything. This representation of real-world entities and their properties and behaviours into classes in code is can be thought of as a loose definition of **Object Oriented Programming paradigm**. Each class can then be used to created instances of an object. These objects can be combined with other objects to simulate real-world functionalities. 

In the JavaScript universe as well, custom classes can be created (although classes in JS are more of syntactic sugar on top of prototype functions introduced with ES6). So in my mental model, I hypothetically connected them. 

But to see OOP in action in Python will have to dive deep and write some code.

```python
class Avenger:
  def __init__(self, name):
    self.name = name
  
  def fight(self):
    print('👊')

spiderman = Avenger('Spiderman')

print(type(Avenger)) # <class 'type'>
print(type(spiderman)) # <class '__main__.Avenger'> --> instance of Avenger
```

In Python, the naming convention for classes is camel-case and singular names, unlike variables which need to be snake-cased.

The `__init__` is an initialization method (also called constructor method). It is used to initialize the variables of the class. In the above class, **name** is being initialized. In JavaScript, for instance, this is done similarly in the constructor function of the class.

`self` is a keyword in Python which is a reference to the instance of the class. It is used to access the variables or attributes of the class. In my mental model, I compare this with the JavaScript `this` keyword. 

In the **Avenger** class, fight is a method which is a hypothetical representation of what an Avenger will do when asked to fight. Here it just prints an emoji, but it can be any action. Using this Avenger class as a prototype, I created a Spiderman object. Similarly, this class can be used to create other avengers but it seems everyone would do the same thing on asking them to fight which is not cool.

```python
class Avenger:
  def __init__(self, name, weapon):
    self.name = name
    self.weapon = weapon
  
  def fight(self):
    print(self.weapon)

spiderman = Avenger('Spiderman', 'dispatch a web')
thor = Avenger('Thor', 'thunder attack')

spiderman.fight() # dispatch a web
thor.fight() # thunder attack
```

Now that's better. Each avenger performs something unique! This is a bare minimal skeleton of the class and it can be stuffed with a lot of functionalities to make the avengers more sophisticated.

The `__init_`which is called the constructor method gets called each time when the object is instantiated(created). It provides a lot of control mechanism as well such only allow object creation when a condition is met or add default values to the parameters.

```python
class MotorBike:
  def __init__(self, brand, age):
    if(age <= 15):
      self.brand = brand
      self.age = age
  
  def start(self):
    print(f'starting {self.brand}....')
  
bullet = MotorBike('Royal Enfield Bullet',20)
bullet.start() # error. object is created only if age is less than or equals 15
```

## Coding Exercise

The task is to create a class *SoccerPlayer* with *name* and *goals* attributes, then create 3 player objects and then using a function find out the maximum goals and print that.

```python
class SoccerPlayer:
  def __init__(self, name, goals):
    self.name = name
    self.goals = goals
  

def calculateMaxGoals(*args):
  print(args)
  return max(*args)

messi = SoccerPlayer('messi', 10)
ronaldo = SoccerPlayer('ronaldo',22)
neymar = SoccerPlayer('neymar', 8)

max_goals = calculateMaxGoals(messi.goals, ronaldo.goals, neymar.goals)
print(f'The highest number of goals is {max_goals} goals')
```

## @classmethod and @staticmethod

Methods can be attached to a class without creating an instance of it. There are two ways to do so. 

- `@classmethod` allows the creation of a method in the class by adding the so-called *decorator* `@classmethod` on top of the method name. I will explore decorators in details later but for now just roughly understood the concept of creating a class method.

```python
class Calculator:
  def __init__(self,type):
    self.type = type

  @classmethod
  def calculate_sum(cls, num1, num2): 
		return num1 + num2
	# cls is just like self which needs to passed as 1st parameter
    
print(Calculator.calculate_sum(3,5)) # 8
```

- `@staticmethod` is very similar to the `@classmethod`. It just does not need to pass the `cls` keyword. This method can be called without instantiating the class.

```python
class Calculator:
  def __init__(self,type):
    self.type = type

  @classmethod
  def multiply(num1, num2): 
		return num1 * num2
	# cls is just like self which needs to passed as 1st parameter
    
print(Calculator.multiply(3,5)) # 15
```

That's it for today. I will be covering and exploring the principles of object-oriented programming in detail and practise some exercises in the process of understanding the concepts. The mental model is being developed slowly and steadily to tackle more advanced topics in the upcoming days. Hope you are finding it interesting as well.

I am currently watching this interesting Q & A video with the founder of Python. Thought of sharing it as well :)
[![Python creator Guido van Rossum](http://img.youtube.com/vi/7kn7NtlV6g0/0.jpg)](http://www.youtube.com/watch?v=7kn7NtlV6g0 "Creator of Python Programming Language, Guido van Rossum")

Keep Coding. Let me know your thoughts.

Have a great one!