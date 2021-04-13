import React from "react";
import { useLocalStore, useObserver } from "mobx-react"
import {StoreProvider} from "./components/StoreProvider"
import BugsHeader from "./components/BugsHeader"
import BugsList from "./components/BugsList"
import BugsForm from "./components/BugsForm"

function App() {
    return (
        <StoreProvider>
            <main className="App container">
                <BugsHeader />
                <BugsList />
                <BugsForm />
            </main>
        </StoreProvider>
    )
}

export default App
