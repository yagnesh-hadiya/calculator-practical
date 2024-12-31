# Incubyte TDD Frontend Assessment

Welcome to the Incubyte TDD Kata! This repository contains the solution to the **String Calculator TDD Kata**. The goal of this exercise is to demonstrate your skills in Test-Driven Development (TDD) and create a frontend application that performs string-based calculations.

## Project Overview

This project implements a **String Calculator** that performs addition of numbers represented as strings. The calculator is able to handle:

1. **Empty string**: Returns 0.
2. **Single number**: Returns the number itself.
3. **Multiple numbers**: Handles multiple comma-separated numbers.
4. **New lines**: Supports new lines between numbers (`\n`).
5. **Custom delimiters**: Allows custom delimiters at the beginning of the string.
6. **Negative number handling**: Throws an exception for negative numbers and reports all of them.
7. **Frontend UI**: A simple user interface for inputting numbers and displaying results dynamically.

## Features

- **Basic Operations**: Add numbers from a string.
- **Multiple Numbers**: Handles any number of comma-separated numbers.
- **Line Breaks**: Allows numbers to be separated by new lines (`\n`).
- **Custom Delimiters**: Supports custom delimiters (e.g., `//;\n1;2`).
- **Negative Number Validation**: Throws an error for negative numbers.
- **User Interface**: A React app to allow user interaction.

## Setup Instructions

### 1. Clone the Repository

First, clone this repository to your local machine:

```bash
git clone https://github.com/yagnesh-hadiya/calculator-practical.git
cd calculator-practical
```

### Key Steps for Setup and Running:

1. **Clone the repository**: How to get the project locally.
2. **Install dependencies**: Installing all the necessary packages with `npm install`.
3. **Run the development server**: Start the React application with `npm start`.
4. **Run tests**: Use `npm test` to run Jest tests.
5. **Lint and format the code**: Use `npm run lint` and `npm run lint:fix` to ensure code quality.
6. **Build the app for production**: If you want to deploy it, use `npm run build` to generate a production-ready build.