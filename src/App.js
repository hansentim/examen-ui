import { Route, Routes, useLocation } from 'react-router-dom';
//Components
import Home from './pages/Home';
import Form from './pages/Form';
import EndPage from './pages/Endpage';
//Styles
import GlobalStyles from './components/GlobalStyles';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyles />
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/thanks" element={<EndPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
