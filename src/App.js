import "./App.css";
import EmailList from "./Components/EmailList/emailList";
import Filters from "./Components/Filters/filter";

function App() {
  return (
    <div className="App">
      <Filters />
      <EmailList />
    </div>
  );
}

export default App;
