import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogCard from '../BlogCard/BlogCard';
import { useState } from 'react';

const Blog = () => {

    const blogs = useLoaderData();

    const [visibleBlogs, setVisibleBlogs] = useState(6);

    const handleShowMore = () => {
        setVisibleBlogs(visibleBlogs + 6);
    }

    return (
        <div className='w-[80%] mx-auto my-20'>
            <h1>Blogs</h1>
            <div className='grid grid-cols-3 gap-8 my-12'>
                {
                    blogs.slice(0, visibleBlogs).map(blog => <BlogCard key={blog.id} blog={blog}></BlogCard>)
                }
            </div>
            <div className='flex justify-center'>
                {visibleBlogs < blogs.length && <button onClick={handleShowMore} className='py-4 px-12'>Show More</button>}
            </div>

        </div>
    );
};

export default Blog;