const size = {
  mobile: "767px",
  tablet: "1023px",
  desktop: "1024px",
};

export const Device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
};
