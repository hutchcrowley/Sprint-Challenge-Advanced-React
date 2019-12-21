- [x] Why would you use class component over function components (removing hooks from the question)?
Class components give us a more explicit, direct way to interact with component lifecycle. Hooks and functional components are a great way to create modern stateful components, and moving forward, seem to be the standard way to create UI from the ground up outside of fairly isolated use cases. However when you need to access lifecycle in a more direct way, or are working with a legacy code base, it is still necessarry to know how to work with class components.

- [x] Name three lifecycle methods and their purposes.
1. componentDidMount()
   - invoked immediately after a componenet is inserted into the tree. Good for API calls, or otherwise loading data from a remote source. Is invoked only once in the lifecycle.
2. componentDidUpdate()
   - invoked immediately after updating occurs. Provides an opportunity to operate on the DOM when the component has been updated. Good for updating only the specific pieces of the DOM that have changed since the last update/ inital render.
3.componentWillUnmount()
   - invoked immediately before a componenet is unmounted and destroyed. Good for cleanup operations, i.e. invalidating timers, cancelling network request, or cleaning up subscriptions.

- [x] What is the purpose of a custom hook?
  Custom hooks allow you to apply stateful logic throughout your component to deal with only the logic you need for your component. This allows you to write code that is more DRY.

- [x] Why is it important to test our apps?
  Testing is important because it allows us to write and turn in more trustworthy code on a production scale. It forces developers to think about edge cases, reduces the risk of regressions, and acts as documentation for the code.