import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//Components
import Home from './pages/Home';
import Form from './pages/Form';

//Styles
import GlobalStyles from './components/GlobalStyles';

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
