import initializeAuthentication from "./Components/Firebase/firebase.initial";
import Login from "./Components/Login/Login";

initializeAuthentication();

function App() {
  return (
    <div className="App">
      <Login></Login>
    </div>
  );
}

export default App;
