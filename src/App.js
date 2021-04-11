import React from "react"
import { useLocalStore, useObserver } from "mobx-react"
import MyProvider from "./components/providers/MyProvider"
import ProductList from "./components/ProductList"

import './App.css';

function App() {
    return (
        <MyProvider>
            <div className="App container">
                <ProductList />
            </div>
        </MyProvider>
    );
}

export default App;

/* car API options: https://vpic.nhtsa.dot.gov/api/
1. Decode VIN
2. Decode VIN (flat format)
3. Decode VIN Extended
4. Decode VIN Extended (flat format)
5. Decode WMI
6. Get WMIs for Manufacturer
7. Get All Makes
8. Get Parts
9. Get All Manufacturers
10. Get Manufacturer Details
11. Get Makes for Manufacturer by Manufacturer Name
12. Get Makes for Manufacturer by Manufacturer Name and Year
13. Get Makes for Vehicle Type by Vehicle Type Name
14. Get Vehicle Types for Make by Name
15. Get Vehicle Types for Make by Id
16. Get Equipment Plant Codes
17. Get Models for Make
18. Get Models for MakeId
19. Get Models for Make and a combination of Year and Vehicle Type
20. Get Models for Make Id and a combination of Year and Vehicle Type
21. Get Vehicle Variables List
22. Get Vehicle Variable Values List
*/
