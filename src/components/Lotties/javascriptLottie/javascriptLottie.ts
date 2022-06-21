import  { useLottie } from "lottie-react";
import javascript from "./javascript-.json"

const JavascriptLottie = () => {
    const options = {
        animationData: javascript,
        loop: true,
        autoplay: true,
        
      };
    
      const { View } = useLottie(options);
    
      return View;
  };
  
  export default JavascriptLottie;
  