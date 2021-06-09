# Codecademy Fortune Teller "Zoltran"

### table of content:

---

- Introduction - the project's aim
- Technologies
- Launch
- How dose it work
- Features
- Future updates

## Introduction

---

The goal of the project is to generate a random message to the user composed of three different sources.
I have chosen to make a fortune teller which outputs a message about the future of the user.
The three random sources are:

1. **when** is it going to happen (tomorrow, next week, next month, ....)
2. **what** is going to happen (your car breaks down, you win the lottery, you find the love of your life)
3. the **condition** which need to be fulfilled so the event happens (eat everyday one lemon, tell some one everyday one joke, ...)

## Technologies

---

- Java Script

## Launch

---

Should be launched over the node.js from the command line.

## How dose it work

---

There are 3 arrays (**when**, **what**, **condition**) which contain a list of words.
The function "pickRandomElement" returns randomly one of the elements from the array which has been passed to it.
A template literal than concatenates 3 functions (each with one of the arrays) to an sentence.

## Features

---

1. Random message made up of 3 random components.
2. Easily scalable, the array can be updated by simply adding more elements to it, without having to change anything else in the code.
3. Text art picture to illustrate the fortune teller.

## Future updates

---

1. [ ] using HTML, CSS and Java Script to create a website which is hosted on git hub
2. [ ] improved graphic
3. [ ] a button to generate a new message
4. [ ] background sound
