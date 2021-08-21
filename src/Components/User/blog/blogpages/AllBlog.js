import React from 'react'
import BlogBox from './BlogBox'
import '../blog.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const AllBlog = ({ setCurrentSection, blogData }
) => {
    const handleClick = () => {
        setCurrentSection(0)
    }
    return (
        <>
            <div className="backArrow" onClick={handleClick}>
                <span>
                    <ArrowBackIosIcon />
                </span>
                <h4>back</h4>
            </div>
            <div className="allBlogs">
                {
                    blogData && blogData.map((val, key) => (
                        <BlogBox index={key} title={val.title} description={val.description} img={val.image.url} />
                    ))
                }
            </div>
        </>
    )
}

export default AllBlog
