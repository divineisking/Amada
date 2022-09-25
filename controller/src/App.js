import './App.css';
import Person from "./components/personCard"


function App() {
  /*const bdlist = Data.map(function(person, index){
    return <Person key={index} persons={person} />
  })*/
  return (
    <div className="App">
      <h1>
        Birthday Card
      </h1>
      <Person />
    </div>
  );
}

export default App;
