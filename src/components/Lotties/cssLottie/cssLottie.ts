import  { useLottie } from "lottie-react";
import css from "./css3.json"

const CssLottie = () => {
    const options = {
        animationData: css,
        loop: true,
        autoplay: true,
        
      };
    
      const { View } = useLottie(options);
    
      return View;
  };
  
  export default CssLottie;