import { React, useState } from "react";
import { useLocalStore, useObserver } from "mobx-react"

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
                    setBug(e.target.value);
                }}
            />
            <button type="submit">Add</button>
        </form>
    )
}

export default BugsForm
