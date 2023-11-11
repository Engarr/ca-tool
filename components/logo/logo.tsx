import React from 'react';
import classes from './logo.module.css';
import logo from '@/public/image/cetus-logo.png';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className={classes.logoBox}>
      <Image src={logo} alt='logo' />
    </div>
  );
};

export default Logo;
