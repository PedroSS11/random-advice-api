import { useState, useEffect } from "react";

//  Custom Hook Fetch

export const useFetch = (url) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {

            const res = await fetch(url)

            const json = await res.json()

            const advice = json.slip.advice

            setData([advice])
        }

        fetchData()
    }, [url])  
    return { data }
};