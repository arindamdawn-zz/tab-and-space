import Typography from "typography";
import FairyGatesTheme from "typography-theme-fairy-gates";

delete FairyGatesTheme.googleFonts;

FairyGatesTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  "h1,h2,h3,h4,h5,h6": {
    marginTop: rhythm(1 / 2),
  },
  h1: {
    fontWeight: 900,
    letterSpacing: "-1px",
  },
});
FairyGatesTheme.scaleRatio = 5 / 2;

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
