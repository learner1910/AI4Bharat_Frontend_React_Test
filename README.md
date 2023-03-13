# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

<--    Getting Started
       First, let's create a new React app using create-toshini
       cd toshini.

    Next, let's install the dependencies we'll need for this project.

    Step 2: Installing dependencies
    
     Now we need to install the following dependencies for our project:

`axios`: to make API calls
`redux`: for state management 
`react- redux`: to connect React components with the Redux store
`redux - thunk`: middleware for Redux to handle asynchronous actions 
`styled - components`: for styling React components 

To install these dependencies,run the following command:
`npm install axios react-bootstrap react-icons react-redux redux`

    Now that we have our dependencies installed, let's start working on the tasks


#
      Task 1: Make a GET API call 
#
      The first task is to make a GET API 
call to https://jsonplaceholder.typicode.com/users. Here's how you can do it using React:

    `import axios from 'axios';
    export const getUsers = async () => {
     try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
  } catch (error) {
    console.error(error);
  }};`

Note:   The above code is only for GET api call.

    <--------------------------App.js------------------------------------------------------>

Let's go over the code step by step:

1.We import the necessary libraries, and declare two state variables using the useState hook. `users` will hold the list of users fetched from the API, while `selectedUser` will hold the user object that the user clicks on.

2.We use the useEffect hook to make a GET API call to https://jsonplaceholder.typicode.com/users and update the `users` state variable with the response data.

3.We define a `handleUserClick` function that updates the `selectedUser` state variable when the user clicks on a row in the table.

4.We define a `handleCloseModal` function that resets the `selectedUser` state variable when the user clicks on the Close button in the modal or clicks outside the modal.

5.We render a table with the list of users, and attach an onClick event handler to each row that calls the `handleUserClick` function.

6.We render a modal that displays the selected user's information. We use the `show` prop to show or hide the modal based on whether `selectedUser` is null or not, and the  `onHide` prop

In this code, we are using the `useEffect` hook to make the API call when the component mounts.
The API response is in JSON  format, so we are parsing it using the `json()` method. The `setUsers` 
function is used to update the state of the component with the API response.


# 
Task 2: Rendering the response
#
The next task is to render the response in a tabular form, displaying the
`id`, `name`, `username`, and `email` fields. 
Here's how you can do it:

In this code, we are using the `table` element to display the data in a tabular form. The 
`thead` and `tbody` elements are used  to  define the header and body of the table,
respectively. We are using the `map` function to iterate over the `users` array and display
each user's data in a row of the table.


#
Task 3: Creating an interactive modal popup
#
The final task is to create an interactive modal popup that displays additional information
about a user when the user clicks on a  row in the table. Here's how you can do it:

-->



<------------------------------------------------------------------------------------------------------------>
Step 1: Importing Dependencies

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Modal, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './redux/actions';

Here we are importing necessary dependencies like React, axios, react-bootstrap, and Redux dependencies like useDispatch and useSelector. We are also importing the `fetchUsers` action from the actions file.


Step 2: Creating a Functional Component

function App() {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({});

  const dispatch = useDispatch();
  const users = useSelector(state => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

Here, we are creating a functional component called `App` `using` the `function` keyword.
Inside the component, we are creating two state variables `show` and `user` using the
useState hook. We are also using `useDispatch` and `useSelector` hooks provided by Redux 
to dispatch actions and access state respectively. The users variable holds the state of 
the users data which we get from the Redux store.

We also have an `useEffect` hook which runs when the component is mounted. Inside this,
we are dispatching the `fetchUsers` action which makes an API call to the specified 
endpoint to get user data.


Step 3: Creating Table Header and Body

  const renderTableHeader = () => {
    let header = Object.keys(users[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  const renderTableData = () => {
    return users.map((user) => {
      const { id, name, username, email } = user;
      return (
        <tr key={id} onClick={() => handleShow(user)}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{username}</td>
          <td>{email}</td>
        </tr>
      )
    })
  }


Here, we have created two functions: `renderTableHeader` and `renderTableData`.
The `renderTableHeader` function renders the table header row by getting the
keys of the first `user` object in the users array and returning table headers
with the key names.

The `renderTableData` function renders the table data by looping through each `user` 
object in the users array and returning a table row for each object. It also sets the `onClick`
handler to the handleShow function which is called when a user clicks on a row.


Step 4: Creating a Modal Popup

`handleClose` is a function that sets the `show` state to false when called,
 which is used to close the modal when the user clicks the close button or outside the modal.

`handleShow` is a function that takes a `user` object as an argument and sets the `show` state
 to true and the `user` state to the selected user, which is used to display the detailed
information in the modal.

The component returns a `div` with the class name `App`, which contains a table and a modal.
The table is created using the `Table` component from react-bootstrap and includes a header 
row and a body with data rows rendered using the `renderTableData` function. The header row 
is rendered using the `renderTableHeader` function.

The `modal` is created using the Modal component from react-bootstrap and is conditionally 
rendered based on the `show` state. The `onHide` prop is set to the `handleClose` function 
to close the modal when the user clicks the close button. The modal contains a header with 
the title "User Info" and a body with detailed information about the selected user, including 
their address, phone, and website.

In the modal body, the user's address is displayed using string interpolation to concatenate the
`street`, `city`, and `zipcode` properties of the `user.address` object. The `phone` and `website`
are displayed using the phone and website properties of the `user` object, respectively. The `strong` 
tag is used to emphasize the labels for each piece of information.

<------------------------------------------------------------------------------------------------------------>
