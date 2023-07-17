//react-router
import { createBrowserRouter , createRoutesFromElements , Route , RouterProvider } from "react-router-dom"
//Layouts
import { TopBar } from './Layouts/TopBar'
//pages
import { Main , About , Contact } from './pages'

//router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element = {<TopBar />} >
      <Route index element = {<Main />}/>
      <Route path="about" element = {<About />}/>
      <Route path="contact" element = {<Contact />}/>
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
