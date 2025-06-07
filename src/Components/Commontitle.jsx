import React from "react";

function Commontitle({ title, buttontitle, path }) {
  return (
    <>
      <div className="flex w-full justify-between items-center mb-10">
        <h3 className="text-40 font-bold text-black">{title}</h3>
        <a href={path} className="flex w-fit gap-2.5 items-center text-black text-15 font-medium">
          <span>{buttontitle}</span>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.3416 0.969971H5.78604C5.57108 0.969971 5.39714 1.14391 5.39714 1.35887C5.39714 1.57383 5.57108 1.74777 5.78604 1.74777H13.4028L0.84441 14.3062C0.692488 14.4581 0.692488 14.7042 0.84441 14.8561C0.920353 14.932 1.01988 14.97 1.11938 14.97C1.21887 14.97 1.31837 14.932 1.39435 14.8561L13.9527 2.29767V9.91444C13.9527 10.1294 14.1266 10.3033 14.3416 10.3033C14.5566 10.3033 14.7305 10.1294 14.7305 9.91444V1.35887C14.7305 1.14391 14.5565 0.969971 14.3416 0.969971Z"
              fill="#050B20"
            />
          </svg>
        </a>
      </div>
    </>
  );
}

export default Commontitle;
