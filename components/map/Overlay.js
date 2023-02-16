import React from "react";

const Overlay = (props) => {
  return (
    <div className="wrap">
      <div className="info">
        
        <div className="px-3 py-4 bg-[#f1f1f1]">{props.data.title}</div>
        <div className="body">
          
          <div className="desc">
            {/* <div className="ellipsis">{props.data.address}</div> */}
            {/* <div className="jibun ellipsis">(우) 63309 (지번) 영평동 2181</div> */}
            {/* <div>
              <a
                href="https://www.kakaocorp.com/main"
                target="_blank"
                className="link"
                rel="noreferrer"
              >
                홈페이지
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
