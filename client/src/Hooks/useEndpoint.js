import React, { useState, useEffect } from 'react'
import axios from 'axios'

function useEndpoint(req) {
    const [res, setRes] = useState({
        data: [],
        complete: false,
        pending: false,
        error: false
    });

    useEffect(() => {
        setRes({
            data: [],
            complete: false,
            pending: true,
            completed: false,
            error: false,
        });
        axios(req)
        .then(res => 
            setRes({
                data: res.data,
                pending: false,
                error: false,
                complete: true
            }),
            )
            .catch(() => 
            setRes({
                data: [],
                pending: false,
                error: true,
                complete: true
            }),
            );           
    }, [])
    return res;
} 

export default useEndpoint;