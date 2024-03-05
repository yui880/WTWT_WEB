export const preventScroll = () => {
  const currentScrollY = window.scrollY;
  document.body.style.position = 'fixed';
  document.body.style.width = '100%';
  document.body.style.left = '50%'; // 화면의 중간에 위치하도록 설정
  document.body.style.transform = 'translate(-50%, 0)';
  document.body.style.top = `-${currentScrollY}px`;
  document.body.style.overflowY = 'scroll';
  return currentScrollY;
};

export const allowScroll = (prevScrollY: number) => {
  document.body.style.position = '';
  document.body.style.width = '';
  document.body.style.top = '';
  document.body.style.left = '';
  document.body.style.transform = 'translate(0, 0)';
  document.body.style.overflowY = '';
  window.scrollTo(0, prevScrollY);
};
