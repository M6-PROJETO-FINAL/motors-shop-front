import styled, { css } from "styled-components";

const theme = {
  colors: {
    brand01: `#4529e6`,
    brand02: `#5126ea`,
    brand03: `#b0a6f0`,
    brand04: `#edeafd`,
    grey00: `#0B0D0D`,
    grey01: `#212529`,
    grey02: `#495057`,
    grey03: `#868e96`,
    grey04: `#ADB5BD`,
    grey05: `#CED4DA`,
    grey06: `#DEE2E6`,
    grey07: `#E9ECEF`,
    grey08: `#F1F3F5`,
    grey09: `#F8F9FA`,
    grey10: `#FDFDFD`,
    white: `#ffffff`,
  },
  sizes: {
    xxlarge: `4rem`,
    xlarge: `3.2rem`,
    large: `2.4rem`,
    normal: `1.6rem`,
    small: `1.2rem`,
    xsmall: `1rem`,
  },
};

export type HeadingProps = {
  color?: keyof typeof theme.colors;
  size?: keyof typeof theme.sizes;
  fontWeight?: 700 | 600 | 500;
  lineHeight?: number;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
};

export const Heading = styled("h1").attrs<HeadingProps>(({ level }) => ({
  as: `h${level}`,
}))<HeadingProps>`
  ${({
    color = "grey00",
    size = "normal",
    fontWeight = 700,
    lineHeight,
  }) => css`
    font-size: ${theme.sizes[size]};
    color: ${theme.colors[color]};
    font-weight: ${fontWeight};
    line-height: ${lineHeight}px;
  `}
`;

// Apenas exemplos de como utilizar o Heading
const HeadingTest = (): JSX.Element => {
  return (
    <>
      <Heading level={1}>Será que deu certo?</Heading>
      <Heading level={2} fontWeight={700} color={"brand02"}>
        Será que deu certo?
      </Heading>
      <Heading level={3} fontWeight={700} color={"brand04"} size={"large"}>
        Será que deu certo?
      </Heading>
    </>
  );
};

export default HeadingTest;
