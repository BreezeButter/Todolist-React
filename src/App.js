import "./App.scss";
import { FaHome } from "react-icons/fa";

function App() {
  return (
    <div className="container">
      {/* header */}
      <header className="header">
        <span>
          <FaHome />
        </span>
        <h3>todolist</h3>
      </header>
      {/* sidebar */}
      <aside className="sidebar">sidebar</aside>
      {/* content */}
      <main className="content">content</main>
    </div>
  );
}

export default App;
