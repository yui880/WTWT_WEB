import { Header } from '@component/components/common/Header';
import { Container } from '@component/components/common/Container';
import { PostTitle } from '@component/components/post/PostDetail/PostTitle';
import { type PostType } from '@component/types/post';
import { PostInfo } from '@component/components/post/PostDetail/PostInfo';
import { PostContent } from '@component/components/post/PostDetail/PostContent';
import { Button } from '@component/components/common/Button';
import React from 'react';

const tempPost: PostType = {
  post_id: 1,
  title: '독일에서 파리로 함께 여행 가실 분!',
  hits: 1234,
  postDate: new Date('2024-03-19'),
  writer: {
    id: 1,
    nickname: '닉네임',
    profile: null,
  },
  lightning: false,
  firstDay: new Date('2024-03-19'),
  lastDay: new Date('2024-03-29'),
  tags: ['독일', '파리'],
  members: [
    {
      id: 3,
      nickname: '닉네임3',
      profile: {
        uri: '/profile.png',
        name: '1',
        type: '1',
      },
    },
    {
      id: 2,
      nickname: '닉네임2',
      profile: null,
    },
  ],
  preference: {
    gender: 'FEMAIL',
    minAge: 10,
    maxAge: 50,
    preferHeadCount: 5,
  },
  content:
    'Lorem ipsum dolor sit amet consectetur. Mi nisl fermentum dui tellus. Laoreet ullamcorper odio fu\n' +
    'sce massa amet dolor. Amet ac diam proin imperdiet. Scelerisque libero luctus ultricies pellentesque scelerisque elit nulla vel etiam.\n',
  images: [
    {
      uri: '/profile.png',
      name: '1',
      type: '1',
    },
    {
      uri: '/profile.png',
      name: '1',
      type: '1',
    },
  ],
  category: {
    id: 1,
    name: '전체',
  },
};

export const PostDetail = () => {
  const clickHandler = () => {
    // 채팅방 이동 구현
  };

  return (
    <Container>
      <Header goBackButton={true} />
      <PostTitle
        title={tempPost.title}
        postDate={tempPost.postDate}
        hits={tempPost.hits}
        writer={tempPost.writer}
        category={tempPost.category}
      />
      <PostInfo
        firstDate={tempPost.firstDay}
        lastDate={tempPost.lastDay}
        tags={tempPost.tags}
        members={tempPost.members}
        preference={tempPost.preference}
      />
      <PostContent content={tempPost.content} images={tempPost.images} />
      <div className="fixed bottom-0 w-full max-w-md px-6 py-4">
        <Button className="box-border w-full flex-auto" onClick={clickHandler} disabled={false}>
          1:1 채팅하기
        </Button>
      </div>
    </Container>
  );
};
