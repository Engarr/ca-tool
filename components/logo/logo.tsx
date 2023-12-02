'use client';
import React from 'react';
import classes from './logo.module.css';
import logo from '@/public/image/cetus-logo.png';
import Image from 'next/image';
import { useMantineColorScheme } from '@mantine/core';

const Logo = () => {
  const { colorScheme } = useMantineColorScheme();
  const imageStyle = colorScheme === 'dark' ? classes.dark : '';

  return (
    <div className={`${classes.logoBox} ${imageStyle}`}>
      <Image src={logo} alt='logo' className={imageStyle} />
    </div>
  );
};

export default Logo;
