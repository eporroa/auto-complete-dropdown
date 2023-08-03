1. What is the difference between Component and PureComponent? give an example where it might break my app.

   > In a React Class based Component context, the difference is in the shouldComponentUpdate() method.
   > For `Component`, the `shouldComponentUpdate()` returns true by default, causing the component to re-render every time state or props change. `PureComponent` on the other hand implements `shouldComponentUpdate()` with a shallow prop and state comparison, meaning it only updates if the props or state actually change.

   > This could potentially break your app if you use PureComponent and mutate the state directly, because PureComponent's shallow comparison wouldn't be able to pick up on this change. The use of function components is adviced.

2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?

   > The Context API and `shouldComponentUpdate` method can clash because context changes do not trigger `shouldComponentUpdate`. As a result, if `shouldComponentUpdate` returns false, yet context data that the component depends on has changed, the component won't re-render, leading to potential inconsistencies in the UI.

3. Describe 3 ways to pass information from a component to its PARENT.

   - **Callbacks**: A function from the parent component can be passed as a prop to the child component. The child can execute this function back to the parent later.
   - **Referencing States**: Share state between components by moving it up to their closest common ancestor. The state can be passed down to child components via props and then use `useEffect` to listen for changes.
   - **Context**: The Context API allows components to share values without explicitly passing through every level of the tree where the the Provider is the parent.

4. Give 2 ways to prevent components from re-rendering.

   - Using `useMemo` or `useCallback` hooks along with `React.memo` for functional components, use `shouldComponentUpdate` lifecycle method for class-based components to avoid unnecessary renders.
   - Keeping your components small and avoiding state changes as much as possible can also prevent unnecessary re-renders.

5. What is a fragment and why do we need it? Give an example where it might break my app.

   > Fragments let you group children without adding extra nodes to the DOM. It can be useful when you want to return multiple elements from a component. Fragments does not add extra nodes and if you rely on CSS child selectors or the `:first-child` or `:last-child` pseudo-selectors, they take into account the nodes added to the DOM and that can break the app.

6. Give 3 examples of the HOC pattern.

   - **connect** function in Redux: This HOC allows a component to be connected to the Redux store.
   - **withRouter** in React Router: This HOC provides access to the history object’s properties and closest <Route>'s match.
   - An HOC that handles error boundaries, wrapping a component to catch JavaScript errors anywhere in their child component tree.

7. What's the difference in handling exceptions in promises, callbacks and async...await.

   - **Promises**: Errors in promises are caught using `.catch()` method chained at the end of the promise chain.
   - **Callbacks**: Errors are usually handled by passing them as the first argument to the callback function. If an error occurs, the callback is invoked with the error as its first argument.
   - **Async/await**: Exceptions in async functions can be caught using try-catch blocks.

8. How many arguments does setState take and why is it async.

   > `setState` can take up to two arguments. The first one is an updater function or an object to merge into the new state. The second optional argument is a callback that runs after state has been updated. `setState` is asynchronous for performance reasons, it allows for batching of multiple state updates.

9. List the steps needed to migrate a Class to Function Component.

   - Replace the `class` definition with a `function`.
   - Move the contents of the `render` method into the function body and use `return` to display the component content.
   - Replace this.props with `props` as the function first argument.
   - Replace this.state with a `useState` hook.
   - Replace life-cycle methods with corresponding hooks (`useEffect`, `useMemo`, `useCallback`).

10. List a few ways styles can be used with components.

    - **Inline Styling**: Directly setting an object of styles into the `style` prop in JSX elements.
    - **CSS Classes**: Defining styles in separate CSS files and importing them.
    - **CSS Modules**: A CSS file in which all class names and animation names are scoped locally by default.
    - **Styled-components**: A library that lets you write actual CSS in your JavaScript or the use of Emotion styled library.

11. How to render an HTML string coming from the server.

    > HTML string can be rendered in React using `dangerouslySetInnerHTML` prop. This can potentially expose an application to cross-site scripting (XSS) attacks if the server content is not properly sanitized.

    ```jsx
    // Example:
    <div dangerouslySetInnerHTML={{ __html: yourHTMLstring }} />
    ```
