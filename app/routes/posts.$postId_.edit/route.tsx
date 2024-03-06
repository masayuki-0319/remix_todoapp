import type { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import { call as read } from '../posts.$postId/show.server';
import { call as update } from './update.server';
import { useLoaderData } from '@remix-run/react';
import { Post } from '@prisma/client';

export const loader = async ({ params }: LoaderFunctionArgs) => {
  if (!params.postId)
    throw new Response(null, {
      status: 404,
      statusText: 'Not Found',
    });

  const post = await read({ id: params.postId });
  return json(post);
};

export const action = async ({ request, params }: ActionFunctionArgs) => {
  const form = await request.formData();
  const title = form.get('title');
  const content = form.get('content');

  if (typeof title !== 'string' || typeof content !== 'string')
    throw new Error('Title and content are required');
  if (!params.postId)
    throw new Response(null, {
      status: 404,
      statusText: 'Not Found',
    });

  const post = await update({
    id: params.postId,
    title: title,
    content: content,
  });
  return redirect(`/posts/${post.id}`);
};

export default function PostEdit() {
  const post: Post = useLoaderData();
  return (
    <div>
      <h1>Edit Post</h1>
      <form method='post'>
        <input
          style={{ display: 'block' }}
          name='title'
          placeholder={post.title}
          type='text'
        />
        <input
          style={{ display: 'block' }}
          name='content'
          placeholder={post.content || ''}
          type='text'
        />
        <button style={{ display: 'block' }} type='submit'>
          Post
        </button>
      </form>
    </div>
  );
}
