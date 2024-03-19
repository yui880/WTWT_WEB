import { type MemberType } from '@component/types/user';
import { type PreferenceType } from '@component/types/post';
import { FaRegClock, FaLocationDot, FaHeart, FaUser } from 'react-icons/fa6';
import { PostInfoBlock } from '@component/components/post/PostDetail/PostInfo/PostInfoBlock';

interface PostInfoProps {
  firstDate: Date;
  lastDate: Date;
  tags: string[];
  members: MemberType[];
  preference: PreferenceType;
}

export const PostInfo = ({ firstDate, lastDate, tags, members, preference }: PostInfoProps) => {
  const getGenderText = () => {
    if (preference.gender === 'FEMALE') return '여성';
    else if (preference.gender === 'MALE') return '남성';
    else return '상관없음';
  };

  const preferenceList = [
    getGenderText(),
    `${preference.minAge}대 ~ ${preference.maxAge}대`,
    `${preference.preferHeadCount}명`,
  ];

  return (
    <div className="flex flex-col gap-3 bg-primary-background px-7 py-5">
      <PostInfoBlock
        label="여행 날짜"
        list={[firstDate.toLocaleDateString(), lastDate.toLocaleDateString()]}
      >
        <FaRegClock size={17} />
      </PostInfoBlock>
      <PostInfoBlock label="선호 지역" list={tags}>
        <FaLocationDot size={17} />
      </PostInfoBlock>
      <PostInfoBlock label="동행인 정보" members={members} isMemberBlock={true}>
        <FaUser size={17} />
      </PostInfoBlock>
      <PostInfoBlock label="선호 동행인" list={preferenceList}>
        <FaHeart size={17} />
      </PostInfoBlock>
    </div>
  );
};
