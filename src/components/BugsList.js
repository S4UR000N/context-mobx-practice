import React from "react"
import {useObserver} from "mobx-react"
import { useStore } from "./StoreProvider"

function BugsList() {
    const store = useStore()
    return useObserver(() => (
        <ul>
            {store.bugs.map(bug => (
                <li key={bug}>{bug}</li>
            ))}
        </ul>
    ));
}

export default BugsList
