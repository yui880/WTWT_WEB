interface NoticeItemProps {
  time: Date;
  title: string;
  content: string;
}

const NoticeItem = ({ time, title, content }: NoticeItemProps) => {
  return (
    <div className="flex w-full flex-row items-start gap-3 px-1 py-3">
      <div className="mt-2 h-2 w-2 rounded-full bg-primary-main" />
      <div className="flex flex-1 flex-col gap-1">
        <div className="flex flex-row justify-between">
          <p className="text-base font-bold">{title}</p>
          <p className="text-xs text-text-title">{time.toLocaleDateString()}</p>
        </div>
        <div className="text-sm text-text-title">{content}</div>
      </div>
    </div>
  );
};

export default NoticeItem;
