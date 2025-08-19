import { FC } from 'react';
import Lottie from "lottie-react";
import waves from "@assets/Animation - 1727131197278.json";

export type WavesAnimationProps = {
}

export const WavesAnimation: FC<WavesAnimationProps> = ({}) => {
    return (
        <>
          <Lottie animationData={waves} className="absolute bottom-0 w-full -translate-y-[80%] lg:translate-y-[20%] xl:translate-y-[20%] "/>
        </>
    )
};
