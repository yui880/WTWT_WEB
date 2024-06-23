interface InvitationItemProps {
  time: Date;
  content: string;
}

const InvitationItem = ({ time, content }: InvitationItemProps) => {
  return (
    <div className="flex w-full flex-col gap-1 px-4 py-3">
      <div className="flex flex-row justify-between">
        <p className="font-bold">그룹 초대</p>
        <p className="text-xs text-text-title">{time.toLocaleDateString()}</p>
      </div>
      <p className="text-sm text-text-inputLabel">{content}</p>
      <div className="mt-3 flex w-full gap-3">
        <button className="flex-1 rounded-md bg-primary-background py-2.5">거절하기</button>
        <button className="flex-1 rounded-md bg-primary-background py-2.5">수락하기</button>
      </div>
    </div>
  );
};

export default InvitationItem;
