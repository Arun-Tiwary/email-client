import "./App.css";
import EmailBody from "./Components/EmailBody/emailBody";
import Filters from "./Components/Filters/filter";

function App() {
  return (
    <div className="App">
      <Filters />
      <EmailBody />
    </div>
  );
}

export default App;
