import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Pans = () => {
    const [subreddit, setSubreddit] = useState([])

    useEffect(() => {
        axios.get(`https://www.reddit.com/r/castiron/top.json`)
            .then((res) => {
                console.log(res.data.data.children)
                setSubreddit(res.data.data.children)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            <h5 className='text-center onlyHeader'>Check out these hot pans</h5>
            <div className='d-flex grid overflow-auto'>
                {
                    subreddit.map((post, i) => {
                        return (
                            <div className='row' key={i} >
                                <div className='text-center m-4 '>
                                    <img className='rounded' src={`${post.data.thumbnail}`} height={`${post.data.thumbnail_height}`} width={`${post.data.thumbnail_width}`} alt="cast iron pan ppst" />
                                    <p className='m-3'>{post.data.title}</p>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Pans