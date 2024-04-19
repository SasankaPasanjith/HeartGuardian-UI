import React from 'react'
import "./Blog.css"
import { blog1,blog2,blog3 } from '../../assets'

function Blog() {
  return (
    <section id="blog" className='pink'>
       <div className='wrapper'>
          <h2 className='light'>Latest Post</h2>
          <div className='content-container'>
              <div className='post'>
                <div className='tag'>PREDICTION</div>
                <a href='#'>
                   <img src={blog1} alt="" />
                </a>

                <a href='#'>
                   <h3 className='post-title'>How to Use Heart Disease Prediction System</h3>
                </a>
              </div>

              <div className='post'>
                <div className='tag'>PREVENT</div>
                <a href='#'>
                   <img src={blog2} alt="" />
                </a>

                <a href='#'>
                   <h3 className='post-title'>How to Prevent from Heart Diseases</h3>
                </a>
              </div>

              <div className='post'>
                <div className='tag'>EARLY DETECTION</div>
                <a href='#'>
                   <img src={blog3} alt="" />
                </a>

                <a href='#'>
                   <h3 className='post-title'>Why Early Detection is Important for Healthy Life?</h3>
                </a>
              </div>
          </div>
          <div className='btn-container'>
            <a href='#' className='all-posts-btn'> All Posts</a>
          </div>
       </div>
      </section>
  )
}

export default Blog