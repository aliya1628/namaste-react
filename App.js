/**
 * <div id="parent"> 
 * <div id="child1">
 * <h1>I'm h1 tag</h1>
 * <h2>I'm h2 tag</h2>
 * </div> 
 * <div id="child2">
 * <h1>I'm h1 tag</h1> 
 * </div>
 * </div>
 */

const nestedElementWithSiblings = React.createElement("div", {id:"parent"},[
    React.createElement("div", {id:"child1"},[
        React.createElement("h1",{},"I'm h1 tag of child 1"),
        React.createElement("h2",{},"I'm h2 tag of child 1")
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h3",{},"I'm h3 tag of child 2"),
    ])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(nestedElementWithSiblings);