import React from 'react'

const Comments = ({posts, setSelectedPostId}) => {
  return (
    <div>
        {setSelectedPostId && 
            posts.map(post=> {
                <p>{post.title}</p>
            })
        }
    </div>
  )
}

export default Comments