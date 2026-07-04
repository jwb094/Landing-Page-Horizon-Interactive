# Modern Marketing Landing Page (React.js)

A responsive marketing landing page built with React.js by converting a Figma design into a fully functional UI. This project focuses on component-based architecture, form handling, and realistic frontend development practices using Bootstrap and dummy data.

---

This project is based on a free community Figma design:

👉 
[Course Training - bootstrap responsive website templates download for course (Community)](https://www.figma.com/community/file/1004042828012491347)
Created by **Captain Design**

## ✨ Features

- Fully responsive landing page (mobile-first design)
- Component-based React architecture
- Reusable UI components (Hero, Navbar, Cards, Footer, etc.)
- Contact form with controlled inputs
- Form handling using `useState`
- DOM interaction using `useRef` (Contact form validation/interaction)
- Theme Switch using `useContext` -(Toggle Switch between Light and Dark Mode)
- Dummy API-style data to simulate backend content
- Bootstrap 5 layout system
- Bootstrap Icons integration


## 🧠 Key Concepts Practiced

### React Fundamentals
- Component creation and composition
- Props usage and data passing
- JSX syntax and `className` handling
- State management using `useState`
- Global Context using `useContext`



### UI & Styling
- Bootstrap 5 grid system
- Bootstrap utility classes
- Responsive design principles
- Bootstrap Icons integration

---

### Advanced React Patterns
- Using `useRef` for form interaction
- Alternative rendering techniques (not only `.map()`, but also `for` loops)
- Conditional rendering
- Reusable component structure


---

## 🧩 Project Structure

```bash
src/
 ├── assets/
 │    ├── imgs/ 
 │    ├── styles/  (component Stylesheet)
 ├── components/
 │    ├── ContentSlider/
 │    ├───────── ContentSlider.jsx
 │    ├───────── CarouselCard.jsx
 │    ├── Hero/
 │    ├───────── Hero.jsx
 │    ├───────── HeroCard.jsx
 │    ├── Testmonials/
 │    ├───────── Testmonial.jsx
 │    ├───────── TestmonialCard.jsx
 │    ├── Content_Summary.jsx
 │    ├── Footer.jsx
 │    ├── Header.jsx
 │    ├── SignUp.jsx
 │    ├── ThemeToggle.jsx
 ├── Context/
 ├── data/ (dummy backend data)
 ├── App.js
 └── index.js
```

---

## 📦 Technologies Used

- React.js
- JavaScript (ES6+)
- Bootstrap 5
- Bootstrap Icons
- CSS3

---

## 🚀 Learning Outcomes

This project helped reinforce:

- Structuring a React project like a real production app
- Breaking UI into reusable components
- Understanding component composition patterns
- Working with both controlled and uncontrolled inputs
- Using dummy data to simulate backend responses
- Rendering data using multiple approaches (map, loops, manual JSX)
- Improving confidence with JSX syntax and props handling
- Improving confidence of using implement Hooks in projects

---

## 📌 Purpose of Project

This project was built to improve real-world frontend development skills by converting a professional Figma design into a responsive React application while practicing scalable
component architecture and modern React patterns.
```