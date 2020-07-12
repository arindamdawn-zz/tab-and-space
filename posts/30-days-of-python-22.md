---
title: '30 Days of Python 👨‍💻 - Day 22 - Scripting Extras'
description: "A JavaScript developer's quest to learn python in a month."
date: '2020-07-12T06:39:16.196Z'
tags: ['python', 'challenge']
draft: false
---

Today I continued exploring more on the possibilities of scripting with Python. I read some interesting articles which I will be sharing at the end of this post.

## Doing HTTP Requests

One of the most common things that we often need to implement is communicating with some API to fetch data and process it. So I decided to find out ways in which we can talk to an API using Python and access the data. There are some libraries to do HTTP requests such as `httplib`, `httplib2`, `urllib` but the most commonly used library is requested [https://requests.readthedocs.io/en/master/](https://requests.readthedocs.io/en/master/)

It helps to do HTTP requests with quite an ease and has excellent documentation.

It can be installed using the command `pip install requests`

I decided to try doing something interesting while exploring how to use the requests library. I found an [API](https://api.covid19india.org/) to track the COVID-19 statistical data for India. This API provides the official data as per ICMR stats. I decided to use the API to create a script that can show us the daily stats for COVID-19 along with some other useful information.

- Script to display daily statistics.

I created a new script file  `covid_tracker_india.py` in the existing scripts project. The link to the GitHub repo is here [https://github.com/arindamdawn/python-scripting](https://github.com/arindamdawn/python-scripting).

`covid_tracker_india.py`

```python
import requests

API_URL_ALL_DATA = 'https://api.covid19india.org/data.json'
API_URL_DISTRICT_WISE = 'https://api.covid19india.org/state_district_wise.json'

response = requests.get(API_URL_ALL_DATA)

def get_daily_stats(response):
    try:
        all_cases_data_list = response.json()['cases_time_series']
        latest_cases_data = all_cases_data_list[len(all_cases_data_list) - 1]
        formatted_data = f'''
            COVID INDIA DAILY STATS:
            AS of {latest_cases_data['date']}
            ******************************
            Total Confirmeed Cases : {latest_cases_data['totalconfirmed']}
            Total Recovered Cases : {latest_cases_data['totalrecovered']}
            Total Deaths Reported: {latest_cases_data['totaldeceased']}
            Confirmed Cases Yesterday: {latest_cases_data['dailyconfirmed']}
            Confirmed Recovered Cases Yesterday: {latest_cases_data['dailyrecovered']}
            Deaths Reported Yesterday: {latest_cases_data['dailydeceased']}
            ******************************
        '''
        print(formatted_data)
    except:
        print('An error occurred while processing data')

if __name__ == '__main__':
    get_daily_stats(response)
```

On running the script, it should print the data in this format

```
COVID INDIA DAILY STATS:
AS of 11 July
******************************
Total Confirmeed Cases : 850364
Total Recovered Cases : 536232
Total Deaths Reported: 22689
Confirmed Cases Yesterday: 27755
Confirmed Recovered Cases Yesterday: 19981
Deaths Reported Yesterday: 543
******************************
```

I experimented further with the API data and created another function that displays the top 5 states with the most active cases. Here is the updated script.

`covid_tracker_india.py`

```python
import requests

API_URL_ALL_DATA = 'https://api.covid19india.org/data.json'
API_URL_DISTRICT_WISE = 'https://api.covid19india.org/state_district_wise.json'

response = requests.get(API_URL_ALL_DATA)

def get_daily_stats(response):
    try:
        all_cases_data_list = response.json()['cases_time_series']
        latest_cases_data = all_cases_data_list[len(all_cases_data_list) - 1]
        formatted_data = f'''
            COVID INDIA DAILY STATS:
            AS of {latest_cases_data['date']}
            ******************************
            Total Confirmeed Cases : {latest_cases_data['totalconfirmed']}
            Total Recovered Cases : {latest_cases_data['totalrecovered']}
            Total Deaths Reported: {latest_cases_data['totaldeceased']}
            Confirmed Cases Yesterday: {latest_cases_data['dailyconfirmed']}
            Confirmed Recovered Cases Yesterday: {latest_cases_data['dailyrecovered']}
            Deaths Reported Yesterday: {latest_cases_data['dailydeceased']}
            ******************************
        '''
        print(formatted_data)
    except:
        print('An error occurred while processing data')

def get_top5_states_with_active_cases(response):
    try:
        all_states_data_list = response.json()['statewise']
        all_states_data_list.sort(
            key=lambda x: int(x['active']), reverse=True)
        top5_active_states = all_states_data_list[1:6]
        print('Top 5 states with most active cases in India:')
        for index, state in enumerate(top5_active_states):
            formatted_data = f'''
            ********{index + 1}*************
            State: {state['state']}
            Active: {state['active']}
            Total Confirmed : {state['confirmed']} 
            ***************************
        
            '''
            print(formatted_data)
    except Exception as error:
        print(f'An error occured while processing data, {error}')

if __name__ == '__main__':
    get_daily_stats(response)
    get_top5_states_with_active_cases(response)
```

From my JavaScript based mental model, I was often trying to access the JSON object data using the `.` method which does not work in Python. Here we have to access object values using the bracket notation `[]`. This is what I had to remember and update my mental model.

The script can be hosted in a server and can be run each day if we want to fetch the daily stats automatically. 

Apart from building the simple COVID-tracker, I also explored building a basic twitter bot using the very convenient [https://www.tweepy.org/](https://www.tweepy.org/) library that provides a wrapper over the twitter API to automate twitter tasks. There are tons of useful articles available on it already so I will be sharing the links to the resources instead.

Here is a list of resources for that leverages Python scripting to create useful tasks.

- [https://github.com/geekcomputers/Python](https://github.com/geekcomputers/Python) - Awsome Python scripts (My favorite)
- [https://github.com/realpython/python-scripts](https://github.com/realpython/python-scripts) - Github repo of some useful Python scripts
- [https://github.com/Logan1x/Python-Scripts/tree/master/bin](https://github.com/Logan1x/Python-Scripts/tree/master/bin) - Cool Python Scripts
- [https://github.com/hastagAB/Awesome-Python-Scripts](https://github.com/hastagAB/Awesome-Python-Scripts) - Curated Python Scripting Projects

Here are some reference articles for scripting with Python.

- [https://realpython.com/python-send-email/](https://realpython.com/python-send-email/)
- [https://realpython.com/twitter-bot-python-tweepy/](https://realpython.com/twitter-bot-python-tweepy/)
- [https://realpython.com/openpyxl-excel-spreadsheets-python/](https://realpython.com/openpyxl-excel-spreadsheets-python/)

I shall be exploring more on scripting with Python while working on projects in the upcoming days and learn about the new possibilities that can be unlocked. Scripting assists un in automating a lot of the monotonous redundant tasks by delegating them to computers so that we can focus on other important aspects of programming 🙂

Tomorrow I shall be diving into another interesting area - Web Scraping with Python and explore the basics while searching for new possibilities.

Have a great one!