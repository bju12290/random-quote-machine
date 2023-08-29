# Random Quote Machine

## Usage

You can play with the application yourself at [this link](https://bju12290.github.io/random-quote-machine/). **Note: Due to reliance on CORS Anywhere, you'll have to complete a challenge to temporary unlock the demo for your browser. You can do so by visiting [this link](cors-anywhere.herokuapp.com) and clicking the button.**

This application simply requests quote data from the [Quotable API](https://api.quotable.io/), and then displays a quote as well as the author on screen.

You can get a new quote by clicking the "New Quote" button, and you can share the quote as well as the author to twitter by clicking the "Tweet This" button.


## Visuals


## Technologies Used
 - [Vite](https://vitejs.dev/): A build tool that offers fast development and optimized production builds for modern web applications.
 - [React](https://react.dev/): A JavaScript library for building user interfaces, allowing for the creation of dynamic and interactive components.
 - [Bootstrap](https://getbootstrap.com/): A front-end framework that provides pre-designed UI components and responsive layout utilities.

 ## Project Structure
- **'src/'**: At the heart of the application, the **'src/'** directory houses various project assets, the **index.jsx** file for routing, the **App.jsx** component for high-level structure definition, and the **index.css** file for application-wide styling.
   - **'components/'** : This directory serves as a container for reusable components that are used throughout the application (in this minimal example there is only one, so this is arguably unecessary. I structured the project this way to keep future development simpler.)

 #### Contact Information

Feel free to contact via email! 

```brian.phartnettjr@gmail.com```
 #### Known Issues
 
 - There's no handling in place for getting the same background color twice in a row.
 - Reliant on [CORS Anywhere](https://github.com/Rob--W/cors-anywhere), so there is a limit on data requests.

 #### Project Goals

- Randomly display a quote and author from an API:white_check_mark:
- Create a button for users to request a new quote:white_check_mark:

#### Additional Challenges

- Change the background color, text color, button color, and box shadow color with each new quote displayed. :white_check_mark:



 

