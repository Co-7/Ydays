import React from "react";
import Navbar from '../components/common/Navbar';
import BackOfficeRoutes from "./back-office/BackOfficeRoutes";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <BackOfficeRoutes />
        </div>
    );
}

export default App;
