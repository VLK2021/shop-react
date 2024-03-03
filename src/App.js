import {Routes, Route} from "react-router-dom";
import {Layout} from "./Layout";
import {ProductsList, SearchProducts, SingleProduct} from "./pages";


function App() {
    return (
        <main>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<ProductsList/>}/>
                    <Route path={':id'} element={<SingleProduct/>}/>
                    <Route path={'search/:q'} element={<SearchProducts/>}/>
                </Route>
            </Routes>
        </main>
    );
}

export {App};
