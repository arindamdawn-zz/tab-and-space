---
title: '30 Days of Python 👨‍💻 - Day 9 - OOP Pillars'
description: "A JavaScript developer's quest to learn python in a month."
date: '2020-06-29T16:56:50.516Z'
tags: ['python', 'challenge']
draft: false
---

The first language that I was taught in school was [BlueJ]((https://www.bluej.org/)) back when I was in fifth grade. It is a Java Development Environment designed for beginners and it was there is our school curriculum. That was my first introduction to Object-Oriented Programming. Although I didn't understand much during those days, I still have vivid memories of our computer teacher explaining the pillars of OOP. I recollected some of our teacher's analogies while exploring the principles of OOP in Python today and have tried to fuse them with some of my own. 

There are basically 4 pillars or core principles of OOPs or so-called the **pillars of OOP** 

- **Encapsulation** - While covering the basics of OOP in my previous post, I already covered about Encapsulation indirectly. Encapsulation in simple terms means to create a container where attributes and actions associated with those attributes are grouped together.

 

```python
class Avenger:
  def __init__(self, name, knownAs):
    self.name = name
    self.knownAs = knownAs

  def reveal_identity(self):
    print(f'I am {self.name}, also known as {self.knownAs}')

hulk = Avenger('Bruce Banner', 'Hulk')
iron_man = Avenger('Tony Stark', 'IronMan')

hulk.reveal_identity() # I am Bruce Banner, also known as Hulk
iron_man.reveal_identity() # I am Tony Stark, also known as IronMan
```

In the above class, the identity of each Avenger is revealed, when the `reveal_identity` method is called. In other words, their identity has been *encapsulated*. These methods which perform some action makes classes so powerful.  While creating objects from the class, we can just call these methods to perform actions without bothering about how they do those actions. Just like Avengers!

- **Abstraction** - To learn driving a car, we need knowledge of just 3 things - A, B and C which is the accelerator, brake and clutch (Now with automatic cars, it even simpler). As drivers, we don't need to know what makes the car accelerate or how the car comes to a halt when applying brakes. This is called abstraction. It is everywhere in real-life. A gentle press on a power button starts up a computer, a tap on the screen captures a photograph from our mobile etc. In the above example, the `reveal_identity` method is abstracted.

```python
class Avenger:
  def __init__(self, name, knownAs):
    self.name = name
    self.knownAs = knownAs

  def reveal_identity(self):
    print(f'I am {self.name}, also known as {self.knownAs}')

hulk = Avenger('Bruce Banner', 'Hulk')

hulk.name = 'Thanos'
hulk.knownAs = 'Loki'

hulk.reveal_identity() # I am Thanos, also known as Loki
```

There is a problem with the class implementation above. Although a  hulk was created, Loki came and decided to camouflage hulk into Thanos! This is not what is want so right now although there are encapsulation and abstraction implemented, the internal functionality can be tampered or modified from outside. 

Python does not support the creation of private variables by default. Will have to explore more to see if it is possible to make variables and methods inaccessible and gain true abstraction.

 There is a convention however to create a private variable by prefixing it with `_`. This allows other developers to recognize it as a private variable and not accidentally try to update those variables and methods(  though they can). This is very similar to how we define a private variable in the JavaScript universe. 

- **Inheritance** - Inheritance as the name suggests means to *inherit* properties and functionalities from a parent. Based on a parent class, any number of sub-classes can be created that *inherit* from the parent class. This is done to share functionality among similar classes without writing the same logic again and again.

```python
class Player:
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def run(self):
    return f'{self.name} is running'

class Cricketer(Player): # Syntax to inherit a class
  def catch_ball(self):
    return f'{self.name} Caught the ball'

class Batsman(Cricketer):
  def swing_bat(self):
    return f'what a shot by {self.name}'

player1 = Batsman('Virat Kohli', 31)

print(player1.run())
print(player1.catch_ball())
print(player1.swing_bat())
```

**player1** is an instance of Batsman class. **Batsman** is a sub-class of  **Cricketer**. In the JavaScript world, the classes are inherited using the `extends` keyword. So I just created another comparison in my mental model between the two. Class **Cricketer** is again a subclass or child class of **Player** or in other words, it inherits **Player** class. 

Since **player1** is an object created from Batsman, it has the action to swing a bat.

It also inherits the ability to catch a ball from the **Cricketer** class. Very cool!

It also inherits the ability to run from the **Player** class.

In Python, there is a very handy built-in function, `isinstance` to check if an object is an instance of a class.

```python
class Player:
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def run(self):
    return f'{self.name} is running'

class Cricketer(Player):
  def catch_ball(self):
    return f'{self.name} Caught the ball'

class Batsman(Cricketer):
  def swing_bat(self):
    return f'what a shot by {self.name}'

player1 = Batsman('Virat Kohli', 31)

print(isinstance(player1, Batsman)) # True
print(isinstance(player1, Cricketer)) # True
print(isinstance(player1, Player)) # True
print(isinstance(player1, object)) # True
```

> Since everything in Python is an object, all classes inherit all properties and methods from this base class object

- **Polymorphism** - Poly means *many* and morphism means *forms*. So it literally means *appearing in many forms*. It is the feature by feature object classes can share the same methods, but those methods can do different actions based on what object is calling them.

```python
class ProgrammingLanguage:
  def __init__(self, name):
    self.name = name

class JavaScript(ProgrammingLanguage):
  def comment(self):
    return(f'// A Comment in {self.name}')

class Python(ProgrammingLanguage):
  def comment(self):
    return(f'# A comment in {self.name}')

language1 = JavaScript('JavaScript')
language2 = Python('Python')

def add_comment(languageObject):
  print(languageObject.comment())

add_comment(language1) # // A Comment in JavaScript
add_comment(language2) # # A comment in Python

for language in [language1, language2]:
  print(language.comment())
# // A Comment in JavaScript
# # A comment in Python
```

In the above block of code, I created a generic function **add_comment** that accepts a programming language object and calls the *comment()* method on it. The same comment method, when called with different objects produced different result based on their implementation of the *comment* method. 

In the second scenario, when looping through a list of language objects, it produced different result when calling the same method on them.

This is polymorphism.

Although there are no specific guidelines or rules for when to use what OOP principle, it depends on the problem statement and the solution can be achieved in multiply ways applying the concepts of OOP.

That's it for today. My mental model is perhaps gradually evolving, trying to build the latticework of programming concepts.

Tomorrow I have planned to finish off with the remaining OOP concepts and do some fun coding exercises before jumping into another exciting programming paradigm.

Have a nice one!