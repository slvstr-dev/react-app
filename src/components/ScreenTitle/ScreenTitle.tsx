import React, { PropsWithChildren } from 'react';
import { Text } from 'react-native';
import { tv, type VariantProps } from 'tailwind-variants';

type HeadingVariants = VariantProps<typeof heading>;

interface ScreenTitleProps extends HeadingVariants, PropsWithChildren {
  className?: string;
}

export const Heading = ({ children, className, size }: ScreenTitleProps) => {
  return <Text className={heading({ className, size })}>{children}</Text>;
};

export const heading = tv({
  base: 'text-4xl font-bold text-dark dark:text-light',
  variants: {
    size: {
      title: 'text-4xl',
      subtitle: 'text-xl',
    },
  },
  defaultVariants: {
    size: 'title',
  },
});
