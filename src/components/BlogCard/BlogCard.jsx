import React from 'react';

const BlogCard = ({ blog }) => {
    const { title, content, image, publishedAt, url } = blog;

    return (
        <div className='border border-gray-500 p-8  rounded-xl hover:shadow-lg'>
            <a href={url} className='flex gap-6 flex-col h-full'>
                <img src={image} alt={title} className='rounded-xl' />
                <h1 className='font-bold text-[36px] text-white'>{title}</h1>
                <div className="flex-grow">
                    <p className='text-gray-400'>
                        {content.split(' ').slice(0, 30).join(' ') + (content.split(' ').length > 30 ? '...' : '')}
                    </p>
                </div>

                <div className='flex justify-between items-center'>

                    <a href={url} target='_blank'><button className='py-4 px-12'>Read More</button></a>
                    <p className='text-white'>{publishedAt}</p>
                </div>

            </a>




        </div>
    );
};

export default BlogCard;