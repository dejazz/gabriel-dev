import { useLottie } from "lottie-react";
import node from "./nodejs.json";

const NodeLottie = () => {
  const options = {
    animationData: node,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return View;
};

export default NodeLottie;
