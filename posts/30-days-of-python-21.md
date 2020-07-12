---
title: '30 Days of Python 👨‍💻 - Day 21 - Scripting Basics'
description: "A JavaScript developer's quest to learn python in a month."
date: '2020-07-11T06:39:16.196Z'
tags: ['python', 'challenge']
draft: false
---

Today I explored the basics of scripting in Python. Scripting basically means writing programs having a collection of commands and are executed from the command line or an interactive shell to perform useful tasks and automate them. There are a ton of things that can be automated using Python scripts such as processing various types of files such as PDFs, images, excel, CSV etc, send emails, create bots like twitter bot and numerous other things. As a part of this challenge, I decided to learn the basics of scripting so that I get to understand the concepts and then can explore in greater depth in future. My focus today was to find out basic techniques of processing images and PDF files using Python scripts.

## Image Processing

Image Processing in simple words is the method or technique to perform some operations on images using programs either for enhancing images or extracting information out of it. There are a lot of popular libraries to perform image processing in Python such as

- Pillow - [https://pillow.readthedocs.io/en/stable/index.html](https://pillow.readthedocs.io/en/stable/index.html)
- OpenCV
- Python Imaging Library (Deprecated)
- scikit-image

I tried out Pillow which is a forked version of the Python Imaging Library (PIL) which is no longer maintained and does not support the latest versions of Python. Thus Pillow is recommended to use over PIL. 

The installation and basic usage can be found out in the Pillow docs. [https://pillow.readthedocs.io/en/stable/index.html](https://pillow.readthedocs.io/en/stable/index.html)

Pillow can be installed using the command line using the command `pip install Pillow` (Check documentation for specific OS commands)

It's time to create some image processing scripts. The first one I created is a basic image converter that converts all JPEG format images in a folder to PNG format images and stores them in another folder. I download some JPEG images from [https://unsplash.com](https://unsplash.com) and stored them in a folder `images`.  The script needs to read all the JPEG images, convert them to PNG and then place them in a new folder `generated`.

 Here's the code for the script file which I named `image_convertor.py` [Here is the GitHub repository link for the project.](https://github.com/arindamdawn/python-scripting)

Since the original images are very large in size, I first resized them into a smaller size and then converted them to improve the performance of the script.

`image_converter.py`

```python
import os
from PIL import Image

# fetch all the files from the source folder
dirname = 'images'
output_dirname = 'generated'
images_list = os.listdir(dirname)

# check if output folder exits otherwise create it
if not os.path.exists(output_dirname):
    os.makedirs(output_dirname)

for image in images_list:
    # split the filename to separate the format and name
    name, format = os.path.splitext(image)

    original = Image.open(f'{dirname}\{image}')

    # resize image to a standard size and to reduce file size
    size = 1000,1000
    # thumbnail maintains aspect ratio
    original.thumbnail(size) 
    

    # save image as png format
    original.save(f'{output_dirname}\{name}.png')
```

The script can be run from the terminal as `python image_converter.py` It should automatically convert the images in the generated folder.

The second script I created is a grayscale converter that converts all the images to black and white images. Using Pillow lot of filters can be applied on the images, grayscale being one of them.

`grayscale_converter.py`

```python
import os
from PIL import Image, ImageFilter

# fetch all the files from the source folder
dirname = 'images'
output_dirname = 'greyscale'
images_list = os.listdir(dirname)

# check if output folder exits otherwise create it
if not os.path.exists(output_dirname):
    os.makedirs(output_dirname)

for image in images_list:
    # split the filename to separate the format and name
    name, format = os.path.splitext(image)

    original = Image.open(f'{dirname}\{image}')

    # resize image to a standard size and to reduce file size
    size = 1000, 1000
    # thumbnail maintains aspect ratio
    original.thumbnail(size)

    # convert the image to greyscale
    grayscale_image = original.convert('L')  # L mode means greyscale
    grayscale_image.save(f'{output_dirname}\{image}')
```

Finally, I created another image processing script to apply a logo on all the images. This uses the technique of merging images. This can be pretty useful if we have to apply branding to images. I added a logo.png image file to the root directory.

`brand_stamp.py`

```python
import os
from PIL import Image, ImageFilter

# fetch all the files from the source folder
dirname = 'images'
output_dirname = 'branded'
images_list = os.listdir(dirname)
logo = Image.open('logo.png')

# check if output folder exits otherwise create it
if not os.path.exists(output_dirname):
    os.makedirs(output_dirname)

for image in images_list:
    # split the filename to separate the format and name
    name, format = os.path.splitext(image)

    original = Image.open(f'{dirname}\{image}')

    # resize image to a standard size and to reduce file size
    size = 1000, 1000
    # thumbnail maintains aspect ratio
    original.thumbnail(size)

    # create a copy of the image
    image_copy = original.copy()
    # obtain the position to place the logo

    position = ((image_copy.width - logo.width),
                (image_copy.height - logo.height))
    # The third parameter makes it transparent
    image_copy.paste(logo, position, logo)
    image_copy.save(f'{output_dirname}\{name}.png')
```

That was quite cool stuff! And this is just scratching the surface of processing images. This is I suppose a nice starting point to explore further in future while creating projects. 

Here are some cool resources that I found interesting related to image processing in Python

- [https://auth0.com/blog/image-processing-in-python-with-pillow/](https://auth0.com/blog/image-processing-in-python-with-pillow/)
- [https://opensource.com/article/19/3/python-image-manipulation-tools](https://opensource.com/article/19/3/python-image-manipulation-tools)
- [https://stackabuse.com/introduction-to-image-processing-in-python-with-opencv/](https://stackabuse.com/introduction-to-image-processing-in-python-with-opencv/)
- [https://towardsdatascience.com/image-manipulation-tools-for-python-6eb0908ed61f](https://towardsdatascience.com/image-manipulation-tools-for-python-6eb0908ed61f)
- [https://github.com/shekkizh/ImageProcessingProjects](https://github.com/shekkizh/ImageProcessingProjects)

## Processing PDFs

Apart from playing around with images, I also explored manipulating PDF files and the basics of processing PDF files based on some practical use cases. PDFs are one of the most widely used file formats and can store a wide variety of data.

The library which I used is PyPDF2 [https://pypi.org/project/PyPDF2/](https://pypi.org/project/PyPDF2/) which is a very popular library I found on PyPI. The library can be downloaded using the `pip` command `pip install PyPDF2`

I added a sample PDF file to the pdfs directory

The first script I created is mainly to extract information from a PDF file such as its author, page count, subject, title etc. 

`info_extractor.py`

```python
from PyPDF2 import PdfFileReader

def extract_information(pdf_path):
    with open(pdf_path, 'rb') as f:
        pdf = PdfFileReader(f)
        information = pdf.getDocumentInfo()
        number_of_pages = pdf.getNumPages()

    txt = f"""
    Information about {pdf_path}: 

    Author: {information.author}
    Creator: {information.creator}
    Producer: {information.producer}
    Subject: {information.subject}
    Title: {information.title}
    Number of pages: {number_of_pages}
    """

    print(txt)
    return information

if __name__ == '__main__':
    path = 'pdfs/sample1.pdf'
    extract_information(path)
```

The script can be run using `python info_extractor.py`. It should successfully print all the necessary information about the PDF file.

Lastly, I worked on another script to add the branding logo to all the pdfs as a watermark. For that, I created another blank PDF that only has the logo as watermarked it. This can now be merged with the PDF file to process. Creating watermarked PDFs is quite a common requirement and automating this task might be pretty useful.

`pdf_watermarker.py`

```python
from PyPDF2 import PdfFileWriter, PdfFileReader

def create_watermark(input_pdf, output, watermark):
    watermark_obj = PdfFileReader(watermark)
    watermark_page = watermark_obj.getPage(0)

    pdf_reader = PdfFileReader(input_pdf)
    pdf_writer = PdfFileWriter()

    # Watermark all the pages
    for page in range(pdf_reader.getNumPages()):
        page = pdf_reader.getPage(page)
        page.mergePage(watermark_page)
        pdf_writer.addPage(page)

    with open(output, 'wb') as out:
        pdf_writer.write(out)

if __name__ == '__main__':
    create_watermark(
        input_pdf='pdfs/sample1.pdf', 
        output='pdfs/watermarked_sample.pdf',
        watermark='pdfs/watermark.pdf')
```

On running `python pdf_watermarker.py`, it should generate the watermarked PDF file.

There are a lot of things that can be done with PDFs. However, I simply decided to go through the basics to get my familiar with the process. I am linking some great resources to deep dive into PDF processing.

Here are some references for processing PDFs in Python

- [https://realpython.com/pdf-python/](https://realpython.com/pdf-python/)
- [https://towardsdatascience.com/pdf-preprocessing-with-python-19829752af9f](https://towardsdatascience.com/pdf-preprocessing-with-python-19829752af9f)
- [https://www.geeksforgeeks.org/working-with-pdf-files-in-python/](https://www.geeksforgeeks.org/working-with-pdf-files-in-python/)
- [https://automatetheboringstuff.com/chapter13/](https://automatetheboringstuff.com/chapter13/)
- [https://medium.com/@umerfarooq_26378/python-for-pdf-ef0fac2808b0](https://medium.com/@umerfarooq_26378/python-for-pdf-ef0fac2808b0)

All the associated code can be found in this [Github repo](https://github.com/arindamdawn/python-scripting)

That's all for today. Will be exploring more on scripting such as building automated bots for twitter, sending email and other cool stuffs tomorrow.

Have a nice one!