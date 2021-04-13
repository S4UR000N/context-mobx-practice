import React from "react"
import { useLocalStore, useObserver } from "mobx-react"
import StoreContext from "./StoreContext"

function StoreProvider({ children, store }) {
    const store = useLocalStore(() => ({
        bugs: ["Centipede"],
        addBug: bug => {
            store.bugs.push(bug);
        },

        get bugsCount() {
            return store.bugs.length;
        }
    }));
    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    )
}

export default StoreProvider
