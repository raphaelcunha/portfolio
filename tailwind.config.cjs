const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        '2xl': "1280px",
      },
    },
    extend: {
      borderRadius: {
        "4xl": "2rem", // 32px
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: "white",
        },
        secondary: {
          DEFAULT: "rgba(188, 188, 188, 0.7)",
        },
        tertiary: {
          DEFAULT: "rgba(188, 188, 188, 0.5)",
        },
      },

      // typograpgy plugin
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "h1, h3, h4, h5": {
              color: theme("colors.white"),
              lineHeight: "2.5rem", // 40px;
              fontWeight: "600",
              letterSpacing: "111%",
              margin: 0,
              padding: 0,
            },
            h2: {
              fontSize: "1.25rem", // 20px
              lineHeight: "20px",
              fontWeight: "600",
              letterSpacing: "-0.02em",
              margin: 0,
              padding: 0,
            },
            h5: {
              fontSize: "14px", // 20px
              lineHeight: "2.5rem", // 40px;
              fontWeight: "600",
              letterSpacing: "0.03em",
              color: "rgba(188, 188, 188, 0.7)",
            },
            color: theme("colors.white"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
