import React, { createContext, useEffect, useState } from "react";

function ApiContext() {
    const [records, setRecords] = useState([])
    useEffect(() => {
        console.log("err");
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json))
        setRecords(json.Fetchdata)
            .catch((err) => {
                setRecords([]);
            });
    }, [])
    return (
        <div className="Fetchdata">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {records.map((r,i)=>{
                        <tr key={i}>
                            <td>{r.id}</td>
                            <td>{r.name}</td>
                        </tr>
                    })}
                    </tbody>
            </table>
        </div>
    )
}
export default ApiContext;