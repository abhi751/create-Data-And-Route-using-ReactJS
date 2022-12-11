import React, { useEffect, useState } from 'react'
import Card from './card/Card'
import Header from './header/Header'

function PostViews() {
    const[posts,setPosts]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3004/user").then((res)=>res.json()).then((data)=>{
                 setPosts(data)
        }).catch((error)=>{
            console.log(error)
        })

    },[])
  return (
    <>
       <Header/>
       <div className='post-container'>
            {
                posts.map((post,i)=>{
                    return(
                        <Card post={post} key={i}/>
                    )
                })
            }
       </div>
    </>
    
  )
}

export default PostViews