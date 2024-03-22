import { redirect, type ActionFunctionArgs } from '@remix-run/node';

import { postRepository } from '~/models/post.server';

export const action = async ({ params }: ActionFunctionArgs) => {
  if (!params.postId) throw new Error('Title and content are required');

  await postRepository.delete(params.postId);

  return redirect('/posts');
};
