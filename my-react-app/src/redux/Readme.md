# REDUX

**Introduction**

Redux is a state management library for javascript application.
Particulary usefull for react and other single page application.

It helps to manage global state by providing a single source of truth for your application state , making it easier to debug , test and maintain

# **Redux consists of three parts**
1. Action
    It tells what to do
    Its a plain javascript object that have a type field
    Actions only tells what to do but dont tell how to do

    Definition: Actions in Redux are objects that tell the store what to do, usually with a type and optional data.

    Example:
        ```javascript
        export const increment = () => {
            return {
            type: 'INCREMENT',
            };
        };
    
        export const decrement = () => {
            return {
            type: 'DECREMENT',
            };
        };
        ```

2. Reducer
    Reducers are functions that takes the **current state** and an **action** as arguments and returns new state as results

    Definition: A reducer is a pure function in Redux that takes the current state and an action as inputs, and returns a new state based on the action type.

     Example:
     ```javascript
     const initialState = {
        count: 0,
    };
    
    const counterReducer = (state = initialState, action) => {
        switch (action.type) {
        case 'INCREMENT':
            return {
            ...state,
            count: state.count + 1,
            };
        case 'DECREMENT':
            return {
            ...state,
            count: state.count - 1,
            };
        default:
            return state;
        }
    };
    
    export default counterReducer;
     ```

3. Store 
    The redux store brings together state and reducer that makes our app

    Definition: A Redux store is a centralized container for managing the state of a JavaScript application, allowing state updates through actions and reducers while enabling predictable state management.

    Example:
    ```javascript
    import { createStore } from 'redux';
    import counterReducer from './reducer';

    const store = createStore(counterReducer);

    export default store;
    ```

# Redux follows strict patterns
1. Dispatch an action
2. The store processes the action with a reducer
3. The reducer updates the state
4. The updated store is stored in a store

# State, dispatch and selector

    State: The centralized data in Redux that represents the current state of the application. It is stored in the Redux store and updated via reducers.

    dispatch: A method provided by the Redux store to send actions, triggering reducers to update the state.

    selector:  A function used to extract specific pieces of state from the store, making it easier to access and manage state efficiently.
