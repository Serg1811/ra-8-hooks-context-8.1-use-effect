import axios from "axios"
import { FC,  useEffect, useState } from "react"

type TypeInDetails = {
    city: string
    company: string
    position: string
}

type TypeDetails = {
    id: number
    name: string
    avatar: string
    details: TypeInDetails
}

type TypePropsDetails = {
    id: number
}

export const Details: FC<TypePropsDetails> = ({id}) => {
    const [dataDetails, setDataDetails] = useState<TypeDetails>()
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const funcAxios = async () => {
            try {
                if (id < 0) {
                    return
                }
                setLoading(true)
                const res = await axios.get(`${import.meta.env.VITE_URL_ID}/${id}.json`)
                if (res.status != 200) {
                    throw new Error(res.statusText)
                }
                setLoading(false)
                const data = await res.data
                setDataDetails(data)
            }
            catch(err) {
                console.log(err)
            }
        }
        funcAxios()
    }, [id])
    
    return (
        <>
            {loading && <h3>Loading...</h3>}
            {dataDetails && !loading &&
            <div className="details">
                <img src={dataDetails.avatar} alt="" />
                <h3>{dataDetails.name}</h3>
                <p>{`City: ${dataDetails.details.city}`}</p>
                <p>{`Company: ${dataDetails.details.company}`}</p>
                <p>{`Position: ${dataDetails.details.position}`}</p>
            </div>}
        </>
    )
}

