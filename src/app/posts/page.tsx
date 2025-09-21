import PostCard from '@/components/posts/PostCard';
import { IPost } from '@/type';
import React from 'react';

const PostPage =async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=9",{
        cache:"force-cache"
    });
    const posts = await res.json()
    return (
        <div>
            <h1 className='text-center text-4xl'>All posts</h1>
            {
                posts?.map((post:IPost) =>(<PostCard key={post.id} post={post}/> ))
            }
        </div>
    );
};

export default PostPage;