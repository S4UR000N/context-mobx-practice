import React from "react"
import {useObserver} from "mobx-react"

function BugsHeader() {
    const store = React.useContext(StoreContext)
    return useObserver(() => <h1>{store.bugsCount} Bugs!</h1>)
}

export default BugsHeader
