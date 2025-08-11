# Learning React by Akshay Saini

# parcel 
- Dev Build
- Local Server
- HMR - Hot Module Replacement (autorefresh the page)
- File Watching Algorithm - written in c++
- Caching - Faster Builds
- Image Optimization
- Minification  
- Bundling and compress for production build
- Content hashing
- Code splitting
- Differential Bundling (older browser support & for different types of system)
- Diagnostic behind the scenes
- Error Handling 
- Way to host on https configuration
- Tree Shaking - remove unused code for you
- Different Builds (bundle) for Different Env 

# Namaste Food
/**

Header
Logo
Nav Items
Body
Search
RestaurantContainer
RestaurantCard
 - Img
 - Name of Res, Star Rating, cuisine, delery tie
Footer
Copyright
Links
Address
Contact 

**/
Two types of Export/Import

Default Export/Import
export default Component; import Component from "path";

Named Export/Import
export const Component; import {Component} from "path";

# React Hooks
(Normal JS utility functions)

useState() - Superpowerful State Variables in react
useEffect()

# 2 types Routing in web apps
Client Side Routing
Server Side Routing - gives html as reponse 

# Redux Toolkit
Install @reduxjs/toolkit and react-redux
Build our store
Connect our store to our app
Slice (cartSlice)
dispatch(action)
Selector

# Types of testing (devloper)
Unit Testing
Integration Testing
End to End Testing - e2e testing

# Setting up Testing in our app
Install React Testing Library
Installed jest
Installed Babel dependencies
Configure Babel
Configure Parcel Config file to disable default babel transpilation
Jest - npx jest --init
Install jsdom library
Install @babel/preset-react (npm i -D @babel/preset-react) - to make JSX work in test cases
--Include @babel/preset-react inside my babel config file
npm i -D @testing-library/jest-dom