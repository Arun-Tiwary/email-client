import "./App.css";
import EmailList from "./Components/EmailList/emailList";

// import EmailCard from "./Components/EmaiilCard/emailCard";
// import EmailList from "./Components/EmailList/emailList";
import Filters from "./Components/Filters/filter";
import ContextPovider from "./context";

function App() {
  return (
    <div className="App">
      <ContextPovider />
      <Filters />

      <EmailList />
      {/* <EmailCard /> */}
      {/*
      <EmailBody /> */}
    </div>
  );
}

export default App;
