import MainHeader from '@component/components/common/Header/MainHeader';
import { Container } from '@component/components/common/Container';
import { FaImage } from 'react-icons/fa6';
import { PostItem } from '@component/components/post/PostItem';
import { type PostItemType } from '@component/types/post';
import { PostRankItem } from '@component/components/post/PostRankItem';

const tempData: PostItemType[] = [
  {
    id: 1,
    writer: {
      id: 1,
      nickname: 'yuna',
      profile: null,
    },
    createdAt: '11',
    title: '독일에서 파리로 함께 여행 가실 분',
    content: '안녕하세요. 같이 여행 가실 분 구합니다',
    isLightning: false,
    status: 'OPEN',
    preferHeadCount: 1,
    headCount: 2,
    hits: 5,
  },
  {
    id: 2,
    writer: {
      id: 1,
      nickname: 'yuna',
      profile: null,
    },
    createdAt: '11',
    title: '독일에서 파리로 함께 여행 가실 분',
    content: '안녕하세요. 같이 여행 가실 분 구합니다',
    isLightning: false,
    status: 'OPEN',
    preferHeadCount: 1,
    headCount: 2,
    hits: 5,
  },
  {
    id: 3,
    writer: {
      id: 1,
      nickname: 'yuna',
      profile: null,
    },
    createdAt: '11',
    title: '독일에서 파리로 함께 여행 가실 분',
    content: '안녕하세요. 같이 여행 가실 분 구합니다',
    isLightning: false,
    status: 'OPEN',
    preferHeadCount: 1,
    headCount: 2,
    hits: 5,
  },
];

export const Home = () => {
  return (
    <Container>
      <MainHeader />
      <div className="flex h-36 items-center justify-center bg-neutral-200">
        <FaImage size={60} color="gray" />
      </div>
      <div className="flex flex-col gap-10 bg-primary-background p-7">
        <div className="flex flex-col gap-5">
          <div className="text-xl font-semibold">번개 만남</div>
          <div className="flex flex-col gap-3.5">
            {tempData.map((data) => (
              <PostItem key={data.id} {...data} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="text-xl font-semibold">실시간 HOT</div>
          <div className="flex flex-col gap-2">
            {tempData.map((data, i) => (
              <PostRankItem key={data.id} rank={i + 1} postData={data} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="text-xl font-semibold">전체 게시판</div>
          <div className="flex flex-col gap-3.5">
            {tempData.map((data) => (
              <PostItem key={data.id} {...data} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};
