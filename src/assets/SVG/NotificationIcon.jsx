import React from 'react';

const NotificationIcon = () => {
  return (
    <svg
      viewBox='0 0 16 16'
      width='2.1rem'
      height='2.1rem'
    >
      <path d='M7 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z' fill='currentColor'></path>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2.32 12c-.178.608-.32 1-.32 1h12s-.142-.392-.32-1c-.292-1.004-.68-2.6-.68-4 0-2.761-1.686-5-5-5S3 5.239 3 8c0 1.4-.388 2.996-.68 4Zm1.04 0h9.28c-.035-.13-.072-.265-.108-.407C12.274 10.595 12 9.25 12 8c0-1.182-.36-2.173-.992-2.857C10.388 4.471 9.418 4 8 4c-1.419 0-2.388.471-3.008 1.143C4.36 5.827 4 6.818 4 8c0 1.25-.274 2.595-.532 3.593-.036.142-.073.278-.109.407Z'
        fill='currentColor'
      ></path>
      <path
        d='M6 13a2 2 0 1 0 4 0H9a1 1 0 1 1-2 0H6Z'
        fill='currentColor'
      ></path>
    </svg>
  );
};

export default NotificationIcon;
