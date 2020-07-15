---
title: '30 Days of Python 👨‍💻 - Day 4 - Data Types III'
description: "A JavaScript developer's quest to learn python in a month."
date: '2020-06-24T16:56:50.516Z'
tags: ['python', 'challenge']
draft: false
---

As I am sharing my daily learning python learning progress, it is becoming more clear and evident to me that learning and sharing explaining concepts simultaneously helps solidify the building blocks even more. Another perk is the love from the community ❤️

Starting from where I left on day3, I continued exploring about lists and the remaining data types today.

**Actions on lists**

Just like strings, Python provides us with some built-in methods to perform some actions on list data types. Again methods are called after the `.` operator on objects (here lists). The actions can be classified based on their type of actions.

1. **Adding items to lists (append, insert, extend)**

```python
scores = [44,48,55,89,34]
scores.append(100) # Append adds a new item to the end
print(scores) # [44, 48, 55, 89, 34, 100]
scores.insert(0, 34) # Inserts 34 to index 0
scores.insert(2, 44) # Inserts 44 to index 2
print(scores) # [34, 44, 44, 48, 55, 89, 34, 100]
scores.extend([23]) # Extend takes an iterable (loopable items) and adds to end of list
print(scores) # [34, 44, 44, 48, 55, 89, 34, 100, 23]
scores.extend([12,10])
print(scores) # [34, 44, 44, 48, 55, 89, 34, 100, 23, 12, 10]
```

There is a little gotcha here. These methods add items to the list **in-place and do not return any value.** 

```python
scores = [44,48,55,89,34]
newScores = scores.append(100)
print(newScores) # None 
newScores = scores.insert(0,44)
print(newScores) # None
```

2. **Removing items from list (pop, remove, clear)**

```python
languages = ['C', 'C#', 'C++']
languages.pop()
print(languages) # ['C', 'C#']
languages.remove('C')
print(languages) # ['C#']
languages.clear()
print(languages) # []
```

3. **Getting index and counting (index, count)**

```python
alphabets = ['a', 'b', 'c']
print(alphabets.index('a')) # 0 (Returns the index of the element in list
print(alphabets.count('b')) # 1 (counts the occurence of an element
```

4. Sorting, reversing and copying lists

```python
numbers = [1,4,6,3,2,5]
numbers.sort() # Sorts the list items in place and returns nothing
print(numbers) # [1, 2, 3, 4, 5, 6]

#Python also has a built in sorting function that returns a new list
sorted_numbers = sorted(numbers) # note - this is not a method
print(sorted_numbers) # [1, 2, 3, 4, 5, 6]

numbers.reverse() # reverse the indices in place
print(numbers) # [6, 5, 4, 3, 2, 1]

numbers_clone = numbers.copy() # another approach is numbers[:]
print(numbers_clone) # [6, 5, 4, 3, 2, 1]
```

[Python List methods](https://www.w3schools.com/python/python_ref_list.asp)

**Some common list patterns**

Finally, I explored some common patterns that are often used with lists such as reversing which I already mentioned, joining list into a string and cloning

```python
avengers = ['ironman', 'spiderman', 'antman', 'hulk']
cloned_avengers = avengers[::1] # very commonly used pattern
reversed_avengers = avengers[::-1] # discussing again because it is also very common
merge_avengers = ' '.join(avengers) # used to join list into string
print(cloned_avengers) # ['ironman', 'spiderman', 'antman', 'hulk']
print(reversed_avengers) # ['hulk', 'antman', 'spiderman', 'ironman']
print(merge_avengers) # ironman spiderman antman hulk

range_of_numbers = list(range[10]) # quickly generates a list of specific range
print(range_of_numbers) # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
another_range = list(range(0,5)) # with start stop
print(another_range) # [0, 1, 2, 3, 4]
```

**List Unpacking**

Unpacking a list is a nifty feature. It reminds me of array destructing in JavaScript which is also super cool. 

```python
first,second,third = ['tesla','ford','ferarri']
print(first) # tesla
print(second) # second
print(third) # ferarri

a,*others = [1,2,3,4,5] # remaining values are stored in others
print(a) # 1
print(others) # [2, 3, 4, 5]

first,*others,last= [😄,😋,😠,😔,😉]
print(first) # 😄
print(others) # ['😋', '😠', '😔']
print(last) # 😉
```

I hope I have been able to show some use cases for unpacking lists. 

## None

None is a special data type in Python which just represents the absence of value. In most other programming languages, it is commonly referred to as **null**

## Dictionaries

A dictionary or `dict` is a data type in Python that contains an unorganized collection of data in a key-value pair. So dictionaries are a data structure that stores data in a specific format. In my mental model, I compared it with the JavaScript `object` where we store data in key-value pairs. The keys of `dict` are represented by strings and the values can hold any data types. The values can be accessed using the corresponding keys. Since dictionaries don't have any order, they are scattered around in the memory, unlike lists where they are stored in order in memory.

```python
user = {'name': 'Max', 'age': 40, 'married': False}
print(user['name']) # Max
print(user['married'] # False
```

**Dictionary Keys**

I mentioned that keys in a dictionary need to be of `string` data type. Well, that is not entirely true. `dict` keys can be of any immutable data type. Also, keys need to be unique. If a dictionary has more than one identical key, then the values are overridden. This is also termed as *collision*.

```python
abstract = {
 'first': 123,
 True: 'hello',
 777: [1,3,4,5]
}

print(abstract['first'] # 123
print(abstract[True]) # 'hello
print(abstract[777]) # [1,3,4,5]

sample = {
	'username': 'hisenberg',
	'username': 'james'
}
print(sample['username']) # james
```

**Dictionary Methods**

Checking for errors is a good programming practice because errors can break the program execution. In the context of a dictionary, if we try to access a key that does not exist, Python will throw an error and stop the program execution. This is not what we usually want so there is a built-in dictionary method to handle this

```python
house = {
	'rooms' : 4,
	'occupants': 2,
	'doors': 6
}
print(house['windows']) # KeyError: 'windows'
#instead
print(house.get('windows')) # None
print(house.get('windows', 5)) # 5 (This sets a default value if no value is found)
```

There are some other ways to check if a specific key or value exists in a dictionary

```python
user = {'name': 'Raghav', 'age': 20, 'country': 'India'}
print('name' in user.keys()) # True
print('gender' in user.keys()) # False
print('Raghav' in user.values()) # True
```

Some other useful dictionary methods are **copy**, **clear, pop, update**

```python
cat = {
	'name': 'Tom',
	'greet': 'meow',
	'health': 100
}
cat_copy = cat.copy()
print(cat_copy) # {'name': 'Tom', 'greet': 'meow', 'health': 100}

cat.pop('name')
print(cat) # {'greet': 'meow', 'health': 100}

cat.clear()
print(cat) # {}

cat_copy.update({'name': 'Polo'})
print(cat_copy) # {'name': 'Polo', 'greet': 'meow', 'health': 100}
cat_copy.update({'color': 'Black'}) # adds key value if not present
print(cat_copy) # {'name': 'Polo', 'greet': 'meow', 'health': 100, 'color': 'Black'}
```

[Python dictionary methods](https://www.w3schools.com/python/python_ref_dictionary.asp)

## Tuples

Tuple data type is very similar to lists but they are immutable which means their value cannot be modified nor they can be sorted like lists.

```python
my_tuple = (1,2,3) # Can be any no of items
print(my_tuple[1]) # 2 (Values can be accessed just like lists)
print(1 in my_tuple) # True (Checks if element is present)
```

Since tuples are immutable, they can be used as keys in dictionaries as well.

**Actions on tuples**

Just like lists, we can slice tuples because slicing returns a new copy and does not change the original data. 

```python
colors = ('red', 'orange', 'blue', 'yellow')
new_colors = colors[1:4]
print(new_colors) # ('orange', 'blue', 'yellow')

color_1,*others = colors # unpacking!
print(color_1) # 'red'
print(others) # ['orange', 'blue', 'yellow']

print(len(colors)) # 4
print(colors.count('red')) # 1 
print(colors.index('orange')) # 1
```

[Python tuple methods](https://www.w3schools.com/python/python_ref_tuple.asp)

## Sets

Finally the last of data types 😋 (unless something new pops up in the journey).

Sets are a data structure that stores an unordered collection of **unique** objects. From my JavaScript universe, I can recollect there is a Set data structure there as well so it fits my mental model.

```python
set_of_numbers = {1,2,3,4,5,5}
print(set_of_numbers) # {1,2,3,4,5}  (Only unique values are stored)
```

This can be very helpful to remove say duplicate email addresses from a list of emails

```python
emails = ['samantha@hey.com', 'rock@hey.com', 'samantha@hey.com']
emails_set = set(emails)
unique_emails = list(emails_set)
print(unique_emails) # ['rock@hey.com', 'samantha@hey.com']
```

**Actions on sets**

The built-in methods of sets perform actions that are exactly similar to what we learnt in ***Venn Diagrams*** in primary math class. Here are some of them. I don't find any need to memorize them because Set is the important thing to remember. The methods can be googled anytime.

```python
set_a = {1,2,3,4,5}
set_b = {4,5,6,7,8}
print(set_a.union(set_b)) # {1, 2, 3, 4, 5, 6, 7, 8}
print(set_a | set_b) # same as above just a compact syntax

print(set_a.intersection(set_b)) # {4, 5}
print(set_a & set_b) # same as above

set_a.discard(1)
print(set_a) # {2,3,4,5}
```

[Python Set methods](https://www.w3schools.com/python/python_ref_set.asp)
Oh boy! finally done with the data basic building blocks of Python with a basic understanding of its data types. 

![Alt Text](https://media.giphy.com/media/LSNqpYqGRqwrS/giphy.gif)

Tomorrow the focus will to learn the conditional flow and iterations or looping in Python. I am pumped up now. Hope you have enjoyed following allowing as well 😃

Have a nice one!