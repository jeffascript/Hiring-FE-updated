import React, { memo } from "react";
import { Button } from "antd";

export default memo(({ text, onClick, style, className }) => {
  return (
    <div className="site-button-ghost-wrapper">
      <Button ghost style={style} onClick={onClick} className={className}>
        {text}
      </Button>
    </div>
  );
});

// export default memo(({ text, onClick, style }) => {
//     return (
//         <div className="site-button-ghost-wrapper">
//             <button type="button" style={style} onClick={onClick}>
//                 {text}
//             </button>
//         </div>
//     );
// });
