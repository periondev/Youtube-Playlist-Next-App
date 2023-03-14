import { useColorMode, IconButton, Tooltip } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <Tooltip label={isDark ? 'Turn on' : 'Turn off'}>
      <IconButton
        position='fixed'
        top={4}
        right={4}
        icon={isDark ? <SunIcon boxSize={5} /> : <MoonIcon boxSize={5} />}
        aria-label='Toggle Theme'
        colorScheme='purple'
        onClick={toggleColorMode}
        rounded='button'
      />
    </Tooltip>
  );
};
