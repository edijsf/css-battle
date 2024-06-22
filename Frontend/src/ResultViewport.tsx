import "./styles/ResultViewport.css";
import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
import { useEffect, useReducer, useRef } from "react";
import targetImg from "./assets/batman.png";
import { Compare } from "./Compare";
import ColorPalete from "./components/sections/example/colorsSection/ColorPalete";
import StatsSection from "./components/sections/result/StatsSection";
import NotificationAlert from "./components/notifications/NotificationsWrapper";

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
        <div className="flex items-center justify-center p-5">
          <Compare
            element={
              <iframe
                ref={ref}
                title="Preview"
                className="output-iframe"
              ></iframe>
            }
            overlay={<img className="target-image" src={targetImg}></img>}
          />
        </div>

        <StatsSection />
      </div>
      <div className="relative p-5 w-[440px] border-l border-theme-400 overflow-hidden">
        <img className="w-[400px] h-[300px]" src={targetImg}></img>
        <ColorPalete colors={colors} />
        <img ref={imgref}></img>
        <NotificationAlert />
      </div>
    </div>
  );
};

export default ResultViewport;
