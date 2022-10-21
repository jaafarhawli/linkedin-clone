import React from 'react';
import { useLocation } from 'react-router-dom';
import {useQuery} from '@tanstack/react-query';
import axios from '../../api/axios';
import { useNavigate } from 'react-router-dom';

const PersonSearch = () => {

    const navigate = useNavigate();
    const {state} = useLocation();
    const { input } = state;

    const {data} = useQuery(["search"], () => {
        return axios.get(`people/search/${input}`, {
                    headers: {
                      Authorization: `bearer ${localStorage.token}`
                    }
                  }).then((res) => res.data);
    })

    const viewPost = (job_id) => {
        navigate('/person/jobs/job', {state:{id: job_id}});
    }

    console.log(data);

    if(data?.length === 0) {
        return (
            <div className='home-grid'>
                <div>
                      <p>No Jobs Found</p>
                </div>
            </div>
        )
    }

    else return (
        <div>
            <div className='home-grid'>
                <div className='home-posts'>
                {data?.map((post) => (
     
                    <div className='home-post' key={post._id} onClick={() => viewPost(post._id)}>
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

export default PersonSearch;
