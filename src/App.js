import './App.css';
import MainPageContainer from './commponents/mainPage/mainPageContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JobPageContainer from './commponents/JobPage/JobPageContainer';


function App(props) {
  return (
    <BrowserRouter basename='/AleannLabTask'>
      <div className="App">
        <Routes>
          <Route path='' element={<MainPageContainer />} />
          <Route path='/job/*' element={< JobPageContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
