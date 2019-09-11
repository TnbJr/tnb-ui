# A component library of common React components that I use in varies projects

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development.

### Installing

A step by step series of examples that tell you have to get a development env running

```
npm install
```

And repeat

```
npm start or npm run storybook
```


### Building
By default when you run npm run build any change to either a sass or js file will cause this project to rebuild

```
npm run build 
```

### How to use 
In order to use this project locally you need to run 
```
npm link tnb-ui
```

Also the you will need to import 'tnb-ui/src/stylesheets/_styles.scss'; into your local sass stylesheet

## Built With

* [Formik]
* [Sass]
* [react-tooltip]


## To Do
* Add stories for all components
* Create Unit test for all components
* Fix having to fix dev server when there is a issue with sass
