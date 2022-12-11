import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faPaperPlane,faCommentDots} from '@fortawesome/free-regular-svg-icons'

const Card=({post})=> {
  return (
    <div className='card'>
        <section className='card-header'>
            <div>
                <div className='card-header_name'>{post.name}</div>
                <div className='card-place'>{post.location}</div>
            </div>
            <span className='dot'><FontAwesomeIcon icon={faCommentDots}></FontAwesomeIcon></span>
        </section>
        <section className='image'><img className='image' src={post.PostImage} alt=""/></section>
        <section className='card-action'>
            <span className='icon-1'><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></span>
            <span className='icon-2'><FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon></span>
            <span className='date'>{post.date}</span>
        </section>
        <section className='like'>{post.likes} likes </section>
        <section className='decription'>{post.description}</section>
    </div>
  )
}

export default Card