import { useState } from "react"
import { List } from "./List"
import { AuthContext } from "../contexts/AuthContext"
import { Details } from "./Details"

export const MainPage = () => {
    const [idMain, setIdMain] = useState<number>(-1)
    return (
        <AuthContext.Provider value={{idMain, setIdMain}}>
            <List />
            <Details id={idMain}/>
        </AuthContext.Provider>
        
    )
}