import './App.css';
import Content from './Content';
import {Routes ,BrowserRouter,Route} from 'react-router-dom'
import Test from './Test';

function App() {
  return (
    <BrowserRouter basename='/GitReactRouterTest' >
      <Routes>
        <Route path='/' element={<Content />} />
        <Route path='/hi' element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
