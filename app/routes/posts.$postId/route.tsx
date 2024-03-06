import { LoaderFunctionArgs, json } from '@remix-run/node';
import { Form, Link, useLoaderData } from '@remix-run/react';
import { call } from './show.server';
import { Post } from '@prisma/client';

export const loader = async ({ params }: LoaderFunctionArgs) => {
  if (!params.postId)
    throw new Response(null, {
      status: 404,
      statusText: 'Not Found',
    });

  const post = await call({ id: params.postId });
  return json(post);
};

export default function PostShow() {
  const post: Post = useLoaderData();
  return (
    <div>
      <Link to='/posts'>Go back to index</Link>
      <h1>Post</h1>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <Link to='edit'>Edit</Link>
      <Form action='delete' method='post'>
        <button>Delete</button>
      </Form>
    </div>
  );
}
