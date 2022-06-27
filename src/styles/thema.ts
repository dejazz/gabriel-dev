import { extendTheme } from "@chakra-ui/react";
export const thema = extendTheme({
  fonts: {
    heading: "Jura",
    body: "Jura",
  },
  colors: {
    primary: "#101010",
    secondary: "#ffff",
    error: "#d90429",
  },
  components: {
    Heading: {
      variants: {
        primary: { fontSize: "3rem", fontWeight: "400", color: "#ffff" },
        secondary: { fontSize: "2rem", fontWeight: "400", color: "##ffff" },
        mobile: { fontSize: "2rem", fontWeight: "400", color: "#ffff" },
      },
    },
    Text: {
      variants: {
        primary: { fontSize: "20px", fontWeight: "400", color: "#ffff" },
        link: {
          color: "#EA98F7",
          fontSize: "1.5rem",
          fontWeight: "400",
          borderBottom: "1px solid #F998EF",
          _hover: { color: "#ff4d6d", borderBottom: "1px solid #ff4d6d" },
        },
      },
    },
  },

  styles: {
    global: {
      body: {
        background: "#1E1E1E",
        backgroundImage:
          "url('https://images.wallpaperscraft.com/image/single/starry_sky_clouds_sunset_120716_1920x1080.jpg')",
        color: "#ffff",
        backgroundPosition: " center",
        backgroundSize: "cover",
      },
    },
  },
});
