import  { useLottie } from "lottie-react";
import mongo from "./mongo.json"

const MongoDBLottie = () => {
    const options = {
        animationData: mongo,
        loop: true,
        autoplay: true,
      };
    
      const { View } = useLottie(options);
    
      return View;
  };
  
  export default MongoDBLottie;