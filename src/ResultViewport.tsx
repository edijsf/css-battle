import './styles/ResultViewport.css'
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import { useEffect, useReducer, useRef } from 'react';
import targetImg from './assets/batman.png'
import { Compare } from './Compare';


interface IResultViewportProps {
  value: string
}
export const ResultViewport: React.FC<IResultViewportProps> = ({value}) => {
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
  },[value]);

  return (
    <div className="results">
    <div className="results__column">
      <Compare
        element={<iframe ref={ref} title="Preview" className="output-iframe"></iframe>}
        overlay={<img className="target-image" src={targetImg}></img>}
      />
    </div>
    <div className="results__column">
      <img className="target-image" src={targetImg}></img>
      <img ref={imgref}></img>
    </div>
  </div>
  )
}

export default ResultViewport
