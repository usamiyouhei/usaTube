import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signin from "../src/pages/Signin";
import Signup from "../src/pages/Signup";
import Layout from "./Layout";
import Home from "./pages/Home";
import CreateVideo from './pages/CreateVideo';
import MyVideos from './pages/MyVideos';
import VideoDetail from './pages/VideoDetail';
import EditProfile from './pages/EditProfile';

function App() {
  

  return (
   <BrowserRouter>
    <Routes>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home />}/>
        <Route path='/create-video' element={<CreateVideo/>}/>
        <Route path='/my-videos' element={<MyVideos/>}/>
        <Route path='/videos/:id' element={<VideoDetail/>}/>
        <Route path='/edit-profile' element={<EditProfile/>}/>
      </Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
