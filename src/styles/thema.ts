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
        primary: { fontSize: "4rem", fontWeight: "400", color: "#ffff" },
        secondary: { fontSize: "2rem", fontWeight: "500", color: "##ffff" },
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
          borderBottom: "1px solid #F998EF"
        },
      },
    },
  },
 
  styles: {
    global: {
      body: {
        background: "#1E1E1E",
        color: "#ffff",
      },
    },
  },
});
