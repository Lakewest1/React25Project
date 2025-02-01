const data = [
    {
      "id": 1,
      "question": "What is React?",
      "answer": "React is a JavaScript library for building user interfaces, developed and maintained by Facebook. It is used to create single-page applications by handling the view layer for web and mobile apps.",
    },
    {
      "id": 2,
      "question": "What is JSX?",
      "answer": "JSX stands for JavaScript XML. It is a syntax extension for JavaScript, which allows you to write HTML elements and components in a JavaScript file. JSX gets compiled into regular JavaScript at build time.",
    },
    {
      "id": 3,
      "question": "What are props in React?",
      "answer": "Props (short for properties) are used to pass data from one component to another in React. They are read-only and immutable from the perspective of the receiving component.",
    },
    {
      "id": 4,
      "question": "What is state in React?",
      "answer": "State is an object that holds data that can change over time in a React component. Unlike props, state is managed within the component and can be updated using the `setState` method.",
    },
    {
      "id": 5,
      "question": "What is the difference between state and props?",
      "answer": "Props are used to pass data from parent to child components, and they are immutable in the child component. State is used to manage local data within a component and can be updated using the `setState` function.",
    },
    {
      "id": 6,
      "question": "What is the Virtual DOM?",
      "answer": "The Virtual DOM is a lightweight in-memory representation of the actual DOM. React uses the Virtual DOM to optimize rendering performance by only updating the real DOM when necessary after comparing it with the previous Virtual DOM state.",
    },
    {
      "id": 7,
      "question": "What are hooks in React?",
      "answer": "Hooks are functions that let you use state and lifecycle features in functional components. Examples include `useState`, `useEffect`, and `useContext`.",
    },
    {
      "id": 8,
      "question": "What is the `useEffect` hook used for?",
      "answer": "The `useEffect` hook is used for side effects in React components. It runs after every render and can be used for operations such as data fetching, updating the DOM, or subscribing to external data sources.",
    },
    {
      "id": 9,
      "question": "What is `useState` in React?",
      "answer": "The `useState` hook is used to manage state in functional components. It returns a state variable and a function to update it.",
    },
    {
      "id": 10,
      "question": "What is the purpose of the `key` prop in React lists?",
      "answer": "The `key` prop is used to identify individual elements in a list. It helps React efficiently update and re-render only the elements that have changed when the list is modified.",
    },
    {
      "id": 11,
      "question": "What is the `context` API in React?",
      "answer": "The `context` API is used to manage global state across a React app. It allows you to share data like themes, authentication, or user preferences without passing props down through every level of the component tree.",
    },
    {
      "id": 12,
      "question": "What are controlled and uncontrolled components in React?",
      "answer": "Controlled components are those whose value is controlled by React state, whereas uncontrolled components are those whose value is handled by the DOM itself.",
    },
    {
      "id": 13,
      "question": "What is a higher-order component (HOC) in React?",
      "answer": "A higher-order component is a function that takes a component and returns a new component with additional props or functionality. It allows you to reuse component logic.",
    },
    {
      "id": 14,
      "question": "What is React Router?",
      "answer": "React Router is a standard library for routing in React. It enables navigation between different components and views, allowing for dynamic routing in single-page applications.",
    },
    {
      "id": 15,
      "question": "What is Redux?",
      "answer": "Redux is a state management library for JavaScript apps. It is often used with React to manage global state in a predictable way, using actions, reducers, and a central store.",
    },
    {
      "id": 16,
      "question": "What is a `ref` in React?",
      "answer": "`ref` is a special attribute in React that allows you to access and interact directly with a DOM element or a React component instance.",
    },
    {
      "id": 17,
      "question": "What are fragments in React?",
      "answer": "Fragments are a way to group multiple elements without adding extra nodes to the DOM. They are used to return multiple elements from a component's render method without wrapping them in a parent element.",
    },
    {
      "id": 18,
      "question": "What is the purpose of `componentDidMount` lifecycle method?",
      "answer": "The `componentDidMount` method is a lifecycle method that is called once after a component is mounted. It is commonly used to fetch data or perform setup operations when the component is first rendered.",
    },
    {
      "id": 19,
      "question": "What is the difference between `componentDidUpdate` and `getDerivedStateFromProps`?",
      "answer": "`componentDidUpdate` is called after a component has updated, whereas `getDerivedStateFromProps` is called right before rendering, allowing you to update state based on changes in props.",
    },
    {
      "id": 20,
      "question": "What is lazy loading in React?",
      "answer": "Lazy loading is a technique that allows you to load components only when they are needed, improving the initial load time of the application. It can be achieved in React using `React.lazy()` and `Suspense`.",
    },
  ];
  
  export default data;
  