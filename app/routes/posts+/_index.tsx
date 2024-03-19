import { Post } from '@prisma/client';
import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';

import { PostRepository } from '~/models/post.server';

export const loader = async () => {
  const postRepository = new PostRepository();
  const posts = await postRepository.findAll();

  return json(posts);
};

export default function PostIndex() {
  const posts: Post[] = useLoaderData();
  return (
    <div>
      <h1>Posts</h1>
      <Link to='new'>New</Link>
      <ul>
        {posts.map((post: Post) => (
          <li key={post.id}>
            <Link to={post.id}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
