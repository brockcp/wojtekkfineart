import React,{useState} from 'react';

function ImageLoading({src, alt, style, onClick}) {
  const [imageLoaded, setImageLoaded]=useState(false);
  return (
    <div className="smooth-image-wrapper">
      <img
        src={src}
        alt={alt}
        style={style}
        onClick={onClick}
        className={`smooth-image image-${
          imageLoaded ? 'visible' :  'hidden'
        }`}
        onLoad={() => setImageLoaded(true)}
      />
      {!imageLoaded && (
        <div className="smooth-preloader">
          <span className="loader" />
        </div>
      )}
    </div>
  )
}
export default ImageLoading;
