import React, { forwardRef } from 'react';
import ArrowLeft from '~src/assets/icons/arrow-left.svg';
import { Box, BoxProps } from '~src/components/Box';
import { Text } from '~src/components/Text';
import { Card } from '~src/components/Card';
import { IThemeFoundationColors } from '~src/theme/theme';
import { Children } from '~src/lib/utils';

interface MenuCardProps extends BoxProps {
  icon?: Children;
  iconBg?: keyof IThemeFoundationColors;
  iconWrapperProps?: BoxProps;
  showArrow?: boolean;
  text?: string;
}

const MenuCard = forwardRef((props: MenuCardProps, ref) => {
  const {
    icon,
    iconBg = 'primary',
    iconWrapperProps,
    showArrow = true,
    text,
    ...rest
  } = props;

  return (
    <Card ref={ref} {...rest}>
      {icon ? (
        <Box
          {...iconWrapperProps}
          __css={{
            alignItems: 'center',
            bg: iconBg,
            borderRadius: '50%',
            display: 'flex',
            height: '3.3rem',
            justifyContent: 'center',
            mr: 4,
            width: '3.3rem',
          }}
        >
          {icon}
        </Box>
      ) : null}

      <Text color="heading" fontWeight="medium">
        {text}
      </Text>

      {showArrow && (
        <Box ml="auto" __css={{ transform: 'rotate(180deg)' }}>
          <Box ml={2}>
            <ArrowLeft />
          </Box>
        </Box>
      )}
    </Card>
  );
});

export default MenuCard;
