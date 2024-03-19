interface PostInfoItemProps {
  list: string[];
}

export const PostInfoItem = ({ list }: PostInfoItemProps) => {
  return (
    <div className="flex flex-row gap-3">
      {list.map((val) => {
        return (
          <div key={val} className="bg-primary-sub2 rounded-md px-3 py-1.5">
            <div className="text-xs font-medium text-text-general">{val}</div>
          </div>
        );
      })}
    </div>
  );
};
