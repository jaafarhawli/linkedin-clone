import React from 'react';
import {useQuery} from '@tanstack/react-query';
import axios from '../../api/axios';

const PersonNotifications = () => {

    const {data} = useQuery(["notifications"], () => {
        return axios.get(`people/notifications/${localStorage.id}`, {
                    headers: {
                      Authorization: `bearer ${localStorage.token}`
                    }
                  }).then((res) => res.data);
    })

    if(data?.length === 0) {
        return (
            <div className='home-grid'>
                <div>
                      <p>No Notifications Currently</p>
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
                        <p className='job-location'>{post.time}</p>
                    </div>
                    </div>
                </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PersonNotifications;
