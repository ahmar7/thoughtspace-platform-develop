import React from "react";
import HomePage from "./Pages/HomePage";
import SearchPage from "./Pages/SearchPage";
import SearchResults from "./Pages/SearchResults";
import SearchResultBlue from "./Pages/SearchResultblue";
import HomePageOutlet from "./Components/HomePage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [values, setValues] = React.useState("");
  return (
    <div className="App">
       <Router>
            <Routes>
                <Route path='/' element={<HomePageOutlet />} >
                    <Route path='/' element={<SearchPage setValues={setValues} values={values} />} />
                    <Route path=':slug' element={<SearchResults setValues={setValues} values={values} />} />
                </Route>
            </Routes>
        </Router >
    </div>
  );
}

export default App;
