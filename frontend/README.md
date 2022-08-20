# Starting a new e-commerce site with Brad Traversy Udemy Course

First we setup our enviroment.
We need Node.Js installed.

I'll be using VSC as the editor - with standard React Extensions.
Also going forward we'll need Postman - for testing backend endpoints.

## Create-react-app and basic cleanup

Created a folder for the project.
For the frontend we will use `create-react-app` and call our project _frontend_.
This way we can also create _backend_ folder that we'll use
Deleted files we didn't need: icon.svg, app.css, all the test files etc.
Moved _.gitignore_ file from frontend to project folder

## Bootstrap

Installed react-bootstrap using `npm install react-bootstrap` and used
_bootswatch_ CDN to create bootstrap.min.css to import to our src folder.

## Starting Frontend

Created Footer and Header Components, imported them to App.js file and displayed them on screen.
Also created HomeScreen page/screen
Created Product Component to be displayed on home screen

# Implementing React Router

React Router is a library that allows us to create navigation between pages. I've used Router on HomeScreen Component.

(Note to self: in the newest React Router we use element, not component, and in there we have to put the full component like this `element={<HomeScreen/>}`).

## Implementing React Router to Header Component

Used `<LinkContainer>` from react-router-bootstrap wrap Links in Navbar.

## Working on Product Component

Started implementing product component. New feature of react-router is that we cant use `match.params` anymore.(or history and location)
`useParams` is the new way to get these params
