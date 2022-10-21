import React from 'react';
import { useLocation } from 'react-router-dom';
import {useQuery} from '@tanstack/react-query';
import axios from '../../api/axios';


const PersonJob = () => {

    const {state} = useLocation();
    const { id } = state;
    
    const {data} = useQuery(["job"], () => {
        return axios.get(`people/job/${id}`, {
                    headers: {
                      Authorization: `bearer ${localStorage.token}`
                    }
                  }).then((res) => res.data);
    })

    console.log(data.title);

  return (
    <div>
       <h1>{data.title}</h1>
       <h2>{data.location}</h2>
       <h3>{data.date}</h3>
       <p>{data.description}</p>
    </div>
  )
}

export default PersonJob