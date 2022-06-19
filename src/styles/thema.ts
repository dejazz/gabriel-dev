import { extendTheme } from "@chakra-ui/react";

export const thema = extendTheme({
  fonts: {
    heading: "Inter",
    body: "Inter",
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
        mobile: { fontSize: "2.3rem", fontWeight: "400", color: "#ffff" },
      },
    },
    Text: {
      variants: {
        primary: { fontSize: "16px", fontWeight: "400", color: "#ffff" },
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
        backgroundImage: "url('https://i.pinimg.com/564x/3c/9a/54/3c9a5469338bc2c29fb1783cd3f3f3fd.jpg')",
        color: "#ffff",
       

        backgroundPosition: " center",
        backgroundSize: "cover",
      },
    },
  },
});
