import { Text, type TextProps } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { styled } from 'nativewind';
import clsx from 'clsx';


const StyledText = styled(Text)


export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'h1' | 'h2' | 'h3' | 'p' | 'link';
  className?: string;
  heading?: string
};
export function ThemedText({
  className,
  style,
  lightColor,
  darkColor,
  type = 'p',
  heading,
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <StyledText
      className={clsx(
        type === 'h1' && 'bg-transparent text-center text-[32px] leading-tight font-[900]',
        type === 'h2' && 'bg-transparent text-center text-[24px] leading-tight font-[800]',
        type === 'h3' && 'bg-transparent text-center text-[20px] font-[700]',
        type === 'p' && 'bg-transparent text-justify text-[16px]',
        type === 'link' && 'bg-transparent text-justify text-[16px] text-[#0a7ea4]',
        className,
      )}
      style={[ { color }, style ]}
      {...rest}
    />
  );
}