import { Text, type TextProps, StyleSheet } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

import { styled } from 'nativewind';

const StyledText = styled(Text)

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultBold' | 'subtitle' | 'link';
  className?: string;
  white?: boolean;
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  className,
  white = false,
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <StyledText
      style={[
        { color },
        type === 'title' ? styles.title : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'defaultBold' ? styles.defaultBold : undefined,
        type === 'default' ? styles.default : undefined,
        type === 'link' ? styles.link : undefined,
        white ? styles.white : undefined,
        style,
      ]}
      className={className}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  transparent: {
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 32,
    lineHeight: 32,
    fontWeight: '900',
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  subtitle: {
    fontSize: 24,
    lineHeight: 28,
    fontWeight: '800',
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  defaultBold: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '700',
  },
  default: {
    fontSize: 16,
    lineHeight: 20,
    backgroundColor: 'transparent',
  },
  link: {
    fontSize: 16,
    lineHeight: 24,
    color: '#0a7ea4',
  },
  white: {
    color: 'white'
  }
});
