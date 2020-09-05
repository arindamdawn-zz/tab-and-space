---
title: '30 Days of Python 👨‍💻 - Day 23 - Web Scraping'
description: "A JavaScript developer's quest to learn python in a month."
date: '2020-07-13T06:39:16.196Z'
tags: ['python', 'challenge']
draft: false
---
Web Scraping is the technique or extracts data from a website by crawling it. It is mainly used to collect meaningful data from websites specially when there is no available APIs to extract information. Today I explored the basics of web scraping with Python and would like to share my experience.

Scraping is a form of scripting that allows us to automate the process of extracting large unstructured data from websites and organize it in a structured way to use it for several purposes such as gathering emails, product price, stock prices, flight data or any other relevant information. Doing such things manually takes a lot of time and effort. Python has some amazing libraries to make web scraping quite an easier and fun task to implement. I mainly explored the most basic and popular library [Beautiful Soup](https://pypi.org/project/beautifulsoup4/) to familiarize myself with the concept. 

## Good Practices

Web Scraping is extremely powerful and there is a lot of debate over its uses. Most websites have a `robots.txt` file which mentions which specific URLs should be crawled (scraped) and which should not be. This file is mainly an instruction for various search engine bots like google bot, yahoo bot, bing bot etc which specific pages they should crawl for search engine optimization. So all search engine crawlers are mainly web scrapers that extract data from the website to rank them as per relevant keywords. However, a website cannot literally restrict a web scraping program to not crawl its data even if it is disallowed in the `robots.txt` file. It is a good and ethical practice to go over a website's `robots.txt` file if present and extract data from only mentioned URLs to prevent any kind of data breach issues. 

## Scraping using Beautiful Soup

For today's session, I decided to try extracting data from the  [Hacker News website](https://news.ycombinator.com/) - An extremely popular website among the dev community. These are the rules defined in its `robots.txt` file

```
User-Agent: * 
Disallow: /x?
Disallow: /vote?
Disallow: /reply?
Disallow: /submitted?
Disallow: /submitlink?
Disallow: /threads?
Crawl-delay: 30
```

So we are allowed to crawl and fetch data from the news page [https://news.ycombinator.com/newest](https://news.ycombinator.com/newest) which lists the latest articles from the development world. The goal is to crawl the first 5 pages and extract the articles with at-least 100 points along with their links. This can be pretty useful to automatically fetch all highly voted items and read them from the terminal itself without having to visit hacker news website and manually search for popular posts.

First two libraries need to be installed, `requests` for doing HTTP requests and `beautifulsoup4` for scraping the website.

`pip install requests`  `pip install beautifulsoup4`

`hacker_news_scraper.py`

```python
import requests
from bs4 import BeautifulSoup

BASE_URL = 'https://news.ycombinator.com'
response = requests.get(BASE_URL)
# extract the text content of the web page
response_text = response.text
# parse HTML
soup = BeautifulSoup(response_text, 'html.parser')
print(soup.prettify()) # prints the html content in a readable format
```

The documentation for Beautiful Soup [https://www.crummy.com/software/BeautifulSoup/bs4/doc/](https://www.crummy.com/software/BeautifulSoup/bs4/doc/) showcases the various use cases. Using the browser's inspect element tools, the selector for the elements can be viewed and then used for extracting data. In this case, all the articles have a `storylink` class and their associated points have the class `score`. These selectors can now be used to fetch the respective data and combine them.

```python
# extract all the links using the class selector
links_list = soup.select('.storylink')

# extract all the points using the class selector
points_list = soup.select('.score')
```

After looping through the links, the associated, title, link and their points can be combined as a dictionary object and then appended to a popular posts list.

It is to be noted that the `enumerate` function is used to get the index of each element to fetch the respective points as the points are not contained within the links container. 

Only posts with a minimum of 100 points are appended to popular lists.

```python
# loop though all links
for idx, link in enumerate(links_list):
    # fetch the title of the post
    post_title = link.get_text()
    # fetch the link of the post
    post_href = link.get('href')
    # fetch the point text using the index of the link
    # convert the point to integer
    post_points = int(points_list[idx].get_text().replace(' points', ''))
    # append to popular posts as a dictionary object if points is atleast 100
    if post_points >= 100:
        popular_posts.append(
        {'title': post_title, 'link': post_href, 'points': post_points})
```

There is a useful built-in Python library `pprint` that prints data in the console in a more readable format. 

```python
import pprint
```

It can then be used to view the popular lists

```python
# loop though all links
for idx, link in enumerate(links_list):
    # fetch the title of the post
    post_title = link.get_text()
    # fetch the link of the post
    post_href = link.get('href')
    # fetch the point text using the index of the link
    # convert the point to integer
    post_points = int(points_list[idx].get_text().replace(' points', ''))
    # append to popular posts as a dictionary object if points is atleast 100
    if post_points >= 100:
        popular_posts.append(
        {'title': post_title, 'link': post_href, 'points': post_points})

pprint.pprint(popular_posts) # prints in a readable format
```

The above script only fetches the popular posts from the first page of Hacker News. However, as per the desired goal, we need to fetch the lists from the top five pages or probably any entered number of pages. So the script can be modified accordingly.

Here is the final script to scrape the popular lists. The code can also be found in the Github repository [https://github.com/arindamdawn/python-scripting](https://github.com/arindamdawn/python-scripting)

```python
import requests
from bs4 import BeautifulSoup
import pprint
import time

BASE_URL = 'https://news.ycombinator.com'
# response = requests.get(BASE_URL)

def get_lists_and_points(soup):
    # extract all the links using the class selector
    links_list = soup.select('.storylink')

    # extract all the points using the class selector
    points_list = soup.select('.score')

    return (links_list, points_list)

def parse_response(response):
    # extract the text content of the web page
    response_text = response.text
    # parse HTML
    soup = BeautifulSoup(response_text, 'html.parser')
    return soup

def get_paginated_data(pages):
    total_links_list = []
    total_points_list = []
    for page in range(pages):
        URL = BASE_URL + f'?p={page+1}'
        response = requests.get(URL)
        soup = parse_response(response)
        links_list, points_list = get_lists_and_points(soup)
        for link in links_list:
            total_links_list.append(link)
        for point in points_list:
            total_points_list.append(point)
        # add 30 seconds delay as per hacker news robots.txt rules
        time.sleep(30)
    return (total_links_list, total_points_list)

def generate_popular_posts(links_list, points_list):
    # create an empty popular posts list
    popular_posts = []

    # loop though all links
    for idx, link in enumerate(links_list):
        # fetch the title of the post
        post_title = link.get_text()
        # fetch the link of the post
        post_href = link.get('href')
        # fetch the point text using the index of the link
        # convert the point to integer
        # if points data is not available, assign it a default of 0
        try:
            post_points = int(
                points_list[idx].get_text().replace(' points', ''))
        except:
            points_list = 0
        # append to popular posts as a dictionary object if points is atleast 100
        if post_points >= 100:
            popular_posts.append(
                {'title': post_title, 'link': post_href, 'points': post_points})
    return popular_posts

def sort_posts_by_points(posts):
    return sorted(posts, key=lambda x: x['points'], reverse=True)

def main():
    total_links_list, total_points_list = get_paginated_data(5)
    popular_posts = generate_popular_posts(total_links_list, total_points_list)
    sorted_posts = sort_posts_by_points(popular_posts)
    # print posts sorted by highest to lowest
    pprint.pprint(sorted_posts)

if(__name__ == '__main__'):
    main()
```

Now using this script, we don't even need to visit Hacker News and search for popular news. We can run this script from our console and get the latest news delivered. Feel free to tweak the script as per your needs and experiment with it or try scraping data from your own favourite website.

We can possibly do a lot of things with the above data such as

- Create an API to use it for an app of website
- Use it for analysing trends using keywords
- Create a news aggregator website and more

## Popular Scraping Libraries

Beautiful Soup has its restrictions when related to scraping data from websites. It is quite simple to use but for scraping data from complex websites that are rendered at the client-side (Angular, React-based websites), the HTML markup won't be available when the website loads. To fetch data from such websites, more advanced libraries can be used. Here are some popular libraries and frameworks for Python.

- [lxml](https://lxml.de/)
- [Selenium](https://selenium-python.readthedocs.io/)
- [Scrapy](https://docs.scrapy.org/en/latest/) - It is a complete framework for web scraping

## References

- [https://realpython.com/beautiful-soup-web-scraper-python/](https://realpython.com/beautiful-soup-web-scraper-python/)
- [https://realpython.com/python-web-scraping-practical-introduction/](https://realpython.com/python-web-scraping-practical-introduction/)
- [https://www.digitalocean.com/community/tutorials/how-to-scrape-web-pages-with-beautiful-soup-and-python-3](https://www.digitalocean.com/community/tutorials/how-to-scrape-web-pages-with-beautiful-soup-and-python-3)

Web Scraping is a vast field. Using Beautiful Soup, we probably just scratched the surface. There are a whole lot of possibilities in this domain which I would explore while exploring more on data analysis with Python. Hopefully, I have been able to cover the basic concepts needed for further exploration.

Tomorrow I shall be going over the concepts of Web Development with Python. 

Have a great one!
