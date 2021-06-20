# gapps-course-build-automation
# What?
A Google App that automatically builds course content for the Canvas LMS!

# Why?
The Canvas Learning Management System (LMS) doesn't easily allow for custom css to theme content brought in from other sources, so any in-document styling has to be done with inline css.
Building that html content is tedious, so I thought I'd build a Google Apps product that automated this process, and sharpen my Js chops at the same time.

# How?
Using the Google Apps API, I built the following scripts:

### Code.gs
This identifies a) lesson plan templates which contain course content & formatting guidelines, and b) blank repo documents that hold the formatted html.  
The main function onlineCoursework() accepts A and B as parameters and builds B from A.

### html_tags.gs
This holds various html tags with inline css.
Each function accepts a 'temp' parameter (text content from a lesson plan template) and wraps it in the appropriate html tag.

### utilities.gs
This contains various 'helper' or utility functions; checking whether a line or cell is empty, has children, or contains particular text. The main switch statement also makes decisions about how to format particular blocks of text / content based on a keyword search.

### onlineCoursework.gs
This is where the magic happens.
This function accepts the A lesson plan doc and B blank repo doc as parameters and builds B from A.
It identifies sections of the document, then iterates through each section, evaluates content type, wraps it in the appropriate html & styling tags, then outputs everything in order to the blank repo google doc, where it can be copied + pasted into the LMS without any additional formatting needed.
