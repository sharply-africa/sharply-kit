import * as _emotion_styled from '@emotion/styled';
import * as _emotion_react from '@emotion/react';
import * as React from 'react';
import { BoxProps } from '../Box/Box.js';
import 'styled-system';
import '@styled-system/css';
import '../../lib/utils.js';

declare const Wrapper: _emotion_styled.StyledComponent<BoxProps & React.RefAttributes<unknown> & {
    theme?: _emotion_react.Theme;
}, {}, {}>;
declare const Controls: _emotion_styled.StyledComponent<BoxProps & React.RefAttributes<unknown> & {
    theme?: _emotion_react.Theme;
}, {}, {}>;
declare const Control: _emotion_styled.StyledComponent<BoxProps & React.RefAttributes<unknown> & {
    theme?: _emotion_react.Theme;
} & {
    disabled?: boolean;
    onClick?: () => void;
}, {}, {}>;

export { Control, Controls, Wrapper };
