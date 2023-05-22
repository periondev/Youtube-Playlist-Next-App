import { useColorMode, IconButton, Tooltip } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <Tooltip label={isDark ? 'Turn light' : 'Turn dark'}>
      <IconButton
        position='fixed'
        top={4}
        right={4}
        icon={isDark ? <SunIcon boxSize={5} /> : <MoonIcon boxSize={5} />}
        aria-label='Toggle Theme'
        onClick={toggleColorMode}
        rounded='button'
        opacity={0.75}
        bg='#bab1b3'
        _hover={{ bg: '#948589' }}
        _dark={{
          bg: '#353D40',
          _hover: { bg: '#536063' },
        }}
      />
    </Tooltip>
  );
};
