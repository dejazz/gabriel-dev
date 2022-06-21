import { useLottie } from "lottie-react";
import react from "./react.json";

const ReactLottie = () => {
  const options = {
    animationData: react,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return View;
};

export default ReactLottie;