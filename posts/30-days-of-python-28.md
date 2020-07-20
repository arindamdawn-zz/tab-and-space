---
title: '30 Days of Python 👨‍💻 - Day 28 - ML & Data Science II'
description: "A JavaScript developer's quest to learn python in a month."
date: '2020-08-18T06:39:16.196Z'
tags: ['python', 'challenge', 'machine-learning']
draft: false
---



Today I explored the [Scikit-Learn](https://scikit-learn.org/) library and created a notebook project to go over some of the basics and try creating a machine learning model. Scikit-Learn is a vast library and it takes a lot of practice and exploration to get a grasp of it. I followed some tutorials and articles to try building a simple classifier model just to figure out how it works. It looked a bit intimidating to me but I decided to create a basic workflow in a Jupyter Notebook so that I can use it as a reference when I decide to dive deep into the ML and Data Science Domain.

Scikit-Learn is a popular Python library for Machine Learning. Scikit-Learn can process data provided to it and create machine learning models to learn patterns within the data and makes predictions using its tools.

## Why Scikit-learn?

- Built on top of numpy and matplotlib libraries
- Has tons of built-in machine learning models
- Lot of methods to evaluate machine learning models
- Easy to understand and well-designed API

Usually, Machine Learning can be a bit overwhelming as it involves complex algorithms and statistics to analyze data. Scikit-learn abstracts this complexity and makes it easy to build models and train them without having to know much about mathematics and statistics.

Here is the Notebook I created today. The link to the Github repository is https://github.com/arindamdawn/jupyter_notebooks

# Basics of the scikit-learn library
This notebook covers some of the basics of the amazing scikit-learn python library. Some of the important use cases of the library have been listed in this notebook which can be used as a cheat-sheet for reference.

Some of the topics covered are:
1. Getting the data ready
2. Selecting the appropriate algorithm/estimator for the specific problem
3. Fit the model/algorithm to use it to make predictions on the data
4. Evaluting a model
5. Improve a model
6. Saving a loading a trained model

## Getting the data ready
The data used for this project will be the heart disease data set available from https://www.kaggle.com/ronitf/heart-disease-uci


```python
import pandas as pd
import numpy as np
heart_disease = pd.read_csv('data/heart.csv')
heart_disease.head()
```




<div class="table-wrapper">
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>age</th>
      <th>sex</th>
      <th>cp</th>
      <th>trestbps</th>
      <th>chol</th>
      <th>fbs</th>
      <th>restecg</th>
      <th>thalach</th>
      <th>exang</th>
      <th>oldpeak</th>
      <th>slope</th>
      <th>ca</th>
      <th>thal</th>
      <th>target</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>63</td>
      <td>1</td>
      <td>3</td>
      <td>145</td>
      <td>233</td>
      <td>1</td>
      <td>0</td>
      <td>150</td>
      <td>0</td>
      <td>2.3</td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>1</td>
    </tr>
    <tr>
      <th>1</th>
      <td>37</td>
      <td>1</td>
      <td>2</td>
      <td>130</td>
      <td>250</td>
      <td>0</td>
      <td>1</td>
      <td>187</td>
      <td>0</td>
      <td>3.5</td>
      <td>0</td>
      <td>0</td>
      <td>2</td>
      <td>1</td>
    </tr>
    <tr>
      <th>2</th>
      <td>41</td>
      <td>0</td>
      <td>1</td>
      <td>130</td>
      <td>204</td>
      <td>0</td>
      <td>0</td>
      <td>172</td>
      <td>0</td>
      <td>1.4</td>
      <td>2</td>
      <td>0</td>
      <td>2</td>
      <td>1</td>
    </tr>
    <tr>
      <th>3</th>
      <td>56</td>
      <td>1</td>
      <td>1</td>
      <td>120</td>
      <td>236</td>
      <td>0</td>
      <td>1</td>
      <td>178</td>
      <td>0</td>
      <td>0.8</td>
      <td>2</td>
      <td>0</td>
      <td>2</td>
      <td>1</td>
    </tr>
    <tr>
      <th>4</th>
      <td>57</td>
      <td>0</td>
      <td>0</td>
      <td>120</td>
      <td>354</td>
      <td>0</td>
      <td>1</td>
      <td>163</td>
      <td>1</td>
      <td>0.6</td>
      <td>2</td>
      <td>0</td>
      <td>2</td>
      <td>1</td>
    </tr>
  </tbody>
</table>
</div>



The aim is to predict based on the above data whether a patient has a heart disease or not. The **target** column determines the result and the other columns are called the **features**


```python
# Create Features Matrix (X)
X = heart_disease.drop('target', axis=1)

# Create Labels (Y)
y = heart_disease['target']
```

## Choose the appropriate model/estimator for the problem
For this problem, we will be using the [RandomForestClassifier](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html) model form sklearn which is a classification machine learning model.


```python
from sklearn.ensemble import RandomForestClassifier
clf = RandomForestClassifier()
clf.get_params() # lists the hyperparameters
```




    {'bootstrap': True,
     'ccp_alpha': 0.0,
     'class_weight': None,
     'criterion': 'gini',
     'max_depth': None,
     'max_features': 'auto',
     'max_leaf_nodes': None,
     'max_samples': None,
     'min_impurity_decrease': 0.0,
     'min_impurity_split': None,
     'min_samples_leaf': 1,
     'min_samples_split': 2,
     'min_weight_fraction_leaf': 0.0,
     'n_estimators': 100,
     'n_jobs': None,
     'oob_score': False,
     'random_state': None,
     'verbose': 0,
     'warm_start': False}



## Fit the model to the training data
In this step the model is split into training and testing data


```python
# fit the model to data
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(X,y, test_size=0.2) 
# Means 20% of the data will be used as testing data
```


```python
clf.fit(X_train, y_train);
```


```python
# make prediction
y_label = clf.predict(np.array([0,2,3,4]))
```


```python
y_preds = clf.predict(X_test)
y_preds
```




    array([1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0,
           1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0,
           1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1], dtype=int64)




```python
y_test.head()
```




    72     1
    116    1
    107    1
    262    0
    162    1
    Name: target, dtype: int64



## Evaluate the model
In this step the model in evaluated on the training data and test data


```python
clf.score(X_train, y_train)
```




    1.0




```python
clf.score(X_test, y_test)
```




    0.7704918032786885




```python
from sklearn.metrics import classification_report, confusion_matrix, accuracy_score

print(classification_report(y_test, y_preds))
```

                  precision    recall  f1-score   support
    
               0       0.77      0.71      0.74        28
               1       0.77      0.82      0.79        33
    
        accuracy                           0.77        61
       macro avg       0.77      0.77      0.77        61
    weighted avg       0.77      0.77      0.77        61
    
    


```python
print(confusion_matrix(y_test, y_preds))
```

    [[20  8]
     [ 6 27]]
    


```python
print(accuracy_score(y_test, y_preds))
```

    0.7704918032786885
    

## Improve the model
This step involves improving the model to get more accurate results


```python
# Try different amount of n_estimators
np.random.seed(42)
for i in range(1, 100, 10):
    print(f'Trying model with {i} estimators')
    clf = RandomForestClassifier(n_estimators=i).fit(X_train, y_train)
    print(f'Model accuracy on test set: {clf.score(X_test, y_test) * 100:.2f}%')
    print('')
```

    Trying model with 1 estimators
    Model accuracy on test set: 72.13%
    
    Trying model with 11 estimators
    Model accuracy on test set: 83.61%
    
    Trying model with 21 estimators
    Model accuracy on test set: 78.69%
    
    Trying model with 31 estimators
    Model accuracy on test set: 78.69%
    
    Trying model with 41 estimators
    Model accuracy on test set: 75.41%
    
    Trying model with 51 estimators
    Model accuracy on test set: 75.41%
    
    Trying model with 61 estimators
    Model accuracy on test set: 75.41%
    
    Trying model with 71 estimators
    Model accuracy on test set: 73.77%
    
    Trying model with 81 estimators
    Model accuracy on test set: 73.77%
    
    Trying model with 91 estimators
    Model accuracy on test set: 75.41%
    
    

## Save the model and load it
Will be using the [pickle](https://docs.python.org/3/library/pickle.html) library from Python to save the model


```python
import pickle

pickle.dump(clf, open('random_forest_model_1.pkl', 'wb'))

#load the model
loaded_model = pickle.load(open('random_forest_model_1.pkl','rb'))
loaded_model.score(X_test, y_test)
```

    0.7540983606557377

That's all for today. Since Machine Learning and Data Science is an ocean in itself, I decided to look into it in more details as after being more adept with its tools and concepts, share my experience as blog posts and projects. For the remaining two parts of this challenge, I would like to explore domains such as Automation Testing with Python using Selenium and create another post on a compilation of Python resources.

Have a great one!
