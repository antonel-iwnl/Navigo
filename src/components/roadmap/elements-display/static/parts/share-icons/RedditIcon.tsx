import React, { useState } from 'react';

type Props = {
  size: number;
};
const RedditIcon = ({ size }: Props) => {
  const [hover, setHover] = useState(false);
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={(size * 20) / 20}
      height={(size * 23) / 20}
      viewBox='0 0 20 23'
      fill='none'
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <path
        d='M12.6429 15.5205C12.7634 15.6418 12.7634 15.826 12.6429 15.9338C11.5491 17.0344 8.45536 17.0389 7.35714 15.9338C7.23661 15.826 7.23661 15.6418 7.35714 15.5205C7.46429 15.4127 7.64732 15.4127 7.75446 15.5205C8.58929 16.383 11.3705 16.401 12.2411 15.5205C12.3482 15.4172 12.5357 15.4172 12.6429 15.5205ZM8.56696 13.1037C8.56696 12.4344 8.03571 11.8998 7.38393 11.8998C7.2266 11.899 7.07067 11.9296 6.92517 11.9899C6.77966 12.0501 6.64746 12.1387 6.53621 12.2507C6.42496 12.3626 6.33686 12.4957 6.27701 12.6421C6.21715 12.7885 6.18673 12.9454 6.1875 13.1037C6.1875 13.7596 6.71875 14.2941 7.38393 14.2941C8.03571 14.2941 8.56696 13.7596 8.56696 13.1037ZM12.6161 11.8998C11.9643 11.8998 11.433 12.4344 11.433 13.1037C11.433 13.7596 11.9643 14.2941 12.6161 14.2941C13.2813 14.2941 13.8125 13.7596 13.8125 13.1037C13.8133 12.9454 13.7828 12.7885 13.723 12.6421C13.6631 12.4957 13.575 12.3626 13.4638 12.2507C13.3525 12.1387 13.2203 12.0501 13.0748 11.9899C12.9293 11.9296 12.7734 11.899 12.6161 11.8998ZM20 3.59375V19.4062C20 20.5967 19.0402 21.5625 17.8571 21.5625H2.14286C0.959821 21.5625 0 20.5967 0 19.4062V3.59375C0 2.40332 0.959821 1.4375 2.14286 1.4375H17.8571C19.0402 1.4375 20 2.40332 20 3.59375ZM15.5491 9.90977C15.0982 9.90977 14.7009 10.0984 14.4063 10.3904C13.3304 9.64023 11.8839 9.15957 10.2768 9.10566L11.1116 5.32324L13.7679 5.9252C13.7679 6.58105 14.2991 7.11562 14.9509 7.11562C15.6161 7.11562 16.1473 6.56758 16.1473 5.91172C16.1473 5.25586 15.6161 4.70781 14.9509 4.70781C14.4866 4.70781 14.0893 4.98633 13.8884 5.37715L10.9554 4.72129C10.808 4.68086 10.6652 4.78867 10.625 4.93691L9.70982 9.10566C8.11607 9.17305 6.68304 9.65371 5.60714 10.4039C5.31696 10.0984 4.90179 9.90977 4.45089 9.90977C2.77679 9.90977 2.22768 12.1738 3.75893 12.942C3.70536 13.1846 3.67857 13.4361 3.67857 13.6922C3.67857 16.2303 6.52232 18.2877 10.0134 18.2877C13.5179 18.2877 16.3616 16.2303 16.3616 13.6922C16.3616 13.4361 16.3348 13.1711 16.2679 12.9285C17.7679 12.1559 17.2143 9.90977 15.5491 9.90977Z'
        fill='black'
        className={` ${hover ? 'opacity-60' : 'opacity-30'}`}
      />
    </svg>
  );
};

export default RedditIcon;