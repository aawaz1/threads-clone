
import { Container } from "@chakra-ui/react"
import { Navigate, Route, Routes } from "react-router-dom"
import Userpage from "./pages/Userpage"
import Postpage from "./pages/Postpage"
import Header from "./components/Header"
import Homepage from "./components/Homepage"
import Authpage from "./pages/Authpage"
import { useRecoilValue } from "recoil"
import userAtom from "./atoms/userAtom.js"
import UpdateProfilePage from "./pages/UpdateProfilePage.jsx"
import CreatePost from "./components/CreatePost.jsx"

function App() {
  const user = useRecoilValue(userAtom);
  console.log(user);
 

  return (
    <Container maxW="620px">
      <Header/>
      
     <Routes>
          <Route path='/' element={user ? <Homepage /> : <Navigate to='/auth' />} />       
					<Route path='/auth' element={!user ? <Authpage /> : <Navigate to='/' />} />
					<Route path='/update' element={user ? <UpdateProfilePage /> : <Navigate to='/auth' />} />

      <Route path="/:username" element={user ? (<><Userpage/> <CreatePost/> </>) : <Userpage/> } />
      <Route path="/:username/post/:pid" element={<Postpage/>} />
     </Routes>

     {/* {user && <LogoutButton/>} */}
    
    </Container>
  )
}

export default App
