---
title: "30 Days of Python 👨‍💻 - Day 29 - Automation Testing"
description: "A JavaScript developer's quest to learn python in a month."
date: "2020-08-19T06:39:16.196Z"
tags: ["python", "challenge"]
draft: false
---

Today I explored end-to-end Browser Automation Tests using Python by creating a basic automation testing project.

When it comes to implementing browser automation, [Selenium](https://pypi.org/project/selenium/) is one of the most popular and widely used libraries. The selenium python library makes it very easy to use it with Python and run scripts to perform automated tests on websites.

Automation tests are essential for testing web applications in a real-world scenario just as how a user would normally use the application. It is also used to perform cross-browser tests to ensure the application works on all target browsers.

I created a basic project to understand and implement the basics of browser automation testing with Selenium.

1. Creating a project

I created a new directory `python-selenium` and added a virtual environment to the project.

```bash
python -m venv venv
```

2. Installing Selenium

Next step is to install the Selenium package which can be installed in the project environment using the command

```bash
pip install selenium
```

3. Installing the drivers

Selenium uses drivers to interface with the browser. So browser-specific drivers need to be installed so that Selenium is able to create the browser instance for running the automation tests.

| Chrome: | https://sites.google.com/a/chromium.org/chromedriver/downloads |
| Edge: | https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/ |
| Firefox: | https://github.com/mozilla/geckodriver/releases |
| Safari: | https://webkit.org/blog/6900/webdriver-support-in-safari-10/ |

I downloaded the Firefox driver for this particular project. The driver needs to be the executable path.

(In windows 10 place the driver file in the path where the python application is installed or any other location whose path is there in the environment variables)

4. Creating a sample automation script

I created a python script file `[automation.py](http://automation.py)` in the root project directory.

Here is a simple code for opening a webpage using Selenium

`automation.py`

```python
from selenium import web-driver

browser = webdriver.Firefox()
browser.get('https://tabandspace.com')
```

Selenium Cheat-sheet

Here is a cheat-sheet for the commonly used selenium methods

```python
# import selenium
from selenium import web-driver

#create a chrome driver
chromedriver = "C:/tests/chromedriver.exe"
driver = webdriver.Chrome(executable_path = chromedriver)

#create a firefox driver
geckodriver = "C:/tests/geckodriver.exe"
driver = webdriver.Firefox(executable_path = geckodriver)

#create an IE driver
iedriver = "C:/tests/IEDriverServer.exe"
driver = webdriver.Firefox(executable_path = iedriver)

#open a website
the_url = "https://dev.to"
driver.get(the_url)

#finding an element by id
the_id = 'register'
element = driver.find_element_by_id(the_id)

#finding an element by name
the_name = 'register'
element = driver.find_element_by_id(the_name)

#findding an element by class name
the_class_name = 'nav-link'
element = driver.find_element_by_class_name(the_class_name)

#finding an element by tag name
the_tag_name = 'a'
element = driver.find_element_by_tag_name(the_tag_name)

#finding an element by link text ( anchor elements)
the_link_text = 'Sign Up'
element = driver.find_element_by_link_text(the_link_text)

#finding an element by partial link text (anchor elements)
the_partial_link_text = 'Sign'
element = driver.find_element_by_partial_link_text(the_partial_link_text)

#finding element using css selectors
the_css_selector = 'a[href="/sign-up"]'
element = driver.find_element_by_css_selector(the_css_selector)

#finding element using x-path
the_xpath = '//a[@href = "/sign-up"]'
element = driver.find_element_by_xpath(the_xpath)

#clicking an element
the_id = 'register'
element = driver.find_element_by_id(the_id)
element.click()

#type inside an element
the_id = 'email'
the_email = 'klaus@werner.de'
element = driver.find_element_by_id(the_id)
element.send_keys(the_email)

#select an option from select elements
the_id = 'country'
element = driver.find_element_by_id(the_id)
select_element = Select(element)
select_element.select_by_visible_text('Canada')

#taking screenshots
the_path = 'C:/tests/screenshots/1.png'
driver.save_screenshot(the_path)

#uploading a file
the_file_path = 'C:/tests/files/example.pdf'
the_id = 'upload_button'
element = driver.find_element_by_id(the_id)
element.send_keys(the_file_path)

#execute javascript
js_code = 'document.getElementById("pop-up").remove()'
driver = execute_script(js_code)

#switch to iframe
the_iframe_id = 'payment_section'
the_element_id = 'card_number'
the_iframe = driver.find_element_by_id(the_iframe_id)
driver.switch_to.frame(the_iframe)
element = driver.find_element_by_id(the_element_id)
element.send_keys('41111111111111')
driver.switch_to.default_content()

#switch to next tab
global nextTab
global currentTab
nextTab = currentTab + 1
driver.switch_to_window(driver.window_handles[nextTab])
currentTab = currentTab + 1

#swtich to previous tab
global previousTab
global currentTab
previousTab = currentTab - 1
driver.switch_to_window(driver.window_handles[previousTab])
currentTab = currentTab - 1

#close tab
driver.close()

#close alert
driver.switch_to.alert.accept()

#refresh
driver.refresh()

#hover
the_id = "register"
the_element = driver.find_element_by_id(the_id)
hover = ActionChains(driver).move_to_element(the_element)
hover.perform()

#right click
the_id = "register"
the_element = driver.find_element_by_id(the_id)
right_click = ActionChains(driver).context_click(the_element)
right_click.perform()

#set window size
driver.set_window_size(1600, 1200)

#press key
the_id = 'register'
element = driver.find_element_by_id(the_id)
element.send_keys(Keys.RETURN)

#configure element load timeout
from selenium.webdriver.support.ui import WebDriverWait

the_id = 'register'
WebDriverWait(driver,10).until(EC.presence_of_element_located((By.ID, the_id)))

#emulate mobile device
google_pixel_3_xl_user_agent = 'Mozilla/5.0 (Linux; Android 9.0; Pixel 3 XL Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.98 Mobile Safari/537.36'
pixel_3_xl_emulation = {
   "deviceMetrics": {
      "width": 411,
      "height": 731,
      "pixelRatio": 3
   },
   "userAgent": google_pixel_3_xl_user_agent
}
options = webdriver.ChromeOptions()
options.add_experimental_option("mobileEmulation", pixel_3_xl_emulation)
driver = webdriver.Chrome(
   executable_path = chromedriver,
   chrome_options = options)

```

## Configure automation testing in a build pipeline

I found a great article which describes the steps to implement web automation scripts in a build pipeline such as Github Workflow. Selenium Base [https://github.com/seleniumbase/SeleniumBase](https://github.com/seleniumbase/SeleniumBase) is a great wrapper on top of selenium that makes it easy to install drivers and add the automation script to a build pipeline.

[https://dev.to/seleniumbase/running-browser-tests-from-github-workflows-with-seleniumbase-1oic](https://dev.to/seleniumbase/running-browser-tests-from-github-workflows-with-seleniumbase-1oic)

That's all for today. Tomorrow is the last day of this challenge where I shall be sharing the various Python resources I have collected during this month while learning Python.

Have a great one!
