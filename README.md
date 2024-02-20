# LearnReact

Walking through coding examples of LearnReact

## 0219/2024

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
