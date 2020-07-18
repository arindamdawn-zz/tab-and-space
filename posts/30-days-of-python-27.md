---
title: '30 Days of Python 👨‍💻 - Day 27 - ML & Data Science I'
description: "A JavaScript developer's quest to learn python in a month."
date: '2020-08-15T06:39:16.196Z'
tags: ['python', 'challenge', 'machine-learning']
draft: false
---

It is time to dig into some real Machine Learning and Data Science coding stuffs. Today I mainly focused on getting started with the Jupyter Notebook workflow and creating a basic project to understand how it works. Finally search for some data set and then follow the basic principles of Machine Learning on it to generate useful information from it. I will also share the notebook I created. The great thing about Jupyter Notebooks it can be literally organized like a blog post or article along with the interactive code, data and other information.

## Working with Jupyter Notebooks

I would like to provide a reference to some cool resources to understand the Jupyter Notebook interface, installation guide and its workflow overview. 

- [https://www.youtube.com/watch?v=HW29067qVWk](https://www.youtube.com/watch?v=HW29067qVWk) - Jupyter Notebook Tutorial Video
- [https://jupyter.readthedocs.io/en/latest/install.html](https://jupyter.readthedocs.io/en/latest/install.html) - Installation guideline (It is recommended to install it using Anaconda toolkit as it comes with a lot of useful tools.)
- [https://jupyter.readthedocs.io/en/latest/index.html](https://jupyter.readthedocs.io/en/latest/index.html) - Documentation

Since I am a windows user, I would like to provide a quick to tip:

> In windows, open Anaconda Prompt from start menu, navigate to the directory where you want to create jupyter projects, then run the command `jupyter notebook`. It will open up the notebook in the browser.

As per the basic steps of Machine Learning and Data Science, we shall be creating the project and create a readable notebook that documents the entire process which can then be shared with anyone.

# Basics of Data Science and ML using Netflix Shows project

The basic steps of ML and Data Science are:
- Importing data from some source
- Cleaning up the data to remove any irrelevant data if needed
- Splitting up data into Training Set and Test Set.
- Creating a model or an algorithm or a function
- Checking the output
- Improve and repeat the above steps

We shall explore the first two steps in this basic project

## 1. Importing Data and manipulation
The first and the most important thing for Machine Learning and Data Science is the **data** itself. To obtain good meaningful conclusions, we must have good data sets. This input data can be collected in a number of ways - from databases, by scraping websites, public APIs or public shared data sets.

[Kaggle](https://kaggle.com) is a popular website among Machine Learning and Data Science enthusiasts where tons of publicly shared data sets can be found. 

I decided to search for a Netflix Shows data set and found this one from Kaggle - [https://www.kaggle.com/shivamb/netflix-shows](https://www.kaggle.com/shivamb/netflix-shows). It contains the data in a CSV format which will be used for this project. After downloading the file, it can be placed in the root directory of the project. I have named it `netflix_titles.csv`

Since this data is in a kind of tabular format meaning it is arranged in rows and columns, [pandas](https://pandas.pydata.org) is a great open-source library to process this kind of data and analyze it. It comes along with the Anaconda toolkit, so it can be used directly in the notebook.


```python
import pandas as pd
data_frame = pd.read_csv('netflix_titles.csv')
data_frame.head(10) # show first 10 results
# prints the data frame in as a table

```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>show_id</th>
      <th>type</th>
      <th>title</th>
      <th>director</th>
      <th>cast</th>
      <th>country</th>
      <th>date_added</th>
      <th>release_year</th>
      <th>rating</th>
      <th>duration</th>
      <th>listed_in</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>81145628</td>
      <td>Movie</td>
      <td>Norm of the North: King Sized Adventure</td>
      <td>Richard Finn, Tim Maltby</td>
      <td>Alan Marriott, Andrew Toth, Brian Dobson, Cole...</td>
      <td>United States, India, South Korea, China</td>
      <td>September 9, 2019</td>
      <td>2019</td>
      <td>TV-PG</td>
      <td>90 min</td>
      <td>Children &amp; Family Movies, Comedies</td>
      <td>Before planning an awesome wedding for his gra...</td>
    </tr>
    <tr>
      <th>1</th>
      <td>80117401</td>
      <td>Movie</td>
      <td>Jandino: Whatever it Takes</td>
      <td>NaN</td>
      <td>Jandino Asporaat</td>
      <td>United Kingdom</td>
      <td>September 9, 2016</td>
      <td>2016</td>
      <td>TV-MA</td>
      <td>94 min</td>
      <td>Stand-Up Comedy</td>
      <td>Jandino Asporaat riffs on the challenges of ra...</td>
    </tr>
    <tr>
      <th>2</th>
      <td>70234439</td>
      <td>TV Show</td>
      <td>Transformers Prime</td>
      <td>NaN</td>
      <td>Peter Cullen, Sumalee Montano, Frank Welker, J...</td>
      <td>United States</td>
      <td>September 8, 2018</td>
      <td>2013</td>
      <td>TV-Y7-FV</td>
      <td>1 Season</td>
      <td>Kids' TV</td>
      <td>With the help of three human allies, the Autob...</td>
    </tr>
    <tr>
      <th>3</th>
      <td>80058654</td>
      <td>TV Show</td>
      <td>Transformers: Robots in Disguise</td>
      <td>NaN</td>
      <td>Will Friedle, Darren Criss, Constance Zimmer, ...</td>
      <td>United States</td>
      <td>September 8, 2018</td>
      <td>2016</td>
      <td>TV-Y7</td>
      <td>1 Season</td>
      <td>Kids' TV</td>
      <td>When a prison ship crash unleashes hundreds of...</td>
    </tr>
    <tr>
      <th>4</th>
      <td>80125979</td>
      <td>Movie</td>
      <td>#realityhigh</td>
      <td>Fernando Lebrija</td>
      <td>Nesta Cooper, Kate Walsh, John Michael Higgins...</td>
      <td>United States</td>
      <td>September 8, 2017</td>
      <td>2017</td>
      <td>TV-14</td>
      <td>99 min</td>
      <td>Comedies</td>
      <td>When nerdy high schooler Dani finally attracts...</td>
    </tr>
    <tr>
      <th>5</th>
      <td>80163890</td>
      <td>TV Show</td>
      <td>Apaches</td>
      <td>NaN</td>
      <td>Alberto Ammann, Eloy Azorín, Verónica Echegui,...</td>
      <td>Spain</td>
      <td>September 8, 2017</td>
      <td>2016</td>
      <td>TV-MA</td>
      <td>1 Season</td>
      <td>Crime TV Shows, International TV Shows, Spanis...</td>
      <td>A young journalist is forced into a life of cr...</td>
    </tr>
    <tr>
      <th>6</th>
      <td>70304989</td>
      <td>Movie</td>
      <td>Automata</td>
      <td>Gabe Ibáñez</td>
      <td>Antonio Banderas, Dylan McDermott, Melanie Gri...</td>
      <td>Bulgaria, United States, Spain, Canada</td>
      <td>September 8, 2017</td>
      <td>2014</td>
      <td>R</td>
      <td>110 min</td>
      <td>International Movies, Sci-Fi &amp; Fantasy, Thrillers</td>
      <td>In a dystopian future, an insurance adjuster f...</td>
    </tr>
    <tr>
      <th>7</th>
      <td>80164077</td>
      <td>Movie</td>
      <td>Fabrizio Copano: Solo pienso en mi</td>
      <td>Rodrigo Toro, Francisco Schultz</td>
      <td>Fabrizio Copano</td>
      <td>Chile</td>
      <td>September 8, 2017</td>
      <td>2017</td>
      <td>TV-MA</td>
      <td>60 min</td>
      <td>Stand-Up Comedy</td>
      <td>Fabrizio Copano takes audience participation t...</td>
    </tr>
    <tr>
      <th>8</th>
      <td>80117902</td>
      <td>TV Show</td>
      <td>Fire Chasers</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>United States</td>
      <td>September 8, 2017</td>
      <td>2017</td>
      <td>TV-MA</td>
      <td>1 Season</td>
      <td>Docuseries, Science &amp; Nature TV</td>
      <td>As California's 2016 fire season rages, brave ...</td>
    </tr>
    <tr>
      <th>9</th>
      <td>70304990</td>
      <td>Movie</td>
      <td>Good People</td>
      <td>Henrik Ruben Genz</td>
      <td>James Franco, Kate Hudson, Tom Wilkinson, Omar...</td>
      <td>United States, United Kingdom, Denmark, Sweden</td>
      <td>September 8, 2017</td>
      <td>2014</td>
      <td>R</td>
      <td>90 min</td>
      <td>Action &amp; Adventure, Thrillers</td>
      <td>A struggling couple can't believe their luck w...</td>
    </tr>
  </tbody>
</table>
</div>




```python
data_frame.info()
# shows information about column data types
```

    <class 'pandas.core.frame.DataFrame'>
    RangeIndex: 6234 entries, 0 to 6233
    Data columns (total 12 columns):
     #   Column        Non-Null Count  Dtype 
    ---  ------        --------------  ----- 
     0   show_id       6234 non-null   int64 
     1   type          6234 non-null   object
     2   title         6234 non-null   object
     3   director      4265 non-null   object
     4   cast          5664 non-null   object
     5   country       5758 non-null   object
     6   date_added    6223 non-null   object
     7   release_year  6234 non-null   int64 
     8   rating        6224 non-null   object
     9   duration      6234 non-null   object
     10  listed_in     6234 non-null   object
     11  description   6234 non-null   object
    dtypes: int64(2), object(10)
    memory usage: 584.6+ KB
    


```python
data_frame.shape
# provides information of rows and columns as a tuple
```




    (6234, 12)




```python
data_frame.describe()
# shows some basic description
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>show_id</th>
      <th>release_year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>count</th>
      <td>6.234000e+03</td>
      <td>6234.00000</td>
    </tr>
    <tr>
      <th>mean</th>
      <td>7.670368e+07</td>
      <td>2013.35932</td>
    </tr>
    <tr>
      <th>std</th>
      <td>1.094296e+07</td>
      <td>8.81162</td>
    </tr>
    <tr>
      <th>min</th>
      <td>2.477470e+05</td>
      <td>1925.00000</td>
    </tr>
    <tr>
      <th>25%</th>
      <td>8.003580e+07</td>
      <td>2013.00000</td>
    </tr>
    <tr>
      <th>50%</th>
      <td>8.016337e+07</td>
      <td>2016.00000</td>
    </tr>
    <tr>
      <th>75%</th>
      <td>8.024489e+07</td>
      <td>2018.00000</td>
    </tr>
    <tr>
      <th>max</th>
      <td>8.123573e+07</td>
      <td>2020.00000</td>
    </tr>
  </tbody>
</table>
</div>




```python
data_frame['title'].head() # lists a specific column data with first 5 entries (head)
```




    0    Norm of the North: King Sized Adventure
    1                 Jandino: Whatever it Takes
    2                         Transformers Prime
    3           Transformers: Robots in Disguise
    4                               #realityhigh
    Name: title, dtype: object




```python
# Filtering Data
data_frame[data_frame['country'] == 'India'].head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>show_id</th>
      <th>type</th>
      <th>title</th>
      <th>director</th>
      <th>cast</th>
      <th>country</th>
      <th>date_added</th>
      <th>release_year</th>
      <th>rating</th>
      <th>duration</th>
      <th>listed_in</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>35</th>
      <td>81154455</td>
      <td>Movie</td>
      <td>Article 15</td>
      <td>Anubhav Sinha</td>
      <td>Ayushmann Khurrana, Nassar, Manoj Pahwa, Kumud...</td>
      <td>India</td>
      <td>September 6, 2019</td>
      <td>2019</td>
      <td>TV-MA</td>
      <td>125 min</td>
      <td>Dramas, International Movies, Thrillers</td>
      <td>The grim realities of caste discrimination com...</td>
    </tr>
    <tr>
      <th>37</th>
      <td>81052275</td>
      <td>Movie</td>
      <td>Ee Nagaraniki Emaindi</td>
      <td>Tharun Bhascker</td>
      <td>Vishwaksen Naidu, Sushanth Reddy, Abhinav Goma...</td>
      <td>India</td>
      <td>September 6, 2019</td>
      <td>2018</td>
      <td>TV-14</td>
      <td>133 min</td>
      <td>Comedies, International Movies</td>
      <td>In Goa and in desperate need of cash, four chi...</td>
    </tr>
    <tr>
      <th>41</th>
      <td>70303496</td>
      <td>Movie</td>
      <td>PK</td>
      <td>Rajkumar Hirani</td>
      <td>Aamir Khan, Anuskha Sharma, Sanjay Dutt, Saura...</td>
      <td>India</td>
      <td>September 6, 2018</td>
      <td>2014</td>
      <td>TV-14</td>
      <td>146 min</td>
      <td>Comedies, Dramas, International Movies</td>
      <td>Aamir Khan teams with director Rajkumar Hirani...</td>
    </tr>
    <tr>
      <th>58</th>
      <td>81155784</td>
      <td>Movie</td>
      <td>Watchman</td>
      <td>A. L. Vijay</td>
      <td>G.V. Prakash Kumar, Samyuktha Hegde, Suman, Ra...</td>
      <td>India</td>
      <td>September 4, 2019</td>
      <td>2019</td>
      <td>TV-14</td>
      <td>93 min</td>
      <td>Comedies, Dramas, International Movies</td>
      <td>Rushing to pay off a loan shark, a young man b...</td>
    </tr>
    <tr>
      <th>99</th>
      <td>80225885</td>
      <td>TV Show</td>
      <td>Bard of Blood</td>
      <td>NaN</td>
      <td>Emraan Hashmi, Viineet Kumar, Sobhita Dhulipal...</td>
      <td>India</td>
      <td>September 27, 2019</td>
      <td>2019</td>
      <td>TV-MA</td>
      <td>1 Season</td>
      <td>International TV Shows, TV Action &amp; Adventure,...</td>
      <td>Years after a disastrous job in Balochistan, a...</td>
    </tr>
  </tbody>
</table>
</div>




```python
# Sorting Data
data_frame.sort_values('release_year', ascending=False).head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>show_id</th>
      <th>type</th>
      <th>title</th>
      <th>director</th>
      <th>cast</th>
      <th>country</th>
      <th>date_added</th>
      <th>release_year</th>
      <th>rating</th>
      <th>duration</th>
      <th>listed_in</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>3467</th>
      <td>81011449</td>
      <td>TV Show</td>
      <td>Medical Police</td>
      <td>NaN</td>
      <td>Erinn Hayes, Rob Huebel, Malin Akerman, Rob Co...</td>
      <td>United States</td>
      <td>January 10, 2020</td>
      <td>2020</td>
      <td>TV-MA</td>
      <td>1 Season</td>
      <td>Crime TV Shows, TV Action &amp; Adventure, TV Come...</td>
      <td>Doctors Owen Maestro and Lola Spratt leave Chi...</td>
    </tr>
    <tr>
      <th>3249</th>
      <td>81006825</td>
      <td>Movie</td>
      <td>All the Freckles in the World</td>
      <td>Yibrán Asuad</td>
      <td>Hánssel Casillas, Loreto Peralta, Andrea Sutto...</td>
      <td>Mexico</td>
      <td>January 3, 2020</td>
      <td>2020</td>
      <td>TV-14</td>
      <td>90 min</td>
      <td>Comedies, International Movies, Romantic Movies</td>
      <td>Thirteen-year-old José Miguel is immune to 199...</td>
    </tr>
    <tr>
      <th>3220</th>
      <td>80997687</td>
      <td>TV Show</td>
      <td>Dracula</td>
      <td>NaN</td>
      <td>Claes Bang, Dolly Wells, John Heffernan</td>
      <td>United Kingdom</td>
      <td>January 4, 2020</td>
      <td>2020</td>
      <td>TV-14</td>
      <td>1 Season</td>
      <td>British TV Shows, International TV Shows, TV D...</td>
      <td>The Count Dracula legend transforms with new t...</td>
    </tr>
    <tr>
      <th>3427</th>
      <td>81060049</td>
      <td>Movie</td>
      <td>Leslie Jones: Time Machine</td>
      <td>David Benioff, D.B. Weiss</td>
      <td>Leslie Jones</td>
      <td>United States</td>
      <td>January 14, 2020</td>
      <td>2020</td>
      <td>TV-MA</td>
      <td>66 min</td>
      <td>Stand-Up Comedy</td>
      <td>From trying to seduce Prince to battling sleep...</td>
    </tr>
    <tr>
      <th>3436</th>
      <td>80239306</td>
      <td>TV Show</td>
      <td>The Healing Powers of Dude</td>
      <td>NaN</td>
      <td>Jace Chapman, Larisa Oleynik, Tom Everett Scot...</td>
      <td>NaN</td>
      <td>January 13, 2020</td>
      <td>2020</td>
      <td>TV-G</td>
      <td>1 Season</td>
      <td>Kids' TV, TV Comedies, TV Dramas</td>
      <td>When an 11-year-old boy with social anxiety di...</td>
    </tr>
  </tbody>
</table>
</div>



[This is a great cheat-sheet for Data Science with Python which lists all the commonly used Pandas methods and properties along with other libraries for data science as well.](https://elitedatascience.com/python-cheat-sheet)

## 2. Cleaning Data

The next step is cleaning up data and removing any kinds of information that is not required for the analysis. 
Let's consider an example use case where we want to find which Netflix comedy movies and shows that are suitable for all ages(TV-G rating)


```python
# Let's select the relevant columns for analysis
df_shows = pd.DataFrame(data_frame, columns=['title','rating', 'listed_in'])
# filter comedy shows
df_comedy_shows = df_shows[df_shows['listed_in'].str.contains('Comed')]
df_comedy_shows.head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>title</th>
      <th>rating</th>
      <th>listed_in</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Norm of the North: King Sized Adventure</td>
      <td>TV-PG</td>
      <td>Children &amp; Family Movies, Comedies</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Jandino: Whatever it Takes</td>
      <td>TV-MA</td>
      <td>Stand-Up Comedy</td>
    </tr>
    <tr>
      <th>4</th>
      <td>#realityhigh</td>
      <td>TV-14</td>
      <td>Comedies</td>
    </tr>
    <tr>
      <th>7</th>
      <td>Fabrizio Copano: Solo pienso en mi</td>
      <td>TV-MA</td>
      <td>Stand-Up Comedy</td>
    </tr>
    <tr>
      <th>10</th>
      <td>Joaquín Reyes: Una y no más</td>
      <td>TV-MA</td>
      <td>Stand-Up Comedy</td>
    </tr>
  </tbody>
</table>
</div>




```python
# filter shows for all ages
df_all_ages = df_comedy_shows[df_comedy_shows['rating']=='TV-G']
df_all_ages.head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>title</th>
      <th>rating</th>
      <th>listed_in</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1034</th>
      <td>Luccas Neto in: Summer Camp</td>
      <td>TV-G</td>
      <td>Children &amp; Family Movies, Comedies</td>
    </tr>
    <tr>
      <th>1043</th>
      <td>A Holiday Engagement</td>
      <td>TV-G</td>
      <td>Children &amp; Family Movies, Comedies, Romantic M...</td>
    </tr>
    <tr>
      <th>1205</th>
      <td>A Fairly Odd Summer</td>
      <td>TV-G</td>
      <td>Children &amp; Family Movies, Comedies</td>
    </tr>
    <tr>
      <th>1206</th>
      <td>Bella and the Bulldogs</td>
      <td>TV-G</td>
      <td>Kids' TV, TV Comedies</td>
    </tr>
    <tr>
      <th>1211</th>
      <td>Jinxed</td>
      <td>TV-G</td>
      <td>Children &amp; Family Movies, Comedies</td>
    </tr>
  </tbody>
</table>
</div>

The Github repository for this notebook can be found [here](https://github.com/arindamdawn/jupyter_notebooks)

That's all for today's post. Tomorrow will continue exploring more on the other steps of machine learning and data science and perform a visual analysis of data by building charts and diagrams along with creating machine learning models.

Have a great one!