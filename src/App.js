import './App.css';
import Content from './Content';
import {Routes ,BrowserRouter,Route} from 'react-router-dom'
import Test from './Test';

function App() {
  return (
    <BrowserRouter basename='/GitReactRouterTest' >
      <Routes>
        <Route path='/hi' element={<Content />} />
        <Route path='*' element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
