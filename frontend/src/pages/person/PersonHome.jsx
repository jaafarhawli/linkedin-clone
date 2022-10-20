import React from 'react';
import './person.css';
import {useQuery} from '@tanstack/react-query';
import axios from '../../api/axios';


const PersonHome = () => {

    const {data} = useQuery(["posts"], () => {
        return axios.get(`people/posts/${localStorage.id}`, {
                    headers: {
                      Authorization: `bearer ${localStorage.token}`
                    }
                  }).then((res) => res.data);
    })

    console.log(data);

    if(data?.length === 0) {
        return (
            <div className='home-grid'>
                <div className='home-profile flex column'>
                    <div className='home-banner-container'>
                      <div className='home-banner'></div>
                      <div className='home-profile-pic'></div>
                    </div>
                    <h1 className='home-name'>{localStorage.firstname} {localStorage.lastname}</h1>
                    <p>{localStorage.headline}</p>
                </div>
                <div>
                      <p>No Posts Currently</p>
                </div>
            </div>
        )
    }

    else return (
        <div>
            <div className='home-grid'>
                <div className='home-profile flex column'>
                    <div className='home-banner-container'>
                      <div className='home-banner'></div>
                      <div className='home-profile-pic'></div>
                    </div>
                    <h1 className='home-name'>{localStorage.firstname} {localStorage.lastname}</h1>
                    <p>{localStorage.headline}</p>
                </div>
                <div className='home-posts'>
                {data?.map((post) => (
                    post.posts.map((data2) => (
                    <div className='home-post' key={data2._id}>
                    <div className='post-owner flex'>
                      <div className='post-picture'></div>
                      <p>{post.name}</p>
                    </div>
                    <div className='post-content'>
                        <p>{data2.content}</p>
                    </div>
                    <img src={data2.logo_url} alt="" />
                </div>

                    ))
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PersonHome;
