

import './App.css'
import CreateTest from './components/CreateTest'
import Sidebar from './components/Sidebar'
// import Home from './pages/Home/Home'
// import SignUp from './pages/Signup.jsx/Signup'

function App() {
  

  return (
    <>
    {/* <Home/> */}
    {/* <SignUp/> */}
    <div className='bg-white'>
    <Sidebar/>
    <CreateTest/>
    </div>
    </>
  )
}

export default App
