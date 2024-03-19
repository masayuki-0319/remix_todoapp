import { Link } from '@remix-run/react';

import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1>TODO App!</h1>
      <ul>
        <Link to="posts">Posts</Link>
      </ul>
    </div>
  );
}
