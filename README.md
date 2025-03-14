# **String Calculator - TDD Kata (TypeScript)**  

This project is a **Test-Driven Development (TDD)** implementation of a **String Calculator** in **Node.js with TypeScript**. The calculator takes a string of numbers and returns their sum while following **TDD best practices**.

## **📜 Features**
- Handles **empty strings** (`"" → 0`)
- Supports **single and multiple numbers** (`"1,2" → 3`)
- Supports **newline (`\n`) as a delimiter** (`"1\n2,3" → 6`)
- Supports **custom delimiters** (`"//;\n1;2" → 3`)
- Throws an **error for negative numbers** (`"1,-2,-3" → "negative numbers not allowed: -2,-3"`)

## **🛠 Tech Stack**
- **Node.js** & **TypeScript**
- **Jest** for unit testing
- **Faker** for generating test data

## **📦 Installation**
Clone the repository:
```sh
git clone https://github.com/RishabhSikka3/string-calculator.git
cd string-calculator
npm install

## **To run the code and test cases**
npm start
npm test
