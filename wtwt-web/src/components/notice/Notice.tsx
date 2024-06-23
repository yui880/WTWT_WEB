import { Container } from '@component/components/common/Container';
import { Header } from '@component/components/common/Header';
import { useState } from 'react';
import NoticeTab from '@component/components/notice/Tabs/NoticeTab';
import InvitationTab from '@component/components/notice/Tabs/InvitationTab';

const Notice = () => {
  const [currentTab, setCurrentTab] = useState('notice');
  const clickTabHandler = (tab: string) => {
    setCurrentTab(tab);
  };

  return (
    <Container>
      <Header goBackButton={true} label="알림" className="bg-primary-background" />
      <div className="flex w-full flex-col p-7">
        <ul className="flex flex-row">
          <li
            onClick={() => clickTabHandler('notice')}
            className={`flex-1 border-b-2 pb-3 text-center transition-all  ${currentTab === 'notice' ? 'border-b-primary-main font-semibold' : 'font-light text-text-inputLabel'}`}
          >
            소식
          </li>
          <li
            onClick={() => clickTabHandler('invitation')}
            className={`flex-1 border-b-2 pb-3 text-center transition-all  ${currentTab === 'invitation' ? 'border-b-primary-main font-semibold' : 'font-light text-text-inputLabel'}`}
          >
            초대
          </li>
        </ul>
        <div>{currentTab === 'notice' ? <NoticeTab /> : <InvitationTab />}</div>
      </div>
    </Container>
  );
};

export default Notice;
