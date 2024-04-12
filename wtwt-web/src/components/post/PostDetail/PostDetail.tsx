import { Header } from '@component/components/common/Header';
import { Container } from '@component/components/common/Container';
import { PostTitle } from '@component/components/post/PostDetail/PostTitle';
import { type PostType } from '@component/types/post';
import { PostInfo } from '@component/components/post/PostDetail/PostInfo';
import { PostContent } from '@component/components/post/PostDetail/PostContent';
import { Button } from '@component/components/common/Button';
import React, { useEffect, useState } from 'react';
import { postDetailData } from '@component/mocks/api/data/postDetailData';
import { FaHeart, FaRegHeart } from 'react-icons/fa6';

export const PostDetail = () => {
  const [data, setData] = useState<PostType>(postDetailData.data[0]);
  const [likesCount, setLikesCount] = useState(data.likes);
  const [isPressedLikes, setIsPressedLikes] = useState(false);
  const clickHandler = () => {
    // 채팅방 이동 구현
  };

  const clickLikesHandler = () => {
    setIsPressedLikes((prev) => !prev);
  };

  useEffect(() => {
    async function getPosts() {
      try {
        const response = await fetch('http://localhost:9090/api/post');
        const jsonData = await response.json();
        setData(jsonData as PostType); // 타입 캐스팅 또는 데이터 파싱
        console.log(jsonData);
      } catch (error: any) {
        console.log(error.message);
      }
    }
    getPosts();
  }, []);

  return (
    <Container>
      <Header goBackButton={true} />
      <PostTitle
        title={data.title}
        postDate={data.postDate}
        hits={data.hits}
        writer={data.writer}
        category={data.category}
      />
      <PostInfo
        firstDate={data.firstDay}
        lastDate={data.lastDay}
        tags={data.tags}
        members={data.members}
        preference={data.preference}
      />
      <PostContent content={data.content} images={data.images} />
      <div className="fixed bottom-0 flex w-full max-w-md flex-row border-0 bg-white px-6 py-4">
        <div className="flex w-14 flex-col items-center justify-center gap-1.5 py-2 pr-4">
          <div onClick={clickLikesHandler}>
            {isPressedLikes ? (
              <FaHeart size={25} className="text-primary-main" />
            ) : (
              <FaRegHeart size={25} className="text-text-inputLabel" />
            )}
          </div>
          <div
            className={`text-sm  ${isPressedLikes ? 'font-semibold text-text-general' : 'text-text-inputLabel'}`}
          >
            {isPressedLikes ? likesCount + 1 : likesCount}
          </div>
        </div>
        <Button className="box-border w-full flex-auto" onClick={clickHandler} disabled={false}>
          1:1 채팅하기
        </Button>
      </div>
    </Container>
  );
};
