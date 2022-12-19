import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CreateTask } from "../components/create-task";
import { Navbar } from "../components/nav-bar";
import { TodoList } from "../components/todo-list";
import { UpdateTask } from "../components/update-task";

function App() {
  return (
    <Router>
      <Box>
        <Navbar />
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/create" element={<CreateTask />} />
          <Route path="/edit" element={<UpdateTask />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
