import React, { useEffect, useMemo, useRef, useState } from 'react';
import { FaPen, FaTrashAlt } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.css'
// import Button from './button';
import { apiGetData } from './api';
// import Logout from './logout';
// import Cookies from 'js-cookie';

interface DataClient {
    Population: number,
    Nation: string,
    Year: string
}

function Liste() {
    let [mydata, setData] = useState<DataClient[]>()
    let data = useMemo(() => mydata, [mydata]);
    let search = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        getData();
    }, []);

    let getData = async () => {
        let data = await apiGetData()
        setData(data)
    }



    let deleteClient = async (id: number) => {
        let reponse = await fetch(`http://localhost:8000/api/client/delete/` + id)
        let data = await reponse.json()
        console.log(data);
    }

    let searchdata = async () => {
        console.log(search.current?.value);
        let datasearch = search.current?.value
        let reponse = await fetch(`http://localhost:8000/api/client/search/` + datasearch)
        let datajson = await reponse.json()
        setData(datajson)
    }

    return (
        <div className="tab-data">
            <br />
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Population</th>
                        <th scope="col">Nation</th>
                        <th scope="col">Year</th>
                        <th scope="col" className='action'>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        data?.map((liste: DataClient, index: number) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{liste.Population}</th>
                                    <td>{liste.Nation}</td>
                                    <td>{liste.Year}</td>
                                    <td className='action'>
                                        <button className='btn btn-dark' >View</button>
                                        <button className='btn btn-primary' ><FaPen /></button>
                                        <button className='btn btn-danger'><FaTrashAlt /></button>
                                    </td>
                                </tr>)
                        })
                    }
                </tbody>
            </table>
            <div className='alert alert-dark'>{data?.length} resultats</div>
        </div>
    )
}

export default Liste;
