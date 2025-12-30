📘 React Render Demo – Day 48
🎯 Goal

Understand when and why a React component re-renders.

🧠 Key Concepts

React component is a function

Component re-renders only when state or props change

Functions and normal variables do NOT trigger renders

React skips rendering if state is set to the same value

🧪 What this app demonstrates

✅ useState triggers re-render

❌ Normal variables reset on every render

❌ Setting state to the same value does nothing

⚙️ How it works

stateCounter → stored by React, survives renders

normalCounter → resets to 0 on every render

console.log("RENDER") shows exactly when render happens

🧩 Key takeaway

React re-renders because of state/props changes, not because of functions or clicks.


https://codesandbox.io/p/sandbox/ldcjwc?file=%2Fsrc%2FApp.js%3A1%2C1-39%2C1
