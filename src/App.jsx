//react-router
import { createBrowserRouter , createRoutesFromElements , Route , RouterProvider } from "react-router-dom"
//Layouts
import { TopBar } from './Layouts/TopBar'
//pages
import { Main , About , Contact , ProductDetails } from './pages'
//Loaders
import { productsLoader } from './pages/Main'
//router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element = {<TopBar />} >
      <Route index element = {<Main />} loader={ productsLoader } />
      <Route path="about" element = {<About />}/>
      <Route path="contact" element = {<Contact />}/>
      <Route path="products/:id" element = {<ProductDetails />} />
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
