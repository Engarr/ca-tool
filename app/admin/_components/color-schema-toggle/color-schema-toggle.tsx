'use client';

import {
  useMantineColorScheme,
  Switch,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

const ColorSchemeToggle = () => {
  const { toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  const sunIcon = (
    <IconSun
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.yellow[2]}
    />
  );

  const moonIcon = (
    <IconMoonStars
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.blue[6]}
    />
  );

  return (
    <Switch
      size='md'
      color='dark.2'
      onLabel={sunIcon}
      offLabel={moonIcon}
      onChange={toggleColorScheme}
    />
  );
};

export default ColorSchemeToggle;
