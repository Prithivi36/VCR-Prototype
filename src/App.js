import './App.css';
import Content from './Content';
import {Routes ,HashRouter,Route} from 'react-router-dom'
import Test from './Test';

function App() {
  return (
    <HashRouter basename='/GitReactRouterTest'  >
      <Routes>
        <Route path='/' element={<Content />} />
        <Route path='/GitReactRouterTest/hi' element={<Test />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
