import { FC, useContext } from "react"
import { AuthContext, TypeContext } from "../contexts/AuthContext"

export type TypeItem = {
    id: number
    name: string
}

export const Item: FC<TypeItem> = ({id, name}) => {
    const {idMain, setIdMain} = useContext<TypeContext>(AuthContext)

    const hundleClick = () => {
        if (id == idMain) {
            return
        }
        setIdMain(id)
    }
    return (
        <li onClick={hundleClick}>
            {name}
        </li>
    )
}