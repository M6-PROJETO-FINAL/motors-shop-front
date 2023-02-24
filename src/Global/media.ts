const sizes = {
  desktop: "1440px",
  laptop: "1024px",
  mobile: "768px",
};

export const device = {
  desktop: `(min-width: ${sizes.desktop})`,
  laptop: `(max-width: ${sizes.laptop})`,
  mobile: `(max-width: ${sizes.mobile})`,
};
