'use client';

import { usePathname } from 'next/navigation';
import { Header } from '@component/components/common/Header';

const Post = (props: any) => {
  const pathname = usePathname();
  return (
    <div>
      <Header goBackButton={true} />
    </div>
  );
};

export default Post;
