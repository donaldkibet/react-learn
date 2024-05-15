import "./App.css";
import Counter from "./Counter";
import ItemList from "./ItemList";

function App() {
  return (
    <div className="App">
      <Counter initialCount={0} />
      <ItemList />
    </div>
  );
}

export default App;
