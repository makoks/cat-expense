# 🐱 Cat Expense

Cat Expense is a web application for tracking expenses related to your cat. It allows users to add and delete expense records, highlights the most costly category, and displays a random cat fact.

## 🚀 Tech Stack
- **TypeScript**
- **React**
- **Next.js**

## 🎯 Features
- 📋 **Expense Table** – add and remove expense records
- 🔥 **Highlighting** – automatically highlights the most expensive category
- 🐾 **Random Cat Fact** – fetches and displays a random fact about cats
- 📱 **Responsive Design** – works well on both desktop and mobile
- 🌗 **Dark Mode Support** – respects the system’s light/dark theme preference

## 📦 Installation
```bash
npm install
```  

## 🛠 Development
```bash
npm run dev
```
Runs the application on [localhost:3000](http://localhost:3000).

## 🔨 Build & Run
```bash
npm run build
npm run start
```

## 🎨 Styling
The application uses **CSS Modules** to ensure component-level styling isolation. This prevents global style conflicts and makes styles easier to maintain.

## 🌐 Data Fetching
The application fetches random cat facts from the Cat Fact API using `fetch()` inside `useEffect()`. If the request fails, an error message is displayed instead.

## 🔧 State Management
- Expense records are stored in the local state using `useState()`.
- The most expensive category is dynamically calculated each time the state updates.

## 📂 Project Structure
```plaintext
/public            # Static files like icons or images
/src
 ├── components    # UI components
 ├── pages         # Next.js page components
 ├── resources     # Static data (initial expense records)
 ├── styles        # CSS Modules and global styles
 ├── types         # TypeScript type definitions and data structures
```

## 📊 Component Structure
![Cat Expense architecture](https://raw.githubusercontent.com/makoks/cat-expense/refs/heads/main/public/cat-expense-diagram.png)

## 🚀 Possible Improvements
- **Persistent Storage** – Save expenses to local storage or a backend database.
- **Filtering & Sorting** – Add options to filter expenses by category or sort by amount.
- **Authentication** – Allow users to log in and track personal expenses.
- **Data Visualization** – Display expenses using pie charts to show spending by category.
- **Date Input & Filtering** – Allow users to input expense date and show data for a specific month.
- **Total Expenses Display** – Show the total amount spent.
- **Testing** – Implement:
  - **Units tests** for components with Jest & React Testing Library.
  - **Integration tests** for API calls and state updates.
  - **End-to-end tests** with Cypress for user interactions.
