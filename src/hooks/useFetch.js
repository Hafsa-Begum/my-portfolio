import { useEffect, useState } from 'react';

const useFetch = () => {
    const [websites, setWebsites] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Hafsa-Begum/my-portfolio/main/public/datas.json')
            .then(res => res.json())
            .then(data => setWebsites(data))
    }, [])

    return [websites]
};

export default useFetch;