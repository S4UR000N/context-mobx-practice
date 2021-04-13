import React from "react";
import { useLocalStore, useObserver } from "mobx-react"
// import StoreContext from "./components/StoreContext"
// import StoreProvider from "./components/StoreProvider"
// import BugsHeader from "./components/BugsHeader"
// import BugsList from "./components/BugsList"
// import BugsForm from "./components/BugsForm"

const StoreContext = React.createContext()

function StoreProvider({ children }) {
    const store = useLocalStore(() => ({
        bugs: ["Centipede"],
        addBug: bug => {
            bug && store.bugs.push(bug) // ignore empty input
        },

        get bugsCount() {
            return store.bugs.length
        }
    }));
    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    )
}

function BugsHeader() {
    const store = React.useContext(StoreContext)
    return useObserver(() => <h1>{store.bugsCount} Bugs!</h1>)
}

function BugsList() {
    const store = React.useContext(StoreContext)

    return useObserver(() => (
        <ul>
            {store.bugs.map(bug => (
                <li key={bug}>{bug}</li>
            ))}
        </ul>
    ));
}

function BugsForm() {
    const store = React.useContext(StoreContext)
    const [bug, setBug] = React.useState("")

    return (
        <form
            onSubmit={e => {
                e.preventDefault()
                store.addBug(bug)
                setBug("")
            }}
            >
            <input
                type="text"
                value={bug}
                onChange={e => {
                    setBug(e.target.value)
                }}
            />
            <button type="submit">Add</button>
        </form>
    )
}

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
