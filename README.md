# Week 2: The Pillars of React and React Native

Welcome to Week 2 ! We are now moving from pure JavaScript logic to building visual user interfaces. This week, you will learn the fundamental concepts of React and how they are applied in React Native to create components, the building blocks of every mobile application.

## Weekly Objectives

- **Understand** the core concept of a React Component and how to build your UI by composing them.
- **Write** JSX, the syntax used to describe what your UI should look like.
- **Differentiate** between `props` for passing data to components and `state` for managing a component's internal data.
- **Use** the `useState` hook to create stateful, interactive components.
- **Become familiar** with the essential React Native components: `View`, `Text`, `StyleSheet`, `Button`, and `Image`.

---

## Project Setup

For this week and all subsequent weeks, we will work inside a single Expo project. Follow these steps to prepare the environment.

1.  **Install dependencies:**
    In the project folder, open a terminal and install the required dependencies:

    ```bash
    npm install
    ```

2.  **Start the Development Server:**

    ```bash
    npx expo start
    ```

    ```
    // If you work using Eduroam,
    npx expo start --tunnel
    ```

    This will start the Metro bundler and show a QR code in your terminal.

    - **To run on browser:** Press `w` to run the app in you browser. Then, to have the phone perspective inside the browser, open the developer development tools using `F12` or `Right click -> Inspect`.
    - **To run on your phone:** Install the **Expo Go** app from the App Store or Google Play. Scan the QR code with your phone's camera (or from within the Expo Go appw).
    - **To run on a simulator:** Press `i` for an iOS simulator or `a` for an Android emulator (you must have them installed and configured).

---


## Practical Exercises

Follow this Git workflow for the exercises:

1.  Ensure you are on the `main` branch: `git checkout main`
2.  Create and switch to the exercises branch: `git checkout -b week2-core-components`
3.  Modify the files inside your Expo project as described below.
4.  Commit your changes to the `week2-core-components` branch. **Do not merge it into `main`**.

### Exercise 1: Static Profile Card Component

The goal is to practice creating a reusable component and passing data to it via `props`.

1.  **Create the Component File:** Inside your project, create a new file named `components/ProfileCard.tsx`.
2.  **Build the Component:** In `ProfileCard.tsx`, create a functional component that accepts `props` (`name`, `jobTitle`, and `imageUrl`).
    - It should render a main `View` as a container.
    - Inside the container, add an `Image` component to display the profile picture from `imageUrl`.
    - Add two `Text` components to display the `name` and `jobTitle`.
    - Use `StyleSheet.create` to add some basic styling (e.g., padding, border, font sizes).
3.  **Use the Component:** In your main `app/(tabs)/index.tsx` file, `import` your `ProfileCard` component. Use it at least once, passing it different props to see it in action. For example:

    ```jsx
    <ProfileCard
      name="Alice"
      jobTitle="React Native Developer"
      imageUrl="https://picsum.photos/200/300"
    />
    ```

### Exercise 2: The Counter

This exercise introduces `state` to make a component interactive.

1.  **Tab `app/(tabs)/counter.tsx`:** Now we'll work on the second tab named `counter`.
2.  **Initialize State:** Inside the `CounterScreen` component, use the `useState` hook to create a state variable called `count`. Initialize it to `0`.
3.  **Display the State:** Add a `Text` component that displays the current value of `count`. For example: `"Count: 0"`.
4.  **Add a Button:** Add a `Button` component.
    - Give it a `title` like "Increment" or "Press Me".
    - Use the `onPress` prop to call a function that updates the `count` state by incrementing its value by 1.
5.  At the end, define the **styles** to the JSX tags based on the existing styles.

---

## Homework Assignment

For this assignment, commit your final code to the **`main`** branch.

Your task is to build the **static UI** for a "Todo List" application within `app/(tabs)/index.tsx`. No functionality is required yet; the focus is on component composition, props, and styling.

**Requirements:**

1.  **Main View:** The entire app should be wrapped in a main `View` that provides some padding.
2.  **Title:** Display a large, bold title at the top, e.g., "My Todo List".
3.  **TodoItem Component:** Create a new component file (`components/TodoItem.js`).
    - This component should accept a single `prop`, `text`.
    - It should render a styled `View` containing the `text` inside a `Text` component.
    - Give it some styling (e.g., a background color, padding, margin-bottom) to make each item distinct.
4.  **Display the List:** In `app/(tabs)/index.tsx`, `import` your `TodoItem` component.
    - Hard-code a list of 3-4 tasks and display them using your `TodoItem` component.
    - **Example:**
      ```jsx
      <>
        <TodoItem text="Learn React Native" />
        <TodoItem text="Build a static UI" />
        <TodoItem text="Practice with StyleSheet" />
      </>
      ```

The final result should be a clean, well-structured screen that looks like a basic to-do list.

---

## Documentation and Resources

- **React - Quick Start (A great overview of components, JSX, props, and state):**
  - [React Docs: Quick Start](https://react.dev/learn)
- **React - `useState` Hook:**
  - [React Docs: useState](https://react.dev/reference/react/useState)
- **React Native - Core Components:**
  - [React Native Docs: Core Components](https://reactnative.dev/docs/intro-react-native-components)
- **React Native - Component-specific Docs:**
  - [View Component](https://reactnative.dev/docs/view)
  - [Text Component](https://reactnative.dev/docs/text)
  - [Image Component](https://reactnative.dev/docs/image)
  - [Button Component](https://reactnative.dev/docs/button)
  - [StyleSheet](https://reactnative.dev/docs/stylesheet)
- **Expo - Get Started (For project setup):**
  - [Expo Docs: Get Started](https://docs.expo.dev/get-started/create-a-project/)
