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
import { usePathname } from 'next/navigation';
import ColorSchemeToggle from '../color-schema-toggle/color-schema-toggle';
const AdminNavigation = () => {
  const path = usePathname();
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <Box pb={10}>
      <header className={classes.header}>
        <Group justify='space-between' h='100%'>
          <Logo />
          <Group h='100%' gap={0} visibleFrom='sm'>
            <Link
              href='/admin'
              className={`${classes.link} ${
                path === '/admin' ? classes.active : ''
              }`}>
              Uczestnicy
            </Link>
            <Link
              href='/admin/projekty'
              className={`${classes.link} ${
                path === '/admin/projekty' ? classes.active : ''
              }`}>
              Projekty
            </Link>
            <Link
              href='/admin/grupy'
              className={`${classes.link} ${
                path === '/admin/grupy' ? classes.active : ''
              }`}>
              Grupy
            </Link>
          </Group>
          <Group visibleFrom='sm'>
            <ColorSchemeToggle />
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
