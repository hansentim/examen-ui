import { Route, Routes, useLocation } from 'react-router-dom';
//Components
import Home from './pages/Home';
import Test1 from './pages/Test1';
import Test2 from './pages/Test2';
import Test3 from './pages/Test3';
import EndPage from './pages/Endpage';
//Styles
import GlobalStyles from './components/GlobalStyles';
import { AnimatePresence } from 'framer-motion';

//Använd location.pathname för att ge Routes en unik key.
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyles />
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/test1" element={<Test1 />} />
          <Route path="/test2" element={<Test2 />} />
          <Route path="/test3" element={<Test3 />} />
          <Route path="/thanks" element={<EndPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;

//React "unmounts" vår komponent när vi går till en ny route så vår page transition animation fungerar inte. Då kan vi använda AnimatePrecense och det den gör är att kolla key för sina children och om key har ändrats väntar den med att unmounta komponenenterna innan exit animeringen/förändringen har skett. Efter animeringen skett mountar react komponenten till skärmen.
