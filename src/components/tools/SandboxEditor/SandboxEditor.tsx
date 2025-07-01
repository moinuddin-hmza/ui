import React, { PropsWithChildren, useEffect, useState } from 'react';
import Button from '~/components/ui/Button/Button';
import Separator from '~/components/ui/Separator/Separator';
import Heading from '~/components/ui/Heading/Heading';
import Text from '~/components/ui/Text/Text';
import RovingFocusGroup from '~/core/utils/RovingFocusGroup';
import Theme from '~/components/ui/Theme/Theme';
import colors from '~/design-systems/clarity/tokens/colors';

const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="..." fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);

const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="..." fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);

const RadUILogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" viewBox="0 0 211 109" fill="none">
    <path d="..." fill="currentColor" />
  </svg>
);

type ColorSelectProps = {
  color: typeof colors[keyof typeof colors];
  colorName: string;
  changeAccentColor: (colorName: string) => void;
};

const ColorSelect = ({ color, colorName, changeAccentColor }: ColorSelectProps) => (
  <button
    aria-label={`Change accent color to ${colorName}`}
    className='cursor-pointer rounded-full w-8 h-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
    style={{ backgroundColor: color.light['900'] }}
    onClick={() => changeAccentColor(colorName)}
  />
);

type SandboxProps = { className?: string } & PropsWithChildren;

const SandboxEditor = ({ children, className = '' }: SandboxProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [colorName, setColorName] = useState<keyof typeof colors>('plum');

  useEffect(() => {
    setIsDarkMode(localStorage.getItem('isDarkMode') === 'true');
  }, []);

  const toggleDarkMode = () => {
    const nextMode = !isDarkMode;
    localStorage.setItem('isDarkMode', nextMode.toString());
    setIsDarkMode(nextMode);
  };

  return (
    <Theme
      appearance={isDarkMode ? 'dark' : 'light'}
      accentColor={colorName}
      className='p-4 shadow-sm text-gray-900 min-h-screen border border-gray-300 bg-gray-50'
    >
      <div className='mb-4'>
        <div className='flex items-center space-x-4'>
          <div className='text-gray-1000'>
            <RadUILogo />
          </div>
          <Separator orientation='vertical' />
          <Button description='Toggle dark mode' variant='solid' onClick={toggleDarkMode}>
            {isDarkMode ? <SunIcon /> : <MoonIcon />}
          </Button>
        </div>

        <Separator />

        <div>
          <div className='flex items-center space-x-4'>
            <Heading as='h1' className='text-gray-1000'>Sandbox Editor</Heading>
            <Separator orientation='vertical' />
            <Text className='font-normal text-gray-950'>
              Customize the colors of the Rad UI components by clicking on the color swatches below.
            </Text>
          </div>

          <Separator />

          <RovingFocusGroup.Root>
            <RovingFocusGroup.Group className='flex space-x-1 my-1'>
              {Object.entries(colors).map(([name, color]) => (
                <RovingFocusGroup.Item key={name}>
                  <ColorSelect
                    color={color}
                    colorName={name}
                    changeAccentColor={(name) => setColorName(name as keyof typeof colors)}
                  />
                </RovingFocusGroup.Item>
              ))}
            </RovingFocusGroup.Group>
          </RovingFocusGroup.Root>
        </div>
      </div>

      <Separator />

      <div className={className}>{children}</div>
    </Theme>
  );
};

export default SandboxEditor;
