import InvitationItem from '@component/components/notice/TabItems/InvitationItem';

const DUMMY = [
  {
    time: new Date(),
    content: '독일 여행팟 일정이 10일 남았어요!',
  },
  {
    time: new Date(),
    content: '내 게시물에 문의 채팅이 도착했어요.',
  },
  {
    time: new Date(),
    content: '의진님의 후기를 확인해보세요.',
  },
];

const InvitationTab = () => {
  return (
    <div className="flex-col gap-7 pt-3 transition-all">
      {DUMMY.map((data) => (
        <InvitationItem {...data} />
      ))}
    </div>
  );
};

export default InvitationTab;
