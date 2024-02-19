# LearnReact

Walking through coding examples of LearnReact

## 02/18/2024

1. State handling with React.
    - In the constructor, setup this.state
    - In the constructor, bind this to the relevant methods.
    - Call setState somewhere
    - React Component offers componentDidMount when the Component was rendered first.
2. When creating dynamic list of React.Component:
    - Make sure you setup key attribute with a unique identifier.
    - Special attributes like key, ref do not get passed down to children in the props object.

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
