import { useColorMode, IconButton, Tooltip } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <Tooltip label='Try me!'>
      <IconButton
        position='fixed'
        top={4}
        right={4}
        icon={isDark ? <SunIcon /> : <MoonIcon />}
        aria-label='Toggle Theme'
        colorScheme='orange'
        onClick={toggleColorMode}
      />
    </Tooltip>
  );
};
