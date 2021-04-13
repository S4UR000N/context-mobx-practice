import React from "react"
import {useObserver} from "mobx-react"
import { useStore } from "./StoreProvider"

function BugsHeader() {
    const store = useStore()
    return useObserver(() => <h1>{store.bugsCount} Bugs!</h1>)
}

export default BugsHeader
