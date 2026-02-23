# 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer:
## getElementById():
it select a single element by using the id and it's very fast and accurate to find any specific info or section of element;
## getElementsByClassName():
it selects all the elements by using the class name and it return the HTML collection;
## querySelector() / querySelectorAll()
both of them use css selector to find the elements but the difference is:
- querySelector() select just the first elements;
- querySelectorAll() return NodeList with collection of Element nodes;

---
# 2. How do you create and insert a new element into the DOM?
Answer:
- firstly create an element: const div = document.createElement("div")
- secondly set the innerText or innerHTML: div.innerText = "demo text"
- finally append with DOM: document.body.append(div)

---
# 3. What is Event Bubbling? And how does it work?
Answer:
in a DOM tree when the top-down approach follow, then called it event capturing and when the bottom-up approach follows, then called bulling. that means when an event happens on an element, it first runs on that elements and then moves upwards to it's parent, grand parent, grand grand parent etc untill reaches document or window.

---
# 4. What is Event Delegation in JavaScript? Why is it useful?
Answer:
instead of adding direct listener to the target element. it add the event listener to it's parent or grand parent, so that the event listener can be apply to all of it's child and grand child etc.

---
# 5. What is the difference between preventDefault() and stopPropagation() methods?
Answer:
## preventDefault():
it prevent or stop the browser's default behavior and affects default action.

## stopPropagation():
it stops event from bubbling. it is very useful for specific situations and affects event flow (bubbling).







.
.
.
.
.
.
.
.
.
.
..
.
.
.
.
.
.
.
.
.
..
.
.
.
.
.
.
.
.
.
..
.
.
.
.
.
.
.
.
.
.




















## Welcome To ( সহজ সরল সিম্পল ) Assignment - 4 


---
# 📅 Deadline For 60 marks: 23th February, 2026 (11:59 pm ⏱️)
# 📅 Deadline For 50 marks: 24th February, 2026 (11:59 pm ⏱️)
# 📅 Deadline For 30 marks: Any time after 24th February.


# Main Requirements

## Design Part

## Dashboard
- Website name and Create a dashboard like figma 
- The section should be responsive for mobile devices. It is totally up to you. 

## Available Jobs Section
- A title on the left side, jobs count on the right side 
- 3 different tab  below the section title 
- Minimum 8 cards with:
	- companyName
	- position
	- location
	- type
	- salary
	- description
	- 2 buttons: Interview, Rejected
- By default all the jobs data will show on All tab, and the Interview, Rejected tab will show “No jobs Available” message with a subtitle below and an icon/image on the above

- The section should be responsive for mobile devices. It is totally up to you.

--- 

## Functionalities Part
- Clicking on Interview button on the card 
    - will add the data on Interview tab 
    - add the status as Interview.
    - Will increase the the count of interview in Dashboard 

- Clicking on Rejected button on the card 
    - will add the data on Rejected tab 
    - add the status as Rejected.
    - Will increase the the count of Rejected in Dashboard

- Enable toggle between Interview and rejected button(you can select Rejected button after clicking on Interview, and Interview button after clicking on Rejected button). It will change the tab and dashboard count also. It will show tab wise jobs count on the right.

---

# Challenges Requirements
- Clicking on the delete button will remove that card from the UI, and the count will be deducted from the dashboard card and the main section.
- No lorem ipsum text on your website. At least 8 meaningful commits in your project.  

- Create a readme file and answer this question on your own. Don’t copy-paste from Google or any AI chatbot. 


## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### 2. How do you create and insert a new element into the DOM?

### 3. What is Event Bubbling? And how does it work?

### 4. What is Event Delegation in JavaScript? Why is it useful?

### 5. What is the difference between preventDefault() and stopPropagation() methods?

---


**Technology Stack:**
- HTML
- CSS (Vanilla/Tailwind/DaisyUI)
- JavaScript (Vanilla)


--- 

## What to submit: 

1. GitHub Repository Link: 
2. Live Site Link: 
