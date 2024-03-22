import { redirect } from '@remix-run/node';

import { postRepository } from '~/models/post.server';

import type { ActionFunctionArgs } from '@remix-run/node';

export const action = async ({ request }: ActionFunctionArgs) => {
  const form = await request.formData();

  const title = form.get('title');
  const content = form.get('content');
  if (typeof title !== 'string' || typeof content !== 'string') {
    throw new Error('Title and content are required');
  }

  const post = await postRepository.create({ title: title, content: content });

  return redirect(`/posts/${post.id}`);
};

export default function PostNew() {
  return (
    <div>
      <h1>New Post</h1>
      <form method="post">
        <input
          style={{ display: 'block' }}
          name="title"
          placeholder="title"
          type="text"
        />
        <input
          style={{ display: 'block' }}
          name="content"
          placeholder="content"
          type="text"
        />
        <button style={{ display: 'block' }} type="submit">
          Post
        </button>
      </form>
    </div>
  );
}
