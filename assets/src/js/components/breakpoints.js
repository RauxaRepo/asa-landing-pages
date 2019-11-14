export default function (breakpoint) {
  const breakpoints = {
    // default breakpoints from bootstrap
    xs: '320px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  };

  return breakpoints[breakpoint];
}
