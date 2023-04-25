import "./App.scss"; ///global

import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";
import { TodoContent } from "./components/Todo/TodoContent";

function App() {
  
  



  return (
    <div className="container">
     
      <Header/>
  
      <Sidebar/>
     
      <TodoContent/>
      
    </div>
  );
}

export default App;
