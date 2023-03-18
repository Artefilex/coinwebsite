import React from 'react'
import './blog.css'
import {blog01, blog02, blog03, blog04, blog05 } from  "./import"
import {Article} from "../../components"
const Blog = () => {
  return (
    <div className='gbt3__blog section__padding'>
      <div className='gbt3__blog-heading'>
        <h1 className='gradient__text'> A lot of is happening, We are bloging about it.</h1>
      </div>
      <div className='gbt3__blog-container'>
        <div className='gbt3__blog-container__groupA'>
          <Article imgUrl={blog01} date="Sep, 26, 2023" title="GpT-3 and Open AI is the future. Let us explore hot it is ?"  />
        </div>
        <div className='gbt3__blog-container__groupB'>
        <Article  imgUrl={blog02} date="Sep, 26, 2023"  title="GpT-3 and Open AI is the future. Let us explore hot it is ?"   />
        <Article  imgUrl={blog03} date="Sep, 26, 2023"  title="GpT-3 and Open AI is the future. Let us explore hot it is ?"   />
        <Article  imgUrl={blog04} date="Sep, 26, 2023"  title="GpT-3 and Open AI is the future. Let us explore hot it is ?"   />
        <Article  imgUrl={blog05} date="Sep, 26, 2023"  title="GpT-3 and Open AI is the future. Let us explore hot it is ?"   />
        </div>
      </div>
    </div>
  )
}

export default Blog