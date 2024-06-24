import "./styles/ResultViewport.css";
import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
import { useEffect, useRef } from "react";
import targetImg from "./assets/batman.png";
import { Compare } from "./Compare";
import StatsSection from "./components/sections/result/StatsSection";
import NotificationAlert from "./components/notifications/NotificationsWrapper";
import ColorsSection from "./components/sections/example/ColorsSection";
import TargetSponsor from "./components/sections/result/sponsor/TargetSponsor";

interface IResultViewportProps {
  value: string;
}
export const ResultViewport: React.FC<IResultViewportProps> = ({ value }) => {
  const colors = ["#dfdf00", "#000000", "#444400", "#979900"];
  const ref = useRef<HTMLIFrameElement>(null);
  const imgref = useRef<HTMLImageElement>(null);
  useEffect(() => {
    (document.getElementsByClassName("output-iframe")[0] as any).srcdoc = value;
    // htmlToImage.toPng(ref.current!)
    //   .then(function (dataUrl) {
    //     imgref.current!.src = dataUrl;
    //   })
    //   .catch(function (error) {
    //     console.error('oops, something went wrong!', error);
    //   });
  }, [value]);

  return (
    <div className="flex flex-row bg-theme-800 w-auto">
      <div className="relative w-[440px] border-theme-400 border-l flex flex-col">
        <div className="flex items-center justify-center relative pt-5">
          <Compare
            element={
              <iframe
                ref={ref}
                title="Preview"
                className="output-iframe"
              ></iframe>
            }
            overlay={
              <img className="target-image relative" src={targetImg}></img>
            }
          />
        </div>

        <StatsSection />
      </div>
      <div className="relative p-5 w-[440px] border-l border-theme-400 overflow-hidden">
        <img className="w-[400px] h-[300px]" src={targetImg}></img>
        <ColorsSection colors={colors} />
        <TargetSponsor />
        <img ref={imgref}></img>
        <NotificationAlert />
      </div>
    </div>
  );
};

export default ResultViewport;
