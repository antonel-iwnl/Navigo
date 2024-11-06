import React from 'react';
import { motion } from 'framer-motion';

export const ConfirmSvg = ({ className }: { className: string }) => {
  return (
    <svg
      width='40'
      height='40'
      viewBox='0 0 60 60'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g transform='scale(2.95)'>
        <path
          d='M10.5 0.984375C5.25 0.984375 0.984375 5.25 0.984375 10.5C0.984375 15.75 5.25 20.0156 10.5 20.0156C15.75 20.0156 20.0156 15.75 20.0156 10.5C20.0156 5.25 15.75 0.984375 10.5 0.984375ZM10.5 1.96875C15.2086 1.96875 19.0312 5.79141 19.0312 10.5C19.0312 15.2086 15.2086 19.0312 10.5 19.0312C5.79141 19.0312 1.96875 15.2086 1.96875 10.5C1.96875 5.79141 5.79141 1.96875 10.5 1.96875Z'
          className={className}
        />
      </g>
      <g transform='scale(0.9) translate(5,5)'>
        <path
          d='M13.5,30 Q15,32 24.75,41.25 Q26.25,39.75 45,18.75 Q43.5,17.25 24.75,38.75 Q23.25,40.25 13.5,30'
          strokeWidth='6'
          strokeLinecap='round'
          className={className}
        />
      </g>
    </svg>
  );
};

export const Info = ({ className }: { className: string }) => {
  return (
    <svg
      width='40'
      height='40'
      viewBox='2 2 20 20'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M11.325 17H12.825V11H11.325V17ZM11.9995 9.15C12.2332 9.15 12.4292 9.07333 12.5875 8.92C12.7458 8.76667 12.825 8.57667 12.825 8.35C12.825 8.10917 12.746 7.90729 12.588 7.74437C12.4299 7.58146 12.2341 7.5 12.0005 7.5C11.7668 7.5 11.5708 7.58146 11.4125 7.74437C11.2542 7.90729 11.175 8.10917 11.175 8.35C11.175 8.57667 11.254 8.76667 11.4121 8.92C11.5701 9.07333 11.7659 9.15 11.9995 9.15ZM12.0066 22C10.6278 22 9.33192 21.7375 8.11915 21.2125C6.90638 20.6875 5.84583 19.9708 4.9375 19.0625C4.02917 18.1542 3.3125 17.093 2.7875 15.879C2.2625 14.665 2 13.3678 2 11.9875C2 10.6072 2.2625 9.31003 2.7875 8.09602C3.3125 6.88201 4.02917 5.825 4.9375 4.925C5.84583 4.025 6.90701 3.3125 8.12103 2.7875C9.33503 2.2625 10.6322 2 12.0125 2C13.3928 2 14.69 2.2625 15.904 2.7875C17.118 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6145 22 11.9934C22 13.3723 21.7375 14.6681 21.2125 15.8809C20.6875 17.0936 19.975 18.1526 19.075 19.0579C18.175 19.9632 17.1167 20.6798 15.9 21.2079C14.6833 21.736 13.3855 22 12.0066 22ZM12.0125 20.5C14.3708 20.5 16.375 19.6708 18.025 18.0125C19.675 16.3542 20.5 14.3458 20.5 11.9875C20.5 9.62917 19.6766 7.625 18.0297 5.975C16.3828 4.325 14.3729 3.5 12 3.5C9.65 3.5 7.64583 4.32343 5.9875 5.9703C4.32917 7.61718 3.5 9.62708 3.5 12C3.5 14.35 4.32917 16.3542 5.9875 18.0125C7.64583 19.6708 9.65417 20.5 12.0125 20.5Z'
        className={className}
      />
    </svg>
  );
};

export const ErrorSvg = ({ className }: { className: string }) => {
  return (
    <svg
      width='40'
      height='40'
      viewBox='1 1 19 19'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M10.5 0.984375C5.25 0.984375 0.984375 5.25 0.984375 10.5C0.984375 15.75 5.25 20.0156 10.5 20.0156C15.75 20.0156 20.0156 15.75 20.0156 10.5C20.0156 5.25 15.75 0.984375 10.5 0.984375ZM10.5 1.96875C15.2086 1.96875 19.0312 5.79141 19.0312 10.5C19.0312 15.2086 15.2086 19.0312 10.5 19.0312C5.79141 19.0312 1.96875 15.2086 1.96875 10.5C1.96875 5.79141 5.79141 1.96875 10.5 1.96875Z'
        className={className}
      />
      <path d='M 6.5,5.5 15.5,14.5 14.5,15.5 5.5,6.5 Z' className={className} />
      <path d='M 6.5,15.5 15.5,6.5 14.5,5.5 5.5,14.5 Z' className={className} />
    </svg>
  );
};

export const CrossSvg = ({ className }: { className: string }) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 38 38'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M8.84615 31L7 29.1538L17.1538 19L7 8.84615L8.84615 7L19 17.1538L29.1538 7L31 8.84615L20.8461 19L31 29.1538L29.1538 31L19 20.8461L8.84615 31Z'
        className={className}
      />
    </svg>
  );
};