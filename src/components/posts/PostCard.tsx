import { IPost } from '@/type';
import React from 'react';

const PostCard = ({ post }: { post: IPost }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 mb-6">
      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        {post.title}
      </h2>

      {/* Body */}
      <p className="text-gray-600 leading-relaxed mb-4">
        {post.body}
      </p>

      {/* Footer Info */}
      <div className="flex justify-between items-center text-sm text-gray-500 border-t pt-3">
        <span>User ID: {post.userId}</span>
        <span>Post ID: {post.id}</span>
      </div>
    </div>
  );
};

export default PostCard;
