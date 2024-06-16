import NoticeItem from '@component/components/notice/TabItems/NoticeItem';

const DUMMY = [
  {
    time: new Date(),
    title: '독일 여행팟 일정이 10일 남았어요!',
    content: '독일 여행팟 일정이 10일 남았어요!',
  },
  {
    time: new Date(),
    title: '내 게시물에 문의 채팅이 도착했어요.',
    content: '내 게시물에 문의 채팅이 도착했어요.',
  },
  {
    time: new Date(),
    title: '정의진님의 후기가 도착했어요.',
    content: '의진님의 후기를 확인해보세요.',
  },
];

const NoticeTab = () => {
  return (
    <div className="flex-col gap-7 pt-3 transition-all">
      {DUMMY.map((data) => (
        <NoticeItem {...data} />
      ))}
    </div>
  );
};

export default NoticeTab;
