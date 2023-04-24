import "./App.scss";
import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";


function App() {
  return (
    <div className="container">
      {/* header */}
      <Header/>
      {/* sidebar */}
      <Sidebar/>
      {/* content */}
      <main className="content">content</main>
    </div>
  );
}

export default App;
