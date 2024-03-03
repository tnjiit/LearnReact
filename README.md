# LearnReact

Walking through coding examples of LearnReact

## 03/03/2024

1. Redux works on the principal of:
    1. store
    1. actions
    1. reducer
1. actions -> reducer -> updates state
1. To integrate redux in react:
    1. npm install redux
    1. npm install react-redux
    1. Store is the keeper of state
        ```
        store = redux.createStore(reducer);
        ```
    1. reducer is implemented as function that is: 
            ``` 
            function reducer(state, action) {
                // reducer can not mutate state object. It must return a new state.
                // action must have a parameter: type -> action.type
                // return NEW_STATE;
            }
            ```
    1. Provider wraps the main app and contains store:
            ```
            ReactDOM.render(
                <react-redux.Provider store={store}>
                    <App/>
                <react-redux.Provider>,
                ...
            )
            ```
    1. Actions are mapped as 3 things:
        1. mapStateToProps(state) which maps currrent store state to props
            ```
            function mapDispatchToProps(state) => {return PROP_STATE object};
            ```
        1. mapDispatchToProps(dispatch_functor) which returns a key-value pair of ```action-object: dispatch call```
            ```
            mapDispatcToProps(dispatch_functor) => {return PROP_DISPATCH object}
            ```
        1. A react connect higher order component (HOC):
            ```
            hoc = react-redux.connect(mapStateToProps, mapDispatchToProps)(<YOUR_REACT_COMPONENT>)
            ```
        1. YOUR_REACT_COMPONENT will have in props:
            1. this.props.<members of PROP_STATE objects>
            1. this.props.<members of PROP_DISPATCH object>
        1. Basically:
            1. The PROP_DISPATCH keys are methods that YOUR_APP can call on events.
            2. This via the mapDispatchToProps calls dispatch(REDUX_ACTION). dispatch is set by react-redux.
            3. The REDUX_ACTON goes to REDUX_STORE.reducer
            4. REDUX_STORE.reducer generates a new state for REDUX_STORE
            5. YOUR_APP gets new state as this.props.PROP_STATE_KEY

## 02/22/2024

1. There are 2 options to make a React Webpage:
    1. Let the browser (client) convert JSX to JS at runtime - Slower but less ramp.
        To do this, we need to add the following scripts in the index.html:

            <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
            <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
            <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>

    2. Convert the JSX to JS and only commit the JS code:

            npm install -g create_react_app
            create_react_app <APP>
            // index.html must go in <APP>/public folder
            // index.js and index.css must go in <APP>/src folder
            npm start <- Runs the test server
            npm build run <- Transpiles and generates final html and js files in <APP>/build directory

2. To get data from outside the app:

        componentDidMount(prevProp, prevState) {
            let xhr = new XMLHttpRequest("<HTTP_VERB>", "https://address", true);
            xhr.addEventListener("readystatechange", <EventHandler>, <trueForPropogate>);
            xhr.send();
        }

        <EventHandler> (event) {
            if (xhr.readyState === 4 && xhr.status === 200) {
                let response = JSON.parse(xhr.responseText);
            }
        }

## 02/21/2024

1. If you want to supply something from html to React Component:ref
2. ReactDOM.createPortal(<APPENDING_JSX>, element) Vs ReactDOM.render(<REPLACING_JSX>, element)

## 02/19/2024

1. Component Lifecycle
    1. Initial Rendering Phase:
        1. Default Props
        2. Get State (constructor)
        3. componentWillMount() <- Do not call setState
        4. render()
        5. componentDidMount()
    2. Updating Phase:
        1. State Update:
            1. shouldComponentUpdate(newProp, newState)
            2. componentWillUpdate(newProp, newState) <- Do not call setState
            3. render()
            4. componentDidUpdate(prevProp, prevState)
        2. Prop Update:
            1. componentWillRecieveProps(newProp)
            2. shouldComponentUpdate(newProp, newState)
            3. componentWillUpdate(newProp, newState)
            4. render()
            5. componentDidUpdate(prevProp, prevState)
    3. Unmounting Phase:
        1. componentWillUnmount()

## 02/18/2024

1. State handling with React.
    - In the constructor, setup this.state
    - In the constructor, bind this to the relevant methods.
    - Call setState somewhere
    - React Component offers componentDidMount when the Component was rendered first.
2. When creating dynamic list of React.Component:
    - Make sure you setup key attribute with a unique identifier.
    - Special attributes like key, ref do not get passed down to children in the props object.

3. Events in React
    - Events can not be defined on React Components.
    - Events need to be defined on the HTML children
    - addEventListener and removeEventListener needs to be called on componentDidMount and componentWillUnmount.
    - In JS, this in event handler points to the source on which the event listener was bound: source.addEventListener(event, handler, capture/bubble);
    - In React, this is undefined unless you do: this.handler = this.handler.bind(this); in the constructor of the component. Then this refers to the ReactComponent: window.addEventListener(event, this.handler, capture/bubble);
    - In React, event passed to Event Handler is of SyntheticEvent type that is a React Library object and not the Javascript event type.

## 02/16/2024

1. this.props in the React Component allows access to:
    - Parameters passed in the tags.
    - children - Components within the tags.

## 02/15/2024

This is me learning React by following the examples and steps listed in "Learning React" by Kirupa Chinnathambi.

Things I learnt today:

1. Single Page Applications (Modern) vs Multiple Page Applications.
2. Two ways to create React Apps:
  i.  Setup a Node development environment + build tools: Transcribe JSX to JS locally and then put them on the server - Faster.
  ii. Let the browser (client) convert JSX to JS at runtime - Slower but less ramp.
