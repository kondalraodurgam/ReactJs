function Person(props) {
    return (
        <div class = "person">
      <h1>{props.name}</h1>
      <p> Your age : {props.age}</p>
    </div>
    )
}
var app = (
    <div>
    <Person name = "Kondal" age = "25"/>
    <Person name = "Ammulu" age = "16"/>
  </div>
);

ReactDOM.render(app,
    document.querySelector('#my-app'));