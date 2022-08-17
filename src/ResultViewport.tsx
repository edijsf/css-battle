import './ResultViewport.css'
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import { useEffect, useRef } from 'react';


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
    (document.getElementsByClassName("previewiframe")[0] as any).srcdoc = value;
  }, [value])
  return (
      <>
      <div className='result' ref={ref} dangerouslySetInnerHTML={{__html: value}}>
        
      </div>
      <iframe title="Preview" className='previewiframe' >
      </iframe>
      </>
  )
}

export default ResultViewport
