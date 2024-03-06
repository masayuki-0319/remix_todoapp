import { redirect, type ActionFunctionArgs } from '@remix-run/node';
import { call } from './destroy.server';

export const action = async ({ params }: ActionFunctionArgs) => {
  if (!params.postId) throw new Error('Title and content are required');

  await call({ id: params.postId });
  return redirect('/posts');
};
