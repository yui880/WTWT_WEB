'use client';

import { usePathname } from 'next/navigation';
import { PostDetail } from '@component/components/post/PostDetail';

const Post = (props: any) => {
  const pathname = usePathname();
  return <PostDetail />;
};

export default Post;
