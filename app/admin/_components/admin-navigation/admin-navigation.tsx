'use client';
import React from 'react';
import {
  Group,
  Button,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './admin-navigation.module.css';
import Logo from '@/components/logo/logo';
import Link from 'next/link';

const AdminNavigation = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <Box pb={20}>
      <header className={classes.header}>
        <Group justify='space-between' h='100%'>
          <Logo />
          <Group h='100%' gap={0} visibleFrom='sm'>
            <Link href='/admin' className={classes.link}>
              Uczestnicy
            </Link>
            <Link href='/admin/grupy' className={classes.link}>
              Grupy
            </Link>
          </Group>
          <Group visibleFrom='sm'>
            <Button>Log out</Button>
          </Group>
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom='sm'
          />
        </Group>
      </header>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size='100%'
        padding='md'
        hiddenFrom='sm'
        zIndex={10}>
        <div className={classes.navlogoContainer}>
          <Logo />
        </div>
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx='-md'>
          <Divider my='md' />
          <Link href='/admin' className={classes.link} onClick={closeDrawer}>
            Uczestnicy
          </Link>
          <Link
            href='/admin/grupy'
            className={classes.link}
            onClick={closeDrawer}>
            Grupy
          </Link>
          <Divider my='md' />
          <Group justify='center' grow pb='xl' px='md'>
            <Button>Log out</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
};

export default AdminNavigation;
