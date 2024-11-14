import { useState, useEffect } from "react"

export const ComponentAbout = () => {

    const [arr, setValue] = useState([])

    const getData = async () => {

        let response = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "GET"
        })

        let data = await response.json()
        setValue(data)


    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <h1>About</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        arr.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )

}