import axios from "axios"
import { useEffect, useState } from "react"
import { Item, TypeItem } from "./Item"

export const List = () => {
    const [data, setData] = useState<TypeItem[]>([])

    useEffect(() => {
        const funcAxios = async () => {
            try {
                const res = await axios.get(import.meta.env.VITE_URL)
                if (res.status != 200) {
                    throw new Error(res.statusText)
                }
                const dataResponse = await res.data
                if (data.length != dataResponse.length) {
                    setData(dataResponse)
                }
            }
            catch(err) {
                console.log(err)
            }
        }
        funcAxios()
    }, [data])

    return (
        <ul className="list">
            {data.map((item, index) => (
                <Item key={index} id={item.id} name={item.name}/>
            ))}
        </ul>
    )
}