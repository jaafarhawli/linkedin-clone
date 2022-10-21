import React from 'react';
import { useLocation } from 'react-router-dom';
import {useQuery} from '@tanstack/react-query';
import axios from '../../api/axios';
import {useState} from 'react';


const PersonJob = () => {

    const [job, setJob] = useState('');

    const {state} = useLocation();
    const { id } = state;
    
    const {data} = useQuery(["job"], () => {
        return axios.get(`people/job/${id}`, {
                    headers: {
                      Authorization: `bearer ${localStorage.token}`
                    }
                  }).then((res) => res.data);
    })

    const apply = async () => {
        const form = {
            person_id: localStorage.id,
            job_id: data?._id
        }
        try {
        const res = await axios.post('people/apply', form, {
            headers: {
              Authorization: `bearer ${localStorage.token}`
            }
          });
          setJob(res.data);
        } catch(error) {
            console.log(error);
        }
    }

  return (
    <div>
       <h1>{data?.title}</h1>
       <h2>{data?.location}</h2>
       <h3>{data?.date}</h3>
       <p>{data?.description}</p>
       <button className='apply-button' onClick={() => apply()}>Easy Apply</button>
       <p className='success'>{job}</p>
    </div>
  )
}

export default PersonJob