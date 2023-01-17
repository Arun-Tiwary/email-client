import "./App.css";
import EmailBody from "./Components/EmailBody/emailBody";
import Filters from "./Components/Filters/filter";
import ContextPovider from "./context";

function App() {
  return (
    <div className="App">
      <ContextPovider />
      <Filters />
      <EmailBody />
    </div>
  );
}

export default App;
