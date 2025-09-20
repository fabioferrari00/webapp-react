import DefaultLayout from "./layouts/DefaultLayout"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviesListPage from "./pages/MoviesListPage";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout/>}>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/movies" element={<MoviesListPage/>}></Route>
          </Route>  
        </Routes>     
      </BrowserRouter>
    </>
  )
}

export default App
