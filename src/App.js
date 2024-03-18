import Home from "./Pages/Home/Home.jsx"
import {Routes ,Route, BrowserRouter} from 'react-router-dom'
import Login from "./Pages/Login/LoginPage.jsx"
import Teachers from "./Pages/Teachers/TeachersPage.jsx"
import Classroom from "./Pages/Classroom/Classroom.jsx"

function App() {

  return (
    <>
      <BrowserRouter basename="/GitReactRouterTest">
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/student/:id' element={<Home />} />
            <Route path='/login/:role' element={<Login />} />
            <Route path='/teacher/:id' element={<Teachers />} />
            <Route path={'/classroom'} element={<Classroom />} />
            <Route path={'/classroom/:sem'} element={<Classroom />} />
            <Route path={'/classroom/:sem/:sub'} element={<Classroom />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
