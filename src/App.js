import {Routes, Route} from "react-router-dom";
import {Layout} from "./Layout";



function App() {
    return (
        <main>
            <Routes>
                <Route path={'/'} element={<Layout/>}>

                </Route>
            </Routes>
        </main>
    );
}

export {App};
