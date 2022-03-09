# React Coding Sample

In this repository, you'll find some setup code for a basic react project. The purpose of this exercise is just to get a feel for your personal coding styles and preferences.

## Files

There are a few key files you might want to look at to complete this project:

- `src/containers/RootContainer/register.js` contains the main Switch that will decide which components to load
- `src/js/middlewares/userMiddleware.js` contains a dummy `signUp` method that you'll use to simulate a network call
- `src/js/actions/userActions.js` contains a redux action called `signUpAction` that will invoke the `signUp` middleware, as well as a brief description of what the payload should look like

Other than these files, please feel free to edit anything you think is necessary, or create as many components/containers as you'd like - we want to see how you would build this page as if you are starting the foundations of a larger app. If there is something you'd like to do but feel would take too much time, feel free to comment what you would do differently and explain your thought process.

## Task

Your task is to create a simple sign up flow. We are looking primarily at code style and architecture - we won't look at the visual UI at all (as long as it works). There are a few required fields:

- Email input
- Password input
- Confirm Password input
- First Name input
- Last Name input
- Terms & Conditions checkbox

In addition, there are some requirements for form submission:

- Password must match Confirm Password field
- Terms & Conditions must be checked
- All other inputs must not be empty

## Interactions

Invoking the dummy `signUp` method mentioned earlier has a couple possible outcomes. Here are the interactions we'd like to see handled properly:

- Calling the `signUp` method will set `isSignUpLoading` to `true` in the redux state for 5 seconds. After the method completes, this property will be set to false. We would like to see some visual indication when sign up is loading
- Passing all of the required fields including an email address other than "testuser@gmail.com" will result in a dummy user being added to the redux state. This should result in a success message of some sort being displayed
- Signing up with the email "testuser@gmail.com" will result in an error that this email is already in use, and should result in the error message being displayed and the email field somehow highlighted

All changes to the redux state are logged to the console in development, so you can take a look there to see what it looks like and get a sense of how to handle it. Please feel free to reach out with any clarifying questions as well.

## Commands

This project was created with `create-react-app`, so to compile and run the development server please run `yarn start`. This should result in a "Hello, World" page opening up in your browser - ready to be replaced by your sign up flow. If you have any issues/questions, please don't hesitate to ask!
