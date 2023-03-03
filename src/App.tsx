import AuthProvider from "./context/AuthContext";
import { RoutesMain } from "./Routes";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
    </div>
  );
}

export default App;
