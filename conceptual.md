### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates

- What is a single page application?
  A single-page application is an app that works inside a browser and does not require page reloading during use

- What are some differences between client side and server side routing?
  Server sides needs to keep making requests to the server in order for the application to rerender, but client side does not need to keep make request to the server, it just does it once when the application is being loaded into the browser any other

- What are two ways of handling redirects with React Router? When would you use each?
  Two way of redirect React Router it with <Redirect /> and useHistory hook,we use useHistory hook with implement with form submission,<Redirect /> with regular route directing

- What are two different ways to handle page-not-found user experiences using React Router? 
  The way to handle page-not-found in user experiences are with Redirect component,so instead just redirect it to a path that display 404,
  second way to handle 404 is just create a Page not Found component and place it at the last route.

- How do you grab URL parameters from within a component using React Router?
  using hook from react-router-dom -- useParams

- What is context in React? When would you use it?
  Context is primarily used when some data needs to be accessible by many components at different nesting levels,we use when we don't want to experience with props drilling

- Describe some differences between class-based components and function
  components in React.
  class-base component can use it's it's lifecycle method,function component can not
  class-base component use more codebase compare to functional component with same task

- What are some of the problems that hooks were designed to solve?
  Hooks let you use React features (like state) from a function — by doing a single function call. 
  hooks are functions that let you "hook into" React state and lifecycle features from function components