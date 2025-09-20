import DefaultLayout from "./layouts/DefaultLayout"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviesListPage from "./pages/MoviesListPage";
import DetailMoviePage from "./pages/DetailMoviePage";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout/>}>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/movies">
              <Route index element={<MoviesListPage/>}></Route>
              <Route path=":id" element={<DetailMoviePage/>}></Route>
            </Route>
          </Route>  
        </Routes>     
      </BrowserRouter>
    </>
  )
}

export default App
