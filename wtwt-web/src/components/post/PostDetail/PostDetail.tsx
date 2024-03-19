import { Header } from '@component/components/common/Header';
import { Container } from '@component/components/common/Container';
import { PostTitle } from '@component/components/post/PostDetail/PostTitle';
import { type PostType } from '@component/types/post';

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
      profile: null,
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
  images: [],
  category: {
    id: 1,
    name: '전체',
  },
};

export const PostDetail = () => {
  return (
    <Container>
      <Header goBackButton={true} />
      <PostTitle
        title={tempPost.title}
        postDate={tempPost.postDate}
        hits={tempPost.hits}
        writer={tempPost.writer}
      />
    </Container>
  );
};
