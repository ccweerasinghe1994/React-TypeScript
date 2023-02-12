# React-TypeScript


- [React-TypeScript](#react-typescript)
  - [Types Around Props and State](#types-around-props-and-state)
    - [1. Changes with TypeScript](#1-changes-with-typescript)
    - [2. The Big Difference with Props](#2-the-big-difference-with-props)
    - [3. Explicit Component Type Annotations](#3-explicit-component-type-annotations)
    - [4. Annotations with Children](#4-annotations-with-children)
    - [5. State with TypeScript](#5-state-with-typescript)
    - [6. Type Inference with State](#6-type-inference-with-state)
    - [7. Quick Finish to the Example](#7-quick-finish-to-the-example)
    - [8. More on State](#8-more-on-state)
  - [Types Around Events and Refs](#types-around-events-and-refs)
    - [1. Inline Event Handlers](#1-inline-event-handlers)
    - [2. Typing Standalone Event Handlers](#2-typing-standalone-event-handlers)
    - [3. Handling Drag Events Too!](#3-handling-drag-events-too)
    - [4. TypeScript with Class Components](#4-typescript-with-class-components)
    - [5. Applying Types to Refs](#5-applying-types-to-refs)
    - [6. More on Refs](#6-more-on-refs)
  - [Typescript with Redux](#typescript-with-redux)
    - [1. App Overview](#1-app-overview)
    - [2. Project Setup](#2-project-setup)
    - [3. Redux Store Design](#3-redux-store-design)
    - [4. Reducer Setup](#4-reducer-setup)
    - [5. Annotating the Return Type](#5-annotating-the-return-type)
    - [6. Typing an Action](#6-typing-an-action)
    - [7. Separate Interfaces for Actions](#7-separate-interfaces-for-actions)
    - [8. Applying Action Interfaces](#8-applying-action-interfaces)
    - [9. Adding an Action Type Enum](#9-adding-an-action-type-enum)
    - [10. A Better Way to Organize Code](#10-a-better-way-to-organize-code)
    - [11. Adding Action Creators](#11-adding-action-creators)
    - [12. Adding Request Logic](#12-adding-request-logic)
    - [13. Applying Typings to Dispatch](#13-applying-typings-to-dispatch)
    - [14. Setting Up Exports](#14-setting-up-exports)
    - [15. Wiring Up to React](#15-wiring-up-to-react)
    - [16. Oops... Initial State!](#16-oops-initial-state)
    - [17. Reminder on Event Types](#17-reminder-on-event-types)
    - [18. Calling an Action Creator](#18-calling-an-action-creator)
    - [19. Binding Action Creators](#19-binding-action-creators)
    - [20. Selecting State](#20-selecting-state)
    - [21. Awkward Typings Around React-Redux](#21-awkward-typings-around-react-redux)
    - [22. Creating a Typed Selector](#22-creating-a-typed-selector)
    - [23. Consuming Store State](#23-consuming-store-state)
    - [24. Quick Wrapup](#24-quick-wrapup)
  - [The Big App - Here's What We're Building!](#the-big-app---heres-what-were-building)
    - [1. App Overview](#1-app-overview-1)
    - [2. Three Big Challenges](#2-three-big-challenges)
  - [Code Transpiling in the Browser](#code-transpiling-in-the-browser)
    - [1. Transpiling Options](#1-transpiling-options)
    - [2. Remote Transpiling.mp4](#2-remote-transpilingmp4)
    - [3. Module Systems](#3-module-systems)
    - [4. Behind the Scenes with Webpack](#4-behind-the-scenes-with-webpack)
    - [5. Webpack with ES Modules](#5-webpack-with-es-modules)
    - [6. One Small Change](#6-one-small-change)
    - [7. Options for Bundling](#7-options-for-bundling)
    - [8. So Which Approach](#8-so-which-approach)
    - [9. A Webpack Replacement](#9-a-webpack-replacement)
  - [Implementing In-Browser Bundling](#implementing-in-browser-bundling)
    - [1. A Demo App](#1-a-demo-app)
    - [2. Project Setup](#2-project-setup-1)
    - [3. Basic Form Elements](#3-basic-form-elements)
    - [4. Understanding ESBuild](#4-understanding-esbuild)
    - [5. Initializing ESBuild](#5-initializing-esbuild)
    - [6. Using Refs for Arbitrary Values](#6-using-refs-for-arbitrary-values)
    - [7. Transpiling Works!](#7-transpiling-works)
    - [8. Troubles with Bundling in the Browser](#8-troubles-with-bundling-in-the-browser)
    - [9. Issues with NPM](#9-issues-with-npm)
    - [10. Solution with Unpkg](#10-solution-with-unpkg)
    - [11. Demo ESBuild Plugin](#11-demo-esbuild-plugin)
    - [12. ESBuild Can Bundle!](#12-esbuild-can-bundle)
    - [13. Deep Dive on Bundling](#13-deep-dive-on-bundling)
    - [14. Filters and Namespaces](#14-filters-and-namespaces)
    - [15. Adding a Tiny Test Package](#15-adding-a-tiny-test-package)



## Types Around Props and State

### 1. Changes with TypeScript
![](img/1.png)
![](img/2.png)

there are several ways of adding props type to a react component

### 2. The Big Difference with Props
Child
```tsx
interface ChildProps {
    color:string;
}
export const Child = ({color}:ChildProps)=>(
    <div>
        <div>{color}</div>
        <button ></button>
    </div>
)
```
Parent
```tsx
import {ChildAsFC} from './child'
const Parent = ()=>{
    return(
        <ChildAsFC color='red' >
            this is children
        </ChildAsFC>
    )
}

export default Parent;
```
### 3. Explicit Component Type Annotations
![](img/3.png)
let's check the second way
```tsx

export const ChildAsFC:React.FC<ChildProps>=({color,onClick})=>{
  return    <div>
        <div>{color}</div>
        <button onClick={onClick} ></button>
    </div>
}
```
there are few benefits to doing the types

![](img/4.png)

### 4. Annotations with Children
let's add a function to the interface and Component

Child
```tsx
import React from "react"

interface ChildProps {
    color:string;
    onClick:()=>void
}
export const Child = ({color,onClick}:ChildProps)=>(
    <div>
        <div>{color}</div>
        <button onClick={onClick} ></button>
    </div>
)

export const ChildAsFC:React.FC<ChildProps>=({color,onClick})=>{
    return    <div>
        <div>{color}</div>
        <button onClick={onClick} ></button>
    </div>
}


```
Parent

```tsx
import {ChildAsFC} from './child'
const Parent = ()=>{
    return(
        <ChildAsFC onClick={()=>{console.log(
            "clicked"
        );
        }} color='red' >
            this is children
        </ChildAsFC>
    )
}

export default Parent;
```
### 5. State with TypeScript
sample project we are going to build
![Alt text](img/5.png)
### 6. Type Inference with State
### 7. Quick Finish to the Example
we have to add type to useState if the initial value will not help to infer the type
```tsx
const [guestList,setGuestList] = useState<string[]>([])
```

### 8. More on State
we are going to add this functionality

![Alt text](img/7.png)


```tsx
import { useState } from "react";
import {
  CustomButton,
  CustomInput,
  ErrorContainer,
  Header,
  ListContainer,
  Wrapper,
} from "./guest-list.styles";
// user data
export const usersData = [
  {
    name: "a",
    age: 20,
  },
  {
    name: "b",
    age: 20,
  },
  {
    name: "c",
    age: 20,
  },
  {
    name: "d",
    age: 20,
  },
];
const FindUser: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();
  const onClick = () => {
    console.log(name);

    const foundUser = usersData.find(
      (user) => user.name === name.toLowerCase()
    );
    console.log(foundUser);

    setUser(foundUser);
  };

  return (
    <Wrapper>
      <Header>Find User</Header>
      <CustomInput value={name} onChange={(e) => setName(e.target.value)} />
      <CustomButton onClick={onClick}>find user</CustomButton>

      <ListContainer>
        {user !== undefined ? (
          <>
            <li>name : {user.name}</li>
            <li>age : {user.age}</li>
          </>
        ) : (
          <ErrorContainer>canto find the specified user</ErrorContainer>
        )}
      </ListContainer>
    </Wrapper>
  );
};

export default FindUser;
```
![Alt text](img/6.png)

## Types Around Events and Refs
### 1. Inline Event Handlers
### 2. Typing Standalone Event Handlers
### 3. Handling Drag Events Too!
### 4. TypeScript with Class Components
### 5. Applying Types to Refs
### 6. More on Refs

## Typescript with Redux
### 1. App Overview
### 2. Project Setup
### 3. Redux Store Design
### 4. Reducer Setup
### 5. Annotating the Return Type
### 6. Typing an Action
### 7. Separate Interfaces for Actions
### 8. Applying Action Interfaces
### 9. Adding an Action Type Enum
### 10. A Better Way to Organize Code
### 11. Adding Action Creators
### 12. Adding Request Logic
### 13. Applying Typings to Dispatch
### 14. Setting Up Exports
### 15. Wiring Up to React
### 16. Oops... Initial State!
### 17. Reminder on Event Types
### 18. Calling an Action Creator
### 19. Binding Action Creators
### 20. Selecting State
### 21. Awkward Typings Around React-Redux
### 22. Creating a Typed Selector
### 23. Consuming Store State
### 24. Quick Wrapup

## The Big App - Here's What We're Building!
### 1. App Overview
### 2. Three Big Challenges

## Code Transpiling in the Browser

### 1. Transpiling Options 
### 2. Remote Transpiling.mp4
### 3. Module Systems
### 4. Behind the Scenes with Webpack
### 5. Webpack with ES Modules
### 6. One Small Change
### 7. Options for Bundling
### 8. So Which Approach
### 9. A Webpack Replacement

## Implementing In-Browser Bundling
### 1. A Demo App
### 2. Project Setup
### 3. Basic Form Elements
### 4. Understanding ESBuild
### 5. Initializing ESBuild
### 6. Using Refs for Arbitrary Values
### 7. Transpiling Works!
### 8. Troubles with Bundling in the Browser
### 9. Issues with NPM
### 10. Solution with Unpkg
### 11. Demo ESBuild Plugin
### 12. ESBuild Can Bundle!
### 13. Deep Dive on Bundling
### 14. Filters and Namespaces
### 15. Adding a Tiny Test Package