export const getCardShadowColor = (domain: string) => {
  const color =
    domain === 'Frontednd'
      ? '--mantine-color-lime-5'
      : domain === 'Backend'
      ? '--mantine-color-indigo-8'
      : '--mantine-color-yellow-5';
  return color;
};
