import styled from "@emotion/styled";
import { css } from "@emotion/core";

import mediaqueries from "@styles/media";

/**
 * Example:
 * <Heading.h1>Lorem Ipsum</Heading.h1>
 */

const commonStyles = p => css`
  font-weight: ${p.theme.fontsWeight.bold};
  color: ${p.theme.colors.primary};
  font-family: ${p.theme.fonts.title};
`;

const h1 = styled.h1`
  font-size: 64px;
  line-height: 1.15;
  ${commonStyles};

  ${mediaqueries.desktop`
    font-size: 48px;
    line-height: 1.2;
  `};

  ${mediaqueries.phablet`
    font-size: 40px;
    line-height: 1.3;
  `};
`;

const h2 = styled.h2`
  font-size: 48px;
  line-height: 1.333;
  ${commonStyles};

  ${mediaqueries.desktop`
    font-size: 36px;
  `};

  ${mediaqueries.tablet`
    font-size: 36px;
    line-height: 1.45;
  `};
`;

const h3 = styled.h3`
  font-size: 32px;
  line-height: 1.45;
  ${commonStyles};

  ${mediaqueries.tablet`
    font-size: 28px;
  `};

  ${mediaqueries.phablet`
    font-size: 24px;
  `};
`;

const h4 = styled.h4`
  font-size: 28px;
  line-height: 1.45;
  ${commonStyles};

  ${mediaqueries.phablet`
    font-size: 22px;
  `};
`;

const h5 = styled.h5`
  font-size: 18px;
  line-height: 1.45;
  ${commonStyles};

  ${mediaqueries.phablet`
    font-size: 16px;
  `};
`;

const h6 = styled.h6`
  font-size: 20px;
  line-height: 1.45;
  ${commonStyles};

  ${mediaqueries.phablet`
    font-size: 16px;
  `};
`;

export default {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
};
