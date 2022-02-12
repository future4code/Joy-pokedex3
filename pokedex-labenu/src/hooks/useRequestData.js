import { useState, useEffect } from 'react';
import axios from 'axios';
import BASE_URL from '../constants/baseURL'
import { useParams } from 'react-router-dom'

const useRequestData = (endpoint) => {
    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        setIsLoading(true)
        axios.get(`${BASE_URL}/${endpoint}/`)
        .then((res) =>{
            setIsLoading(false)
            setData(res.data)
        })
        .catch((err) => {
            setIsLoading(false)
            setError(err)
        })
    }, [endpoint])

    return [data, error, isLoading]
}

export default useRequestData
