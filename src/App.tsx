import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cake from './pages/Cake';
import Memories from './pages/Memories';
import Letter from './pages/Letter';
import Wishes from './pages/Wishes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cake" element={<Cake />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/wishes" element={<Wishes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
