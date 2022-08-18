import './styles/ResultViewport.css'
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import { useEffect, useRef } from 'react';
import targetImg from './assets/117.png'
import { Compare } from './Compare';


interface IResultViewportProps {
  value: string
}
export const ResultViewport: React.FC<IResultViewportProps> = ({value}) => {
  const ref = useRef<HTMLDivElement>(null);
   useEffect(() => {

    htmlToImage.toPng(ref.current!)
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        document.getElementsByClassName("result")[0].innerHTML = "";
        document.getElementsByClassName("result")[0].appendChild(img);
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
  },[value]);
  useEffect(()=> {
    (document.getElementsByClassName("output-iframe")[0] as any).srcdoc = value;
  }, [value])
  return (
    <div className="results">
    <div className="results__column">
      <Compare
        element={<iframe title="Preview" className="output-iframe"></iframe>}
        overlay={<img className="target-image" src={targetImg}></img>}
      />
    </div>
    <div className="results__column">
      <div
        className="target"
        ref={ref}
        dangerouslySetInnerHTML={{ __html: value }}
      ></div>
    </div>
  </div>
  )
}

export default ResultViewport
