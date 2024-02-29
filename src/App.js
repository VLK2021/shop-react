import {Routes, Route} from "react-router-dom";
import {Layout} from "./Layout";
import {ProductsList} from "./pages";



function App() {
    return (
        <main>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<ProductsList/>}/>

                </Route>
            </Routes>
        </main>
    );
}

export {App};
