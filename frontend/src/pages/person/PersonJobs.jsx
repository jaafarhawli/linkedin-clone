import React from 'react';
import './person.css';
import {useQuery} from '@tanstack/react-query';
import axios from '../../api/axios';

const PersonJobs = () => {
  
    const {data} = useQuery(["jobs"], () => {
        return axios.get('people/jobs', {
                    headers: {
                      Authorization: `bearer ${localStorage.token}`
                    }
                  }).then((res) => res.data);
    })

    console.log(data);

    if(data?.length === 0) {
        return (
            <div className='home-grid'>
                <div>
                      <p>No Posts Currently</p>
                </div>
            </div>
        )
    }

    else return (
        <div>
            <div className='home-grid'>
                <div className='home-posts'>
                {data?.map((post) => (
     
                    <div className='home-post' key={post._id}>
                    <div className='post-owner flex'>
                      <div className='post-picture'></div>
                    <div className='job-content'>
                        <p className='job-title'>{post.title}</p>
                        <p className='job-location'>{post.location}</p>
                    </div>
                    </div>
                </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PersonJobs;