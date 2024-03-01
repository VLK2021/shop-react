import {Routes, Route} from "react-router-dom";
import {Layout} from "./Layout";
import {ProductsList, SearchProducts} from "./pages";


function App() {
    return (
        <main>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<ProductsList/>}/>
                    <Route path={'?q=:q'} element={<SearchProducts/>}/>
                </Route>
            </Routes>
        </main>
    );
}

export {App};
