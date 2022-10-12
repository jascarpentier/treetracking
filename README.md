
# Table of Contents

- [Project Description](#project-description)
  - [Collaborators](#collaborators)
- [Design](#design)
- [Development](#development)
  - [Functional Goals](#functional-goals)
    - [MVP](#mvp)
    - [Post-MVP](#post-mvp)
    - [User Stories](#user-stories)
  - [Functional Heirarchy](#functional-heirarchy)
    - [Repo Structure](#repo-structure)
  - [Functional Components](#functional-components)
    - [Component Breakdown](#component-breakdown)
    - [Component Timeframes](#component-timeframes)
    - [Helper Functions](#helper-functions)
  - [Supporting Libraries](#supporting-libraries)
  - [Conventions](#conventions)
- [Project Review](#project-review)
  - [Code Showcase](#code-showcase)
  - [Bugs, Issues, and Resolutions](#issues-&-resolutions)
- [Project Followup](#project-followup)

# Project Overview

Tree tracking App is a web application where users can add the trees they are planting on their property, and include sprcific such as type of tree, age of tree and date planted.

Users can also edit and delete the information they have added to the list. 

### Collaborators
* [Jasmine Carpentier](https://github.com/jascarpentier)

# Design 



# Development

## Functional Goals

### MVP 

Users will be able to add data to the list, including their full name, address, type of tree planted, age of tree and date planted. 


### POST MVP

- Addind registration, login, and logout 
- Adding reporting for aggredated data of the types of tree, age and other data about the tree
- Implement custom fields that the user can add different data about their tree
- Adding a map API, so you can have a map view of where all the trees are planted
- Add persistence (permanent data storage). What data storage platform did you use? Why?

## User Stories 
 * I'm a goverment worker for the city and I want to check on how the tree planting initiative is going.
 * I'm a citizen of the city, that wants to participate and log the trees I have planted on my property.
 * I'm an enviromentalist who wants to do more research of how well a certain city is doing in terms of adding more green and trees to their city

## Functional Heirarchy

## Functional Components

```
    |___ Enter Page
         |___ Sign-up Form
         |___ Login Form

    |___ Header
    |___ Hero
    |___ Menu
         |___ Home
         |___ Tree planting data of my city
         |___ My Profile

    |___ My Profile Page
      
    |___ My personal tree planting data

    |___ My cities tree planting statistics

    |___ Footer 

```

### ERD



### Supporting Libraries

* React
* Express

### Git

#### Branching

Open terminal to your development branch; pull to ensure most recent merge.
> git pull origin development

Next, create your new branch from your updated development branch:
> git checkout -b {initials}-{branch type}-{component} development
> git push --set-upstream origin {initials}-{branch type}-{component}

Now, proceed to work on your component; add/commit as necessary:
> git add .
> git commit -m "{Message}"

#### Merging

Once you're ready to merge, confirm again that you have the most recent development branch updates:
> git pull origin development

Then proceed to GitHub, submit a new Pull Request. Confirm comparison is:
> from Development to {Your Branch}

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

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

# Tree tracking Application

This is the central repo for the tree tracking app. Where the city has access to a list information about trees planted on their citizens property.


#### Component Structuring & Naming

```
<div className="header">
  <div className="secondaryNav">

  </div>
  <div className="primaryNav">

  </div>
</div>
```
# issues-&-resolutions