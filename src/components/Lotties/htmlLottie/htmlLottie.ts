import  { useLottie } from "lottie-react";
import html from "./html.json"

const HtmlLottie = () => {
    const options = {
        animationData: html,
        loop: true,
        autoplay: true,
        
      };
    
      const { View } = useLottie(options);
    
      return View;
  };
  
  export default HtmlLottie;