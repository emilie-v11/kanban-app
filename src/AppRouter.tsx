import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import KanbanBoard from './components/KanbanBoard/KanbanBoard';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<KanbanBoard />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
